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
        height: "270px",
        borderCollapse: "collapse",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        fontFamily: "'Segoe UI', sans-serif",
        margin: "40px auto",
        display: "block",
        backgroundColor: "#ffffff",
        wordBreak: "break-all"
      }}
    >
      <tbody>
        <tr>

          <td>
             <table style={{ width: "20px", height: "270px", borderCollapse: "collapse" }}>
              <tbody>

                {/* TOP PETAL ROW */}
                <tr>
                  <td
                    style={{
                      width: "150px",
                      height: "140px",
                      backgroundColor: "#b03020",
                      borderRadius: "0 0 120px 0",
                      padding: "0",
                      verticalAlign: "top",
                    }}
                  />
                </tr>

                {/* BOTTOM PETAL ROW */}
                <tr>
                  <td
                    style={{
                      width: "150px",
                      height: "140px",
                      background: "linear-gradient(180deg, #e8500a 0%, #f07828 100%)",
                      borderRadius: "0 120px 0 0",
                      padding: "0",
                      verticalAlign: "bottom",
                    }}
                  />
                </tr>

              </tbody>
            </table>
          </td>

          {/* ── LEFT: Logo + Company Name ── */}
          <td
            style={{
              width: "220px",
              backgroundColor: "#ffffff",
              verticalAlign: "top",
              padding: "28px 0 0 28px",
            }}
          >
            <table style={{ borderCollapse: "collapse" }}>
              <tbody>

                {/* Logo box */}
                <tr>
                  <td style={{ paddingBottom: "22px" }}>
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "68px",
                        height: "68px",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src={imageSrc}
                              width="68"
                              height="68"
                              style={{
                                objectFit: "cover", objectPosition: "center", display: "inline-block", width: "68px",
                                height: "68px",
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Company Name */}
                {organization && (<tr>
                  <td>
                    <span style={{ fontSize: "18px", fontWeight: "900", color: "#111", display: "block", textTransform: "uppercase", lineHeight: "1.2", wordBreak: "normal",overflowWrap:"break-word" }}>
                      {organization}
                    </span>
                  </td>
                </tr>)}

                {/* slogan */}
                {slogan && (<tr>
                  <td style={{ paddingTop: "4px" }}>
                    <span style={{ fontSize: "13px", color: "#e04030", fontStyle: "italic", display: "block" }}>
                      {slogan}
                    </span>
                  </td>
                </tr>)}

              </tbody>
            </table>
          </td>

          {/* ── MIDDLE: Contact Info ── */}
          <td
            style={{
              width: "260px",
              height: "270px",
              backgroundColor: "#ffffff",
              verticalAlign: "middle",
              padding: "0 0 0 10px",
            }}
          >
            <table style={{ borderCollapse: "collapse" }}>
              <tbody>
                {name && (<tr>
                  <td style={{ paddingBottom: "2px" }}>
                    <span style={{ fontSize: "17px", fontWeight: "900", color: "#111", display: "block" }}>{name}</span>
                  </td>
                </tr>)}
                {job_title && (<tr>
                  <td style={{ paddingBottom: "12px" }}>
                    <span style={{ fontSize: "10px", color: "#e04030", fontWeight: "500", display: "block" }}>{job_title}</span>
                  </td>
                </tr>)}
                {(name || job_title) && (<tr>
                  <td style={{ paddingBottom: "12px" }}>
                    <table style={{ borderCollapse: "collapse", width: "130px" }}>
                      <tbody>
                        <tr>
                          <td style={{ height: "1px", backgroundColor: "#ddd" }} />
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>)}

                {contacts.map((item, i) => (
                  <tr key={i}>
                    <td style={{   }}>
                      <table style={{ borderCollapse: "collapse" }}>
                        <tbody>
                          <tr>
                            <td style={{ verticalAlign: "middle" }}>
                              <table
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  borderCollapse: "collapse",
                                  borderRadius: "50%",
                                  border: "1.5px solid #e04030",
                                  backgroundColor: "#fff5f5",
                                  overflow: "hidden",
                                }}
                              >
                                <tbody>
                                  <tr>
                                    <td style={{ textAlign: "center", verticalAlign: "middle", fontSize: "11px" }}>
                                      {item.icon}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td style={{ paddingLeft: "8px", fontSize: "12px", color: "#444", verticalAlign: "middle" }}>
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

          {/* ── RIGHT: Two petal wave blobs ── */}
          <td
            style={{
              width: "20px",
              backgroundColor: "#ffffff",
              verticalAlign: "top",
              padding: "0",
            }}
          >
            {/*
              Two petals stacked:
              Top petal  = dark red,   curves from top-right, rounds bottom-left
              Bottom petal = orange,   curves from bottom-right, rounds top-left
              Each is exactly half the card height
            */}
            <table style={{ width: "20px", height: "270px", borderCollapse: "collapse" }}>
              <tbody>

                {/* TOP PETAL ROW */}
                <tr>
                  <td style={{ width: "30px", height: "140px", backgroundColor: "#ffffff", padding: "0" }} />
                  <td
                    style={{
                      width: "150px",
                      height: "140px",
                      backgroundColor: "#b03020",
                      borderRadius: "0 0 0 120px",
                      padding: "0",
                      verticalAlign: "top",
                    }}
                  />
                </tr>

                {/* BOTTOM PETAL ROW */}
                <tr>
                  <td style={{ width: "30px", height: "140px", backgroundColor: "#ffffff", padding: "0" }} />
                  <td
                    style={{
                      width: "150px",
                      height: "140px",
                      background: "linear-gradient(180deg, #e8500a 0%, #f07828 100%)",
                      borderRadius: "120px 0 0 0",
                      padding: "0",
                      verticalAlign: "bottom",
                    }}
                  />
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
