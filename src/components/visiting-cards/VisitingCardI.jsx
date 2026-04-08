import React from 'react'

function VisitingCardI({ name, email, job_title, phone_no, organization, logo, website, slogan, hasStarted }) {
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

  // Scaled diagonal rows for smaller dimensions
  const topLeftRows = [
    [150, 0], [130, 20], [110, 40], [90, 60], [70, 80], [40, 110]
  ];
  const topRightRows = [
    [220, 0], [190, 30], [160, 60], [130, 90], [100, 120], [60, 160]
  ];

  return (
    <table style={{
      width: "350px", // Reduced width
      height: "190px", // Reduced height
      borderCollapse: "collapse",
      tableLayout: "fixed",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
      wordBreak: "break-all"
    }}>
      <tbody><tr>

        {/* ══ LEFT DARK PANEL ══ */}
        <td style={{ width: "130px", height: "190px", verticalAlign: "top", padding: "0", background: "#1e1e2e" }}>
          <table style={{ width: "130px", height: "190px", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <tbody>

              {/* Top yellow diagonal */}
              <tr><td style={{ padding: "0", verticalAlign: "top" }}>
                <table style={{ width: "130px", borderCollapse: "collapse", tableLayout: "fixed" }}><tbody>
                  {topLeftRows.map(([y, d], i) => (
                    <tr key={i}>
                      {y > 0 && <td style={{ width: `${y}px`, height: i === 0 ? "6px" : "4px", background: "#f5c500", padding: "0" }}></td>}
                      {d > 0 && <td style={{ width: `${d}px`, height: i === 0 ? "6px" : "4px", background: "#1e1e2e", padding: "0" }}></td>}
                    </tr>
                  ))}
                </tbody></table>
              </td></tr>

              {/* Logo + Org + Slogan */}
              <tr>
                <td style={{ padding: "10px 15px 0 15px", verticalAlign: "middle" }}>
                  <table style={{ borderCollapse: "collapse" }}>
                    <tbody>
                      {/* Circle logo */}
                      <tr>
                        <td style={{ paddingBottom: "8px" }}>
                          <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#f5c500", textAlign: "center", display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            {imageSrc ? (
                              <img
                                src={imageSrc}
                                width="38"
                                height="38"
                                style={{ objectFit: "cover", borderRadius: "50%", border: "3px solid #f5c500" }}
                              />
                            ) : (
                              <div style={{ width: "14px", height: "14px", borderRadius: "50%", border: "2px solid #1e1e2e" }}></div>
                            )}
                          </div>
                        </td>
                      </tr>
                      {organization && (<tr>
                        <td style={{ paddingBottom: "2px" }}>
                          <span style={{ fontSize: "11px", fontWeight: "800", color: "#ffffff", fontFamily: "Georgia,serif", letterSpacing: "0.5px", textTransform: "uppercase", wordBreak: "normal" }}>{organization}</span>
                        </td>
                      </tr>)}
                      {slogan && (<tr>
                        <td>
                          <span style={{ fontSize: "7px", color: "#aaaaaa", fontFamily: "Georgia,serif", letterSpacing: "0.5px", textTransform: "uppercase" }}>{slogan}</span>
                        </td>
                      </tr>)}
                    </tbody></table>
                </td></tr>

              <tr><td style={{ height: "100%" }}></td></tr>

            </tbody>
          </table>
        </td>

        {/* ══ MIDDLE WEDGE ══ */}
        <td style={{ width: "25px", verticalAlign: "top", padding: "0" }}>
          <table style={{ width: "25px", height: "190px", borderCollapse: "collapse", tableLayout: "fixed" }}><tbody>
            {["#f5c500", "#e0b400", "#ccaa00", "#ffffff", "#ffffff", "#ffffff", "#ccaa00", "#e0b400", "#f5c500"
            ].map((bg, i) => (
              <tr key={i}><td style={{ height: "22px", background: bg, padding: "0" }}></td></tr>
            ))}
          </tbody></table>
        </td>

        {/* ══ RIGHT WHITE PANEL ══ */}
        <td style={{ width: "100%", background: "#ffffff", verticalAlign: "top", padding: "0 4px 0 0" }}>
          <table style={{ width: "100%", height: "190px", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <tbody>

              {/* Top dark diagonal */}
              <tr><td style={{ padding: "0", verticalAlign: "top" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}><tbody>
                  {topRightRows.map(([dark, white], i) => (
                    <tr key={i}>
                      {dark > 0 && <td style={{ width: `${dark}px`, height: i === 0 ? "6px" : "4px", background: "#1e1e2e", padding: "0" }}></td>}
                      {white > 0 && <td style={{ width: `${white}px`, height: i === 0 ? "6px" : "4px", background: "#ffffff", padding: "0" }}></td>}
                    </tr>
                  ))}
                </tbody></table>
              </td></tr>

              {/* Name + title */}
              <tr><td style={{ padding: "8px 10px 4px 0px", textAlign: "right" }}>
                {name && (
                  <div style={{ fontSize: "16px", fontWeight: "800", color: "#1e1e2e", fontFamily: "Georgia,serif", marginBottom: "2px" }}>
                    {name}
                  </div>
                )}
                {job_title && (
                  <div style={{ fontSize: "9px", color: "#f5c500", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase", fontWeight: "700" }}>
                    {job_title}
                  </div>
                )}
              </td></tr>

              {/* Yellow divider */}
              {(name || job_title) && (<tr><td style={{ padding: "0px 10px 8px 0px", textAlign: "right" }}>
                <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}><tbody>
                  <tr><td style={{ width: "100px", height: "1.5px", background: "#f5c500" }}></td></tr>
                </tbody></table>
              </td></tr>)}

              {/* Contact rows */}
              <tr>
                <td style={{ padding: "0 10px", textAlign: "right" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}><tbody>
                    {[phone_no, email, website].filter(Boolean).map((item, i) => (
                      <tr key={i}>
                        <td style={{ paddingBottom: "3px", textAlign: "right" }}>
                          <span style={{ fontSize: "10px", color: "#444444", fontFamily: "Georgia,serif" }}>
                            {item}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody></table>
                </td>
              </tr>

              <tr><td style={{ height: "100%" }}></td></tr>
            </tbody>
          </table>
        </td>

      </tr></tbody>
    </table >
  );
}

export default VisitingCardI