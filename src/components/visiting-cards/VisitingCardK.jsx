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

  // Scaled diagonal rows for 350x190 dimensions
  const topRightDiagRows = [[220, 0], [195, 25], [170, 50], [145, 75], [120, 100], [95, 125], [60, 160]];

  const ContactRow = ({ label, value, iconType }) => (
    <tr>
      <td style={{ paddingBottom: "5px" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}><tbody><tr>
          <td style={{ verticalAlign: "top" }}>
            <table style={{ borderCollapse: "collapse" }}><tbody>
              <tr><td style={{ paddingBottom: "1px" }}>
                <span style={{ fontSize: "7px", fontWeight: "700", color: "#28bebe", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>{label}: </span>
                <span style={{ fontSize: "10px", color: "#555555", fontFamily: "Georgia,serif" }}>{value}</span>
              </td></tr>
            </tbody></table>
          </td>
          <td style={{ textAlign: "right", verticalAlign: "middle", width: "28px" }}>
            <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}><tbody><tr>
              <td style={{
                width: "18px", height: "18px", borderRadius: "50%",
                background: iconType === "address" || iconType === "email" ? "#28bebe" : "black",
                textAlign: "center", verticalAlign: "middle"
              }}>
                <div style={{ fontSize: "8px", color: "white", lineHeight: "1" }}>•</div>
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
        width: "350px", // Reduced width
        height: "190px", // Reduced height
        borderCollapse: "collapse",
        tableLayout: "fixed",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
        wordBreak: "normal",
        overflowWrap: "break-word",
        backgroundColor: "white"
      }}
    >
      <tbody>
        <tr>

          {/* ══ LEFT TEAL PANEL ══ */}
          <td style={{ width: "130px", verticalAlign: "top", padding: "0", background: "#28bebe" }}>
            <table style={{ width: "130px", height: "190px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "10px 15px", verticalAlign: "middle", textAlign: "start" }}>
                    <table style={{ borderCollapse: "collapse" }}>
                      <tbody>
                        <tr>
                          <td style={{ paddingBottom: "8px" }}>
                            {imageSrc ? (
                                <img
                                  src={imageSrc}
                                  width="45"
                                  height="45"
                                  style={{ objectFit: "cover", borderRadius: "4px", display: "block" }}
                                />
                            ) : (
                              <div style={{ width: "35px", height: "35px", background: "black", borderRadius: "6px", transform: "rotate(15deg)", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: "15px", height: "15px", border: "2px solid white", transform: "rotate(-15deg)" }}></div>
                              </div>
                            )}
                          </td>
                        </tr>
                        {organization && (
                          <tr>
                            <td style={{ paddingBottom: "2px" }}>
                              <span style={{ fontSize: "10px", fontWeight: "800", color: "#ffffff", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>{organization}</span>
                            </td>
                          </tr>
                        )}
                        {slogan && (
                          <tr><td><span style={{ fontSize: "8px", color: "#e2e5eb", fontFamily: "Georgia,serif" }}>{slogan}</span></td></tr>
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>

          {/* ══ RIGHT WHITE PANEL ══ */}
          <td style={{ width: "220px", height: "190px", background: "#ffffff", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "220px", height: "190px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>
                {/* Top teal diagonal header */}
                <tr><td style={{ padding: "0", verticalAlign: "top" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}><tbody>
                    {topRightDiagRows.map(([nav, wh], i) => (
                      <tr key={i}>
                        {nav > 0 && <td style={{ width: `${nav}px`, height: i === 0 ? "5px" : "3px", background: "#28bebe", padding: "0" }}></td>}
                        {wh > 0 && <td style={{ width: `${wh}px`, height: i === 0 ? "5px" : "3px", background: "#ffffff", padding: "0" }}></td>}
                      </tr>
                    ))}
                  </tbody></table>
                </td></tr>

                {/* Name + title */}
                <tr><td style={{ padding: "5px 15px 0 10px", textAlign: "right" }}>
                  {name && (
                    <div style={{ fontSize: "16px", fontWeight: "800", color: "#28bebe", fontFamily: "Georgia,serif", textTransform: "uppercase" }}>{name}</div>
                  )}
                  {job_title && (
                    <div style={{ fontSize: "8px", color: "black", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase", fontWeight: "600" }}>{job_title}</div>
                  )}
                </td></tr>

                {/* Divider */}
                <tr><td style={{ padding: "5px 15px 8px 10px", textAlign: "right" }}>
                  <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}><tbody>
                    <tr><td style={{ width: "100px", height: "1.5px", background: "#28bebe" }}></td></tr>
                  </tbody></table>
                </td></tr>

                {/* Contact rows */}
                <tr><td style={{ padding: "0 10px 0 10px" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}><tbody>
                    {phone_no && <ContactRow label="P" value={phone_no} iconType="phone" />}
                    {website && <ContactRow label="W" value={website} iconType="website" />}
                    {email && <ContactRow label="E" value={email} iconType="email" />}
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