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
    <table
      style={{
        width: "520px",
        height: "250px",
        borderCollapse: "collapse",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        fontFamily: "'Segoe UI', sans-serif",
        margin: "40px auto",
        display: "block",
        backgroundColor: "#c71c1c",
        wordBreak:"normal",
        overflowWrap: "break-word"
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
            <table style={{ width: "100%", height: "370", borderCollapse: "collapse" }}>
              <tbody>

                {/* TOP: red triangle top-left + name area */}
                <tr>
                  <td style={{ padding: "0", height: "100px", verticalAlign: "top" }}>
                    <table style={{ width: "100%", height: "100px", borderCollapse: "collapse" }}>
                      <tbody>
                        <tr>
                          {/* Name area */}
                          <td style={{ verticalAlign: "middle", padding: "0 10px 0 16px" }}>
                            {name && (<span
                              style={{
                                fontSize: "20px",
                                fontWeight: "900",
                                color: "#1a1a2e",
                                letterSpacing: "1.5px",
                                display: "block",
                                textTransform: "uppercase",
                                lineHeight: "1.15",
                              }}
                            >
                              {name}
                            </span>)}
                            {job_title && (<span
                              style={{
                                fontSize: "10px",
                                color: "#cc1f1f",
                                fontWeight: "500",
                                display: "block",
                                marginTop: "5px",
                                letterSpacing: "0.5px",
                              }}
                            >
                              {job_title}
                            </span>)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* MIDDLE: contact info */}
                <tr>
                  <td style={{ padding: "12px 18px 0 18px", verticalAlign: "top" }}>
                    <table style={{ borderCollapse: "collapse" }}>
                      <tbody>
                        {contacts.map((item, i) => (
                          <tr key={i}>
                            <td style={{ paddingBottom: i < 4 ? "9px" : "0" }}>
                              <table style={{ borderCollapse: "collapse" }}>
                                <tbody>
                                  <tr>
                                    <td style={{ verticalAlign: "middle" }}>
                                      <table
                                        style={{
                                          width: "22px",
                                          height: "22px",
                                          borderCollapse: "collapse",
                                          borderRadius: "50%",
                                          border: "1.5px solid #cc1f1f",
                                          backgroundColor: "#fff0f0",
                                          overflow: "hidden",
                                        }}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              style={{
                                                textAlign: "center",
                                                verticalAlign: "middle",
                                                fontSize: "10px",
                                                lineHeight: "1",
                                              }}
                                            >
                                              {item.icon}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td
                                      style={{
                                        paddingLeft: "8px",
                                        verticalAlign: "middle",
                                        fontSize: "12px",
                                        color: "#333",
                                        whiteSpace: i < 4 ? "nowrap" : "normal",
                                        maxWidth: "200px",
                                      }}
                                    >
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

                {/* BOTTOM: dark triangle bottom-left */}
                <tr>
                  <td style={{ padding: "0", height: "50px", verticalAlign: "bottom" }}>
                    <table style={{ width: "100%", height: "50px", borderCollapse: "collapse" }}>
                      <tbody>
                        <tr style={{ verticalAlign: "bottom" }}>
                          {/* Dark solid bottom-left */}
                          <td
                            style={{
                              width: "60px",
                              height: "50px",
                              backgroundColor: "#1a1a2e",
                              padding: "0",
                              verticalAlign: "bottom",
                            }}
                          />
                          {/* Diagonal stepped dark → white */}
                          {[50, 43, 36, 29, 22, 15, 8, 3].map((h, i) => (
                            <td
                              key={i}
                              style={{
                                width: "9px",
                                height: `${h}px`,
                                backgroundColor: "#1a1a2e",
                                verticalAlign: "bottom",
                                padding: "0",
                              }}
                            />
                          ))}
                          <td style={{ backgroundColor: "#aa3030", padding: "0" }} />
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
              verticalAlign: "top",
              padding: "0",
            }}
          >
            <table style={{ width: "100%", height: "270px", borderCollapse: "collapse" }}>
              <tbody>


                {/* MIDDLE: Logo + company */}
                <tr>
                  <td style={{ verticalAlign: "middle", padding: "10px 24px", textAlign: "center" }}>
                    <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                      <tbody>

                        {/* V chevron logo using table cells */}
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
                            <td style={{ textAlign: "center", paddingBottom: "12px" }}>
                              <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                <tbody>
                                  <tr>
                                    {/* Left arm of V */}
                                    <td
                                      style={{
                                        width: "18px",
                                        height: "36px",
                                        backgroundColor: "#cc1f1f",
                                        borderRadius: "4px 0 0 4px",
                                        padding: "0",
                                        transform: "skewY(25deg)",
                                        display: "inline-block",
                                      }}
                                    />
                                    <td style={{ width: "4px" }} />
                                    {/* Right arm of V */}
                                    <td
                                      style={{
                                        width: "18px",
                                        height: "36px",
                                        backgroundColor: "#cc1f1f",
                                        borderRadius: "0 4px 4px 0",
                                        padding: "0",
                                      }}
                                    />
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          )}
                        </tr>

                        {/* Company Logo text */}
                        {slogan && (<tr>
                          <td style={{ textAlign: "center" }}>
                            <span
                              style={{
                                fontSize: "16px",
                                fontWeight: "900",
                                color: "#ffffff",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                display: "block",
                              }}
                            >
                              {slogan}
                            </span>
                          </td>
                        </tr>)}
                        {organization && (<tr>
                          <td style={{ textAlign: "center", paddingTop: "4px" }}>
                            <span
                              style={{
                                fontSize: "9px",
                                color: "#ffffff",
                                letterSpacing: "1.5px",
                                display: "block",
                                textTransform: "uppercase",
                              }}
                            >
                              {organization}
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

export default VisitingCardO



