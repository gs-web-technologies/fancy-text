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
    <td style={{ width: "30px", height: "30px", borderRadius: "6px", textAlign: "center", verticalAlign: "middle" }}>
      <table style={{ borderCollapse: "collapse", margin: "0 auto" }}><tbody>
        {type === "email" && <tr>
          <td>
            ✉️
          </td>
        </tr>}
        {type === "location" && <tr>
          <td>
            📍
          </td>
        </tr>}
        {type === "globe" && <tr>
          <td>
            🌐
          </td>
        </tr>}
        {type === "phone" && <tr>
          <td>
            📞
          </td>
        </tr>}
      </tbody></table>
    </td>
  );

  const ContactRow = ({ iconType, value }) => (
    <tr>
      <td style={{ padding: "0 28px 12px 28px" }}>
        <table style={{ borderCollapse: "collapse" }}><tbody><tr>
          <IconBox type={iconType} />
          <td style={{ width: "12px" }}></td>
          <td style={{ verticalAlign: "middle" }}>
            <span style={{ fontSize: "12px", color: "#333333", fontFamily: "Georgia,serif" }}>{value}</span>
          </td>
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
      boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
      wordBreak: "normal",
      overflowWrap: "break-word"
    }}>
      <tbody><tr>

        {/* ══ LEFT WHITE PANEL ══ */}
        <td style={{ width: "250px", background: "#f5f5f5", verticalAlign: "top", padding: "0" }}>
          <table style={{ width: "250px", height: "250px", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <tbody>
              <tr><td style={{ height: "8px", background: "#006d6d", padding: "0" }}></td></tr>

              {/* Company + tagline */}
              <tr><td style={{ padding: "12px 18px 0 18px" }}>
                <table style={{ borderCollapse: "collapse" }}><tbody>
                  {organization && <tr><td style={{ paddingBottom: "3px" }}><span style={{ fontSize: "17px", fontWeight: "800", color: "#1a1a1a", fontFamily: "Georgia,serif", letterSpacing: "2px", textTransform: "uppercase" }}>{organization}</span></td></tr>}
                  {slogan && <tr><td><span style={{ fontSize: "10px", color: "#888888", fontFamily: "Georgia,serif", letterSpacing: "3px", textTransform: "uppercase" }}>{slogan}</span></td></tr>}
                </tbody></table>
              </td></tr>

              {/* Divider */}
              {(organization && slogan) && (<tr><td style={{ padding: "14px 28px 16px 28px" }}>
                <table style={{ borderCollapse: "collapse" }}><tbody>
                  <tr><td style={{ width: "200px", height: "2px", background: "#006d6d" }}></td></tr>
                  <tr><td style={{ height: "3px" }}></td></tr>
                  <tr><td style={{ width: "120px", height: "1px", background: "#e8440a", opacity: "0.5" }}></td></tr>
                </tbody></table>
              </td></tr>)}

              {/* Contact rows */}
              {email && <ContactRow iconType="location" value={email} />}
              {website && <ContactRow iconType="globe" value={website} />}
              {phone_no && <ContactRow iconType="phone" value={phone_no} />}

              <tr><td style={{ height: "100%" }}></td></tr>
              <tr><td style={{ height: "8px", background: "#006d6d", padding: "0" }}></td></tr>
            </tbody>
          </table>
        </td>


        {/* ══ RIGHT ORANGE PANEL ══ */}
        <td style={{ width: "250px", background: "#e8440a", verticalAlign: "top", padding: "0" }}>
          <table style={{ width: "250px", height: "250px", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <tbody>
              <tr><td style={{ height: "8px", background: "#e8440a", padding: "0" }}></td></tr>

              <tr style={{ textAlign: "right", verticalAlign: "middle" }}>
                <td style={{ padding: "4px" }}>
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
              </tr>

              {/* Name + title */}
              <tr><td style={{ padding: "14px 24px 4px 24px", textAlign: "right" }}>
                <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}><tbody>
                  {name && <tr><td style={{ textAlign: "center", paddingBottom: "4px" }}><span style={{ fontSize: "20px", fontWeight: "800", color: "#ffffff", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>{name}</span></td></tr>}
                  {job_title && <tr><td style={{ textAlign: "center" }}><span style={{ fontSize: "10px", color: "#ffd0b0", fontFamily: "Georgia,serif", letterSpacing: "2px", textTransform: "uppercase" }}>{job_title}</span></td></tr>}
                </tbody></table>
              </td></tr>

              {/* White divider */}
              {(name && job_title) && (<tr><td style={{ padding: "10px 24px 16px 24px", textAlign: "center" }}>
                <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}><tbody>
                  <tr><td style={{ width: "140px", height: "2px", background: "#ffffff", opacity: "0.6" }}></td></tr>
                  <tr><td style={{ height: "3px" }}></td></tr>
                  <tr><td style={{ width: "80px", height: "1px", background: "#ffffff", opacity: "0.3" }}></td></tr>
                </tbody></table>
              </td></tr>)}

              <tr><td style={{ height: "30px" }}></td></tr>

              <tr><td style={{ height: "100%" }}></td></tr>
            </tbody>
          </table>
        </td>

      </tr></tbody>
    </table>
  );
}

export default VisitingCardN
