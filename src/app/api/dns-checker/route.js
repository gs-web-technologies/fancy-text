import { NextResponse } from "next/server";
import { Resolver } from 'dns/promises';
import { success } from "zod";
import { dns_server } from "@/utils/dns-servers";


export async function POST(req) {
    try {
        const body = await req.json();
        const { domain, dns_records } = body;

        if (!domain || !dns_records) {
            return NextResponse.json({
                success: false,
                message: "Domain and record type required"
            });
        }

        const dnsservers = dns_server;

        const checkDNS = async ({ location, server, provider, flag }) => {
            const resolver = new Resolver();
            resolver.setServers([server]);

            try {
                let result = [];

                switch (dns_records) {
                    case 'A':
                        result = await resolver.resolve4(domain);
                        break;
                    case 'AAAA':
                        result = await resolver.resolve6(domain);
                        break;
                    case 'CNAME':
                        result = await resolver.resolveCname(domain);
                        break;
                    case 'MX':
                        result = await resolver.resolveMx(domain);
                        break;
                    case 'NS':
                        result = await resolver.resolveNs(domain);
                        break;
                    case 'TXT':
                        result = await resolver.resolveTxt(domain);
                        break;
                    case 'PTR':
                        result = await resolver.resolvePtr(domain);
                        break;
                    case 'SRV':
                        result = await resolver.resolveSrv(domain);
                        break;
                    case 'SOA':
                        result = await resolver.resolveSoa(domain);
                        break;
                    case 'CAA':
                        result = await resolver.resolveCaa(domain);
                        break;
                    default:
                        result = await resolver.resolveAny(domain);
                        break;
                }

                return {
                    location,
                    server,
                    provider,
                    success: result,
                    flag,
                    records: result || []
                };

            } catch (error) {
                // Handle specific DNS errors
                switch (error.code) {
                    case "ENOTFOUND":
                        return {
                            success: false,
                            message: "Domain not found",
                            location: location,
                            server: server,
                            provider: provider,
                            flag: flag
                        };

                    case "ENODATA":
                        return {
                            success: false,
                            message: "No records found",
                            location: location,
                            server: server,
                            provider: provider,
                            flag: flag
                        };

                    case "ETIMEOUT":
                        return {
                            success: false,
                            message: "DNS request timed out",
                            location: location,
                            server: server,
                            provider: provider,
                            flag: flag
                        };

                    case "ECONNREFUSED":
                        return {
                            success: false,
                            message: "DNS server refused connection",
                            location: location,
                            server: server,
                            provider: provider,
                            flag: flag
                        };

                    case "ENOTIMP":
                        return {
                            success: false,
                            message: "DNS query type is not supported",
                            location: location,
                            server: server,
                            provider: provider,
                            flag: flag
                        }

                    default:
                        return {
                            success: false,
                            message: "Unknown error",
                            error,
                            location: location,
                            server: server,
                            provider: provider,
                            flag: flag
                        };
                }
            }
        };

        const results = await Promise.all(dnsservers.map(checkDNS));

        return NextResponse.json({
            success: true,
            data: results
        });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        });
    }
}