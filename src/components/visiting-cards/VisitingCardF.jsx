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

  if (phone_no) {
    contacts.push(
      { icon: "📞", text: phone_no }
    );
  }

  if (email) {
    contacts.push(
      { icon: "✉️", text: email }
    );
  }

  if (website) {
    contacts.push(
      { icon: "🌐", text: website }
    );
  }

  if (organization) {
    contacts.push(
      { icon: "📍", text: organization }
    );
  }


  return (
    <table style={{
      width: "520px",
      height: "270px",
      background: "#ffffff",
      borderCollapse: "collapse",
      tableLayout: "fixed",
      borderRadius: "6px",
      overflow: "hidden",
      boxShadow: "0 6px 30px rgba(0,0,0,0.25)",
      wordBreak: "normal",
      overflowWrap:"break-word"
    }}>
      <tbody>
        <tr>

          {/* LEFT: Navy Panel */}
          <td style={{ width: "180px", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "180px", height: "270px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>
                <tr><td style={{ height: "59px", background: "#1a2244", padding: "0" }}></td></tr>
                <tr><td style={{ height: "10px", background: "#c8a84b", padding: "0" }}></td></tr>
                <tr><td style={{ height: "7px", background: "#e8d060", padding: "0" }}></td></tr>
                <tr><td style={{ height: "100px", width: "100%", background: "#ffffff", padding: "0", verticalAlign: "middle", textAlign: "center" }}>
                  <img
                    src={imageSrc}
                    width="100"
                    height="100"
                    style={{ objectFit: "cover",objectPosition: "center", display: "inline-block", height:"100px" }}
                  />
                </td></tr>
                <tr><td style={{ height: "7px", background: "#e8d060", padding: "0" }}></td></tr>
                <tr><td style={{ height: "10px", background: "#c8a84b", padding: "0" }}></td></tr>
                <tr><td style={{ height: "100%", background: "#1a2244", padding: "0" }}></td></tr>
              </tbody>
            </table>
          </td>


          {/* RIGHT: White Content Panel */}
          <td style={{ width: "340px", background: "#ffffff", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "450px", height: "270px", borderCollapse: "collapse" }}>
              <tbody>
                <tr><td style={{ height: "7px", background: "#1a2244", padding: "0" }}></td></tr>
                <tr><td style={{ height: "3px", background: "#c8a84b", padding: "0" }}></td></tr>

                {/* Name + Title */}
                <tr>
                  <td style={{ padding: "20px 28px 0 22px", verticalAlign: "top" }}>
                    <table style={{ borderCollapse: "collapse" }}>
                      <tbody>
                        {name && (<tr>
                          <td style={{ paddingBottom: "1px" }}>
                            <span style={{ fontSize: "22px", fontWeight: "800", color: "#1a2244", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>
                              {name}
                            </span>
                          </td>
                        </tr>)}
                        {job_title && (<tr>
                          <td style={{ paddingBottom: "8px" }}>
                            <span style={{ fontSize: "11px", color: "#c8a84b", fontFamily: "Georgia,serif", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "600" }}>
                              {job_title}
                            </span>
                          </td>
                        </tr>)}
                        <tr>
                          <td style={{ paddingBottom: "10px" }}>
                            <table style={{ borderCollapse: "collapse" }}>
                              <tbody>
                                <tr><td style={{ width: "170px", height: "2px", background: "#c8a84b" }}></td></tr>
                                <tr><td style={{ height: "3px" }}></td></tr>
                                <tr><td style={{ width: "110px", height: "1px", background: "#e8d060" }}></td></tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Contact rows */}
                <tr style={{ padding: "4px" }}>
                  <td style={{ padding: "0 18px 5px 12px" }}>
                    <table style={{ borderCollapse: "collapse" }}>
                      <tbody>
                        {contacts.map((item, i) => (
                          <tr key={i} style={{ padding: "4px" }}>
                            <td style={{ paddingBottom: i < 5 ? "4px" : "12px" }}>
                              <table style={{ borderCollapse: "collapse" }}>
                                <tbody>
                                  <tr>
                                    <td style={{ width: "10px", padding: "5px" }}>
                                      {item.icon}
                                    </td>
                                    <td>
                                      <span style={{ fontSize: "14px", color: "#333333", fontFamily: "Georgia,serif" }}>
                                        {item.text}
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td></tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style={{ height: "100%" }}></td>
                </tr>

                <tr><td style={{ height: "5px", background: "#c8a84b", padding: "0" }}></td></tr>
                <tr><td style={{ height: "7px", background: "#1a2244", padding: "0" }}></td></tr>
              </tbody>
            </table>
          </td>

        </tr>
      </tbody>
    </table>
  );
}

export default VisitingCardF