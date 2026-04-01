import { POWERED_BY } from '@/utils/const';
import React, { Fragment } from 'react'

function SignatureTemlateB({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar4.png";
  const socialLinks = [
    {
      href: instagram || "https://instagram.com",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          width="13"
          height="13"
          style={{ display: "block" }}
        />
      ),
    },
    {
      href: twitter || "https://twitter.com",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
          width="13"
          height="13"
          style={{ display: "block" }}
        />
      ),
    },
    {
      href: linkedin || "https://linkedin.com",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          width="13"
          height="13"
          style={{ display: "block" }}
        />
      ),
    },
  ];


  const contacts = [
    {
      rows: [phone_no || "000 0000 00000"],
      href: `tel:${phone_no}`,
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
          width="13"
          height="13"
          style={{ display: "block" }}
        />
      ),
    },
    {
      rows: [email || "your email name here"],
      href: `mailto:${email}`,
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          width="13"
          height="13"
          style={{ display: "block" }}
        />
      ),
    },
    {
      rows: [organization || "organization"],
      href: null,
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
          width="13"
          height="13"
          style={{ display: "block" }}
        />
      ),
    },
  ];

  return (
    <table cellPadding="0" cellSpacing="0" style={{ width: "600px", backgroundColor: "#e5e7eb" }}>
      <tbody>
        <tr>
          <td style={{ padding: "0" }}>
            <table
              cellPadding="0"
              cellSpacing="0"
              style={{
                borderCollapse: "collapse",
                width: "600px",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                background: "#1a2356",
              }}
            >
              <tbody>
                <tr>

                  {/* LEFT: Name + social */}
                  <td style={{ width: "255px", padding: "0", verticalAlign: "top", background: "#1a2356", borderLeft: "5px solid #f5a623" }}>
                    {/* Yellow left border */}
                    {/* <table cellPadding="0" cellSpacing="0">
                      <tbody><tr><td style={{ width: "255px", padding: "0", verticalAlign: "top", background: "#1a2356", borderLeft: "5px solid #f5a623" }}></td></tr></tbody>
                    </table> */}

                    <table cellPadding="0" cellSpacing="0" style={{ zIndex: 2, width: "100%", borderCollapse: "collapse" }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: "28px 20px 0px 24px" }}>
                            {/* Dot + Name row */}
                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", marginBottom: "4px" }}>
                              <tbody>
                                <tr>
                                  <td style={{ verticalAlign: "middle", paddingRight: "10px" }}>
                                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                      <tbody>
                                        <tr>
                                          <td style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f5a623" }}></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td style={{ verticalAlign: "middle" }}>
                                    <p style={{ margin: "0", fontSize: "20px", fontWeight: "800", color: "#ffffff", fontFamily: "Arial, sans-serif", letterSpacing: "0.3px", lineHeight: "1" }}>
                                      {name ? name : 'your name'}
                                    </p>
                                    <p style={{ margin: "4px 0 0", fontSize: "11px", color: "#f5a623", fontFamily: "Arial, sans-serif", letterSpacing: "1px" }}>
                                      {job_title ? job_title : 'your job'}
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        {/* Divider */}
                        <tr>
                          <td style={{ padding: "18px 20px 0px 24px" }}>
                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                              <tbody>
                                <tr>
                                  <td style={{ height: "1px", background: "rgba(255,255,255,0.12)", fontSize: "0", lineHeight: "0" }}>&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        {/* Social icons */}
                        <tr>
                          <td style={{ padding: "18px 20px 0px 24px" }}>
                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                              <tbody>
                                <tr>
                                  {socialLinks.map((s, i) => (
                                    <td key={`${s.href}-${i}`} style={{ verticalAlign: "middle" }}>
                                      <a href={s.href} style={{ textDecoration: "none" }}>
                                        <table cellPadding="0" cellSpacing="0" style={{ width: "30px", height: "30px", border: "none" }}>
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

                        {/* Powered by */}
                        <tr>
                          <td style={{ padding: "12px 12px 8px 12px" }}>
                            <span style={{ color: "white", fontSize: "10px" }}><i>Powered by <strong>{POWERED_BY}</strong></i></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  {/* CENTER: Organic blob photo */}
                  <td style={{ width: "130px", padding: "0", verticalAlign: "middle", textAlign: "center", background: "#1a2356" }}>
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                      <tbody>
                        <tr>
                          <td>
                            <div style={{ width:"120px", height:"130px" ,padding: "4px", background: "#f5a623"}}>
                              <img
                                src={imageSrc}
                                alt="Profile"
                                width="110"
                                height="120"
                                style={{
                                  width: "110px",
                                   height: "120px",
                                  display: "block",
                                  backgroundColor: "#f5a623",
                                  objectFit:"cover",
                                }}
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  {/* RIGHT: Contacts */}
                  <td style={{ width: "290px", padding: "0", verticalAlign: "middle", background: "#1a2356", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", padding: "24px 24px 24px 20px" }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: "24px 24px 24px 20px" }}>
                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                              <tbody>
                                {contacts.map((c, i) => (
                                  <Fragment key={i}>
                                    <tr key={`row-${i}`}>
                                      <td style={{ padding: "5px 12px 5px 0", verticalAlign: "middle", width: "30px" }}>
                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "28px", height: "28px", borderRadius: "50%", background: "#f5a623" }}>
                                          <tbody>
                                            <tr>
                                              <td style={{ textAlign: "center", padding: "8px" }}>
                                                {c.icon}
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                      <td style={{ verticalAlign: "middle" }}>
                                        {c.rows.map((line, j) => (
                                          <p
                                            key={j}
                                            style={{
                                              margin: j === 0 ? "0" : "2px 0 0",
                                              fontSize: "11.5px",
                                              color: j === 0 ? "#ffffff" : "rgba(255,255,255,0.6)",
                                              fontFamily: "Arial, sans-serif",
                                            }}
                                          >
                                            {c.href && j === 0 ? (
                                              <a href={c.href} style={{ color: "#ffffff", textDecoration: "none" }}>{line}</a>
                                            ) : line}
                                          </p>
                                        ))}
                                      </td>
                                    </tr>
                                    {i < contacts.length - 1 && (
                                      <tr key={`div-${i}`}>
                                        <td colSpan="2" style={{ padding: "4px 0" }}>
                                          <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                                            <tbody>
                                              <tr>
                                                <td style={{ height: "1px", background: "rgba(255,255,255,0.08)", fontSize: "0", lineHeight: "0" }}>&nbsp;</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    )}
                                  </Fragment>
                                ))}
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
        </tr>
      </tbody>
    </table>
  );
}

export default SignatureTemlateB