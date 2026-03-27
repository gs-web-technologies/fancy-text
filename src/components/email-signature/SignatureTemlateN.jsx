import Link from 'next/link';
import React from 'react'

function SignatureTemlateN({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar3.png";
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: "580px",
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
        borderCollapse: "collapse",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      }}
    >
      <tbody>
        <tr>
          {/* LEFT: Gradient teal/blue panel with floral deco + photo */}
          <td
            style={{
              width: "160px",
              background: "linear-gradient(160deg, #a8edea 0%, #38c9c0 40%, #3b9fd4 100%)",
              verticalAlign: "bottom",
              position: "relative",
              padding: "0",
            }}
          >
            {/* Decorative flower top-left */}
            <div style={{ position: "absolute", top: "8px", left: "6px", opacity: 0.5 }}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="white">
                <circle cx="18" cy="9" r="6" />
                <circle cx="27" cy="14" r="6" />
                <circle cx="27" cy="25" r="6" />
                <circle cx="18" cy="30" r="6" />
                <circle cx="9" cy="25" r="6" />
                <circle cx="9" cy="14" r="6" />
                <circle cx="18" cy="18" r="5" />
              </svg>
            </div>

            {/* Decorative flower bottom-left */}
            <div style={{ position: "absolute", bottom: "8px", left: "4px", opacity: 0.35 }}>
              <svg width="28" height="28" viewBox="0 0 36 36" fill="white">
                <circle cx="18" cy="9" r="6" />
                <circle cx="27" cy="14" r="6" />
                <circle cx="27" cy="25" r="6" />
                <circle cx="18" cy="30" r="6" />
                <circle cx="9" cy="25" r="6" />
                <circle cx="9" cy="14" r="6" />
                <circle cx="18" cy="18" r="5" />
              </svg>
            </div>

            {/* Profile photo at bottom of panel */}
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center", paddingTop: "30px", paddingBottom: "0" }}>
                    <div
                      style={{
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "4px solid #ffffff",
                        margin: "0 auto",
                        backgroundColor: "#cde8f5",
                      }}
                    >
                      <img
                        src={imageSrc}
                        alt="Bella Warren"
                        style={{
                          width: "110px",
                          height: "110px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>
                  </td>
                </tr>
                {/* Filler to push photo to bottom */}
                <tr>
                  <td style={{ height: "20px" }} />
                </tr>
              </tbody>
            </table>
          </td>

          {/* CENTER: Main info */}
          <td style={{ padding: "20px 18px", verticalAlign: "top" }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                {/* Brand logo row */}
                <tr>
                  <td style={{ paddingBottom: "4px" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "6px", verticalAlign: "middle" }}>
                            {/* Small flower icon */}
                            <svg width="16" height="16" viewBox="0 0 36 36" fill="#38c9c0">
                              <circle cx="18" cy="9" r="6" />
                              <circle cx="27" cy="14" r="6" />
                              <circle cx="27" cy="25" r="6" />
                              <circle cx="18" cy="30" r="6" />
                              <circle cx="9" cy="25" r="6" />
                              <circle cx="9" cy="14" r="6" />
                              <circle cx="18" cy="18" r="5" />
                            </svg>
                          </td>
                          <td
                            style={{
                              fontSize: "12px",
                               color: "#38c9c0",
                              fontStyle: "italic",
                              fontFamily: "Georgia, serif",
                            }}
                          >
                           { job_title ? job_title : 'Job Title' }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Name */}
                <tr>
                  <td style={{ paddingBottom: "2px" }}>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "26px",
                        fontWeight: "bold",
                        color: "#1a1a2e",
                        fontFamily: "Georgia, 'Times New Roman', serif",
                        fontStyle: "italic",
                        lineHeight: "1.1",
                      }}
                    >
                      {name ? name : 'Your Name'}
                    </p>
                  </td>
                </tr>

             

                {/* Email */}
                <tr>
                  <td style={{ padding: "7px 0px 2px 0px" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                backgroundColor: "#e8f8f7",
                                borderRadius: "3px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#38c9c0" strokeWidth="2">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M2 7l10 7 10-7" />
                              </svg>
                            </div>
                          </td>
                          <td style={{ fontSize: "12px", color: "#555555", fontFamily: "Arial, sans-serif" }}>
                            {email ? email : 'youremail@gmail.com'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Phone */}
                <tr>
                  <td style={{ padding: "7px 0px 2px 0px" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                backgroundColor: "#e8f8f7",
                                borderRadius: "3px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#38c9c0" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>
                            </div>
                          </td>
                          <td style={{ fontSize: "12px", color: "#555555", fontFamily: "Arial, sans-serif" }}>
                            {phone_no ? phone_no : '(380) 355-0128'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Website */}
                <tr>
                  <td style={{ padding: "7px 0px 2px 0px" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                backgroundColor: "#e8f8f7",
                                borderRadius: "3px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#38c9c0" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                              </svg>
                            </div>
                          </td>
                          <td style={{ fontSize: "12px", color: "#555555", fontFamily: "Arial, sans-serif" }}>
                            {linkedin ? linkedin : 'Your LinkedIn'}
                          </td>
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
                          <td style={{ padding: "7px 0px 2px 0px", verticalAlign: "middle" }}>
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                backgroundColor: "#e8f8f7",
                                borderRadius: "3px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#38c9c0" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                            </div>
                          </td>
                          <td style={{ padding: "7px 0px 2px 0px", fontSize: "12px", color: "#555555", fontFamily: "Arial, sans-serif" }}>
                            {organization ? organization : 'Organization'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>

          {/* RIGHT: Vertical social icons bar */}
          <td
            style={{
              width: "40px",
              background: "linear-gradient(180deg, #a8edea 0%, #38c9c0 50%, #3b9fd4 100%)",
              verticalAlign: "middle",
              padding: "16px 4px 4px 5px",
            }}
          >
            <table cellPadding="" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                {[
                  {
                    label: "Twitter",
                    href: twitter || 'https://x.com',
                    svg: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.15 4.9a4.28 4.28 0 0 0 1.32 5.71 4.22 4.22 0 0 1-1.94-.54v.05a4.29 4.29 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.12 12.12 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56A8.7 8.7 0 0 0 22.46 6z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Facebook",
                    href: facebook || 'https://facebook.com',
                    svg: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Instagram",
                    href: instagram || 'https://instagram.com',
                    svg: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.8" fill="white" stroke="none" />
                      </svg>
                    ),
                  },
                  {
                    label: "LinkedIn",
                    href: linkedin || 'https://linkedin.com',
                    svg: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.56a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7H9.3V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.2z" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <tr key={i}>
                    <td
                      style={{
                        textAlign: "center",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <Link href={item.href}>
                      {item.svg}
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

export default SignatureTemlateN