import { POWERED_BY } from '@/utils/const';
import Link from 'next/link';
import React from 'react'

function SignatureTemlateL({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook, hasStarted }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar.png";
  if (!hasStarted) {
    name = "Your name";
    email = "youremail@example.com";
    job_title = "Job Title";
    phone_no = "+91-229229929";
    organization = "Organization";
    linkedin = "https://linkedin.com";
    instagram = "https://instagram.com";
    twitter = "https://twitter.com";
    facebook = "https://facebook.com"
  }
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: "520px",
        backgroundColor: "#ffffff",
        fontFamily: "Georgia, 'Times New Roman', serif",
        borderCollapse: "collapse",
      }}
    >
      <tbody>
        <tr>
          {/* LEFT: Circular Profile Photo */}
          <td style={{ background: "linear-gradient(-135deg, #f06e6e 20%, #f06e6e 0%, #e99595 80%, #e9dede 20%)", verticalAlign: "middle", padding: "0px 10px 0px 10px", width: "120px" }}>
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "none",
              }}
            >
              <img
                src={imageSrc}
                alt="Profile Photo"
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </td>

          {/* VERTICAL DIVIDER */}
          <td
            style={{
              width: "1px",
              backgroundColor: "#cccccc",
              padding: "0",
            }}
          />

          {/* RIGHT: Info */}
          <td style={{ backgroundColor: "#f06e6e", verticalAlign: "middle", paddingLeft: "24px" }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                {/* Name */}
                {name && (<tr>
                  <td>
                    <p
                      style={{
                        margin: "0 0 2px 0",
                        padding: "8px 0px 5px 0px",
                        fontSize: "30px",
                        fontWeight: "bold",
                        color: "#fffcfc",
                        letterSpacing: "0.5px",
                        lineHeight: "1.1",
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      {name ? name : 'Your Name'}
                    </p>
                  </td>
                </tr>)}

                {/* Title */}
                {job_title && (<tr>
                  <td style={{ paddingBottom: "2px" }}>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "#f7f3f3",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {job_title ? job_title : 'Job Title'}
                    </p>
                  </td>
                </tr>)}

                {/* Company */}
                {organization && (<tr>
                  <td style={{ paddingBottom: "12px" }}>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#f8f2f2",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {organization ? organization : 'Organiztion'}
                    </p>
                  </td>
                </tr>)}

                {/* Phone */}
                {phone_no && (<tr>
                  <td>
                    <p
                      style={{
                        margin: "0 0 2px 0",
                        fontSize: "14px",
                        color: "#f3f2f2",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      <b>
                        {phone_no ? phone_no : "(720) 891-7858"}
                      </b>
                    </p>
                  </td>
                </tr>)}

                {/* Email */}
                {email && (<tr>
                  <td>
                    <p
                      style={{
                        margin: "0 0 2px 0",
                        fontSize: "14px",
                        color: "#fcfcfc",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      <b>
                        {email ? (<a style={{
                          textDecoration: "none",
                          margin: "0 0 2px 0",
                          fontSize: "14px",
                          color: "#f7f4f4",
                          fontFamily: "Arial, sans-serif",
                        }}>{email}</a>) : "your_email@gmail.com"}
                      </b>
                    </p>
                  </td>
                </tr>)}

                {/* Social Icons */}
                <tr style={{ width: "100%" }}>
                  <td style={{ width: "50%" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          {/* Instagram */}
                          {instagram && (<td style={{ padding: "10px 14px 10px 0px" }}>
                            <a href={instagram ? instagram : ''}>
                              <div
                                style={{
                                  width: "22px",
                                  height: "22px",
                                }}
                              >
                                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="100%" height="100%" style={{
                                  display: "block"
                                }} />
                              </div>
                            </a>
                          </td>
                          )}
                          {/* Facebook */}
                          {facebook && (<td style={{ padding: "10px 14px 10px 0px" }}>
                            <a href={facebook ? facebook : ''}>
                              <div
                                style={{
                                  width: "22px",
                                  height: "22px",
                                }}
                              >
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="100%" height="100%" style={{
                                  display: "block"
                                }} />
                              </div>
                            </a>
                          </td>)}

                          {/* Twitter */}
                          {twitter && (<td style={{ padding: "10px 14px 10px 0px" }}>
                            <a href={twitter ? twitter : ''}>
                              <div
                                style={{
                                  width: "22px",
                                  height: "22px",
                                }}
                              >
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="100%" height="100%" style={{ display: "block" }} />
                              </div>
                            </a>
                          </td>)}

                          {/* linkedin */}
                         {linkedin && ( <td style={{ padding: "10px 14px 10px 0px" }}>
                            <a href={linkedin ? linkedin : ''}>
                              <div
                                style={{
                                  width: "22px",
                                  height: "22px",
                                }}
                              >
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="100%" height="100%" style={{ display: "block" }} />
                              </div>
                            </a>
                          </td>)}
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ wordSpacing: "nowrap", width: "auto", padding: "6px", textAlign: "center" }}>
                            <span style={{ color: "white", fontSize: "10px" }}><i>Powered by <strong>{POWERED_BY}</strong></i></span>
                          </td>

                        </tr>
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

export default SignatureTemlateL