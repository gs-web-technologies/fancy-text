import Link from 'next/link';
import React from 'react'

function SignatureTemlateQ({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar5.png";
  const SocialLinks = [
    {
      label: "facebook",
      icon: (<svg width="11" height="11" viewBox="0 0 24 24" fill="#1a1a1a">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>),
      href: facebook || "https://facebook.com",
    },
    {
      label: "Instagram",
      icon: (<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>),
      href: instagram || "https://Instagram.com",
    },
    {
      label: "Twitter",
      icon: (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="#1a1a1a">
          <path
            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
      href: twitter || "https://twitter.com",
    }
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table
        cellPadding="0"
        cellSpacing="0"
        style={{
          width: "660px",
          minWidth: "660px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          overflow: "hidden",
          fontFamily: "'Segoe UI', Arial, sans-serif",
          boxShadow: "0 2px 14px rgba(0,0,0,0.09)",
          position: "relative",
        }}
      >
        <tbody>
          <tr>

            {/* ═══════════════════════════════════════════
                LEFT SECTION — Name, photo, contacts
            ════════════════════════════════════════════ */}
            <td
              style={{
                width: "320px",
                padding: "22px 0 0 0",
                verticalAlign: "top",
                position: "relative",
              }}
            >
              {/* World map watermark background */}
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='160' viewBox='0 0 300 160'%3E%3Cellipse cx='150' cy='80' rx='140' ry='70' fill='none' stroke='%23e8e8e8' stroke-width='1'/%3E%3Cellipse cx='150' cy='80' rx='100' ry='70' fill='none' stroke='%23e8e8e8' stroke-width='1'/%3E%3Cellipse cx='150' cy='80' rx='60' ry='70' fill='none' stroke='%23e8e8e8' stroke-width='1'/%3E%3Cline x1='10' y1='80' x2='290' y2='80' stroke='%23e8e8e8' stroke-width='1'/%3E%3Cline x1='150' y1='10' x2='150' y2='150' stroke='%23e8e8e8' stroke-width='1'/%3E%3Cline x1='10' y1='50' x2='290' y2='50' stroke='%23e8e8e8' stroke-width='0.5'/%3E%3Cline x1='10' y1='110' x2='290' y2='110' stroke='%23e8e8e8' stroke-width='0.5'/%3E%3C/svg%3E")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.6,
                zIndex: 0,
              }} />

              <div style={{ position: "relative", zIndex: 1, padding: "0 20px 0 22px" }}>

                {/* Top row: Name + Photo side by side */}
                <table cellPadding="0" cellSpacing="0" style={{ width: "100%", marginBottom: "14px" }}>
                  <tbody>
                    <tr>
                      {/* Name & title */}
                      <td style={{ verticalAlign: "top" }}>
                        <div style={{
                          fontSize: "16px",
                          fontWeight: "800",
                          color: "#1a1a1a",
                          letterSpacing: "0.3px",
                          lineHeight: "1.2",
                          marginBottom: "3px",
                        }}>
                          {name ? name : 'Your Name'}
                        </div>
                        <div style={{
                          fontSize: "9.5px",
                          color: "#888888",
                          letterSpacing: "0.3px",
                          marginBottom: "0",
                        }}>
                          {job_title ? job_title : 'Job Title'}
                        </div>

                        {/* Yellow underline accent */}
                        <div style={{
                          height: "2.5px",
                          width: "40px",
                          backgroundColor: "#f5c518",
                          borderRadius: "2px",
                          marginTop: "6px",
                        }} />
                      </td>

                      {/* Circular photo */}
                      <td style={{ verticalAlign: "top", paddingLeft: "14px", width: "68px" }}>
                        <div style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                          overflow: "hidden",
                          border: "3px solid #f5c518",
                          backgroundColor: "#e0e0e0",
                          flexShrink: 0,
                        }}>
                          <img
                            src={imageSrc}
                            alt="Olivia Johnson"
                            width="100"
                            height="100"
                            style={{ objectFit: "cover", display: "block" }}
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.parentNode.style.backgroundColor = "#c8c0b8";
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Contact rows */}
                <table cellPadding="0" cellSpacing="0" style={{ marginBottom: "0" }}>
                  <tbody>
                    {[
                      {
                        icon: (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 12.07a19.79 19.79 0 01-3.07-8.64A2 2 0 011.9 1.11h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                          </svg>
                        ),
                        text: phone_no || "+0 1234 567890",
                      },
                      {
                        icon: (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                          </svg>
                        ),
                        text: linkedin || "your linkedin",
                      },
                      {
                        icon: (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        ),
                        text: organization || "organization",
                      },
                    ].map((item, i) => (
                      <tr key={i}>
                        <td style={{ paddingBottom: "7px", verticalAlign: "middle" }}>
                          <table cellPadding="0" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                                  {item.icon}
                                </td>
                                <td style={{
                                  fontSize: "11px",
                                  color: "#444444",
                                  verticalAlign: "middle",
                                }}>
                                  {item.text}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Yellow bottom bar with social icons */}
              <div style={{
                backgroundColor: "#f5c518",
                padding: "8px 22px",
                marginTop: "12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}>
                <table cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      {SocialLinks.map((s, i) => (
                        <td key={i} style={{ paddingRight: i < 2 ? "10px" : "0" }}>
                          <Link href={s.href} style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center",
                            width: "26px", height: "26px", borderRadius: "50%",
                            backgroundColor: "rgba(255,255,255,0.4)",
                            textDecoration: "none",
                          }}>
                            {s.icon}
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>

            {/* Thin vertical divider */}
            <td style={{ width: "1px", backgroundColor: "#eeeeee", padding: "0" }} />

            {/* ═══════════════════════════════════════════
                RIGHT SECTION — Company name + description
            ════════════════════════════════════════════ */}
            <td
              style={{
                padding: "24px 24px 24px 28px",
                verticalAlign: "top",
                backgroundColor: "#ffffff",
              }}
            >
              {/* Company logo icon + name */}
              <table cellPadding="0" cellSpacing="0" style={{ marginBottom: "12px" }}>
                <tbody>
                  <tr>
                    <td style={{ paddingRight: "10px", verticalAlign: "middle" }}>
                      {/* Rings logo icon */}
                      <svg width="28" height="18" viewBox="0 0 40 26">
                        <circle cx="14" cy="13" r="11" fill="none" stroke="#f5c518" strokeWidth="3" />
                        <circle cx="26" cy="13" r="11" fill="none" stroke="#f5c518" strokeWidth="3" />
                      </svg>
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <div style={{ fontSize: "15px", fontWeight: "800", color: "#1a1a1a", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                        {organization ? organization : "Organization"}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Yellow divider */}
              <div style={{
                height: "2px",
                backgroundColor: "#f5c518",
                width: "100%",
                marginBottom: "12px",
                borderRadius: "2px",
              }} />

              {/* Company description */}
              <div style={{
                fontSize: "10.5px",
                color: "#888888",
                lineHeight: "1.7",
                maxWidth: "240px",
              }}>
                {email ? email : "your_email.com"}
              </div>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SignatureTemlateQ