import React from 'react'

function SignatureTemlateP() {
  return (
    <div style={{  display: "flex", justifyContent: "center" }}>
      <table
        cellPadding="0"
        cellSpacing="0"
        style={{
          width: "620px",
          minWidth: "620px",
          backgroundColor: "#1e1e1e",
          borderRadius: "10px",
          overflow: "hidden",
          fontFamily: "'Segoe UI', Arial, sans-serif",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        }}
      >
        <tbody>
          <tr>

            {/* ═══════════════════════════════════════
                LEFT PANEL — Red + dark, Logo + Photo + Follow
            ════════════════════════════════════════ */}
            <td
              style={{
                width: "175px",
                verticalAlign: "top",
                padding: "0",
                position: "relative",
              }}
            >
              {/* TOP RED SECTION — Logo area */}
              <div
                style={{
                  backgroundColor: "#e8192c",
                  padding: "18px 16px 14px 16px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Diagonal dark slash shape (decorative) */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-18px",
                    right: "-10px",
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#1e1e1e",
                    transform: "rotate(30deg)",
                    zIndex: 0,
                  }}
                />
                {/* Logo */}
                <table cellPadding="0" cellSpacing="0" style={{ position: "relative", zIndex: 1 }}>
                  <tbody>
                    <tr>
                      <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "6px",
                            backgroundColor: "rgba(255,255,255,0.15)",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1.5px solid rgba(255,255,255,0.3)",
                          }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" fill="white" opacity="0.9" />
                          </svg>
                        </div>
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        <div style={{ fontSize: "14px", fontWeight: "800", color: "#ffffff", letterSpacing: "1px", textTransform: "uppercase" }}>
                          LOGO
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* MIDDLE DARK SECTION — Photo */}
              <div
                style={{
                  backgroundColor: "#272727",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "18px 0 14px 0",
                  position: "relative",
                }}
              >
                {/* Red corner accent top-left */}
                <div style={{
                  position: "absolute", top: 0, left: 0,
                  width: "22px", height: "22px",
                  borderTop: "4px solid #e8192c",
                  borderLeft: "4px solid #e8192c",
                  borderRadius: "2px 0 0 0",
                }} />
                {/* Red corner accent bottom-right */}
                <div style={{
                  position: "absolute", bottom: 0, right: 0,
                  width: "22px", height: "22px",
                  borderBottom: "4px solid #e8192c",
                  borderRight: "4px solid #e8192c",
                  borderRadius: "0 0 2px 0",
                }} />

                {/* Hexagonal-ish circular photo with red ring */}
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    border: "3px solid #e8192c",
                    overflow: "hidden",
                    backgroundColor: "#444",
                    display: "inline-block",
                  }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Michael Jonshon"
                    width="90"
                    height="90"
                    style={{ objectFit: "cover", display: "block" }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentNode.style.backgroundColor = "#555";
                    }}
                  />
                </div>
              </div>

              {/* BOTTOM RED SECTION — Follow us */}
              <div
                style={{
                  backgroundColor: "#e8192c",
                  padding: "12px 16px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Diagonal dark slash top */}
                <div
                  style={{
                    position: "absolute",
                    top: "-18px",
                    left: "-10px",
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#1e1e1e",
                    transform: "rotate(30deg)",
                    zIndex: 0,
                  }}
                />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.75)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>
                    FOLLOW US
                  </div>
                  <table cellPadding="0" cellSpacing="0">
                    <tbody>
                      <tr>
                        {[
                          /* Facebook */
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
                          /* Instagram */
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
                          /* Twitter */
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>,
                        ].map((icon, i) => (
                          <td key={i} style={{ paddingRight: i < 2 ? "7px" : "0" }}>
                            <a href="#" style={{
                              display: "inline-flex", alignItems: "center", justifyContent: "center",
                              width: "24px", height: "24px", borderRadius: "50%",
                              backgroundColor: "rgba(255,255,255,0.2)",
                              textDecoration: "none",
                            }}>
                              {icon}
                            </a>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>

            {/* ═══════════════════════════════════════
                RIGHT PANEL — Dark, Name + contacts
            ════════════════════════════════════════ */}
            <td
              style={{
                backgroundColor: "#1e1e1e",
                padding: "24px 26px 24px 28px",
                verticalAlign: "top",
              }}
            >
              {/* Name */}
              <div style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "#ffffff",
                letterSpacing: "0.5px",
                lineHeight: "1.1",
                marginBottom: "2px",
                textTransform: "uppercase",
              }}>
                MICHAEL{" "}
                <span style={{ color: "#e8192c" }}>JONSHON</span>
              </div>

              {/* Title */}
              <div style={{
                fontSize: "10.5px",
                color: "#aaaaaa",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "18px",
                fontWeight: "500",
              }}>
                CEO &amp; FOUNDER
              </div>

              {/* Thin red divider */}
              <div style={{
                height: "1.5px",
                backgroundColor: "#e8192c",
                width: "100%",
                marginBottom: "18px",
                borderRadius: "2px",
              }} />

              {/* Contact rows */}
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tbody>
                  {[
                    {
                      icon: (
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                      ),
                      text: "Your Street Address Here",
                      sub: "New York NY 1234",
                    },
                    {
                      icon: (
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 12.07a19.79 19.79 0 01-3.07-8.64A2 2 0 011.9 1.11h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                      ),
                      text: "+00 123 456 7890",
                      sub: "+00 324-456-0990",
                    },
                    {
                      icon: (
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      ),
                      text: "hello@example.com",
                      sub: null,
                    },
                  ].map((item, i) => (
                    <tr key={i}>
                      <td style={{ paddingBottom: "12px", verticalAlign: "top" }}>
                        <table cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              {/* Red icon circle */}
                              <td style={{ verticalAlign: "top", paddingRight: "10px", paddingTop: "2px" }}>
                                <div style={{
                                  width: "26px", height: "26px", borderRadius: "50%",
                                  backgroundColor: "#2a2a2a",
                                  border: "1.5px solid #e8192c",
                                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                                }}>
                                  {item.icon}
                                </div>
                              </td>
                              <td style={{ verticalAlign: "top" }}>
                                <div style={{ fontSize: "12px", color: "#dddddd", fontWeight: "500", lineHeight: "1.5" }}>
                                  {item.text}
                                </div>
                                {item.sub && (
                                  <div style={{ fontSize: "11px", color: "#888888", lineHeight: "1.4" }}>
                                    {item.sub}
                                  </div>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Dot pattern decoration — bottom right */}
              <div style={{ textAlign: "right", marginTop: "4px" }}>
                {[0,1,2].map(row => (
                  <div key={row} style={{ marginBottom: "4px" }}>
                    {[0,1,2,3].map(col => (
                      <span key={col} style={{
                        display: "inline-block",
                        width: "4px", height: "4px",
                        borderRadius: "50%",
                        backgroundColor: col === 3 && row === 2 ? "#e8192c" : "#3a3a3a",
                        marginLeft: "4px",
                      }} />
                    ))}
                  </div>
                ))}
              </div>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SignatureTemlateP