import { NextResponse } from "next/server";
import { success } from "zod";
import dns from 'dns/promises';

export async function POST(req) {
    try{

        const body = await req.json();
        const { domain, dns_records } = body;
    
        if (!domain || !dns_records) {
            return NextResponse.json({
                success: false,
                message: "Domain and record type required"
            });
        }
    
        let result;
    
        if (dns_records == '1') {
            console.log("1");
            result = await dns.resolveCname(domain);
            return NextResponse.json({
                success: true,
                records: result
            });
        }
    } catch (error) {
          return NextResponse.json({
                success: false,
                records: error.message
            });
    }

}