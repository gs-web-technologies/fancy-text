import { POWERED_BY } from '@/utils/const';
import Link from 'next/link';
import React from 'react'

function SignatureTemlateN({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar3.png";
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
              position: "relative",
              padding: "0",
            }}
          >
            {/* Decorative flower top-left */}
            <div style={{ position: "absolute", top: "8px", left: "6px", opacity: 0.5 }}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="white">
                <circle cx="18" cy="9" r="6" />
                <circle cx="27" cy="14" r="6" />
                <circle cx="27" cy="25" r="6" />
                <circle cx="18" cy="30" r="6" />
                <circle cx="9" cy="25" r="6" />
                <circle cx="9" cy="14" r="6" />
                <circle cx="18" cy="18" r="5" />
              </svg>
            </div>

            {/* Decorative flower bottom-left */}
            <div style={{ position: "absolute", bottom: "8px", left: "4px", opacity: 0.35 }}>
              <svg width="28" height="28" viewBox="0 0 36 36" fill="white">
                <circle cx="18" cy="9" r="6" />
                <circle cx="27" cy="14" r="6" />
                <circle cx="27" cy="25" r="6" />
                <circle cx="18" cy="30" r="6" />
                <circle cx="9" cy="25" r="6" />
                <circle cx="9" cy="14" r="6" />
                <circle cx="18" cy="18" r="5" />
              </svg>
            </div>

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
                <tr>
                  <td style={{ paddingBottom: "4px" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "6px", verticalAlign: "middle" }}>
                            {/* Small flower icon */}
                            <svg width="16" height="16" viewBox="0 0 36 36" fill="#38c9c0">
                              <circle cx="18" cy="9" r="6" />
                              <circle cx="27" cy="14" r="6" />
                              <circle cx="27" cy="25" r="6" />
                              <circle cx="18" cy="30" r="6" />
                              <circle cx="9" cy="25" r="6" />
                              <circle cx="9" cy="14" r="6" />
                              <circle cx="18" cy="18" r="5" />
                            </svg>
                          </td>
                          <td
                            style={{
                              fontSize: "12px",
                              color: "#38c9c0",
                              fontStyle: "italic",
                              fontFamily: "Georgia, serif",
                            }}
                          >
                            {job_title ? job_title : 'Job Title'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Name */}
                <tr>
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
                      {name ? name : 'Your Name'}
                    </p>
                  </td>
                </tr>



                {/* Email */}
                <tr>
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
                            {email ? email : 'youremail@gmail.com'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Phone */}
                <tr>
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
                </tr>

                {/* Website */}
                <tr>
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
                             <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" width="13" height="13" style={{ display: "block"
    }} />
                            </div>
                          </td>
                          <td style={{ fontSize: "12px", color: "#555555", fontFamily: "Arial, sans-serif" }}>
                            {linkedin ? linkedin : 'Your LinkedIn'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Address */}
                <tr>
                  <td>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={{ padding: "7px 0px 2px 0px", verticalAlign: "middle" }}>
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
                          <td style={{ padding: "7px 0px 2px 0px", fontSize: "12px", color: "#555555", fontFamily: "Arial, sans-serif" }}>
                            {organization ? organization : 'Organization'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
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
                {[
                  {
                    label: "Twitter",
                    href: twitter || 'https://x.com',
                    svg: (
                      <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="13" height="13" style={{ display: "block" }} />
                    ),
                  },
                  {
                    label: "Facebook",
                    href: facebook || 'https://facebook.com',
                    svg: (
                      <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="13" height="13" style={{
                        display: "block"
                      }} />
                    ),
                  },
                  {
                    label: "Instagram",
                    href: instagram || 'https://instagram.com',
                    svg: (
                      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="13" height="13" style={{
                        display: "block"
                      }} />
                    ),
                  },
                  {
                    label: "LinkedIn",
                    href: linkedin || 'https://linkedin.com',
                    svg: (
                      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="13" height="13" style={{ display: "block" }} />
                    ),
                  },
                ].map((item, i) => (
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