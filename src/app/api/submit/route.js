import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req) {
   try {
      const body = await req.json();
      const { full_name, email, job_title, phone_no, organization_name, linkedin, instagram, facebook, twitter,website,slogan } = body;

      const auth = new google.auth.GoogleAuth({
         credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY,
         },
         scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });
      const sheets = google.sheets({ version: "v4", auth });

      await sheets.spreadsheets.values.append({
         spreadsheetId: process.env.GOOGLE_SHEET_ID,
         range: "Sheet1!A:J",
         valueInputOption: "USER_ENTERED",
         requestBody: {
            values: [[
               new Date().toLocaleString(),
               full_name,
               email,
               job_title,
               phone_no,
               organization_name,
               linkedin,
               instagram,
               facebook,
               twitter,
               website,
               slogan,
            ]],
         },
      });
      console.log('done');
      return NextResponse.json({
         success: true
      });
   } catch (error) {
      console.error('SHEET ERROR: ', error);
      return NextResponse.json({
         error: true,
         message: error
      });
   }
}