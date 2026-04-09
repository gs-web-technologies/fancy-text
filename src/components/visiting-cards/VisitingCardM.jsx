import React from 'react'

function VisitingCardM({ name, email, job_title, phone_no, organization, logo, website, slogan, hasStarted }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/logo.avif";

  if (!hasStarted) {
    name = "Your Name";
    email = "youremail@example.com";
    job_title = "Job Title";
    phone_no = "+91-229229929";
    organization = "Organization";
    website = "https://your_website.com";
    slogan = "Your slogan goes here";
  }

  const IconBox = ({ type, color = "#1a2540" }) => (
    <td style={{ textAlign: "right", verticalAlign: "middle" }}>
      <table style={{ borderCollapse: "collapse", textAlign:"right" }}>
        <tbody>
          {type === "phone" && (
            <tr><td style={{ width: "10px", height: "12px" }}>📞</td></tr>
          )}
          {type === "email" && (
            <tr><td style={{ width: "12px", height: "8px" }}>✉️</td></tr>
          )}
          {type === "website" && (
            <tr><td style={{ width: "12px", height: "12px" }}>🌐</td></tr>
          )}
          {type === "location" && (
            <tr><td style={{ width: "8px", height: "10px" }}>📍</td></tr>
          )}
        </tbody>
      </table>
    </td>
  );

  const ContactItem = ({ type, value, align = "left" }) => (
    <tr>
      <td style={{ paddingBottom: "5px" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <tbody>
            <tr>
              {align === "right" && (
                <td style={{ verticalAlign: "middle", paddingRight: "6px" }}>
                  <span style={{ fontSize: "9px", color: "#444444", fontFamily: "Georgia,serif", display: "block", textAlign: "right", letterSpacing: "0.2px" }}>{value}</span>
                </td>
              )}
              <IconBox type={type} />
              {align === "left" && (
                <td style={{ verticalAlign: "middle", paddingLeft: "6px" }}>
                  <span style={{ fontSize: "9px", color: "#444444", fontFamily: "Georgia,serif", display: "block", textAlign: "left", letterSpacing: "0.2px" }}>{value}</span>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );

  return (
    <table style={{
      width: "350px", // Reduced width
      height: "190px", // Reduced height
      borderCollapse: "collapse",
      tableLayout: "fixed",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 15px 40px rgba(0,0,0,0.18)",
      background: "#ffffff",
      display: "block",
    }}>
      <tbody>
        <tr>
          {/* ══ LEFT SECTION ══ */}
          <td style={{ width: "52%", background: "#ffffff", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "100%", height: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>
                {/* TOP: Navy diagonal block */}
                <tr>
                  <td style={{ padding: "0", verticalAlign: "top" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                      <tbody>
                        <tr><td style={{ height: "10px", background: "#1a2540", padding: "0" }}></td></tr>
                        {[[180, 15], [165, 15], [150, 15], [135, 15], [120, 15], [105, 15], [90, 15]].map(([nav], i) => (
                          <tr key={i}>
                            <td style={{ width: `${nav}px`, height: "6px", background: "#1a2540", padding: "0" }}></td>
                            <td style={{ height: "6px", background: "#ffffff", padding: "0" }}></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* GREY diagonal accent */}
                <tr>
                  <td style={{ padding: "0", verticalAlign: "top" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                      <tbody>
                        {[[140, 15], [125, 15], [110, 15], [95, 15], [80, 15], [65, 15]].map(([nav], i) => (
                          <tr key={i}>
                            <td style={{ width: `${nav}px`, height: "5px", background: "#d0d5e4", padding: "0" }}></td>
                            <td style={{ height: "5px", background: "#ffffff", padding: "0" }}></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* CONTACT */}
                <tr>
                  <td style={{ padding: "8px 12px 0 12px", verticalAlign: "top" }}>
                    <table style={{ borderCollapse: "collapse", width: "100%" }}>
                      <tbody>
                        {phone_no && <ContactItem type="phone" value={phone_no} align="left" />}
                        {email && <ContactItem type="email" value={email} align="left" />}
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr><td style={{ height: "100%" }}></td></tr>
              </tbody>
            </table>
          </td>

          {/* ══ RIGHT SECTION ══ */}
          <td style={{ width: "48%", background: "#ffffff", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "100%", height: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>
                {/* TOP: Identity */}
                <tr>
                  <td style={{ padding: "0", verticalAlign: "top" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                      <tbody>
                        <tr>
                          <td style={{ verticalAlign: "bottom", padding: "12px 10px 6px 10px" }}>
                            <table style={{ borderCollapse: "collapse" }}>
                              <tbody>
                                {name && <tr><td style={{ paddingBottom: "2px" }}>
                                  <span style={{ fontSize: "14px", fontWeight: "800", color: "#1a2540", fontFamily: "Georgia,serif", letterSpacing: "0.5px", textTransform: "uppercase", display: "block" }}>{name}</span>
                                </td></tr>}
                                {job_title && <tr><td>
                                  <span style={{ fontSize: "8px", color: "#888888", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase", display: "block" }}>{job_title}</span>
                                </td></tr>}
                                {(name && job_title) && (<tr><td style={{ paddingTop: "7px" }}>
                                  <table style={{ borderCollapse: "collapse" }}>
                                    <tbody>
                                      <tr>
                                        <td style={{ width: "20px", height: "2px", background: "#1a2540", borderRadius: "1px" }}></td>
                                        <td style={{ width: "3px" }}></td>
                                        <td style={{ width: "8px", height: "2px", background: "#d0d5e4", borderRadius: "1px" }}></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td></tr>)}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Spacing and Organization */}
                <tr><td style={{ height: "15px" }}></td></tr>
                <tr>
                  <td style={{ padding: "8px 12px 0 12px", verticalAlign: "top" }}>
                    <table style={{ borderCollapse: "collapse", width: "100%" }}>
                      <tbody>
                        {website && <ContactItem type="website" value={website} align="right" />}
                        {organization && <ContactItem type="location" value={organization} align="right" />}
                      </tbody>
                    </table>
                  </td>
                </tr>
                {slogan && <tr><td style={{ padding: "0 12px 8px 12px", textAlign: "right" }}>
                  <span style={{ fontSize: "7px", color: "#0a0a0a", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>{slogan}</span>
                </td></tr>}
                <tr><td style={{ height: "100%" }}></td></tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default VisitingCardM;