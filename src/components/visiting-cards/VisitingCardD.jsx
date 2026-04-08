import React from 'react'

function VisitingCardD({ name, email, job_title, phone_no, organization, logo, website, slogan, hasStarted }) {
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
  return (
    <table style={{ width: "350px", height: "190px", background: "#ffffff", borderCollapse: "collapse", tableLayout: "fixed", borderRadius: "6px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.2)", wordBreak: "normal", overflowWrap: "break-word" }}>
      <tbody>
        <tr>

          {/* LEFT: Dark Panel */}
          <td style={{ width: "131px", height: "190px", background: "#1a1a2e", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "131px", height: "190px", borderCollapse: "collapse" }}>
              <tbody>
                {name && (<tr>
                  <td style={{ padding: "0 11px 4px 11px" }}><span style={{ fontSize: "11px", fontWeight: "800", color: "#ffffff", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>{name}</span>
                    <table>
                      <tbody>
                        {job_title && (
                          <tr>
                            <td style={{ padding: "0 11px" }}><span style={{ fontSize: "8px", color: "#90caf9", fontFamily: "Georgia,serif", letterSpacing: "1px" }}>{job_title}</span>
                            </td>
                          </tr>)}
                      </tbody>
                    </table>
                  </td>
                </tr>)}
              </tbody>
            </table>
          </td>

          {/* MIDDLE: Blue diagonal wedge */}
          <td style={{ width: "37px", height: "190px", padding: "0", verticalAlign: "top" }}>
            <table style={{ width: "37px", height: "190px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>
                <tr><td style={{ height: "3px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "5px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "5px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "5px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "5px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "5px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "5px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "5px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "3px", background: "#0d47a1", padding: "0" }}></td></tr>
                <tr><td style={{ height: "3px", background: "#1565c0", padding: "0" }}></td></tr>
                <tr><td style={{ height: "3px", background: "#1976d2", padding: "0" }}></td></tr>
                <tr><td style={{ height: "3px", background: "#1e88e5", padding: "0" }}></td></tr>
                <tr><td style={{ height: "3px", background: "#2196f3", padding: "0" }}></td></tr>
                <tr><td style={{ height: "3px", background: "#42a5f5", padding: "0" }}></td></tr>
                <tr><td style={{ height: "50%", background: "#1a1a2e", padding: "0" }}></td></tr>
                <tr><td style={{ height: "3px", background: "#2a2a3e", padding: "0" }}></td></tr>
              </tbody>
            </table>
          </td>

          {/* RIGHT: White info panel */}
          <td style={{ width: "182px", height: "190px", background: "#ffffff", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "182px", height: "190px", borderCollapse: "collapse" }}>
              <tbody>
                <tr><td style={{ height: "5px", background: "#f5f5f5", padding: "0" }}></td></tr>
                {/* Logo + Company */}
                <tr>
                  <td style={{ padding: "9px 19px 0 11px", textAlign: "end", verticalAlign: "top" }}>
                    <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                      <tbody>
                        {organization && (<tr>
                          <td style={{ textAlign: "end" }}>
                            <span style={{ fontSize: "11px", fontWeight: "800", color: "#1a1a2e", fontFamily: "Georgia,serif", letterSpacing: "2px", textTransform: "uppercase" }}>
                              {organization}
                            </span>
                          </td>
                        </tr>)}
                        {slogan && (<tr>
                          <td style={{ textAlign: "end" }}>
                            <span style={{ fontSize: "7px", fontWeight: "800", color: "#6b6b75", fontFamily: "Georgia,serif", textTransform: "uppercase" }}>
                              {slogan}
                            </span>
                          </td>
                        </tr>)}
                      </tbody>
                    </table>
                  </td>
                </tr>
                {/* Blue underline */}
                {organization && (<tr>
                  <td style={{ padding: "4px 19px 7px 0", textAlign: "right" }}>
                    <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                      <tbody><tr><td style={{ width: "141px", height: "2px", background: "#1565c0" }}></td></tr></tbody>
                    </table>
                  </td>
                </tr>)}
                {/* Phone */}
                {phone_no && (
                  <>
                    <tr>
                      <td style={{ padding: "0 19px 0 11px" }}>
                        <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                          <tbody>
                            <tr>
                              <td style={{ textAlign: "center", paddingRight: "7px" }}>
                                <span style={{ fontSize: "9px", fontWeight: "700", color: "#1a1a2e", fontFamily: "Georgia,serif", letterSpacing: "0.5px" }}>
                                  {phone_no}
                                </span>
                              </td>
                              <td style={{ width: "8px", height: "8px", borderRadius: "50%", verticalAlign: "middle" }}>
                                <span style={{ padding: "0px", fontSize: "10px" }}>
                                  📞
                                </span>
                              </td>
                            </tr></tbody>
                        </table>
                      </td>
                    </tr>
                    <tr><td style={{ height: "7px" }}></td></tr>
                  </>
                )}
                {/* Email */}
                {email && (
                  <>
                    <tr>
                      <td style={{ padding: "0 19px 0 11px" }}>
                        <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                          <tbody><tr>
                            <td style={{ textAlign: "center", paddingRight: "7px" }}><span style={{ fontSize: "8px", color: "#555555", fontFamily: "Georgia,serif" }}>email address goes here</span></td>
                            <td style={{ width: "8px", height: "8px", borderRadius: "50%", verticalAlign: "middle" }}>
                              <span style={{ padding: "0px", fontSize: "10px" }}>
                                ✉️
                              </span>
                            </td>
                          </tr></tbody>
                        </table>
                      </td>
                    </tr>
                    <tr><td style={{ height: "7px" }}></td></tr>
                  </>
                )}
                {/* Website */}
                {website && (<tr>
                  <td style={{ padding: "0 19px 0 11px" }}>
                    <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                      <tbody><tr>
                        <td style={{ textAlign: "center", paddingRight: "7px" }}>
                          <span style={{ fontSize: "8px", color: "#555555", fontFamily: "Georgia,serif" }}>
                            {website}
                          </span>
                        </td>
                        <td style={{ width: "8px", height: "8px", borderRadius: "50%", verticalAlign: "middle" }}>
                          <span style={{ padding: "0px", fontSize: "10px" }}>
                            🌐
                          </span>
                        </td>
                      </tr></tbody>
                    </table>
                  </td>
                </tr>)}
                <tr><td style={{ height: "100%" }}></td></tr>
                <tr><td style={{ height: "5px", background: "#1a1a2e", padding: "0" }}></td></tr>
              </tbody>
            </table>
          </td>

        </tr>
      </tbody>
    </table>
  );
}

export default VisitingCardD