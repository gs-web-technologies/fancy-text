import { POWERED_BY } from '@/utils/const';
import Link from 'next/link';
import React from 'react'

function SignatureTemlateT({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar5.png";
  const SocialLinks = [
    {
      label: "facebook",
      icon: (<img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="13" height="13" style={{
        display: "block"
      }} />
      ),
      href: facebook || "https://facebook.com",
    },
    {
      label: "twitter",
      icon: (<img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="13" height="13" style={{ display: "block", backgroundColor:"black" }} />
      ),
      href: linkedin || "https://linkedin.com",
    },
    {
      label: "Instagram",
      icon: (<img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="13" height="13" style={{
        display: "block"
      }} />
      ),
      href: instagram || "https://instagram.com",
    }
  ];
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: "620px",
        backgroundColor: "#e6f7f4",
        fontFamily: "Arial, sans-serif",
        borderCollapse: "collapse",
        overflow: "hidden",
      }}
    >
      <tbody>
        <tr>
          {/* LEFT teal accent bar */}
          <td style={{ width: "6px", backgroundColor: "#1abc9c", padding: "0" }} />

          {/* MAIN CONTENT */}
          <td style={{ padding: "18px 16px 14px 18px", verticalAlign: "top" }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>

                {/* TOP ROW: Name/Title LEFT + Brand/Cube RIGHT */}
                <tr>
                  <td>
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          {/* Name + badge */}
                          <td style={{ verticalAlign: "top" }}>
                            <p style={{ margin: "0 0 4px 0", fontSize: "22px", fontWeight: "900", color: "#1a3a35", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "Arial Black, Arial, sans-serif", lineHeight: "1" }}>
                              {name ? name : 'Your Name'}
                            </p>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td style={{ backgroundColor: "#1abc9c", padding: "2px 10px", borderRadius: "2px" }}>
                                    <span style={{ fontSize: "8px", color: "#ffffff", fontWeight: "bold", letterSpacing: "1.2px", textTransform: "uppercase", fontFamily: "Arial, sans-serif" }}>
                                      {job_title ? job_title : 'Job Title'}
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>

                          {/* BRAND + Cube */}
                          <td style={{ verticalAlign: "top", textAlign: "right" }}>
                            <table cellPadding="0" cellSpacing="0" style={{ marginLeft: "auto" }}>
                              <tbody>
                                <tr>
                                  <td style={{ verticalAlign: "middle" }}>
                                    {/* Circular photo */}
                                    <div
                                      style={{
                                        width: "90px",
                                        height: "90px",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        border: "3px solid #1abc9c",
                                        position: "relative",
                                        zIndex: "1",
                                        margin: "0 auto",
                                      }}
                                    >
                                      <img
                                        src={imageSrc}
                                        alt="Michel Hansen"
                                        style={{
                                          width: "90px",
                                          height: "90px",
                                          objectFit: "cover",
                                          display: "block",
                                        }}
                                      />
                                    </div>
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

                {/* THIN DIVIDER */}
                <tr>
                  <td style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    <div style={{ height: "1px", backgroundColor: "#1abc9c", opacity: "0.35" }} />
                  </td>
                </tr>

                {/* 2x2 CONTACT GRID */}
                <tr>
                  <td>
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          {/* Phone */}
                          <td style={{ width: "50%", paddingBottom: "8px", verticalAlign: "middle" }}>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                                    <div style={{ width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="13" height="13" style={{ display: "block" }} />

                                    </div>
                                  </td>
                                  <td style={{ fontSize: "11px", color: "#2c3e50", fontFamily: "Arial, sans-serif" }}>{phone_no ? phone_no : "000 1234 56789"}</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>

                          {/* Email */}
                          <td style={{ width: "50%", paddingBottom: "8px", verticalAlign: "middle" }}>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                                    <div style={{ width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="13" height="13" style={{ display: "block" }} />
                                    </div>
                                  </td>
                                  <td>
                                    <a style={{ textDecoration: "none", fontSize: "11px", color: "#2c3e50", fontFamily: "Arial, sans-serif" }}>
                                      {email ? email : "your_email@gmail.com"}
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr>
                          {/* Website */}
                          <td style={{ width: "50%", verticalAlign: "middle" }}>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                                    <div style={{ width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" width="13" height="13" style={{
                                        display: "block"
                                      }} />
                                    </div>
                                  </td>
                                  <td>
                                    <a style={{ textDecoration: "none", fontSize: "11px", color: "#2c3e50", fontFamily: "Arial, sans-serif" }}>
                                      {linkedin ? linkedin : "Your linkedIn"}
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>

                          {/* Address */}
                          <td style={{ width: "50%", verticalAlign: "middle" }}>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                                    <div style={{ width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="13" height="13" style={{ display: "block" }} />
                                    </div>
                                  </td>
                                  <td style={{ fontSize: "11px", color: "#2c3e50", fontFamily: "Arial, sans-serif" }}>{organization ? organization : 'Organization'}</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right", fontSize: "10px", color: "#1abc9c" }}>
                    <i>Powered by <strong>{POWERED_BY}</strong></i>
                  </td>
                </tr>

              </tbody>
            </table>
          </td>

          {/* RIGHT: Vertical teal social icons bar */}
          <td
            style={{
              width: "30px",
              background: "linear-gradient(180deg, #1abc9c 0%, #16a085 100%)",
              verticalAlign: "middle",
              padding: "14px 10px",
              textAlign: "center",
            }}
          >
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                {SocialLinks.map((item, i) => (
                  <tr key={i}>
                    <td style={{ textAlign: "center", paddingTop: i === 0 ? "2px" : "10px" }}>
                      <Link href={item.href}>
                        {item.icon}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>

      </tbody>
    </table >
  );
}

export default SignatureTemlateT