import React from 'react'

function VisitingCardJ({ name, email, job_title, phone_no, organization, logo, website, slogan, hasStarted }) {
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
    <table
      style={{
        width: "350px", // Scaled down
        height: "190px", // Scaled down
        borderCollapse: "collapse",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: "#ffffff",
        wordBreak: "normal",
        overflowWrap:"break-word",
        tableLayout: "fixed"
      }}
    >
      <tbody>
        <tr>
          {/* ── LEFT PETALS ── */}
          <td style={{ width: "20px", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "100%", height: "190px", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ height: "95px", backgroundColor: "#b03020", borderRadius: "0 0 50px 0" }} />
                </tr>
                <tr>
                  <td style={{ height: "95px", background: "linear-gradient(180deg, #e8500a 0%, #f07828 100%)", borderRadius: "0 50px 0 0" }} />
                </tr>
              </tbody>
            </table>
          </td>

          {/* ── CENTER-LEFT: Logo & Branding ── */}
          <td style={{ verticalAlign: "top", padding: "15px 10px" }}>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ paddingBottom: "10px" }}>
                    <div style={{ width: "45px", height: "45px", borderRadius: "8px", overflow: "hidden" }}>
                      <img src={imageSrc} width="45" height="45" style={{ objectFit: "cover" }} />
                    </div>
                  </td>
                </tr>
                {organization && (
                  <tr>
                    <td>
                      <span style={{ fontSize: "13px", fontWeight: "900", color: "#111", display: "block", textTransform: "uppercase", lineHeight: "1.1" }}>
                        {organization}
                      </span>
                    </td>
                  </tr>
                )}
                {slogan && (
                  <tr>
                    <td style={{ paddingTop: "2px" }}>
                      <span style={{ fontSize: "9px", color: "#e04030", fontStyle: "italic", display: "block", lineHeight: "1.1" }}>
                        {slogan}
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </td>

          {/* ── CENTER-RIGHT: Contact Info ── */}
          <td style={{ verticalAlign: "middle", padding: "10px 5px" }}>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <tbody>
                {name && (
                  <tr>
                    <td>
                      <span style={{ fontSize: "14px", fontWeight: "900", color: "#111", display: "block" }}>{name}</span>
                    </td>
                  </tr>
                )}
                {job_title && (
                  <tr>
                    <td style={{ paddingBottom: "6px" }}>
                      <span style={{ fontSize: "8px", color: "#e04030", fontWeight: "600", display: "block", textTransform: "uppercase" }}>{job_title}</span>
                    </td>
                  </tr>
                )}
                <tr>
                  <td style={{ paddingBottom: "8px" }}>
                    <div style={{ height: "1px", backgroundColor: "#eee", width: "80%" }} />
                  </td>
                </tr>
                {contacts.map((item, i) => (
                  <tr key={i}>
                    <td style={{ paddingBottom: "3px" }}>
                      <table style={{ borderCollapse: "collapse" }}>
                        <tbody>
                          <tr>
                            <td style={{ 
                              width: "16px", 
                              height: "16px", 
                              backgroundColor: "#fff5f5", 
                              textAlign: "center", 
                              fontSize: "8px" 
                            }}>
                              {item.icon}
                            </td>
                            <td style={{ paddingLeft: "5px", fontSize: "9px", color: "#444" }}>
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

          {/* ── RIGHT PETALS ── */}
          <td style={{ width: "20px", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "100%", height: "190px", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ height: "95px", backgroundColor: "#b03020", borderRadius: "0 0 0 50px" }} />
                </tr>
                <tr>
                  <td style={{ height: "95px", background: "linear-gradient(180deg, #e8500a 0%, #f07828 100%)", borderRadius: "50px 0 0 0" }} />
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default VisitingCardJ
