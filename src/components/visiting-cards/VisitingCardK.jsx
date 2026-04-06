import React from 'react'

function VisitingCardK({ name, email, job_title, phone_no, organization, logo, website, slogan, hasStarted }) {
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

  const topLeftDiagRows = [[180, 105], [198, 87], [214, 71], [228, 57], [241, 44], [253, 32], [263, 22], [272, 13]];
  const bottomLeftDiagRows = [[272, 13], [263, 22], [253, 32], [241, 44], [228, 57], [214, 71], [198, 87], [180, 105]];
  const topRightDiagRows = [[409, 0], [370, 39], [330, 79], [288, 121], [244, 165], [198, 211], [150, 259], [100, 309], [50, 359], [12, 397]];
  const bottomRightDiagRows = [[12, 397], [50, 359], [100, 309], [150, 259], [198, 211], [244, 165], [288, 121], [330, 79], [370, 39], [409, 0]];

  const ContactRow = ({ label, value, iconType }) => (
    <tr>
      <td style={{ paddingBottom: "8px" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}><tbody><tr>
          <td style={{ verticalAlign: "top" }}>
            <table style={{ borderCollapse: "collapse" }}><tbody>
              <tr><td style={{ paddingBottom: "1px" }}>
                <span style={{ fontSize: "9px", fontWeight: "700", color: "#28bebe", fontFamily: "Georgia,serif", letterSpacing: "2px", textTransform: "uppercase" }}>{label}: </span>
                <span style={{ fontSize: "13px", color: "#555555", fontFamily: "Georgia,serif" }}>{value}</span>
              </td></tr>
            </tbody></table>
          </td>
          <td style={{ textAlign: "right", verticalAlign: "middle", width: "36px" }}>
            <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}><tbody><tr>
              <td style={{
                width: "26px", height: "26px", borderRadius: "50%",
                background: iconType === "address" || iconType === "email" ? "#28bebe" : "black",
                textAlign: "center", verticalAlign: "middle"
              }}>
                <table style={{ borderCollapse: "collapse", margin: "0 auto" }}><tbody>
                  {iconType === "phone" && <tr><td style={{ width: "12px", height: "12px", borderRadius: "50%", border: "2px solid #ffffff" }}></td></tr>}
                  {iconType === "website" && <tr>
                    <td style={{ width: "4px", height: "10px", background: "#ffffff", borderRadius: "2px" }}></td>
                    <td style={{ width: "3px" }}></td>
                    <td style={{ width: "4px", height: "10px", background: "#ffffff", borderRadius: "2px" }}></td>
                  </tr>}
                  {iconType === "email" && <tr><td style={{ width: "14px", height: "10px", border: "2px solid #ffffff", borderRadius: "2px" }}></td></tr>}
                  {iconType === "address" && <tr><td style={{ width: "10px", height: "10px", borderRadius: "50% 50% 50% 0", border: "2px solid #ffffff" }}></td></tr>}
                </tbody></table>
              </td>
            </tr></tbody></table>
          </td>
        </tr></tbody></table>
      </td>
    </tr>
  );

  return (
    <table
      style={{
        width: "520px",
        height: "270px",
        borderCollapse: "collapse",
        tableLayout: "fixed",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
        wordBreak: "normal",
        overflowWrap: "break-word"
      }}
    >
      <tbody>
        <tr>

          {/* ══ LEFT NAVY PANEL ══ */}
          <td style={{ width: "200px", verticalAlign: "top", padding: "0", background: "#28bebe" }}>
            <table style={{ width: "200px", height: "270px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>
                {/* Logo + org + slogan */}
                <tr>
                  <td style={{ padding: "10px 26px 0 26px", verticalAlign: "middle", textAlign: "start", height: "100%" }}>
                  <table style={{ borderCollapse: "collapse" }}>
                    <tbody>
                      <tr>
                        <td style={{ paddingBottom: "10px" }}>
                          <table style={{ borderCollapse: "collapse" }}>
                            <tbody>
                              <tr>
                                {imageSrc ? (
                                  <td>
                                    <img
                                      src={imageSrc}
                                      width="62"
                                      height="62"
                                      style={{
                                        objectFit: "cover", objectPosition: "center", display: "inline-block", width: "62px",
                                        height: "62px",
                                      }}
                                    />
                                  </td>
                                ) : (
                                  <td style={{ width: "52px", height: "52px", background: "black", borderRadius: "10px", textAlign: "center", verticalAlign: "middle", transform: "rotate(15deg)" }}>
                                    <table style={{ borderCollapse: "collapse", margin: "0 auto", transform: "rotate(-15deg)" }}>
                                      <tbody>
                                        <tr>
                                          <td style={{ width: "22px", height: "22px", border: "3px solid #ffffff", borderRadius: "5px", textAlign: "center", verticalAlign: "middle" }}>
                                            <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                              <tbody>
                                                <tr>
                                                  <td style={{ width: "8px", height: "8px", background: "#ffffff", borderRadius: "2px" }}>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                )}
                              </tr></tbody></table>
                        </td></tr>
                      {organization &&
                        (<tr>
                          <td style={{ paddingBottom: "2px" }}>
                            <span style={{ fontSize: "14px", fontWeight: "800", color: "#ffffff", fontFamily: "Georgia,serif", letterSpacing: "3px", textTransform: "uppercase" }}>{organization}</span>
                          </td>
                        </tr>)
                      }
                      {slogan &&
                        (<tr><td><span style={{ fontSize: "14px", color: "#e2e5eb", fontFamily: "Georgia,serif", letterSpacing: "1px" }}>{slogan}</span></td></tr>)
                      }
                    </tbody></table>
                </td></tr>
              </tbody>
            </table>
          </td>

          {/* ══ RIGHT WHITE PANEL ══ */}
          <td style={{ width: "409px", height: "270px", background: "#ffffff", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "409px", height: "270px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>

                {/* Top navy diagonal */}
                <tr><td style={{ padding: "0", verticalAlign: "top" }}>
                  <table style={{ width: "409px", borderCollapse: "collapse", tableLayout: "fixed" }}><tbody>
                    {topRightDiagRows.map(([nav, wh], i) => (
                      <tr key={i}>
                        {nav > 0 && <td style={{ width: `${nav}px`, height: i === 0 ? "8px" : "5px", background: "#28bebe", padding: "0" }}></td>}
                        {wh > 0 && <td style={{ width: `${wh}px`, height: i === 0 ? "8px" : "5px", background: "#ffffff", padding: "0" }}></td>}
                      </tr>
                    ))}
                  </tbody></table>
                </td></tr>

                {/* Name + title */}
                <tr><td style={{ padding: "8px 32px 0 28px", textAlign: "right" }}>
                  <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                    <tbody>
                      {name &&
                        (<tr>
                          <td style={{ textAlign: "right", paddingBottom: "4px" }}>
                            <span style={{ fontSize: "22px", fontWeight: "800", color: "#28bebe", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>{name}
                            </span>
                          </td>
                        </tr>)}
                      {job_title &&
                        (<tr>
                          <td style={{ textAlign: "right" }}>
                            <span style={{ fontSize: "11px", color: "black", fontFamily: "Georgia,serif", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "600" }}>
                              {job_title}
                            </span>
                          </td>
                        </tr>)}
                    </tbody></table>
                </td></tr>

                {/* Divider */}
                {(name || job_title) && (<tr><td style={{ padding: "8px 32px 12px 28px", textAlign: "right" }}>
                  <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}><tbody>
                    <tr><td style={{ width: "180px", height: "2px", background: "#28bebe" }}></td></tr>
                    <tr><td style={{ height: "3px" }}></td></tr>
                    <tr><td style={{ width: "120px", height: "1px", background: "black", opacity: "0.5" }}></td></tr>
                  </tbody></table>
                </td></tr>)}

                {/* Contact rows */}
                <tr><td style={{ padding: "0 12px 0 18px" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}><tbody>
                    {phone_no && <ContactRow label="Phone" value={phone_no} iconType="phone" />}
                    {website && <ContactRow label="Website" value={website} iconType="website" />}
                    {email && <ContactRow label="Email" value={email} iconType="email" />}
                  </tbody></table>
                </td></tr>

                <tr><td style={{ height: "100%" }}></td></tr>
              </tbody>
            </table>
          </td>

        </tr></tbody>
    </table >
  );
}


export default VisitingCardK