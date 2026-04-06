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
        width: "550px",
        height: "260px",
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
          <td style={{ width: "260px", verticalAlign: "top", padding: "0", background: "#ffffff" }}>
            <table style={{ width: "260px", height: "270px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>

                {/* Top-left orange diagonal */}
                <tr>
                  <td style={{ padding: "0", verticalAlign: "top" }}>
                    <table style={{ width: "340px", borderCollapse: "collapse", tableLayout: "fixed" }}>
                      <tbody>
                        {topLeftRows.map(([orange, white], i) => (
                          <tr key={i}>
                            <td style={{ width: `${orange}px`, height: "5px", background: "#e8440a", padding: "0" }}></td>
                            <td style={{ width: `${white}px`, height: "5px", background: "#ffffff", padding: "0" }}></td>
                          </tr>
                        ))}
                        <tr><td colSpan={2} style={{ height: "10px", background: "#ffffff", padding: "0" }}></td></tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Center: Diamond logo + org + slogan */}
                <tr>
                  <td style={{ verticalAlign: "middle", textAlign: "center", padding: "10px 30px 0 30px" }}>
                    <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                      <tbody>
                        {/* Diamond icon */}
                        <tr>
                          <td style={{ textAlign: "center", paddingBottom: "14px" }}>
                            <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                              <tbody>
                                <tr>
                                  <td style={{ width: "52px", height: "52px", border: "3px solid #e8440a", borderRadius: "10px", textAlign: "center", verticalAlign: "middle", transform: imageSrc ? "" : "rotate(45deg)" }}>
                                    <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                      <tbody>
                                        <tr>
                                          <td>
                                            {imageSrc ? (
                                              <img
                                                src={imageSrc}
                                                width="62"
                                                height="62"
                                                style={{
                                                  objectFit: "cover", objectPosition: "center", display: "inline-block", width: "62px",
                                                  height: "62px",
                                                }}
                                              />
                                            ) : (
                                              <div style={{ width: "20px", height: "20px", border: "2px solid #e8440a", borderRadius: "4px" }}></div>
                                            )}
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
                        {/* Org name */}
                        {organization && (
                          <tr>
                            <td style={{ textAlign: "center", paddingBottom: "2px" }}>
                              <span style={{ fontSize: "17px", fontWeight: "800", color: "#1a1a2e", fontFamily: "Georgia,serif", letterSpacing: "4px", textTransform: "uppercase", wordBreak: "normal",overflowWrap:"break-word" }}>
                                {organization}
                              </span>
                            </td>
                          </tr>
                        )}
                        {/* Slogan */}
                        {slogan && (
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              <span style={{ fontSize: "10px", color: "#999999", fontFamily: "Georgia,serif", letterSpacing: "3px", textTransform: "uppercase" }}>
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
                        <tr><td colSpan={2} style={{ height: "5px", background: "#ffffff", padding: "0" }}></td></tr>
                        {bottomRightRowsLeft.map(([white, orange], i) => (
                          <tr key={i}>
                            <td style={{ width: `${white}px`, height: "5px", background: "#ffffff", padding: "0" }}></td>
                            <td style={{ width: `${orange}px`, height: "5px", background: "#e8440a", padding: "0" }}></td>
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
          <td style={{ width: "100%", background: "#1a2244", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "100%", height: "270px", borderCollapse: "collapse" }}>
              <tbody>

                {/* Top-right orange diagonal */}
                <tr>
                  <td style={{ padding: "0", verticalAlign: "top" }}>
                    <table style={{ width: "290px", borderCollapse: "collapse", tableLayout: "fixed" }}>
                      <tbody>
                        {topRightRows.map(([navy, orange], i) => (
                          <tr key={i}>
                            <td style={{ width: `${navy}px`, height: "5px", background: "#1a2244", padding: "0" }}></td>
                            <td style={{ width: `${260 - navy}px`, height: "5px", background: "#e8440a", padding: "0" }}></td>
                          </tr>
                        ))}
                        <tr><td colSpan={2} style={{ height: "10px", background: "#1a2244", padding: "0" }}></td></tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Name */}
                {name && (
                  <tr>
                    <td style={{ padding: "14px 25px 3px 25px" }}>
                      <span style={{ fontSize: "22px", fontWeight: "800", color: "#ffffff", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase", display: "block" }}>
                        {name}
                      </span>
                    </td>
                  </tr>
                )}

                {/* Job title */}
                {job_title && (
                  <tr>
                    <td style={{ padding: "0 36px 14px 36px" }}>
                      <span style={{ fontSize: "11px", color: "#e8440a", fontFamily: "Georgia,serif", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600", display: "block" }}>
                        {job_title}
                      </span>
                    </td>
                  </tr>
                )}

                {/* Orange divider */}
                {(name || job_title) && (
                  <tr>
                    <td style={{ padding: "0 36px 16px 36px" }}>
                      <table style={{ borderCollapse: "collapse" }}>
                        <tbody>
                          <tr><td style={{ width: "50px", height: "2px", background: "#e8440a" }}></td></tr>
                          <tr><td style={{ height: "3px" }}></td></tr>
                          <tr><td style={{ width: "32px", height: "2px", background: "#e8440a", opacity: "0.5" }}></td></tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}

                {/* Contact rows */}
                <tr style={{ padding: "4px" }}>
                  <td style={{ padding: "0 36px" }}>
                    <table style={{ borderCollapse: "collapse" }}>
                      <tbody>
                        {phone_no && (
                          <tr>
                            <td style={{ paddingBottom: "6px" }}>
                              <table style={{ borderCollapse: "collapse" }}><tbody><tr>
                                <td style={{ verticalAlign: "middle" }}>
                                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#e8440a", verticalAlign: "middle" }}></div>
                                </td>
                                <td style={{ width: "10px" }}></td>
                                <td><span style={{ fontSize: "13px", color: "#cccccc", fontFamily: "Georgia,serif", letterSpacing: "0.5px" }}>{phone_no}</span></td>
                              </tr></tbody></table>
                            </td>
                          </tr>
                        )}
                        {email && (
                          <tr>
                            <td style={{ paddingBottom: "6px" }}>
                              <table style={{ borderCollapse: "collapse" }}><tbody><tr>
                                <td style={{ verticalAlign: "middle" }}>
                                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#e8440a", verticalAlign: "middle" }}></div>
                                </td>
                                <td style={{ width: "10px" }}></td>
                                <td><span style={{ fontSize: "13px", color: "#cccccc", fontFamily: "Georgia,serif", letterSpacing: "0.5px" }}>{email}</span></td>
                              </tr></tbody></table>
                            </td>
                          </tr>
                        )}
                        {website && (
                          <tr>
                            <td>
                              <table style={{ borderCollapse: "collapse" }}><tbody><tr>
                                <td style={{ verticalAlign: "middle" }}>
                                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#e8440a", verticalAlign: "middle" }}></div>
                                </td>
                                <td style={{ width: "10px" }}></td>
                                <td><span style={{ fontSize: "13px", color: "#cccccc", fontFamily: "Georgia,serif", letterSpacing: "0.5px" }}>{website}</span></td>
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
                    <table style={{ width: "380px", borderCollapse: "collapse", tableLayout: "fixed" }}>
                      <tbody>
                        <tr><td colSpan={2} style={{ height: "8px", background: "#1a2244", padding: "0" }}></td></tr>
                        {bottomRightRowsRight.map(([navy, orange], i) => (
                          <tr key={i}>
                            <td style={{ width: `${navy}px`, height: "5px", background: "#1a2244", padding: "0" }}></td>
                            <td style={{ width: `${260 - navy}px`, height: "5px", background: "#e8440a", padding: "0" }}></td>
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


