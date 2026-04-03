import React from 'react'

function VisitingCardD({ name, email, job_title, phone_no, organization, logo, website, slogan, hasStarted }) {
  const imageSrc = logo && logo.length != 0 ? logo : '';
  if (!hasStarted) {
    name = "Your name";
    email = "youremail@example.com";
    job_title = "Job Title";
    phone_no = "+91-229229929";
    organization = "Organization";
    website = "https://your_website.com";
    slogan = "Your slogan goes here";
  }
  return (
    <table style={{ width: "720px", height: "264px", background: "#ffffff", borderCollapse: "collapse", tableLayout: "fixed", borderRadius: "6px", overflow: "hidden", boxShadow: "0 6px 30px rgba(0,0,0,0.2)" }}>
      <tbody>
        <tr>

          {/* LEFT: Dark Panel */}
          <td style={{ width: "195px", background: "#1a1a2e", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "195px", height: "380px", borderCollapse: "collapse" }}>
              <tbody>
              
                {/* Blue stripe */}
                <tr>
                  <td style={{ padding: "50px 0 0 0" }}>
                    <table style={{ borderCollapse: "collapse", width: "195px" }}>
                      <tbody>
                        <tr><td style={{ height: "5px", background: "#0d47a1", padding: "0" }}></td></tr>
                        <tr><td style={{ height: "4px", background: "#1565c0", padding: "0" }}></td></tr>
                        <tr><td style={{ height: "3px", background: "#1976d2", padding: "0" }}></td></tr>
                        <tr><td style={{ height: "2px", background: "#2196f3", padding: "0" }}></td></tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style={{ height: "30px" }}>
                  </td>
                </tr>
                {name && (<tr>
                  <td style={{ padding: "0 16px 6px 16px" }}><span style={{ fontSize: "16px", fontWeight: "800", color: "#ffffff", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>{name}</span>
                  </td>
                </tr>)}
                {job_title && (
                  <tr>
                    <td style={{ padding: "0 16px" }}><span style={{ fontSize: "11px", color: "#90caf9", fontFamily: "Georgia,serif", letterSpacing: "1px" }}>{job_title}</span>
                    </td>
                  </tr>)}
                
                
              </tbody>
            </table>
          </td>

          {/* MIDDLE: Blue diagonal wedge */}
          <td style={{ width: "55px", padding: "0", verticalAlign: "top" }}>
            <table style={{ width: "55px", height: "380px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>
                <tr><td style={{ height: "8px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "16px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "16px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "16px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "16px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "16px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "16px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "16px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "10px", background: "#0d47a1", padding: "0" }}></td></tr>
                <tr><td style={{ height: "10px", background: "#1565c0", padding: "0" }}></td></tr>
                <tr><td style={{ height: "10px", background: "#1976d2", padding: "0" }}></td></tr>
                <tr><td style={{ height: "10px", background: "#1e88e5", padding: "0" }}></td></tr>
                <tr><td style={{ height: "10px", background: "#2196f3", padding: "0" }}></td></tr>
                <tr><td style={{ height: "10px", background: "#42a5f5", padding: "0" }}></td></tr>
                <tr><td style={{ height: "100%", background: "#1a1a2e", padding: "0" }}></td></tr>
                <tr><td style={{ height: "8px", background: "#2a2a3e", padding: "0" }}></td></tr>
              </tbody>
            </table>
          </td>

          {/* RIGHT: White info panel */}
          <td style={{ width: "470px", background: "#ffffff", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "470px", height: "380px", borderCollapse: "collapse" }}>
              <tbody>
                <tr><td style={{ height: "8px", background: "#f5f5f5", padding: "0" }}></td></tr>
                {/* Logo + Company */}
                <tr>
                  <td style={{ padding: "14px 28px 0 16px", textAlign: "right", verticalAlign: "top" }}>
                    <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: "right", paddingBottom: "3px" }}>
                            <span style={{ fontSize: "10px", color: "#aaaaaa", fontFamily: "Georgia,serif", letterSpacing: "3px", textTransform: "uppercase" }}>
                              YOUR LOGO
                            </span>
                          </td>
                        </tr>
                        {organization && (<tr>
                          <td style={{ textAlign: "right" }}>
                            <span style={{ fontSize: "17px", fontWeight: "800", color: "#1a1a2e", fontFamily: "Georgia,serif", letterSpacing: "2px", textTransform: "uppercase" }}>
                              {organization}
                            </span>
                          </td>
                        </tr>)}
                      </tbody>
                    </table>
                  </td>
                </tr>
                {/* Blue underline */}
                <tr>
                  <td style={{ padding: "6px 28px 0 0", textAlign: "right" }}>
                    <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                      <tbody><tr><td style={{ width: "210px", height: "2px", background: "#1565c0" }}></td></tr></tbody>
                    </table>
                  </td>
                </tr>
                {/* Phone */}
                {phone_no && (
                  <>
                    <tr>
                      <td style={{ padding: "0 28px 0 16px" }}>
                        <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                          <tbody>
                            <tr>
                              <td style={{ textAlign: "right", paddingRight: "10px" }}>
                                <span style={{ fontSize: "13px", fontWeight: "700", color: "#1a1a2e", fontFamily: "Georgia,serif", letterSpacing: "0.5px" }}>
                                  {phone_no}
                                </span>
                              </td>
                              <td style={{ width: "11px", height: "11px", borderRadius: "50%", verticalAlign: "middle" }}>
                                <span style={{ padding: "0px" }}>
                                  📞
                                </span>
                              </td>
                            </tr></tbody>
                        </table>
                      </td>
                    </tr>
                    <tr><td style={{ height: "10px" }}></td></tr>

                  </>
                )}
                {/* Email */}
                {email && (
                  <>
                    <tr>
                      <td style={{ padding: "0 28px 0 16px" }}>
                        <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                          <tbody><tr>
                            <td style={{ textAlign: "right", paddingRight: "10px" }}><span style={{ fontSize: "11px", color: "#555555", fontFamily: "Georgia,serif" }}>email address goes here</span></td>
                            <td style={{ width: "11px", height: "11px", borderRadius: "50%", verticalAlign: "middle" }}>
                              <span style={{ padding: "0px" }}>
                                ✉️
                              </span>
                            </td>
                          </tr></tbody>
                        </table>
                      </td>
                    </tr>
                    <tr><td style={{ height: "10px" }}></td></tr>
                  </>
                )}
                {/* Website */}
                {website && (<tr>
                  <td style={{ padding: "0 28px 0 16px" }}>
                    <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                      <tbody><tr>
                        <td style={{ textAlign: "right", paddingRight: "10px" }}>
                          <span style={{ fontSize: "11px", color: "#555555", fontFamily: "Georgia,serif" }}>
                            {website}
                          </span>
                        </td>
                        <td style={{ width: "11px", height: "11px", borderRadius: "50%", verticalAlign: "middle" }}>
                          <span style={{ padding: "0px" }}>
                            🌐
                          </span>
                        </td>
                      </tr></tbody>
                    </table>
                  </td>
                </tr>)}
                <tr><td style={{ height: "100%" }}></td></tr>
                <tr><td style={{ height: "8px", background: "#1a1a2e", padding: "0" }}></td></tr>
              </tbody>
            </table>
          </td>

        </tr>
      </tbody>
    </table>
  );
}

export default VisitingCardD