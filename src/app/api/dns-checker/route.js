import { NextResponse } from "next/server";
import { Resolver } from 'dns/promises';


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

        const dnsservers = [
            // North America
            { location: "USA (California)", server: "8.8.4.4", provider: "Google" },
            { location: "USA (Virginia)", server: "1.0.0.1", provider: "Cloudflare" },
            { location: "USA (Texas)", server: "208.67.222.222", provider: "OpenDNS" },
            { location: "USA (New York)", server: "9.9.9.9", provider: "Quad9" },
            { location: "USA (Chicago)", server: "209.244.0.3", provider: "Level3" },
            { location: "Canada (Toronto)", server: "1.1.1.1", provider: "Cloudflare" },
            { location: "Canada (Vancouver)", server: "8.8.8.8", provider: "Google" },
            { location: "Mexico (Mexico City)", server: "208.67.222.222", provider: "OpenDNS" },

            // Asia
            { location: "India (Mumbai)", server: "1.1.1.1", provider: "Cloudflare" },
            { location: "India (Delhi)", server: "8.8.8.8", provider: "Google" },
            { location: "India (Chandigarh)", server: "1.1.1.1", provider: "Cloudflare" },
            { location: "Japan (Tokyo)", server: "8.8.8.8", provider: "Google" },
            { location: "Singapore", server: "1.1.1.1", provider: "Cloudflare" },
            { location: "South Korea (Seoul)", server: "208.67.222.222", provider: "OpenDNS" },
            { location: "China (Beijing)", server: "223.5.5.5", provider: "AliDNS" },
            { location: "UAE (Dubai)", server: "8.8.8.8", provider: "Google" },
            { location: "Hong Kong", server: "1.1.1.1", provider: "Cloudflare" },
            { location: "Bangladesh (Dhaka)", server: "9.9.9.9", provider: "Quad9" },

            // Europe
            { location: "UK (London)", server: "1.1.1.1", provider: "Cloudflare" },
            { location: "Germany (Frankfurt)", server: "8.8.8.8", provider: "Google" },
            { location: "France (Paris)", server: "208.67.222.222", provider: "OpenDNS" },
            { location: "Netherlands (Amsterdam)", server: "9.9.9.9", provider: "Quad9" },
            { location: "Sweden (Stockholm)", server: "1.1.1.1", provider: "Cloudflare" },
            { location: "Poland (Warsaw)", server: "8.8.8.8", provider: "Google" },
            { location: "Spain (Madrid)", server: "208.67.222.222", provider: "OpenDNS" },
            { location: "Italy (Milan)", server: "9.9.9.9", provider: "Quad9" },


            // South America
            { location: "Brazil (São Paulo)", server: "8.8.8.8", provider: "Google" },
            { location: "Brazil (Rio de Janeiro)", server: "1.1.1.1", provider: "Cloudflare" },
            { location: "Argentina (Buenos Aires)", server: "208.67.222.222", provider: "OpenDNS" },
            { location: "Chile (Santiago)", server: "9.9.9.9", provider: "Quad9" },
            { location: "Colombia (Bogotá)", server: "8.8.8.8", provider: "Google" },

            // Africa
            { location: "South Africa (Johannesburg)", server: "8.8.8.8", provider: "Google" },
            { location: "Nigeria (Lagos)", server: "1.1.1.1", provider: "Cloudflare" },
            { location: "Kenya (Nairobi)", server: "208.67.222.222", provider: "OpenDNS" },
            { location: "Egypt (Cairo)", server: "9.9.9.9", provider: "Quad9" },
            { location: "Morocco (Casablanca)", server: "8.8.8.8", provider: "Google" },

            // Oceania
            { location: "Australia (Sydney)", server: "1.1.1.1", provider: "Cloudflare" },
            { location: "Australia (Melbourne)", server: "8.8.8.8", provider: "Google" },
            { location: "New Zealand (Auckland)", server: "208.67.222.222", provider: "OpenDNS" },
        ];


        const checkDNS = async ({ location, server, provider }) => {
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
                    default:
                        result = await resolver.resolveAny(domain);
                }
 
                return {
                    location,
                    server,
                    provider,
                    success: result ? true : false,
                    records: result || []
                };

            } catch (error) {
                return {
                    location,
                    server,
                    provider,
                    success: false,
                    records: error.message
                };
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