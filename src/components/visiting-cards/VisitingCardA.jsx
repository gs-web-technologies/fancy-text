import React from 'react'

function VisitingCardA({ name, email, job_title, phone_no, organization, logo, website,slogan, hasStarted }) {
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
    <table
      className="visiting-card"
      style={{
        width: "350px",
        height: "190px",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
        background: "#ffffff",
        borderCollapse: "collapse",
        tableLayout: "fixed",
       wordBreak: "normal",
       overflowWrap:"break-word"
      }}
    >
      <tbody>
        <tr>
          {/* LEFT SECTION */}
          <td
            style={{
              width: "50%",
              background: "#ffffff",
              padding: "6px 8px",
              verticalAlign: "top",
              borderRight: "1px solid #f0f0f0",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "end" }}>
              <tbody>
                {/* Logo */}
                <tr>
                  <td style={{ textAlign: "center", paddingBottom: "5px" }}>
                     <img
                       src={imageSrc}
                       width="50"
                       height="50"
                      style={{ objectFit: "cover", display: "block" }}
                     />
                  </td>
                </tr>

                {/* Company Name */}
               {organization && ( <tr>
                  <td style={{ textAlign: "start" }}>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "800",
                        color: "#222222",
                        letterSpacing: "2px",
                        fontFamily: "Georgia, serif",
                        textTransform: "uppercase",
                      }}
                    >
                      {organization}
                    </span>
                  </td>
                </tr>)}

                {/* Slogan */}
                {slogan && (<tr>
                  <td style={{ textAlign: "start" }}>
                    <span
                      style={{
                        fontSize: "9px",
                        fontWeight: "600",
                        color: "#5ccfcf",
                        letterSpacing: "2px",
                        fontFamily: "Georgia, serif",
                        textTransform: "uppercase",
                      }}
                    >
                     {slogan}
                    </span>
                  </td>
                </tr>)}
              </tbody>
            </table>
          </td>

          {/* RIGHT SECTION */}
          <td
            style={{
              width: "50%",
              background: "#2b2b2b",
              verticalAlign: "top",
              padding: "0",
            }}
          >
            <table style={{ width: "100%", height: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {/* Name & Details */}
                <tr>
                  <td style={{ textAlign: "left", verticalAlign: "middle", padding:"10px 14px" }}>
                    <table style={{ borderCollapse: "collapse" }}>
                      <tbody>
                       {name && (<tr>
                          <td style={{ paddingBottom: "3px" }}>
                            <span
                              style={{
                                fontSize: "16px",
                                fontWeight: "800",
                                color: "#ffffff",
                                letterSpacing: "2px",
                                fontFamily: "Georgia, serif",
                                textTransform: "uppercase",
                              }}
                            >
                              {name}
                            </span>
                          </td>
                        </tr>)}
                        {job_title && (<tr>
                          <td style={{ paddingBottom: "8px" }}>
                            <span
                              style={{
                                fontSize: "9px",
                                fontWeight: "600",
                                color: "#aaaaaa",
                                letterSpacing: "2px",
                                fontFamily: "Georgia, serif",
                                textTransform: "uppercase",
                              }}
                            >
                              {job_title}
                            </span>
                          </td>
                        </tr>)}

                        {/* Teal Divider */}
                       {(phone_no || email || website) && ( <tr>
                          <td style={{ paddingBottom: "7px" }}>
                            <table style={{ borderCollapse: "collapse" }}>
                              <tbody>
                                <tr>
                                  <td style={{ background: "#5ccfcf", width: "28px", height: "2px" }} />
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>)}

                        {/* Contact */}
                       {phone_no && ( <tr>
                          <td style={{ paddingBottom: "3px" }}>
                            <span style={{ fontSize: "9px", color: "#cccccc", fontFamily: "Georgia, serif", letterSpacing: "0.5px" }}>
                              📞 {phone_no}
                            </span>
                          </td>
                        </tr>)}
                        {email && (<tr>
                          <td style={{ paddingBottom: "3px" }}>
                            <span style={{ fontSize: "9px", color: "#cccccc", fontFamily: "Georgia, serif", letterSpacing: "0.5px" }}>
                              ✉ {email}
                            </span>
                          </td>
                        </tr>)}
                        {website && (<tr>
                          <td>
                            <span style={{ fontSize: "9px", color: "#cccccc", fontFamily: "Georgia, serif", letterSpacing: "0.5px" }}>
                              🌐 {website}
                            </span>
                          </td>
                        </tr>)}
                      </tbody>
                    </table>
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

export default VisitingCardA

