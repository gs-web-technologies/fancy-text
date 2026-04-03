import { POWERED_BY } from '@/utils/const';
import Link from 'next/link';
import React from 'react'

function SignatureTemlateN({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook, hasStarted }) {
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

  const SocialLinks = [];

  if (twitter) {
    SocialLinks.push(
      {
        label: "Twitter",
        href: twitter,
        svg: (
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="13" height="13" style={{ display: "block" }} />
        ),
      }
    );
  }

  if (facebook) {
    SocialLinks.push(
      {
        label: "Facebook",
        href: facebook,
        svg: (
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="13" height="13" style={{ display: "block" }} />
        ),
      }
    );
  }

  if (instagram) {
    SocialLinks.push(
      {
        label: "Instagram",
        href: instagram,
        svg: (
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="13" height="13" style={{
            display: "block"
          }} />
        ),
      }
    );
  }

  if (linkedin) {
    SocialLinks.push(
      {
        label: "LinkedIn",
        href: linkedin,
        svg: (
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="13" height="13" style={{ display: "block" }} />
        ),
      }
    );
  }

  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: "580px",
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
        borderCollapse: "collapse",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      }}
    >
      <tbody>
        <tr>
          {/* LEFT: Gradient teal/blue panel with floral deco + photo */}
          <td
            style={{
              width: "160px",
              background: "linear-gradient(160deg, #a8edea 0%, #38c9c0 40%, #3b9fd4 100%)",
              verticalAlign: "bottom",
              padding: "0",
            }}
          >
            {/* Profile photo at bottom of panel */}
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center", paddingTop: "30px", paddingBottom: "0" }}>
                    <div
                      style={{
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "4px solid #ffffff",
                        margin: "0 auto",
                        backgroundColor: "#cde8f5",
                      }}
                    >
                      <img
                        src={imageSrc}
                        alt="Bella Warren"
                        style={{
                          width: "110px",
                          height: "110px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>

                  </td>
                </tr>
                {/* Filler to push photo to bottom */}
                <tr>
                  <td style={{ height: "20px" }} />
                </tr>
              </tbody>
            </table>
            <div style={{ fontSize: "10px", color: "white", padding: "4px 12px" }}>
              <i>Powered by <strong>{POWERED_BY}</strong></i>
            </div>
          </td>

          {/* CENTER: Main info */}
          <td style={{ padding: "20px 18px", verticalAlign: "top" }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                {/* Brand logo row */}
                {job_title && (<tr>
                  <td style={{ paddingBottom: "4px" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td
                            style={{
                              fontSize: "12px",
                              color: "#38c9c0",
                              fontStyle: "italic",
                              fontFamily: "Georgia, serif",
                            }}
                          >
                            {job_title}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>)}

                {/* Name */}
                {name && (<tr>
                  <td style={{ paddingBottom: "2px" }}>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "26px",
                        fontWeight: "bold",
                        color: "#1a1a2e",
                        fontFamily: "Georgia, 'Times New Roman', serif",
                        fontStyle: "italic",
                        lineHeight: "1.1",
                      }}
                    >
                      {name}
                    </p>
                  </td>
                </tr>)}



                {/* Email */}
                {email && (<tr>
                  <td style={{ padding: "7px 0px 2px 0px" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                backgroundColor: "#e8f8f7",
                                borderRadius: "3px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="13" height="13" style={{ display: "block" }} />
                            </div>
                          </td>
                          <td style={{ fontSize: "12px", color: "#555555", fontFamily: "Arial, sans-serif" }}>
                            <a style={{ textDecoration: "none" }}>
                              {email}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>)}

                {/* Phone */}
                {phone_no && (<tr>
                  <td style={{ padding: "7px 0px 2px 0px" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                backgroundColor: "#e8f8f7",
                                borderRadius: "3px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="13" height="13" style={{ display: "block" }} />

                            </div>
                          </td>
                          <td style={{ fontSize: "12px", color: "#555555", fontFamily: "Arial, sans-serif" }}>
                            {phone_no ? phone_no : '(380) 355-0128'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>)}

                {/* Address */}
                {organization && (<tr>
                  <td style={{ padding: "7px 0px 2px 0px" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                backgroundColor: "#e8f8f7",
                                borderRadius: "3px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="13" height="13" style={{ display: "block" }} />

                            </div>
                          </td>
                          <td style={{ fontSize: "12px", color: "#555555", fontFamily: "Arial, sans-serif" }}>
                            {organization ? organization : 'Organization'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>)}
              </tbody>
            </table>
          </td>

          {/* RIGHT: Vertical social icons bar */}
          <td
            style={{
              width: "40px",
              background: "linear-gradient(180deg, #a8edea 0%, #38c9c0 50%, #3b9fd4 100%)",
              verticalAlign: "middle",
              padding: "16px 4px 4px 5px",
            }}
          >
            <table cellPadding="" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                {SocialLinks.map((item, i) => (
                  <tr key={i}>
                    <td
                      style={{
                        textAlign: "center",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <Link href={item.href}>
                        {item.svg}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SignatureTemlateN