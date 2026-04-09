import React from 'react'

function VisitingCardP({ name, email, job_title, phone_no, organization, website, slogan, logo, hasStarted }) {
  const imageSrc = logo && logo.length != 0 ? logo : "";
  if (!hasStarted) {
    name = "Your Name";
    email = "youremail@example.com";
    job_title = "Job Title";
    phone_no = "+91-229229929";
    organization = "Organization";
    website = "https://your_website.com";
    slogan = "Your slogan goes here";
  }

  // Scaled widths for the 350px width
  const waveRows = [
    { gold: 20, navy: false },
    { gold: 35, navy: false },
    { gold: 60, navy: false },
    { gold: 85, navy: false },
    { gold: 115, navy: false },
    { gold: 140, navy: false },
    { gold: 160, navy: false },
    { gold: 350, navy: false },  // full gold
    { gold: 170, navy: true },
    { gold: 200, navy: true },
    { gold: 240, navy: true },
    { gold: 280, navy: true },
    { gold: 350, navy: false },  // full gold bottom cap
  ];

  const CircleIcon = ({ type }) => (
    <td style={{ width: "16px", height: "16px", textAlign: "center", verticalAlign: "middle" }}>
      <table style={{ borderCollapse: "collapse", margin: "0 auto" }}><tbody>
        {type === "phone" && (<tr><td style={{ fontSize: "10px" }}>📞</td></tr>)}
        {type === "website" && (<tr><td style={{ fontSize: "10px" }}>🌐</td></tr>)}
        {type === "email" && (<tr><td style={{ fontSize: "10px" }}>✉️</td></tr>)}
      </tbody></table>
    </td>
  );

  const ContactRow = ({ type, value, pb = "4px" }) => (
    <tr><td style={{ paddingBottom: pb }}>
      <table style={{ borderCollapse: "collapse" }}><tbody><tr>
        <CircleIcon type={type} />
        <td style={{ width: "6px" }}></td>
        <td style={{ verticalAlign: "middle" }}>
          <span style={{ fontSize: "10px", color: "#333333", fontFamily: "Georgia,serif", lineHeight: "1.4" }}>
            {value}
          </span>
        </td>
      </tr></tbody></table>
    </td></tr>
  );

  return (
    <table style={{
      width: "350px", height: "190px",
      borderCollapse: "collapse", tableLayout: "fixed",
      borderRadius: "10px", overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      background: "#ffffff", margin: "20px auto", display: "block",
      wordBreak: "normal",
      overflowWrap: "break-word"
    }}>
      <tbody>
        {/* Top navy bar */}
        <tr><td colSpan={2} style={{ height: "5px", background: "#1a2540", padding: "0" }}></td></tr>

        {/* Main content */}
        <tr>
          {/* LEFT PANEL */}
          <td style={{ width: "190px", verticalAlign: "top", padding: "12px 10px 0 16px", background: "#ffffff" }}>
            <table style={{ borderCollapse: "collapse", width: "100%" }}><tbody>
              {name && (
                <tr>
                  <td style={{ paddingBottom: "1px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "800", color: "#1a2540", fontFamily: "Georgia,serif" }}>
                      {name}
                    </span>
                  </td>
                </tr>)}
              {job_title && (<tr>
                <td style={{ paddingBottom: "8px" }}>
                  <span style={{ fontSize: "8px", color: "#999999", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>
                    {job_title}
                  </span>
                </td>
              </tr>)}
              {phone_no && <ContactRow type="phone" value={phone_no} />}
              {website && <ContactRow type="website" value={website} />}
              {email && <ContactRow type="email" value={email} />}
            </tbody></table>
          </td>

          {/* RIGHT PANEL */}
          <td style={{ width: "160px", verticalAlign: "top", padding: "12px 16px 0 4px", background: "#ffffff", textAlign: "right" }}>
            <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}><tbody>
              <tr>
                <td style={{ paddingBottom: "6px", textAlign: "right" }}>
                  <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                    <tbody>
                      <tr>
                        {imageSrc ? (
                          <td style={{ textAlign: "right" }}>
                            <img src={imageSrc} width="42" height="42" style={{ objectFit: "cover", width: "42px", height: "42px" }} />
                          </td>
                        ) : (
                          <>
                            <td style={{ verticalAlign: "bottom" }}>
                              <table style={{ borderCollapse: "collapse" }}><tbody>
                                <tr><td style={{ width: "6px", height: "12px", background: "#1a2540", borderRadius: "1px" }}></td></tr>
                                <tr><td style={{ height: "2px" }}></td></tr>
                                <tr><td style={{ width: "6px", height: "6px", background: "#1a2540", borderRadius: "1px" }}></td></tr>
                              </tbody></table>
                            </td>
                            <td style={{ width: "2px" }}></td>
                            <td style={{ verticalAlign: "bottom" }}>
                              <div style={{ width: "6px", height: "22px", background: "#1a2540", borderRadius: "1px" }}></div>
                            </td>
                            <td style={{ width: "2px" }}></td>
                            <td style={{ verticalAlign: "bottom" }}>
                              <div style={{ width: "6px", height: "14px", background: "#c8a84b", borderRadius: "1px" }}></div>
                            </td>
                          </>
                        )}
                      </tr>
                    </tbody></table>
                </td>
              </tr>
              {organization && (
                <tr>
                  <td style={{ paddingBottom: "1px", textAlign: "right" }}>
                    <span style={{ fontSize: "13px", fontWeight: "800", color: "#1a2540", fontFamily: "Georgia,serif" }}>
                      {organization}
                    </span>
                  </td>
                </tr>)}
              {slogan && (<tr>
                <td style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "7px", color: "#999999", fontFamily: "Georgia,serif", textTransform: "uppercase" }}>
                    {slogan}
                  </span>
                </td>
              </tr>)}
            </tbody></table>
          </td>
        </tr>

        <tr><td style={{ height: "100%" }}></td></tr>

        {/* WAVE Graphic Area */}
        <tr><td colSpan={2} style={{ padding: "0", verticalAlign: "bottom" }}>
          <table style={{ width: "350px", borderCollapse: "collapse", tableLayout: "fixed" }}><tbody>
            {waveRows.map(({ gold, navy }, i) => (
              <tr key={i}>
                {gold < 350
                  ? <>
                    <td style={{ width: `${gold}px`, height: "3px", background: "#c8a84b", padding: "0" }}></td>
                    <td style={{ height: "3px", background: navy ? "#1a2540" : "#ffffff", padding: "0" }}></td>
                  </>
                  : <td colSpan={2} style={{ height: "3px", background: "#c8a84b", padding: "0" }}></td>
                }
              </tr>
            ))}
            <tr><td colSpan={2} style={{ height: "5px", background: "#1a2540", padding: "0" }}></td></tr>
          </tbody></table>
        </td></tr>
      </tbody>
    </table>
  );
}


export default VisitingCardP


