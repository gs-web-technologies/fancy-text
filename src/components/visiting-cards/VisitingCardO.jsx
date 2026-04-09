import React from 'react'

function VisitingCardO({ name, email, job_title, phone_no, organization, website, slogan, logo, hasStarted }) {
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

  const contacts = [];
  if (phone_no) contacts.push({ icon: "📞", text: phone_no });
  if (email) contacts.push({ icon: "✉️", text: email });
  if (website) contacts.push({ icon: "🌐", text: website });
  if (organization) contacts.push({ icon: "📍", text: organization });

  return (
    <table
      style={{
        width: "350px", // Reduced width
        height: "190px", // Reduced height
        borderCollapse: "collapse",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
        fontFamily: "'Segoe UI', sans-serif",
        margin: "20px auto",
        display: "block",
        backgroundColor: "#c71c1c",
        wordBreak: "normal",
        overflowWrap: "break-word",
        tableLayout: "fixed"
      }}
    >
      <tbody>
        <tr>
          {/* ══ LEFT SECTION ══ */}
          <td
            style={{
              width: "55%",
              backgroundColor: "#ffffff",
              verticalAlign: "top",
              padding: "0",
            }}
          >
            <table style={{ width: "100%", height: "190px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>
                {/* TOP: Name area */}
                <tr style={{ height: "25%" }}>
                  <td style={{ verticalAlign: "middle", padding: "12px 10px 0 14px" }}>
                    {name && (
                      <span style={{
                        fontSize: "15px", // Reduced font size
                        fontWeight: "900",
                        color: "#1a1a2e",
                        letterSpacing: "1px",
                        display: "block",
                        textTransform: "uppercase",
                        lineHeight: "1.1",
                      }}>
                        {name}
                      </span>
                    )}
                    {job_title && (
                      <span style={{
                        fontSize: "8px", // Reduced font size
                        color: "#cc1f1f",
                        fontWeight: "500",
                        display: "block",
                        marginTop: "3px",
                        letterSpacing: "0.5px",
                      }}>
                        {job_title}
                      </span>
                    )}
                  </td>
                </tr>

                {/* MIDDLE: contact info */}
                <tr>
                  <td style={{ padding: "8px 14px 0 14px", verticalAlign: "top" }}>
                    <table style={{ borderCollapse: "collapse" }}>
                      <tbody>
                        {contacts.map((item, i) => (
                          <tr key={i}>
                            <td style={{ paddingBottom: "6px" }}>
                              <table style={{ borderCollapse: "collapse" }}>
                                <tbody>
                                  <tr>
                                    <td style={{ verticalAlign: "middle" }}>
                                      <div style={{
                                        width: "16px", // Reduced icon size
                                        height: "16px",
                                        borderRadius: "50%",
                                        textAlign: "center",
                                        fontSize: "8px",
                                        lineHeight: "14px"
                                      }}>
                                        {item.icon}
                                      </div>
                                    </td>
                                    <td style={{
                                      paddingLeft: "6px",
                                      verticalAlign: "middle",
                                      fontSize: "9px", // Reduced font size
                                      color: "#333",
                                      maxWidth: "140px",
                                      overflow: "hidden"
                                    }}>
                                      {item.text}
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

                {/* BOTTOM: dark accent */}
                <tr>
                  <td style={{ padding: "0", height: "8px", verticalAlign: "bottom" }}>
                    <table style={{ width: "100%", height: "8px", borderCollapse: "collapse" }}>
                      <tbody>
                        <tr style={{ verticalAlign: "bottom" }}>
                          <td style={{ width: "40px", height: "8px", backgroundColor: "#1a1a2e" }} />
                          {[8, 8, 8, 8, 8].map((w, i) => (
                            <td key={i} style={{ width: "6px", height: "8px", backgroundColor: "#1a1a2e" }} />
                          ))}
                          <td style={{ backgroundColor: "transparent" }} />
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>

          {/* ══ RIGHT SECTION ══ */}
          <td
            style={{
              width: "45%",
              backgroundColor: "#aa3030",
              verticalAlign: "middle",
              padding: "0",
              textAlign: "center"
            }}
          >
            <table style={{ width: "100%", height: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle", padding: "10px" }}>
                    <img
                      src={imageSrc}
                      width="45" // Reduced logo size
                      height="45"
                      style={{
                        objectFit: "cover",
                        display: "inline-block",
                        width: "45px",
                        height: "45px",
                        marginBottom: "6px"
                      }}
                    />
                    {organization && (
                      <span style={{
                        fontSize: "12px", // Reduced font size
                        fontWeight: "900",
                        color: "#ffffff",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        display: "block",
                      }}>
                        {organization}
                      </span>
                    )}
                    {slogan && (
                      <span style={{
                        fontSize: "7px", // Reduced font size
                        color: "#ffffff",
                        letterSpacing: "1px",
                        display: "block",
                        textTransform: "uppercase",
                        marginTop: "2px"
                      }}>
                        {slogan}
                      </span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default VisitingCardO



