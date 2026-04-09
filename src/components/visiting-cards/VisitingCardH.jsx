import React from 'react'

function VisitingCardH({ name, email, job_title, phone_no, organization, logo, website, slogan, hasStarted }) {
  const imageSrc = logo && logo.length != 0 ? logo : '';

  if (!hasStarted) {
    name = "Your name";
    email = "youremail@example.com";
    job_title = "Job Title";
    phone_no = "+91-229229929";
    organization = "Organization";
    website = "https://your_website.com";
    slogan = "Your slogan goes here";
  }

  // Helper: stacked diagonal rows for top-left orange triangle
  const topLeftRows = [
    [220, 120], [200, 140], [180, 160], [155, 185],
    [130, 210], [100, 240], [70, 270], [40, 300], [15, 325]
  ];

  // Helper: stacked diagonal rows for bottom-right orange triangle (left panel)
  const bottomRightRowsLeft = [
    [325, 15], [300, 40], [270, 70], [240, 100],
    [210, 130], [185, 155], [160, 180], [140, 200], [120, 220]
  ];

  // Helper: stacked diagonal rows for top-right orange triangle (right panel)
  const topRightRows = [
    [180, 200], [210, 170], [235, 145], [255, 125],
    [275, 105], [295, 85], [315, 65], [335, 45], [355, 25]
  ];

  // Helper: stacked diagonal rows for bottom-right orange triangle (right panel)
  const bottomRightRowsRight = [
    [355, 25], [320, 60], [285, 95], [250, 130],
    [210, 170], [170, 210]
  ];

  return (
    <table
      className="visiting-card"
      style={{
        width: "350px", // Reduced width
        height: "190px", // Reduced height
        borderCollapse: "collapse",
        tableLayout: "fixed",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
        wordBreak: "break-all"
      }}
    >
      <tbody>
        <tr>

          {/* ── LEFT WHITE PANEL ── */}
          <td style={{ width: "165px", verticalAlign: "top", padding: "0", background: "#ffffff" }}>
            <table style={{ width: "165px", height: "190px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>

                {/* Top-left orange diagonal */}
                <tr>
                  <td style={{ padding: "0", verticalAlign: "top" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                      <tbody>
                        {topLeftRows.slice(0, 6).map(([orange, white], i) => (
                          <tr key={i}>
                            <td style={{ width: `${orange / 2}px`, height: "4px", background: "#e8440a", padding: "0" }}></td>
                            <td style={{ width: `${white / 2}px`, height: "4px", background: "#ffffff", padding: "0" }}></td>
                          </tr>
                        ))}
                        <tr><td colSpan={2} style={{ height: "5px", background: "#ffffff", padding: "0" }}></td></tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Center: Diamond logo + org + slogan */}
                <tr>
                  <td style={{ verticalAlign: "middle", textAlign: "center", padding: "5px 10px 0 10px" }}>
                    <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: "center", paddingBottom: "8px" }}>
                            <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                              <tbody>
                                <tr>
                                  <td style={{ width: "35px", height: "35px", border: "2px solid #e8440a", borderRadius: "6px", textAlign: "center", verticalAlign: "middle", transform: imageSrc ? "" : "rotate(45deg)" }}>
                                    {imageSrc ? (
                                      <img
                                        src={imageSrc}
                                        width="35"
                                        height="35"
                                        style={{ objectFit: "cover", display: "block" }}
                                      />
                                    ) : (
                                      <div style={{ width: "12px", height: "12px", border: "1.5px solid #e8440a", borderRadius: "2px", margin: "0 auto" }}></div>
                                    )}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        {organization && (
                          <tr>
                            <td style={{ textAlign: "center", paddingBottom: "1px" }}>
                              <span style={{ fontSize: "11px", fontWeight: "800", color: "#1a1a2e", fontFamily: "Georgia,serif", letterSpacing: "2px", textTransform: "uppercase" }}>
                                {organization}
                              </span>
                            </td>
                          </tr>
                        )}
                        {slogan && (
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              <span style={{ fontSize: "7px", color: "#999999", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>
                                {slogan}
                              </span>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr><td style={{ height: "100%" }}></td></tr>
                {/* Bottom-right orange diagonal */}
                <tr>
                  <td style={{ padding: "0", verticalAlign: "bottom" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                      <tbody>
                        <tr><td colSpan={2} style={{ height: "4px", background: "#ffffff", padding: "0" }}></td></tr>
                        {bottomRightRowsLeft.slice(0, 6).map(([white, orange], i) => (
                          <tr key={i}>
                            <td style={{ width: `${white / 2}px`, height: "4px", background: "#ffffff", padding: "0" }}></td>
                            <td style={{ width: `${orange / 2}px`, height: "4px", background: "#e8440a", padding: "0" }}></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>

              </tbody>
            </table>
          </td>

          {/* ── RIGHT DARK NAVY PANEL ── */}
          <td style={{ width: "185px", background: "#1a2244", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "100%", height: "190px", borderCollapse: "collapse" }}>
              <tbody>

                {/* Top-right orange diagonal */}
                <tr>
                  <td style={{ padding: "0", verticalAlign: "top" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                      <tbody>
                        {topRightRows.slice(0, 6).map(([navy, orange], i) => (
                          <tr key={i}>
                            <td style={{ width: `${navy / 2}px`, height: "4px", background: "#1a2244", padding: "0" }}></td>
                            <td style={{ width: "100%", height: "4px", background: "#e8440a", padding: "0" }}></td>
                          </tr>
                        ))}
                        <tr><td colSpan={2} style={{ height: "5px", background: "#1a2244", padding: "0" }}></td></tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Name */}
                {name && (
                  <tr>
                    <td style={{ padding: "10px 15px 2px 15px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "800", color: "#ffffff", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase", display: "block" }}>
                        {name}
                      </span>
                    </td>
                  </tr>
                )}

                {/* Job title */}
                {job_title && (
                  <tr>
                    <td style={{ padding: "0 15px 8px 15px" }}>
                      <span style={{ fontSize: "8px", color: "#e8440a", fontFamily: "Georgia,serif", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "600", display: "block" }}>
                        {job_title}
                      </span>
                    </td>
                  </tr>
                )}

                {/* Orange divider */}
                {(name || job_title) && (
                  <tr>
                    <td style={{ padding: "0 15px 10px 15px" }}>
                      <table style={{ borderCollapse: "collapse" }}>
                        <tbody>
                          <tr><td style={{ width: "30px", height: "1.5px", background: "#e8440a" }}></td></tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}

                {/* Contact rows */}
                <tr>
                  <td style={{ padding: "0 15px" }}>
                    <table style={{ borderCollapse: "collapse" }}>
                      <tbody>
                        {phone_no && (
                          <tr>
                            <td style={{ paddingBottom: "4px" }}>
                              <table style={{ borderCollapse: "collapse" }}><tbody><tr>
                                <td style={{ verticalAlign: "middle" }}><div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#e8440a" }}></div></td>
                                <td style={{ width: "8px" }}></td>
                                <td><span style={{ fontSize: "9px", color: "#cccccc", fontFamily: "Georgia,serif" }}>{phone_no}</span></td>
                              </tr></tbody></table>
                            </td>
                          </tr>
                        )}
                        {email && (
                          <tr>
                            <td style={{ paddingBottom: "4px" }}>
                              <table style={{ borderCollapse: "collapse" }}><tbody><tr>
                                <td style={{ verticalAlign: "middle" }}><div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#e8440a" }}></div></td>
                                <td style={{ width: "8px" }}></td>
                                <td><span style={{ fontSize: "9px", color: "#cccccc", fontFamily: "Georgia,serif" }}>{email}</span></td>
                              </tr></tbody></table>
                            </td>
                          </tr>
                        )}
                        {website && (
                          <tr>
                            <td>
                              <table style={{ borderCollapse: "collapse" }}><tbody><tr>
                                <td style={{ verticalAlign: "middle" }}><div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#e8440a" }}></div></td>
                                <td style={{ width: "8px" }}></td>
                                <td><span style={{ fontSize: "9px", color: "#cccccc", fontFamily: "Georgia,serif" }}>{website}</span></td>
                              </tr></tbody></table>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr><td style={{ height: "100%" }}></td></tr>

                {/* Bottom-right orange diagonal */}
                <tr>
                  <td style={{ padding: "0", verticalAlign: "bottom" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                      <tbody>
                        <tr><td colSpan={2} style={{ height: "5px", background: "#1a2244", padding: "0" }}></td></tr>
                        {bottomRightRowsRight.slice(0, 4).map(([navy, orange], i) => (
                          <tr key={i}>
                            <td style={{ width: `${navy / 2}px`, height: "4px", background: "#1a2244", padding: "0" }}></td>
                            <td style={{ width: "100%", height: "4px", background: "#e8440a", padding: "0" }}></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default VisitingCardH


