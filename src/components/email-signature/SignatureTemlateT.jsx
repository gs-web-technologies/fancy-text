import { POWERED_BY } from '@/utils/const';
import Link from 'next/link';
import React from 'react'

function SignatureTemlateT({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar5.png";
  const SocialLinks = [
    {
      label: "facebook",
      icon: (<svg key="fb" width="12" height="12" viewBox="0 0 24 24" fill="white">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
      ),
      href: facebook || "https://facebook.com",
    },
    {
      label: "linkedIn",
      icon: (<svg key="li" width="12" height="12" viewBox="0 0 24 24" fill="white">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" fill="white" />
      </svg>
      ),
      href: linkedin || "https://linkedin.com",
    },
    {
      label: "Instagram",
      icon: (<svg key="ig" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="white" stroke="none" />
      </svg>
      ),
      href: instagram || "https://instagram.com",
    }
  ];
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: "620px",
        backgroundColor: "#e6f7f4",
        fontFamily: "Arial, sans-serif",
        borderCollapse: "collapse",
        overflow: "hidden",
      }}
    >
      <tbody>
        <tr>
          {/* LEFT teal accent bar */}
          <td style={{ width: "6px", backgroundColor: "#1abc9c", padding: "0" }} />

          {/* MAIN CONTENT */}
          <td style={{ padding: "18px 16px 14px 18px", verticalAlign: "top" }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>

                {/* TOP ROW: Name/Title LEFT + Brand/Cube RIGHT */}
                <tr>
                  <td>
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          {/* Name + badge */}
                          <td style={{ verticalAlign: "top" }}>
                            <p style={{ margin: "0 0 4px 0", fontSize: "22px", fontWeight: "900", color: "#1a3a35", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "Arial Black, Arial, sans-serif", lineHeight: "1" }}>
                              {name ? name : 'Your Name'}
                            </p>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td style={{ backgroundColor: "#1abc9c", padding: "2px 10px", borderRadius: "2px" }}>
                                    <span style={{ fontSize: "8px", color: "#ffffff", fontWeight: "bold", letterSpacing: "1.2px", textTransform: "uppercase", fontFamily: "Arial, sans-serif" }}>
                                      {job_title ? job_title : 'Job Title'}
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>

                          {/* BRAND + Cube */}
                          <td style={{ verticalAlign: "top", textAlign: "right" }}>
                            <table cellPadding="0" cellSpacing="0" style={{ marginLeft: "auto" }}>
                              <tbody>
                                <tr>
                                  <td style={{ verticalAlign: "middle" }}>
                                    {/* Circular photo */}
                                    <div
                                      style={{
                                        width: "90px",
                                        height: "90px",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        border: "3px solid #1abc9c",
                                        position: "relative",
                                        zIndex: "1",
                                        margin: "0 auto",
                                      }}
                                    >
                                      <img
                                        src={imageSrc}
                                        alt="Michel Hansen"
                                        style={{
                                          width: "90px",
                                          height: "90px",
                                          objectFit: "cover",
                                          display: "block",
                                        }}
                                      />
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* THIN DIVIDER */}
                <tr>
                  <td style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    <div style={{ height: "1px", backgroundColor: "#1abc9c", opacity: "0.35" }} />
                  </td>
                </tr>

                {/* 2x2 CONTACT GRID */}
                <tr>
                  <td>
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          {/* Phone */}
                          <td style={{ width: "50%", paddingBottom: "8px", verticalAlign: "middle" }}>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                                    <div style={{ width: "18px", height: "18px", backgroundColor: "#1abc9c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                      </svg>
                                    </div>
                                  </td>
                                  <td style={{ fontSize: "11px", color: "#2c3e50", fontFamily: "Arial, sans-serif" }}>{phone_no ? phone_no : "000 1234 56789"}</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>

                          {/* Email */}
                          <td style={{ width: "50%", paddingBottom: "8px", verticalAlign: "middle" }}>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                                    <div style={{ width: "18px", height: "18px", backgroundColor: "#1abc9c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="M2 7l10 7 10-7" />
                                      </svg>
                                    </div>
                                  </td>
                                  <td style={{ fontSize: "11px", color: "#2c3e50", fontFamily: "Arial, sans-serif" }}>{email ? email : "your_email@gmail.com"}</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr>
                          {/* Website */}
                          <td style={{ width: "50%", verticalAlign: "middle" }}>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                                    <div style={{ width: "18px", height: "18px", backgroundColor: "#1abc9c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                      </svg>
                                    </div>
                                  </td>
                                  <td style={{ fontSize: "11px", color: "#2c3e50", fontFamily: "Arial, sans-serif" }}>{linkedin ? linkedin : "Your linkedIn"}</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>

                          {/* Address */}
                          <td style={{ width: "50%", verticalAlign: "middle" }}>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                                    <div style={{ width: "18px", height: "18px", backgroundColor: "#1abc9c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                      </svg>
                                    </div>
                                  </td>
                                  <td style={{ fontSize: "11px", color: "#2c3e50", fontFamily: "Arial, sans-serif" }}>{organization ? organization : 'Organization'}</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                     <td style={{ textAlign: "right", fontSize: "10px", color: "#1abc9c" }}>
                  <i>Powered by <strong>{POWERED_BY}</strong></i>
                </td>
                  </tr>

              </tbody>
            </table>
          </td>

          {/* RIGHT: Vertical teal social icons bar */}
          <td
            style={{
              width: "32px",
              background: "linear-gradient(180deg, #1abc9c 0%, #16a085 100%)",
              verticalAlign: "middle",
              padding: "14px 10px",
              textAlign: "center",
            }}
          >
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                {SocialLinks.map((item, i) => (
                  <tr key={i}>
                    <td style={{ textAlign: "center", paddingTop: i === 0 ? "2px" : "10px" }}>
                      <Link href={item.href}>
                        {item.icon}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
        
      </tbody>
    </table>
  );
}

export default SignatureTemlateT