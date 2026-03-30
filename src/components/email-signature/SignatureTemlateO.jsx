import { POWERED_BY } from '@/utils/const';
import Link from 'next/link';
import React from 'react'

function SignatureTemlateO({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar3.png";
  return (
    <div style={{ backgroundColor: "#ffffff", width: "480px", padding: "30px", display: "flex", justifyContent: "center" }}>
      <table
        cellPadding="0"
        cellSpacing="0"
        style={{
          width: "420px",
          minWidth: "420px",
          backgroundColor: "#ffffff",
          fontFamily: "'Segoe UI', Arial, sans-serif",
        }}
      >
        <tbody>

          {/* ── "Kind regards," handwriting text ── */}
          <tr>
            <td colSpan={2} style={{ paddingBottom: "18px" }}>
              <div
                style={{
                  fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                  fontSize: "22px",
                  color: "#222222",
                  fontWeight: "700",
                  lineHeight: "1",
                }}
              >
                {name ? name : 'Your Name'}
              </div>
            </td>
          </tr>

          {/* ── Main row: photo | info ── */}
          <tr>
            {/* Photo column */}
            <td
              style={{
                verticalAlign: "top",
                paddingRight: "16px",
                width: "70px",
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #e8e8e8",
                  backgroundColor: "#f0e8e0",
                }}
              >
                {/* Replace /profile.jpg with your actual photo */}
                <img
                  src={imageSrc}
                  alt="Alex Perez"
                  width="120"
                  height="120"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.style.backgroundColor = "#d4b8a0";
                  }}
                />
              </div>
              <table style={{ margin: "5px" }}>
                <tbody>

                  <tr>

                    <td style={{ textAlign: "right", fontSize: "10px", color: "black" }}>
                      <i>Powered by <strong>{POWERED_BY}</strong></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>

            {/* Info column */}
            <td style={{ verticalAlign: "top" }}>

              {/* Name */}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  marginBottom: "2px",
                  letterSpacing: "0.1px",
                }}
              >
                {name ? name : 'Your Name'}
              </div>

              {/* Title line — "CFO at Finance Mile" with colored company */}
              <div style={{ fontSize: "12px", color: "#555555", marginBottom: "10px" }}>
                <span style={{ color: "#29b6f6", fontWeight: "600" }}> {job_title ? job_title : 'Job Title'} </span>
              </div>

              {/* Thin blue divider */}
              <div
                style={{
                  height: "1.5px",
                  backgroundColor: "#29b6f6",
                  width: "100%",
                  marginBottom: "10px",
                  borderRadius: "2px",
                }}
              />

              {/* Contact rows */}
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  {[
                    {
                      letter: "A",
                      value: organization || "Organization",
                    },
                    {
                      letter: "P",
                      value: phone_no || "1559-741-7878",
                    },
                    {
                      letter: "E",
                      value: email || "youremail.com",
                    },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td
                        style={{
                          fontSize: "10px",
                          color: "#aaaaaa",
                          fontWeight: "700",
                          paddingRight: "6px",
                          paddingBottom: "5px",
                          verticalAlign: "top",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {row.letter}
                      </td>
                      <td
                        style={{
                          fontSize: "11px",
                          color: "#444444",
                          paddingBottom: "5px",
                          verticalAlign: "top",
                          lineHeight: "1.5",
                        }}
                      >
                        {row.value}
                        {row.extra && row.extra}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Social icons */}
              <table cellPadding="0" cellSpacing="0" style={{ marginTop: "10px" }}>
                <tbody>
                  <tr>
                    {/* Facebook */}
                    <td style={{ paddingRight: "8px" }}>
                      <Link
                        href={facebook || "https://facebook.com"}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          backgroundColor: "#1877f2",
                          textDecoration: "none",
                        }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </Link>
                    </td>
                    {/* Twitter / X */}
                    <td style={{ paddingRight: "8px" }}>
                      <Link
                        href={twitter || "https://x.com"}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          backgroundColor: "#1da1f2",
                          textDecoration: "none",
                        }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </Link>
                    </td>
                    <td style={{ paddingRight: "8px" }}>
                      {/* instagram */}
                      <Link
                        href={instagram || "https://instagram.com"}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                          textDecoration: "none",
                        }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                          <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                        </svg>
                      </Link>
                    </td>
                    <td style={{ paddingRight: "8px" }}>
                      {/* linkedin */}
                      <Link
                        href={linkedin || "https://linkedin.com"}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          backgroundColor: "#0A66C2",
                          textDecoration: "none",
                        }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                          <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.56a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7H9.3V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.2z" />
                        </svg>
                      </Link>
                    </td>

                  </tr>
                </tbody>
              </table>

            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default SignatureTemlateO