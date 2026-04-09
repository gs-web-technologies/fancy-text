import React from 'react'

function VisitingCardF({ name, email, job_title, phone_no, organization, logo, website, slogan, hasStarted }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/logo.avif";
  if (!hasStarted) {
    name = "Your name";
    email = "youremail@example.com";
    job_title = "Job Title";
    phone_no = "+91-229229929";
    organization = "Organization";
    website = "https://your_website.com";
    slogan = "Your slogan goes here";
  }

  const contacts = [];
  if (phone_no) contacts.push({ icon: "📞", text: phone_no });
  if (email) contacts.push({ icon: "✉️", text: email });
  if (website) contacts.push({ icon: "🌐", text: website });
  if (organization) contacts.push({ icon: "📍", text: organization });

  return (
    <table style={{
      width: "350px",
      height: "190px",
      background: "#ffffff",
      borderCollapse: "collapse",
      tableLayout: "fixed",
      borderRadius: "4px",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
      wordBreak: "normal",
      overflowWrap: "break-word"
    }}>
      <tbody>
        <tr>

          {/* LEFT: Navy Panel */}
          <td style={{ width: "121px", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "121px", height: "195px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>
                <tr><td style={{ height: "41px", background: "#1a2244", padding: "0" }}></td></tr>
                <tr><td style={{ height: "7px", background: "#c8a84b", padding: "0" }}></td></tr>
                <tr><td style={{ height: "5px", background: "#e8d060", padding: "0" }}></td></tr>
                <tr><td style={{ height: "67px", width: "100%", background: "#ffffff", padding: "0", verticalAlign: "middle", textAlign: "center" }}>
                  <img
                    src={imageSrc}
                    width="67"
                    height="67"
                    style={{ objectFit: "cover", objectPosition: "center", display: "inline-block", height: "67px" }}
                  />
                </td></tr>
                <tr><td style={{ height: "5px", background: "#e8d060", padding: "0" }}></td></tr>
                <tr><td style={{ height: "7px", background: "#c8a84b", padding: "0" }}></td></tr>
                <tr><td style={{ height: "100%", background: "#1a2244", padding: "0" }}></td></tr>
              </tbody>
            </table>
          </td>

          {/* RIGHT: White Content Panel */}
          <td style={{ width: "229px", background: "#ffffff", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "229px", height: "190px", borderCollapse: "collapse" }}>
              <tbody>
                <tr><td style={{ height: "5px", background: "#1a2244", padding: "0" }}></td></tr>
                <tr><td style={{ height: "2px", background: "#c8a84b", padding: "0" }}></td></tr>

                {/* Name + Title */}
                <tr>
                  <td style={{ padding: "13px 19px 0 15px", verticalAlign: "top" }}>
                    <table style={{ borderCollapse: "collapse" }}>
                      <tbody>
                        {name && (<tr>
                          <td style={{ paddingBottom: "1px" }}>
                            <span style={{ fontSize: "15px", fontWeight: "800", color: "#1a2244", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>
                              {name}
                            </span>
                          </td>
                        </tr>)}
                        {job_title && (<tr>
                          <td style={{ paddingBottom: "5px" }}>
                            <span style={{ fontSize: "8px", color: "#c8a84b", fontFamily: "Georgia,serif", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "600" }}>
                              {job_title}
                            </span>
                          </td>
                        </tr>)}
                        <tr>
                          <td style={{ paddingBottom: "7px" }}>
                            <table style={{ borderCollapse: "collapse" }}>
                              <tbody>
                                <tr><td style={{ width: "114px", height: "2px", background: "#c8a84b" }}></td></tr>
                                <tr><td style={{ height: "2px" }}></td></tr>
                                <tr><td style={{ width: "74px", height: "1px", background: "#e8d060" }}></td></tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Contact rows */}
                <tr>
                  <td style={{ padding: "0 12px 3px 8px" }}>
                    <table style={{ borderCollapse: "collapse" }}>
                      <tbody>
                        {contacts.map((item, i) => (
                          <tr key={i}>
                            <td style={{ paddingBottom: i < 5 ? "3px" : "8px" }}>
                              <table style={{ borderCollapse: "collapse" }}>
                                <tbody>
                                  <tr>
                                    <td style={{ width: "7px", padding: "3px", fontSize: "9px" }}>
                                      {item.icon}
                                    </td>
                                    <td>
                                      <span style={{ fontSize: "9px", color: "#333333", fontFamily: "Georgia,serif" }}>
                                        {item.text}
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr><td style={{ height: "100%" }}></td></tr>
                <tr><td style={{ height: "3px", background: "#c8a84b", padding: "0" }}></td></tr>
                <tr><td style={{ height: "5px", background: "#1a2244", padding: "0" }}></td></tr>
              </tbody>
            </table>
          </td>

        </tr>
      </tbody>
    </table>
  );
}

export default VisitingCardF