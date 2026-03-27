import React from 'react'

function SignatureTemlateN() {
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
                        src="https://via.placeholder.com/110"
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
                              color: "#555555",
                              fontStyle: "italic",
                              fontFamily: "Georgia, serif",
                            }}
                          >
                            BellaVie
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
                      Bella Warren
                    </p>
                  </td>
                </tr>

                {/* Title */}
                <tr>
                  <td style={{ paddingBottom: "14px" }}>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "12px",
                        color: "#38c9c0",
                        fontFamily: "Arial, sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      Makeup Artist
                    </p>
                  </td>
                </tr>

                {/* Email */}
                <tr>
                  <td style={{ paddingBottom: "7px" }}>
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
                            bella@email.com
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Phone */}
                <tr>
                  <td style={{ paddingBottom: "7px" }}>
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
                            (380) 355-0128
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Website */}
                <tr>
                  <td style={{ paddingBottom: "7px" }}>
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
                            www.bellavie.com
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
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                            </div>
                          </td>
                          <td style={{ fontSize: "12px", color: "#555555", fontFamily: "Arial, sans-serif" }}>
                            2464 Royal Ln. Mesa, New Jersey 45463
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
              padding: "16px 0",
            }}
          >
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                {[
                  {
                    label: "TikTok",
                    svg: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Facebook",
                    svg: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Instagram",
                    svg: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.8" fill="white" stroke="none" />
                      </svg>
                    ),
                  },
                  {
                    label: "YouTube",
                    svg: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
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
                      {item.svg}
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