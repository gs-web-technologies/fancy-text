import { POWERED_BY } from '@/utils/const';
import React from 'react'

function SignatureTemlateP({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar5.png";
  const SocialLinks = [
    {
      label: "Facebook",
      href: facebook || "https://facebook.com",
      icon: (<img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="13" height="13" style={{
  display: "block" }} />),
    },
    {
      label: "Instagram",
      href: instagram || "https://instagram.com",
      icon: (<img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="13" height="13" style={{ display: "block"
  }} />),
    },
    {
      label: "X",
      href: twitter || "https://x.com",
      icon: (<img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="13" height="13" style={{ display: "block" }} />),
    }
  ];
  return (
    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
      <tbody>
        <tr>
          <td style={{ textAlign: "center" }}>
            <table
              cellPadding="0"
              cellSpacing="0"
              style={{
                width: "620px",
                minWidth: "620px",
                backgroundColor: "#1e1e1e",
                borderRadius: "10px",
                overflow: "hidden",
                fontFamily: "'Segoe UI', Arial, sans-serif",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
            >
              <tbody>
                <tr>

                  {/* LEFT PANEL */}
                  <td style={{ width: "175px", verticalAlign: "top", padding: "0", position: "relative" }}>

                    {/* TOP RED SECTION — Logo area */}
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#e8192c", position: "relative", overflow: "hidden" }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: "18px 16px 14px 16px", position: "relative" }}>

                           

                            {/* Logo row */}
                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "relative", zIndex: 1 }}>
                              <tbody>
                                <tr>
                                  <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "32px", height: "32px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.3)" }}>
                                      <tbody>
                                        <tr>
                                          <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                              <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" fill="white" opacity="0.9" />
                                            </svg>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td style={{ verticalAlign: "middle", fontSize: "14px", fontWeight: "800", color: "#ffffff", letterSpacing: "1px", textTransform: "uppercase" }}>
                                    LOGO
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* MIDDLE DARK SECTION — Photo */}
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#272727", position: "relative" }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: "18px 0 14px 0", textAlign: "center", position: "relative" }}>

                            {/* Red corner accent top-left */}
                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "absolute", top: 0, left: 0, width: "22px", height: "22px", borderTop: "4px solid #e8192c", borderLeft: "4px solid #e8192c", borderRadius: "2px 0 0 0" }}>
                              <tbody><tr><td></td></tr></tbody>
                            </table>

                            {/* Red corner accent bottom-right */}
                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "absolute", bottom: 0, right: 0, width: "22px", height: "22px", borderBottom: "4px solid #e8192c", borderRight: "4px solid #e8192c", borderRadius: "0 0 2px 0" }}>
                              <tbody><tr><td></td></tr></tbody>
                            </table>

                            {/* Circular photo with red ring */}
                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "90px", height: "90px", borderRadius: "50%", border: "3px solid #e8192c", overflow: "hidden", backgroundColor: "#444", margin: "0 auto" }}>
                              <tbody>
                                <tr>
                                  <td style={{ padding: "0", textAlign: "center", verticalAlign: "middle" }}>
                                    <img
                                      src={imageSrc}
                                      alt="Michael Jonshon"
                                      width="90"
                                      height="90"
                                      style={{ objectFit: "cover", display: "block" }}
                                      onError={(e) => {
                                        e.target.style.display = "none";
                                        e.target.parentNode.style.backgroundColor = "#555";
                                      }}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* BOTTOM RED SECTION — Follow us */}
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#e8192c", position: "relative", overflow: "hidden" }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: "12px 16px", position: "relative" }}>

                           

                            {/* Follow us content */}
                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "relative", zIndex: 1, width: "100%" }}>
                              <tbody>
                                <tr>
                                  <td style={{ fontSize: "9px", color: "rgba(255,255,255,0.75)", letterSpacing: "2px", textTransform: "uppercase", paddingBottom: "8px" }}>
                                    FOLLOW US
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
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

                  </td>

                  {/* RIGHT PANEL */}
                  <td style={{ backgroundColor: "#1e1e1e", padding: "24px 26px 24px 28px", verticalAlign: "top" }}>

                    {/* Name */}
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", marginBottom: "2px" }}>
                      <tbody>
                        <tr>
                          <td style={{ fontSize: "22px", fontWeight: "800", color: "#ffffff", letterSpacing: "0.5px", lineHeight: "1.1", textTransform: "uppercase" }}>
                            <span style={{ color: "#e8192c" }}>{name ? name : "Your Name"}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Title */}
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", marginBottom: "18px" }}>
                      <tbody>
                        <tr>
                          <td style={{ fontSize: "10.5px", color: "#aaaaaa", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "500" }}>
                            {job_title ? job_title : 'Job Title'}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Thin red divider */}
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", marginBottom: "18px" }}>
                      <tbody>
                        <tr>
                          <td style={{ height: "1.5px", backgroundColor: "#e8192c", borderRadius: "2px", fontSize: "0", lineHeight: "0" }}>&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Contact rows */}
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                      <tbody>
                        {[
                          {
                            icon: (
                            <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="100%" height="100%" style={{ display: "block" }} />
                            ),
                            text: organization || "Organization",
                          },
                          {
                            icon: (
                              <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="100%" height="100%" style={{ display: "block" }} />
                            ),
                            text: phone_no || "+00 123 456 7890",
                          },
                          {
                            icon: (
                            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="100%" height="100%" style={{ display: "block" }} />
                            ),
                            text: email || "hello@example.com",
                          },
                        ].map((item, i) => (
                          <tr key={i}>
                            <td style={{ paddingBottom: "12px", verticalAlign: "top" }}>
                              <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                <tbody>
                                  <tr>
                                    {/* Red icon circle */}
                                    <td style={{ verticalAlign: "top", paddingRight: "10px", paddingTop: "2px" }}>
                                      <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "26px", height: "26px", borderRadius: "50%", backgroundColor: "#f8f6f6",  }}>
                                        <tbody>
                                          <tr>
                                            <td style={{ textAlign: "center", padding:"8px" }}>
                                              {item.icon}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td style={{ verticalAlign: "top" }}>
                                      <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                        <tbody>
                                          <tr>
                                            <td style={{ fontSize: "12px", color: "#dddddd", fontWeight: "500", lineHeight: "1.5" }}>
                                              {item.text}
                                            </td>
                                          </tr>
                                          {item.sub && (
                                            <tr>
                                              <td style={{ fontSize: "11px", color: "#888888", lineHeight: "1.4" }}>
                                                {item.sub}
                                              </td>
                                            </tr>
                                          )}
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        ))}

                        {/* Powered by */}
                        <tr>
                          <td style={{ textAlign: "right", fontSize: "10px", color: "white" }}>
                            <i>Powered by <strong>{POWERED_BY}</strong></i>
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

export default SignatureTemlateP