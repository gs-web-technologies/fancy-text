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

  const waveRows = [
    { gold: 30, navy: false },
    { gold: 55, navy: false },
    { gold: 88, navy: false },
    { gold: 128, navy: false },
    { gold: 170, navy: false },
    { gold: 205, navy: false },
    { gold: 238, navy: false },
    { gold: 520, navy: false },  // full gold
    { gold: 255, navy: true },
    { gold: 300, navy: true },
    { gold: 360, navy: true },
    { gold: 420, navy: true },
    { gold: 520, navy: false },  // full gold bottom cap
  ];

  const CircleIcon = ({ type }) => (
    <td style={{ width: "20px", height: "20px", textAlign: "center", verticalAlign: "middle" }}>
      <table style={{ borderCollapse: "collapse", margin: "0 auto" }}><tbody>
        {type === "phone" && (<tr>
          <td style={{ width: "9px", height: "11px" }}>
            📞
          </td>
        </tr>)}
        {type === "website" && (<tr>
          <td style={{ width: "11px", height: "11px" }}>
            🌐
          </td>
        </tr>)}
        {type === "email" && (<tr>
          <td style={{ width: "11px", height: "8px" }}>
            ✉️
          </td>
        </tr>)}
      </tbody></table>
    </td>
  );

  const ContactRow = ({ type, value, value2, pb = "7px" }) => (
    <tr><td style={{ paddingBottom: pb }}>
      <table style={{ borderCollapse: "collapse" }}><tbody><tr>
        <CircleIcon type={type} />
        <td style={{ width: "8px" }}></td>
        <td style={{ verticalAlign: "middle" }}>
          <span style={{ fontSize: "13px", color: "#333333", fontFamily: "Georgia,serif", lineHeight: "1.6" }}>
            {value}{value2 && <><br />{value2}</>}
          </span>
        </td>
      </tr></tbody></table>
    </td></tr>
  );

  return (
    <table style={{
      width: "520px", height: "270px",
      borderCollapse: "collapse", tableLayout: "fixed",
      borderRadius: "12px", overflow: "hidden",
      boxShadow: "0 16px 50px rgba(0,0,0,0.28)",
      background: "#ffffff", margin: "40px auto", display: "block",
      wordBreak: "normal",
      overflowWrap: "break-word"
    }}>
      <tbody>

        {/* Top navy bar */}
        <tr><td colSpan={2} style={{ height: "7px", background: "#1a2540", padding: "0" }}></td></tr>

        {/* Main content */}
        <tr>
          {/* LEFT */}
          <td style={{ width: "298px", height: "200px", verticalAlign: "top", padding: "16px 14px 0 22px", background: "#ffffff" }}>
            <table style={{ borderCollapse: "collapse", width: "100%" }}><tbody>
              {name && (
                <tr>
                  <td style={{ paddingBottom: "1px" }}>
                    <span style={{ fontSize: "20px", fontWeight: "800", color: "#1a2540", fontFamily: "Georgia,serif" }}>
                      {name}
                    </span>
                  </td>
                </tr>)}
              {job_title && (<tr>
                <td style={{ paddingBottom: "13px" }}>
                  <span style={{ fontSize: "10px", color: "#999999", fontFamily: "Georgia,serif", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                    {job_title}
                  </span>
                </td>
              </tr>)}
              {phone_no && <ContactRow type="phone" value={phone_no} />}
              {website && <ContactRow type="website" value={website} />}
              {email && <ContactRow type="email" value={email} />}
            </tbody></table>
          </td>

          {/* RIGHT */}
          <td style={{ width: "222px", verticalAlign: "top", padding: "18px 22px 0 8px", background: "#ffffff", textAlign: "right" }}>
            <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}><tbody>
              {/* Chart bar logo */}
              <tr>
                <td style={{ paddingBottom: "8px", textAlign: "right" }}>
                  <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                    <tbody>
                      <tr>
                        {imageSrc ? (
                          <td
                            style={{
                              textAlign: "center",
                              verticalAlign: "middle",
                              fontSize: "28px",
                              lineHeight: "1",
                            }}
                          >
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
                          <>
                            <td style={{ verticalAlign: "bottom" }}>
                              <table style={{ borderCollapse: "collapse" }}><tbody>
                                <tr><td style={{ width: "9px", height: "16px", background: "#1a2540", borderRadius: "2px 2px 0 0", padding: "0" }}></td></tr>
                                <tr><td style={{ height: "3px", background: "#ffffff", padding: "0" }}></td></tr>
                                <tr><td style={{ width: "9px", height: "8px", background: "#1a2540", borderRadius: "2px", padding: "0" }}></td></tr>
                              </tbody></table>
                            </td>
                            <td style={{ width: "3px" }}></td>
                            <td style={{ verticalAlign: "bottom" }}>
                              <table style={{ borderCollapse: "collapse" }}><tbody>
                                <tr><td style={{ width: "9px", height: "30px", background: "#1a2540", borderRadius: "2px 2px 0 0", padding: "0" }}></td></tr>
                              </tbody></table>
                            </td>
                            <td style={{ width: "3px" }}></td>
                            <td style={{ verticalAlign: "bottom" }}>
                              <table style={{ borderCollapse: "collapse" }}><tbody>
                                <tr><td style={{ width: "9px", height: "20px", background: "#c8a84b", borderRadius: "2px 2px 0 0", padding: "0" }}></td></tr>
                              </tbody></table>
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
                    <span style={{ fontSize: "19px", fontWeight: "800", color: "#1a2540", fontFamily: "Georgia,serif", letterSpacing: "0.5px" }}>
                      {organization}
                    </span>
                  </td>
                </tr>)}
              {slogan && (<tr>
                <td style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "10px", color: "#999999", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>
                    {slogan}
                  </span>
                </td>
              </tr>)}
            </tbody></table>
          </td>
        </tr>
        <tr><td style={{ height: "100%" }}></td></tr>

        {/* WAVE + navy base */}
        <tr><td colSpan={2} style={{ padding: "0", verticalAlign: "bottom" }}>
          <table style={{ width: "520px", borderCollapse: "collapse", tableLayout: "fixed" }}><tbody>
            <tr><td colSpan={2} style={{ height: "8px", background: "#ffffff", padding: "0" }}></td></tr>
            {waveRows.map(({ gold, navy }, i) => (
              <tr key={i}>
                {gold < 520
                  ? <>
                    <td style={{ width: `${gold}px`, height: "5px", background: "#c8a84b", padding: "0" }}></td>
                    <td style={{ height: "5px", background: navy ? "#1a2540" : "#ffffff", padding: "0" }}></td>
                  </>
                  : <td colSpan={2} style={{ height: "5px", background: "#c8a84b", padding: "0" }}></td>
                }
              </tr>
            ))}
            <tr><td colSpan={2} style={{ height: "7px", background: "#1a2540", padding: "0" }}></td></tr>
          </tbody></table>
        </td></tr>

      </tbody>
    </table >
  );
}


export default VisitingCardP


