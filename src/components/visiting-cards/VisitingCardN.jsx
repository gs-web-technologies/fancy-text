import React from 'react'

function VisitingCardN({ name, email, job_title, phone_no, organization, website, slogan, logo, hasStarted }) {
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

  const IconBox = ({ type }) => (
    <td style={{ width: "22px", height: "22px", borderRadius: "4px", textAlign: "center", verticalAlign: "middle" }}>
      <table style={{ borderCollapse: "collapse", margin: "0 auto" }}><tbody>
        {type === "email" && <tr><td>✉️</td></tr>}
        {type === "location" && <tr><td>📍</td></tr>}
        {type === "globe" && <tr><td>🌐</td></tr>}
        {type === "phone" && <tr><td>📞</td></tr>}
      </tbody></table>
    </td>
  );

  const ContactRow = ({ iconType, value }) => (
    <tr>
      <td style={{ padding: "0 18px 8px 18px" }}>
        <table style={{ borderCollapse: "collapse" }}><tbody><tr>
          <IconBox type={iconType} />
          <td style={{ width: "8px" }}></td>
          <td style={{ verticalAlign: "middle" }}>
            <span style={{ fontSize: "10px", color: "#333333", fontFamily: "Georgia,serif" }}>{value}</span>
          </td>
        </tr></tbody></table>
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
      boxShadow: "0 6px 30px rgba(0,0,0,0.25)",
      wordBreak: "normal",
      overflowWrap: "break-word",
      background: "#ffffff"
    }}>
      <tbody><tr>

        {/* ══ LEFT WHITE PANEL ══ */}
        <td style={{ width: "175px", background: "#f5f5f5", verticalAlign: "top", padding: "0" }}>
          <table style={{ width: "175px", height: "190px", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <tbody>
              <tr><td style={{ height: "6px", background: "#006d6d", padding: "0" }}></td></tr>

              {/* Company + tagline */}
              <tr><td style={{ padding: "10px 14px 0 14px" }}>
                <table style={{ borderCollapse: "collapse" }}><tbody>
                  {organization && <tr><td style={{ paddingBottom: "2px" }}><span style={{ fontSize: "13px", fontWeight: "800", color: "#1a1a1a", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>{organization}</span></td></tr>}
                  {slogan && <tr><td><span style={{ fontSize: "8px", color: "#888888", fontFamily: "Georgia,serif", letterSpacing: "1.5px", textTransform: "uppercase" }}>{slogan}</span></td></tr>}
                </tbody></table>
              </td></tr>

              {/* Divider */}
              {(organization && slogan) && (<tr><td style={{ padding: "10px 18px 12px 18px" }}>
                <table style={{ borderCollapse: "collapse" }}><tbody>
                  <tr><td style={{ width: "130px", height: "2px", background: "#006d6d" }}></td></tr>
                  <tr><td style={{ height: "2px" }}></td></tr>
                  <tr><td style={{ width: "80px", height: "1px", background: "#e8440a", opacity: "0.5" }}></td></tr>
                </tbody></table>
              </td></tr>)}

              {/* Contact rows */}
              {email && <ContactRow iconType="location" value={email} />}
              {website && <ContactRow iconType="globe" value={website} />}
              {phone_no && <ContactRow iconType="phone" value={phone_no} />}

              <tr><td style={{ height: "100%" }}></td></tr>
              <tr><td style={{ height: "6px", background: "#006d6d", padding: "0" }}></td></tr>
            </tbody>
          </table>
        </td>

        {/* ══ RIGHT ORANGE PANEL ══ */}
        <td style={{ width: "175px", background: "#e8440a", verticalAlign: "top", padding: "0" }}>
          <table style={{ width: "175px", height: "190px", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <tbody>
              <tr><td style={{ height: "6px", background: "#e8440a", padding: "0" }}></td></tr>

              <tr style={{ textAlign: "right", verticalAlign: "middle" }}>
                <td style={{ padding: "8px 14px 4px 14px" }}>
                  <img
                    src={imageSrc}
                    width="45"
                    height="45"
                    style={{
                      objectFit: "cover", objectPosition: "center", display: "inline-block", width: "45px",
                      height: "45px", borderRadius: "4px"
                    }}
                  />
                </td>
              </tr>

              {/* Name + title */}
              <tr><td style={{ padding: "8px 18px 4px 18px", textAlign: "right" }}>
                <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}><tbody>
                  {name && <tr><td style={{ textAlign: "right", paddingBottom: "2px" }}><span style={{ fontSize: "15px", fontWeight: "800", color: "#ffffff", fontFamily: "Georgia,serif", letterSpacing: "0.5px", textTransform: "uppercase" }}>{name}</span></td></tr>}
                  {job_title && <tr><td style={{ textAlign: "right" }}><span style={{ fontSize: "8px", color: "#ffd0b0", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>{job_title}</span></td></tr>}
                </tbody></table>
              </td></tr>

              {/* White divider */}
              {(name && job_title) && (<tr><td style={{ padding: "6px 18px 10px 18px", textAlign: "right" }}>
                <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}><tbody>
                  <tr><td style={{ width: "100px", height: "1px", background: "#ffffff", opacity: "0.6" }}></td></tr>
                  <tr><td style={{ height: "2px" }}></td></tr>
                  <tr><td style={{ width: "60px", height: "1px", background: "#ffffff", opacity: "0.3" }}></td></tr>
                </tbody></table>
              </td></tr>)}

              <tr><td style={{ height: "100%" }}></td></tr>
            </tbody>
          </table>
        </td>

      </tr></tbody>
    </table>
  );
}
export default VisitingCardN
