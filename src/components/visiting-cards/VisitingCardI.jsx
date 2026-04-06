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

  const topLeftRows = [
    [290, 0], [270, 20], [245, 45], [218, 72], [188, 102],
    [155, 135], [120, 170], [85, 205], [50, 240], [18, 272]
  ];
  const bottomLeftRows = [
    [18, 272], [50, 240], [85, 205], [120, 170], [155, 135],
    [188, 102], [218, 72], [245, 45], [270, 20], [290, 0]
  ];
  const topRightRows = [
    [380, 0], [350, 30], [310, 70], [270, 110], [228, 152],
    [185, 195], [140, 240], [95, 285], [50, 330], [15, 365]
  ];
  const bottomRightRows = [
    [15, 365], [50, 330], [95, 285], [140, 240], [185, 195],
    [228, 152], [270, 110], [310, 70], [350, 30], [380, 0]
  ];

  return (
    <table style={{
      width: "550px",
      height: "270px",
      borderCollapse: "collapse",
      tableLayout: "fixed",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
      wordBreak: "break-all"
    }}>
      <tbody><tr>

        {/* ══ LEFT DARK PANEL ══ */}
        <td style={{ width: "200px", height: "270px", verticalAlign: "top", padding: "0", background: "#1e1e2e" }}>
          <table style={{ width: "200px", height: "270px", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <tbody>

              {/* Top yellow diagonal */}
              <tr><td style={{ padding: "0", verticalAlign: "top" }}>
                <table style={{ width: "200px", borderCollapse: "collapse", tableLayout: "fixed" }}><tbody>
                  {topLeftRows.map(([y, d], i) => (
                    <tr key={i}>
                      {y > 0 && <td style={{ width: `${y}px`, height: i === 0 ? "9px" : "6px", background: "#f5c500", padding: "0" }}></td>}
                      {d > 0 && <td style={{ width: `${d}px`, height: i === 0 ? "9px" : "6px", background: "#1e1e2e", padding: "0" }}></td>}
                    </tr>
                  ))}
                </tbody></table>
              </td></tr>

              {/* Logo + Org + Slogan */}
              <tr>
                <td style={{ padding: "16px 28px 0 28px", verticalAlign: "middle" }}>
                  <table style={{ borderCollapse: "collapse" }}>
                    <tbody>
                      {/* Circle logo */}
                      <tr>
                        <td style={{ paddingBottom: "14px" }}>
                          <table style={{ borderCollapse: "collapse" }}>
                            <tbody>
                              <tr>
                                <td style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#f5c500", textAlign: "center", verticalAlign: "middle" }}>

                                  {imageSrc ? (
                                    <img
                                      src={imageSrc}
                                      width="52"
                                      height="52"
                                      style={{
                                        objectFit: "cover", objectPosition: "center", display: "inline-block", width: "52px",
                                        height: "52px",borderRadius: "50%",border:"5px solid #f5c500"
                                      }}
                                    />
                                  ) : (
                                    <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                      <tbody>
                                        <tr>
                                          <td style={{ width: "24px", height: "24px", borderRadius: "50%", border: "3px solid #1e1e2e", textAlign: "center", verticalAlign: "middle" }}>
                                            <table style={{ borderCollapse: "collapse", margin: "0 auto" }}><tbody>
                                              <tr><td style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1e1e2e" }}></td>
                                              </tr>
                                            </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      {organization && (<tr>
                        <td style={{ paddingBottom: "3px" }}>
                          <span style={{ fontSize: "14px", fontWeight: "800", color: "#ffffff", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>{organization}</span>
                        </td>
                      </tr>)}
                      {slogan && (<tr>
                        <td>
                          <span style={{ fontSize: "10px", color: "#aaaaaa", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>{slogan}</span>
                        </td>
                      </tr>)}
                    </tbody></table>
                </td></tr>

              <tr><td style={{ height: "100%" }}></td></tr>

            </tbody>
          </table>
        </td>

        {/* ══ MIDDLE WEDGE ══ */}
        <td style={{ width: "40px", verticalAlign: "top", padding: "0" }}>
          <table style={{ width: "50px", height: "270px", borderCollapse: "collapse", tableLayout: "fixed" }}><tbody>
            {["#f5c500", "#e0b400", "#ccaa00", "#b89a00", "#a08800", "#8a7500", "#706000", "#585000", "#404000",
              "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff",
              "#404000", "#585000", "#706000", "#8a7500", "#a08800", "#b89a00", "#ccaa00", "#e0b400", "#f5c500"
            ].map((bg, i) => (
              <tr key={i}><td style={{ height: i === 0 || i === 35 ? "12px" : "10px", background: bg, padding: "0" }}></td></tr>
            ))}
          </tbody></table>
        </td>

        {/* ══ RIGHT WHITE PANEL ══ */}
        <td style={{ width: "100%", background: "#ffffff", verticalAlign: "top", padding: "0 4px 0 0" }}>
          <table style={{ width: "100%", height: "270px", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <tbody>

              {/* Top dark diagonal */}
              <tr><td style={{ padding: "0", verticalAlign: "top" }}>
                <table style={{ width: "380px", borderCollapse: "collapse", tableLayout: "fixed" }}><tbody>
                  {topRightRows.map(([dark, white], i) => (
                    <tr key={i}>
                      {dark > 0 && <td style={{ width: `${dark}px`, height: i === 0 ? "8px" : "5px", background: "#1e1e2e", padding: "0" }}></td>}
                      {white > 0 && <td style={{ width: `${white}px`, height: i === 0 ? "8px" : "5px", background: "#ffffff", padding: "0" }}></td>}
                    </tr>
                  ))}
                </tbody></table>
              </td></tr>

              {/* Name + title */}
              <tr><td style={{ padding: "10px 2px 4px 0px", textAlign: "right" }}>
                <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}><tbody>
                  {name && (<tr>
                    <td style={{ padding: "0px 4px 3px 2px", textAlign: "right" }}>
                      <span style={{ fontSize: "22px", fontWeight: "800", color: "#1e1e2e", fontFamily: "Georgia,serif", letterSpacing: "1px" }}>
                        {name}
                      </span>
                    </td>
                  </tr>)}
                  {job_title && (<tr>
                    <td style={{ padding: "0px 4px 3px 2px",textAlign: "right" }}>
                      <span style={{ fontSize: "11px", color: "#f5c500", fontFamily: "Georgia,serif", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "700" }}>
                        {job_title}
                      </span>
                    </td>
                  </tr>)}
                </tbody></table>
              </td></tr>

              {/* Yellow divider */}
              {(name || job_title) && (<tr><td style={{ padding: "0px 4px 3px 2px",textAlign: "right" }}>
                <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}><tbody>
                  <tr><td style={{ width: "160px", height: "2px", background: "#f5c500" }}></td></tr>
                  <tr><td style={{ height: "3px" }}></td></tr>
                  <tr><td style={{ width: "100px", height: "1px", background: "#f5c500", opacity: "0.4" }}></td></tr>
                </tbody></table>
              </td></tr>)}

              {/* Contact 2-column grid */}
              <tr>
                <td style={{ width: "100%", textAlign: "right" }}>
                  <table style={{ borderCollapse: "collapse" }}><tbody><tr>
                    {/* Left col */}
                    <td style={{ width: "50%", verticalAlign: "top", padding: "0px 10px 0px 10px" }}>
                      <table style={{ borderCollapse: "collapse", width: "100%", padding: "7px" }}><tbody>
                        {[phone_no, email, website, organization].filter(Boolean).map((item, i, arr) => (
                          <tr key={i}>
                            <td style={{ paddingBottom: i < arr.length - 1 ? "4px" : "0" }}>
                              <table style={{ borderCollapse: "collapse", width: "100%" }}>
                                <tbody>
                                  <tr>
                                    <td style={{ textAlign: "right" }}>
                                      <span style={{ fontSize: "14px", color: "#444444", fontFamily: "Georgia,serif" }}>
                                        {item}
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        ))}
                      </tbody></table>
                    </td>
                  </tr></tbody></table>
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