import { POWERED_BY } from '@/utils/const';
import Link from 'next/link';
import React from 'react'

function SignatureTemlateQ({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook, hasStarted }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar5.png";
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


  const SocialLinks = [];

  if (facebook) {
    SocialLinks.push(
      {
        label: "facebook",
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="15" height="15" style={{
            display: "block"
          }} />
        ),
        href: facebook,
      }
    );
  }

  if (instagram) {
    SocialLinks.push(
      {
        label: "Instagram",
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="15" height="15" style={{
            display: "block"
          }} />),
        href: instagram,
      }
    );
  }

  if (twitter) {
    SocialLinks.push(
      {
        label: "Twitter",
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="15" height="15" style={{ display: "block" }} />
        ),
        href: twitter,
      }
    );
  }


  const contacts = [];
  if (phone_no) {
    contacts.push(
      {
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="13" height="13" style={{ display: "block" }} />

        ),
        text: phone_no,
      }
    );
  }

  if (linkedin) {
    contacts.push(
      {
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" width="13" height="13" style={{
            display: "block"
          }} />
        ),
        text: <a style={{ textDecoration: "none" }}> {linkedin} </a>,
      }
    );
  }
  if (organization) {
    contacts.push(
      {
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="13" height="13" style={{ display: "block" }} />
        ),
        text: organization,
      }
    );
  }

  return (

    <table style={{ display: "flex", justifyContent: "center" }}>
      <tbody>
        <tr>
          <td>

            <table
              cellPadding="0"
              cellSpacing="0"
              style={{
                width: "660px",
                minWidth: "660px",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                overflow: "hidden",
                fontFamily: "'Segoe UI', Arial, sans-serif",
                boxShadow: "0 2px 14px rgba(0,0,0,0.09)",
                position: "relative",
              }}
            >
              <tbody>
                <tr>

                  {/* ═══════════════════════════════════════════
                LEFT SECTION — Name, photo, contacts
            ════════════════════════════════════════════ */}
                  <td
                    style={{
                      width: "320px",
                      padding: "22px 0 0 0",
                      verticalAlign: "top",
                    }}
                  >

                    <div style={{ position: "relative", zIndex: 1, padding: "0 20px 0 22px" }}>

                      {/* Top row: Name + Photo side by side */}
                      <table cellPadding="0" cellSpacing="0" style={{ width: "100%", marginBottom: "14px" }}>
                        <tbody>
                          <tr>
                            {/* Name & title */}
                            <td style={{ verticalAlign: "top" }}>
                              {name && (<div style={{
                                fontSize: "16px",
                                fontWeight: "800",
                                color: "#1a1a1a",
                                letterSpacing: "0.3px",
                                lineHeight: "1.2",
                                marginBottom: "3px",
                              }}>
                                {name}
                              </div>)}

                              {job_title && (<div style={{
                                fontSize: "9.5px",
                                color: "#888888",
                                letterSpacing: "0.3px",
                                marginBottom: "0",
                              }}>
                                {job_title}
                              </div>)}

                              {/* Yellow underline accent */}
                              <div style={{
                                height: "2.5px",
                                width: "40px",
                                backgroundColor: "#f5c518",
                                borderRadius: "2px",
                                marginTop: "6px",
                              }} />
                            </td>

                            {/* Circular photo */}
                            <td style={{ verticalAlign: "top", paddingLeft: "14px", width: "68px" }}>
                              <div style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "50%",
                                overflow: "hidden",
                                border: "3px solid #f5c518",
                                backgroundColor: "#e0e0e0",
                                flexShrink: 0,
                              }}>
                                <img
                                  src={imageSrc}
                                  alt="Olivia Johnson"
                                  width="100"
                                  height="100"
                                  style={{ objectFit: "cover", display: "block" }}
                                  onError={(e) => {
                                    e.target.style.display = "none";
                                    e.target.parentNode.style.backgroundColor = "#c8c0b8";
                                  }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      {/* Contact rows */}
                      <table cellPadding="0" cellSpacing="0" style={{ marginBottom: "0" }}>
                        <tbody>
                          {contacts.map((item, i) => (
                            <tr key={i}>
                              <td style={{ paddingBottom: "7px", verticalAlign: "middle" }}>
                                <table cellPadding="0" cellSpacing="0">
                                  <tbody>
                                    <tr>
                                      <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                                        {item.icon}
                                      </td>
                                      <td style={{
                                        fontSize: "11px",
                                        color: "#0e0d0d",
                                        verticalAlign: "middle",
                                      }}>
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
                    </div>

                    {/* Yellow bottom bar with social icons */}
                    <div style={{
                      backgroundColor: "#f5c518",
                      padding: "8px 22px",
                      marginTop: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                      <table cellPadding="0" cellSpacing="0">
                        <tbody>
                          <tr>
                            {SocialLinks.map((s, i) => (
                              <td key={i} style={{ paddingRight: i < 2 ? "7px" : "0" }}>
                                <a href={s.href} style={{ display: "inline-block", textDecoration: "none" }}>
                                  <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "24px", height: "24px", borderRadius: "50%" }}>
                                    <tbody>
                                      <tr>
                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                          {s.icon}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </a>
                              </td>
                            ))}
                            <td style={{ textAlign: "right", paddingLeft: "70px" }}>
                              <div style={{ textAlign: "right", fontSize: "10px", color: "white" }}>
                                <i>Powered by <strong>{POWERED_BY}</strong></i>
                              </div>
                            </td>

                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </td>

                  {/* Thin vertical divider */}
                  <td style={{ width: "1px", backgroundColor: "#eeeeee", padding: "0" }} />

                  {/* ═══════════════════════════════════════════
                RIGHT SECTION — Company name + description
            ════════════════════════════════════════════ */}
                  <td
                    style={{
                      padding: "24px 24px 24px 28px",
                      verticalAlign: "top",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    {/* Company logo icon + name */}
                   {organization && ( <table cellPadding="0" cellSpacing="0" style={{ marginBottom: "8px" }}>
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "10px", verticalAlign: "middle" }}>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  {/* Left circle */}
                                  <td style={{ paddingRight: "2px" }}>
                                    <div
                                      style={{
                                        width: "14px",
                                        height: "14px",
                                        border: "2px solid #f5c518",
                                        borderRadius: "50%",
                                        backgroundColor: "#f5c518",
                                      }}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            <div style={{ fontSize: "15px", fontWeight: "800", color: "#1a1a1a", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                              {organization ? organization : "Organization"}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>)}

                    {/* Yellow divider */}
                    <div style={{
                      height: "2px",
                      backgroundColor: "#f5c518",
                      width: "100%",
                      marginBottom: "12px",
                      borderRadius: "2px",
                    }} />

                    {/* Company description */}
                    {email && (<a style={{
                      fontSize: "10.5px",
                      color: "#030303",
                      lineHeight: "1.7",
                      maxWidth: "240px",
                      textDecoration: "none"
                    }}>
                      {email ? email : "your_email.com"}
                    </a>)}
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

export default SignatureTemlateQ