import Link from 'next/link';
import React from 'react'

function SignatureTemlateS({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar5.png";
  const SocialLinks = [
    {
      label: "facebook",
      icon: (<svg key="fb" width="10" height="10" viewBox="0 0 24 24" fill="white">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>

      ),
      href: facebook || "https://facebook.com",
    },
    {
      label: "twitter",
      icon: (<svg key="tw" width="10" height="10" viewBox="0 0 24 24" fill="white">
        <path
          d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>

      ),
      href: twitter || "https://x.com",
    },
    {
      label: "linkedIn",
      icon: (<svg key="li" width="10" height="10" viewBox="0 0 24 24" fill="white">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" fill="white" />
      </svg>

      ),
      href: linkedin || "https://linkedIn.com"
    },
    {
      label: "instagram",
      icon: (<svg key="ig" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="white" stroke="none" />
      </svg>

      ),
      href: instagram || "https://instagram.com"
    },
  ];
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: "450px",
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
        borderCollapse: "collapse",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <tbody>
        <tr>
          {/* PHOTO COLUMN with top-left corner triangle */}
          <td
            style={{
              width: "120px",
              verticalAlign: "middle",
              padding: "16px 0 16px 0",
              position: "relative",
              backgroundColor: "#ffffff",
            }}
          >
            {/* Top-left dark triangle decoration */}
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "0",
                height: "0",
                borderTop: "60px solid #1a2a4a",
                borderRight: "60px solid transparent",
              }}
            />
            {/* Circular photo */}
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #1a2a4a",
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
    
                               <div style={{ textAlign: "right", fontSize: "10px", color: "#1a2a4a"}}>
                  <i>Powered by <strong>thynktales</strong></i>
                </div>
          </td>

          {/* CENTER: Name + contact info */}
          <td style={{ verticalAlign: "middle", padding: "16px 14px" }}>
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                {/* Name */}
                <tr>
                  <td>
                    <p
                      style={{
                        margin: "0 0 1px 0",
                        fontSize: "17px",
                        fontWeight: "bold",
                        color: "#1a2a4a",
                        letterSpacing: "0.3px",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {name ? name : "Your Name"}
                    </p>
                  </td>
                </tr>

                {/* Title */}
                <tr>
                  <td style={{ paddingBottom: "10px" }}>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "10px",
                        color: "#4a90c4",
                        fontFamily: "Arial, sans-serif",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {job_title ? job_title : 'Job Title'}
                    </p>
                  </td>
                </tr>

                {/* Phone 1 */}
                <tr>
                  <td style={{ paddingBottom: "5px" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "7px", verticalAlign: "middle" }}>
                            <div style={{ width: "15px", height: "15px", backgroundColor: "#1a2a4a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>
                            </div>
                          </td>
                          <td style={{ fontSize: "10px", color: "#555555", fontFamily: "Arial, sans-serif" }}>{phone_no ? phone_no : "(021) 234-567 7890"} </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Email */}
                <tr>
                  <td style={{ paddingBottom: "5px" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "7px", verticalAlign: "middle" }}>
                            <div style={{ width: "15px", height: "15px", backgroundColor: "#1a2a4a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M2 7l10 7 10-7" />
                              </svg>
                            </div>
                          </td>
                          <td style={{ fontSize: "10px", color: "#555555", fontFamily: "Arial, sans-serif" }}>{email ? email : "your_email.com"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Address */}
                <tr>
                  <td>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "7px", verticalAlign: "top" }}>
                            <div style={{ width: "15px", height: "15px", backgroundColor: "#1a2a4a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}>
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                            </div>
                          </td>
                          <td style={{ fontSize: "10px", color: "#555555", fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
                            {organization ? organization : "Organization"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>

          {/* VERTICAL DIVIDER */}
          <td style={{ width: "2px", backgroundColor: "#1a2a4a", padding: "0" }} />

          {/* RIGHT: Logo + social icons */}
          <td
            style={{
              verticalAlign: "middle",
              paddingRight: "32px",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Bottom-right corner triangle */}
            <div
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                width: "0",
                height: "0",
                borderBottom: "55px solid #1a2a4a",
                borderLeft: "55px solid transparent",
              }}
            />

            {/* Dot grid top-right */}
            <div style={{ position: "absolute", top: "10px", right: "10px" }}>
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  {[0, 1, 2, 3].map((row) => (
                    <tr key={row}>
                      {[0, 1, 2, 3].map((col) => (
                        <td key={col} style={{ padding: "2px" }}>
                          <div style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "#1a2a4a", opacity: "0.25" }} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


            {/* Social icons row */}
            <table cellPadding="0" cellSpacing="0" style={{ margin: "0 auto" }}>
              <tbody>
                <tr>
                  <td style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {SocialLinks.map((item, i) => (
                      <div key={i} style={{ paddingLeft: i === 0 ? "0" : "5px" }}>
                        <div style={{ width: "22px", height: "22px", backgroundColor: "#1a2a4a", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Link href={item.href}>
                          {item.icon}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SignatureTemlateS