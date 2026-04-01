import { POWERED_BY } from '@/utils/const';
import Link from 'next/link';
import React from 'react'

function SignatureTemlateL({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar.png";
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
          <td style={{ background: "linear-gradient(135deg, #f06e6e 20%, #f06e6e 0%, #e99595 80%, #e9dede 20%)", verticalAlign: "middle", padding: "0px 10px 0px 10px", width: "120px" }}>
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
          <td style={{ background: "linear-gradient(-135deg, #f06e6e 20%, #f06e6e 0%, #e99595 80%, #e9dede 20%)", verticalAlign: "middle", paddingLeft: "24px" }}>
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                {/* Name */}
                <tr>
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
                </tr>

                {/* Title */}
                <tr>
                  <td style={{ paddingBottom: "2px" }}>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "#0f0e0e",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {job_title ? job_title : 'Job Title'}
                    </p>
                  </td>
                </tr>

                {/* Company */}
                <tr>
                  <td style={{ paddingBottom: "12px" }}>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#0c0a0a",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {organization ? organization : 'Organiztion'}
                    </p>
                  </td>
                </tr>

                {/* Phone */}
                <tr>
                  <td>
                    <p
                      style={{
                        margin: "0 0 2px 0",
                        fontSize: "14px",
                        color: "#0f0f0f",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      <b>
                        {phone_no ? phone_no : "(720) 891-7858"}
                      </b>
                    </p>
                  </td>
                </tr>

                {/* Email */}
                <tr>
                  <td>
                    <p
                      style={{
                        margin: "0 0 2px 0",
                        fontSize: "14px",
                        color: "#0a0a0a",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      <b>
                        {email ? email : "your_email@gmail.com"}
                      </b>
                    </p>
                  </td>
                </tr>

                {/* Website */}
                <tr>
                  <td style={{ paddingBottom: "12px" }}>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "14px",
                        color: "#0f0909",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      <b>
                        {linkedin ? linkedin : "Your linkedIn"}
                      </b>
                    </p>
                  </td>
                </tr>

                {/* Social Icons */}
                <tr>
                  <td>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          {/* Instagram */}
                          <td style={{ padding: "10px 14px 10px 0px" }}>
                            <a href={facebook ? facebook : ''}>
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

                          {/* Facebook */}
                          <td style={{ padding: "10px 14px 10px 0px" }}>
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
                          </td>

                          {/* Twitter */}
                          <td style={{ padding: "10px 14px 10px 0px" }}>
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
                          </td>

                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <div>
                      <span style={{ color: "white", fontSize: "10px" }}><i>Powered by <strong>{POWERED_BY}</strong></i></span>
                    </div>
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