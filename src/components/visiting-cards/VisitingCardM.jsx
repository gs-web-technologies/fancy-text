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

  // Diagonal row data: [navyWidth, totalWidth]
  const diagRowsTop = [
    [270, 520], [248, 520], [224, 520], [200, 520],
    [175, 520], [150, 520], [124, 520], [98, 520],
  ];
  const diagRowsGrey = [
    [200, 520], [178, 520], [156, 520], [134, 520],
    [112, 520], [90, 520],
  ];

  const IconBox = ({ type, color = "#1a2540" }) => (
    <td style={{textAlign: "center", verticalAlign: "middle" }}>
      <table style={{ borderCollapse: "collapse", margin: "0 auto" }}><tbody>
        {type === "phone" && (
          <tr>
            <td style={{ width: "12px", height: "14px" }}>
              📞
            </td>
          </tr>
        )}
        {type === "email" && (
          <tr>
            <td style={{ width: "14px", height: "10px"}}>
              ✉️
            </td>
          </tr>
        )}
        {type === "website" && (
          <tr>
            <td style={{ width: "14px", height: "14px"}}>
              🌐
            </td>
          </tr>
        )}
        {type === "location" && (
          <tr>
            <td style={{ width: "10px", height: "12px"}}>
              📍
            </td>
          </tr>
        )}
      </tbody></table>
    </td>
  );

  const ContactItem = ({ type, value, align = "left" }) => (
    <tr>
      <td style={{ paddingBottom: "9px" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}><tbody><tr>
          {align === "right" && (
            <td style={{ verticalAlign: "middle", paddingRight: "8px" }}>
              <span style={{ fontSize: "11px", color: "#444444", fontFamily: "Georgia,serif", display: "block", textAlign: "right", letterSpacing: "0.3px" }}>{value}</span>
            </td>
          )}
          <IconBox type={type} />
          {align === "left" && (
            <td style={{ verticalAlign: "middle", paddingLeft: "8px" }}>
              <span style={{ fontSize: "11px", color: "#444444", fontFamily: "Georgia,serif", display: "block", textAlign: "left", letterSpacing: "0.3px" }}>{value}</span>
            </td>
          )}
        </tr></tbody></table>
      </td>
    </tr>
  );

  return (
    <table style={{
      width: "520px",
      height: "250px",
      borderCollapse: "collapse",
      tableLayout: "fixed",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
      background: "#ffffff",
      margin: "40px auto",
      display: "block",
    }}>
      <tbody>
        <tr>

          {/* ══ LEFT SECTION ══ */}
          <td style={{ width: "52%", background: "#ffffff", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "100%", height: "300px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>

                {/* TOP: Navy diagonal block */}
                <tr><td style={{ padding: "0", verticalAlign: "top" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}><tbody>
                    <tr><td style={{ height: "14px", background: "#1a2540", padding: "0" }}></td></tr>
                    {[[300, 22], [278, 22], [255, 22], [231, 22], [206, 22], [180, 22], [153, 22]].map(([nav, wh], i) => (
                      <tr key={i}>
                        <td style={{ width: `${nav}px`, height: "10px", background: "#1a2540", padding: "0" }}></td>
                        <td style={{ height: "10px", background: "#ffffff", padding: "0" }}></td>
                      </tr>
                    ))}
                  </tbody></table>
                </td></tr>

                {/* GREY diagonal accent */}
                <tr><td style={{ padding: "0", verticalAlign: "top" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}><tbody>
                    {[[240, 22], [215, 22], [188, 22], [160, 22], [130, 22], [98, 22]].map(([nav, wh], i) => (
                      <tr key={i}>
                        <td style={{ width: `${nav}px`, height: "8px", background: "#d0d5e4", padding: "0" }}></td>
                        <td style={{ height: "8px", background: "#ffffff", padding: "0" }}></td>
                      </tr>
                    ))}
                  </tbody></table>
                </td></tr>

                {/* CONTACT: left-aligned phone + email */}
                <tr><td style={{ padding: "14px 18px 0 18px", verticalAlign: "top" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}><tbody>
                    {phone_no && <ContactItem type="phone" value={phone_no} align="left" />}
                    {email && <ContactItem type="email" value={email} align="left" />}
                  </tbody></table>
                </td></tr>

                <tr><td style={{ height: "100%" }}></td></tr>

              </tbody>
            </table>
          </td>

          {/* ══ RIGHT SECTION ══ */}
          <td style={{ width: "48%", background: "#ffffff", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "100%", height: "300px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>

                {/* TOP: name + job title + navy right corner block */}
                <tr><td style={{ padding: "0", verticalAlign: "top" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}><tbody>
                    <tr>
                      {/* Name + title block */}
                      <td style={{ verticalAlign: "bottom", padding: "16px 12px 10px 12px" }}>
                        <table style={{ borderCollapse: "collapse" }}><tbody>
                          {name && <tr><td style={{ paddingBottom: "4px" }}>
                            <span style={{ fontSize: "18px", fontWeight: "800", color: "#1a2540", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase", display: "block" }}>{name}</span>
                          </td></tr>}
                          {job_title && <tr><td>
                            <span style={{ fontSize: "10px", color: "#888888", fontFamily: "Georgia,serif", letterSpacing: "2px", textTransform: "uppercase", display: "block" }}>{job_title}</span>
                          </td></tr>}
                          {/* Yellow-teal accent underline */}
                          {(name && job_title) && (<tr><td style={{ paddingTop: "8px" }}>
                            <table style={{ borderCollapse: "collapse" }}><tbody>
                              <tr>
                                <td style={{ width: "30px", height: "3px", background: "#1a2540", borderRadius: "2px" }}></td>
                                <td style={{ width: "4px" }}></td>
                                <td style={{ width: "12px", height: "3px", background: "#d0d5e4", borderRadius: "2px" }}></td>
                              </tr>
                            </tbody></table>
                          </td></tr>)}
                        </tbody></table>
                      </td>

                    </tr>
                  </tbody></table>
                </td></tr>

                {/* GREY diagonal accent right */}
                <tr><td style={{ padding: "0", verticalAlign: "top" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}><tbody>
                    {[[0, 298], [20, 278], [40, 258], [60, 238], [80, 218], [100, 198]].map(([wh, nav], i) => (
                      <tr key={i}>
                        {wh > 0 && <td style={{ width: `${wh}px`, height: "8px", background: "#ffffff", padding: "0" }}></td>}
                        <td style={{ height: "8px", background: "#ffffff", padding: "0" }}></td>
                      </tr>
                    ))}
                  </tbody></table>
                </td></tr>

                {/* CONTACT: right-aligned website + organization */}
                <tr><td style={{ padding: "14px 18px 0 18px", verticalAlign: "top" }}>
                  <table style={{ borderCollapse: "collapse", width: "100%" }}><tbody>
                    {website && <ContactItem type="website" value={website} align="right" />}
                    {organization && <ContactItem type="location" value={organization} align="right" />}
                  </tbody></table>
                </td></tr>
                {slogan && <tr><td style={{ padding: "0 18px 14px 18px", textAlign: "right" }}>
                  <span style={{ fontSize: "9px", color: "#0a0a0a", fontFamily: "Georgia,serif", letterSpacing: "2px", textTransform: "uppercase" }}>{slogan}</span>
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