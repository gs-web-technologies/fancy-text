import { POWERED_BY } from '@/utils/const';
import Link from 'next/link';
import React from 'react'

function SignatureTemlateS({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
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
      icon: (<img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="13" height="13" style={{ display: "block" }} />

      ),
      href: twitter || "https://x.com",
    },
    {
      label: "linkedIn",
      icon: (
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="13" height="13" style={{ display: "block" }} />
      ),
      href: linkedin || "https://linkedIn.com"
    },
    {
      label: "instagram",
      icon: (
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="13" height="13" style={{
          display: "block"
        }} />

      ),
      href: instagram || "https://instagram.com"
    },
  ];
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: "450px",
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
        borderCollapse: "collapse",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 10px #00000014",
      }}
    >
      <tbody>
        <tr>
          {/* PHOTO COLUMN with top-left corner triangle */}
          <td
            style={{
              width: "120px",
              verticalAlign: "middle",
              padding: "16px 0 16px 0",
              position: "relative",
              backgroundColor: "#ffffff",
            }}
          >

            {/* Circular photo */}
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #1a2a4a",
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

            <div style={{ textAlign: "right", fontSize: "10px", color: "#1a2a4a", marginTop:"2px"}}>
              <i>Powered by <strong>{POWERED_BY}</strong></i>
            </div>
          </td>

          {/* CENTER: Name + contact info */}
          <td style={{ verticalAlign: "middle", padding: "16px 14px" }}>
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                {/* Name */}
                <tr>
                  <td>
                    <p
                      style={{
                        margin: "0 0 1px 0",
                        fontSize: "17px",
                        fontWeight: "bold",
                        color: "#1a2a4a",
                        letterSpacing: "0.3px",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {name ? name : "Your Name"}
                    </p>
                  </td>
                </tr>

                {/* Title */}
                <tr>
                  <td style={{ paddingBottom: "10px" }}>
                    <b>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "10px",
                          color: "#2e3235",
                          fontFamily: "Arial, sans-serif",
                          letterSpacing: "0.3px",
                        }}
                      >
                        {job_title ? job_title : 'Job Title'}
                      </p>
                    </b>
                  </td>
                </tr>

                {/* Phone 1 */}
                <tr>
                  <td style={{ paddingBottom: "5px" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "7px", verticalAlign: "middle" }}>
                            <div style={{ width: "15px", height: "15px", backgroundColor: "#f9fafd", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="13" height="13" style={{ display: "block" }} />
                            </div>
                          </td>
                          <td style={{ fontSize: "10px", color: "#555555", fontFamily: "Arial, sans-serif" }}>{phone_no ? phone_no : "(021) 234-567 7890"} </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Email */}
                <tr>
                  <td style={{ paddingBottom: "5px" }}>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "7px", verticalAlign: "middle" }}>
                            <div style={{ width: "15px", height: "15px", backgroundColor: "#fbfcfd", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="13" height="13" style={{ display: "block" }} />
                            </div>
                          </td>
                          <td>
                            <a style={{ textDecoration: "none", fontSize: "10px", color: "#555555", fontFamily: "Arial, sans-serif" }}>
                              {email ? email : "your_email.com"}
                            </a>
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
                          <td style={{ paddingRight: "7px", verticalAlign: "top" }}>
                            <div style={{ width: "15px", height: "15px", backgroundColor: "#f2f4f7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}>

                              <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="13" height="13" style={{ display: "block" }} />
                            </div>
                          </td>
                          <td style={{ fontSize: "10px", color: "#555555", fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
                            {organization ? organization : "Organization"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table cellPadding="0" cellSpacing="0" style={{ marginTop: "10px" }}>
                      <tbody>
                        <tr>
                          {SocialLinks.map((item, i) => (
                            <td key={i} style={{ textAlign: "end" }}>
                              <div style={{ paddingLeft: i === 0 ? "0" : "5px" }}>
                                <div style={{ width: "22px", height: "22px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  <Link href={item.href}>
                                    {item.icon}
                                  </Link>
                                </div>
                              </div>
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

          {/* VERTICAL DIVIDER */}
          <td style={{ width: "5px", backgroundColor: "#1a2a4a", padding: "0" }} />


        </tr>
      </tbody>
    </table>
  );
}

export default SignatureTemlateS