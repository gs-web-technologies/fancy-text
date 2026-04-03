import { POWERED_BY } from '@/utils/const';
import Link from 'next/link';
import React from 'react'

function SignatureTemlateO({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook, hasStarted }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar3.png";
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

  const contacts = [];


  if (organization) {
    contacts.push(
      {
        letter: "A",
        value: organization,
      }
    );
  }
  if (phone_no) {
    contacts.push(
      {
        letter: "P",
        value: phone_no,
      }
    );
  }
  if (email) {
    contacts.push(
      {
        letter: "E",
        value: email,
      }
    );
  }

  return (
    <table style={{ backgroundColor: "#ffffff", width: "480px", padding: "30px", display: "flex", justifyContent: "center" }}>
      <tbody>
        <tr>
          <td>


            <table
              cellPadding="0"
              cellSpacing="0"
              style={{
                width: "420px",
                minWidth: "420px",
                backgroundColor: "#ffffff",
                fontFamily: "'Segoe UI', Arial, sans-serif",
              }}
            >
              <tbody>

                {/* ── "Kind regards," handwriting text ── */}
                {name && (<tr>
                  <td colSpan={2} style={{ paddingBottom: "18px" }}>
                    <div
                      style={{
                        fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                        fontSize: "22px",
                        color: "#222222",
                        fontWeight: "700",
                        lineHeight: "1",
                      }}
                    >
                      {name}
                    </div>
                  </td>
                </tr>)}

                {/* ── Main row: photo | info ── */}
                <tr>
                  {/* Photo column */}
                  <td
                    style={{
                      verticalAlign: "top",
                      paddingRight: "16px",
                      width: "70px",
                    }}
                  >
                    <div
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "2px solid #e8e8e8",
                        backgroundColor: "#f0e8e0",
                      }}
                    >
                      {/* Replace /profile.jpg with your actual photo */}
                      <img
                        src={imageSrc}
                        alt="Alex Perez"
                        width="120"
                        height="120"
                        style={{
                          objectFit: "cover",
                          objectPosition: "top center",
                          display: "block",
                        }}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentNode.style.backgroundColor = "#d4b8a0";
                        }}
                      />
                    </div>
                    <table style={{ margin: "5px" }}>
                      <tbody>

                        <tr>

                          <td style={{ textAlign: "right", fontSize: "10px", color: "black" }}>
                            <i>Powered by <strong>{POWERED_BY}</strong></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  {/* Info column */}
                  <td style={{ verticalAlign: "top" }}>

                    {/* Name */}
                    {name && (<div
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "#1a1a1a",
                        marginBottom: "2px",
                        letterSpacing: "0.1px",
                      }}
                    >
                      {name}
                    </div>)}

                    {/* Title line — "CFO at Finance Mile" with colored company */}
                    {job_title && (<div style={{ fontSize: "12px", color: "#555555", marginBottom: "10px" }}>
                      <span style={{ color: "#29b6f6", fontWeight: "600" }}> {job_title ? job_title : 'Job Title'} </span>
                    </div>)}

                    {/* Thin blue divider */}
                    <div
                      style={{
                        height: "1.5px",
                        backgroundColor: "#29b6f6",
                        width: "100%",
                        marginBottom: "10px",
                        borderRadius: "2px",
                      }}
                    />

                    {/* Contact rows */}
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        {contacts.map((row, i) => (
                          <tr key={i}>
                            <td
                              style={{
                                fontSize: "10px",
                                color: "#aaaaaa",
                                fontWeight: "700",
                                paddingRight: "6px",
                                paddingBottom: "5px",
                                verticalAlign: "top",
                                letterSpacing: "0.5px",
                              }}
                            >
                              {row.letter}
                            </td>
                            <td>
                              {row.letter == "E" ? (
                                <a style={{
                                  textDecoration: "none", fontSize: "11px",
                                  color: "#444444",
                                  paddingBottom: "5px",
                                  verticalAlign: "top",
                                  lineHeight: "1.5",
                                }}>
                                  {row.value}
                                </a>
                              ) : (
                                <span style={{
                                  fontSize: "11px",
                                  color: "#444444",
                                  paddingBottom: "5px",
                                  verticalAlign: "top",
                                  lineHeight: "1.5",
                                }}>
                                  {row.value}
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Social icons */}
                    <table cellPadding="0" cellSpacing="0" style={{ marginTop: "10px" }}>
                      <tbody>
                        <tr>
                          {/* Facebook */}

                          {facebook && (<td style={{ paddingRight: "8px" }}>
                            <a
                              href={facebook || "https://facebook.com"}
                              style={{
                                width: "28px",
                                height: "28px",
                                backgroundColor: "#1877f2",
                                textDecoration: "none",
                              }}
                            >
                              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="20" height="20" style={{
                                display: "block", margin: "4px"
                              }} />
                            </a>
                          </td>)}

                          {/* Twitter / X */}

                          {twitter && (<td style={{ paddingRight: "8px" }}>
                            <a
                              href={twitter || "https://x.com"}
                              style={{
                                width: "28px",
                                height: "28px",
                                borderRadius: "50%",
                                backgroundColor: "white",
                                textDecoration: "none",
                              }}
                            >
                              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="20" height="20" style={{ display: "block" }} />
                            </a>
                          </td>)}
                          {/* instagram */}

                          {instagram && (<td style={{ paddingRight: "8px" }}>
                            <a
                              href={instagram || "https://instagram.com"}
                              style={{
                                width: "28px",
                                height: "28px",
                                borderRadius: "50%",
                                background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                                textDecoration: "none",
                              }}
                            >
                              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="20" height="20" style={{
                                display: "block"
                              }} />
                            </a>
                          </td>)}
                         {linkedin && ( <td style={{ paddingRight: "8px" }}>
                            {/* linkedin */}
                            <a
                              href={linkedin || "https://linkedin.com"}
                              style={{
                                width: "28px",
                                height: "28px",
                                borderRadius: "50%",
                                backgroundColor: "white",
                                // border: "2px solid #0A66C2",
                                textDecoration: "none",
                              }}
                            >
                              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="20" height="20" style={{ display: "block" }} />
                            </a>
                          </td>)}

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

export default SignatureTemlateO