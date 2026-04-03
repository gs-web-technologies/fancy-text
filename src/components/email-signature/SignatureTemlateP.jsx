import { POWERED_BY } from '@/utils/const';
import React from 'react'

function SignatureTemlateP({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook, hasStarted }) {
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
        label: "Facebook",
        href: facebook,
        icon: (<img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="15" height="15" style={{
          display: "block"
        }} />),
      }
    );
  }

  if (instagram) {
    SocialLinks.push(
      {
        label: "Instagram",
        href: instagram,
        icon: (<img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="15" height="15" style={{
          display: "block"
        }} />),
      }
    );
  }

  if (twitter) {
    SocialLinks.push(
      {
        label: "X",
        href: twitter,
        icon: (<img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="15" height="15" style={{ display: "block" }} />),
      }
    );
  }

  if (linkedin) {
    SocialLinks.push(
      {
        label: "linkedIn",
        href: linkedin,
        icon: (<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="15" height="15" style={{ display: "block" }} />
        ),
      }
    );
  }

  const contacts = [];


  if (organization) {
    contacts.push(
      {
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="100%" height="100%" style={{
            display: "block"
          }} />
        ),
        text: organization,
      }
    );
  }

  if (phone_no) {
    contacts.push(
      {
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="100%" height="100%" style={{
            display: "block"
          }} />
        ),
        text: phone_no,
      }
    );
  }

  if (email) {
    contacts.push(
      {
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="100%" height="100%" style={{
            display: "block"
          }} />
        ),
        text: (<a style={{ textDecoration: "none", color: "#dddddd" }}> {email} </a>),
      }
    );
  }

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
                  <td style={{ width: "175px", verticalAlign: "middle", padding: "0" }}>
                    {/* MIDDLE DARK SECTION — Photo */}
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#272727" }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: "18px 0 14px 0", textAlign: "center" }}>

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
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#e8192c", overflow: "hidden", verticalAlign: "middle", textAlign: "center" }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: "2px 4px 2px 36px" }}>
                            <table>
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

                  {/* RIGHT PANEL */}
                  <td style={{ backgroundColor: "#1e1e1e", padding: "24px 26px 12px 28px", verticalAlign: "top" }}>

                    {/* Name */}
                    {name && (<table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", marginBottom: "1px" }}>
                      <tbody>
                        <tr>
                          <td style={{ fontSize: "22px", fontWeight: "800", color: "#ffffff", letterSpacing: "0.5px", lineHeight: "1.1", textTransform: "uppercase" }}>
                            <span style={{ color: "#e8192c" }}>{name}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>)}

                    {/* Title */}
                    {job_title && (<table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", marginBottom: "1px" }}>
                      <tbody>
                        <tr>
                          <td style={{ fontSize: "10.5px", color: "#aaaaaa", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "500" }}>
                            {job_title}
                          </td>
                        </tr>
                      </tbody>
                    </table>)}

                    {/* Thin red divider */}
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", marginBottom: "10px" }}>
                      <tbody>
                        <tr>
                          <td style={{ height: "1.5px", backgroundColor: "#e8192c", borderRadius: "2px", fontSize: "0", lineHeight: "0" }}>&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Contact rows */}
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                      <tbody>
                        {contacts.map((item, i) => (
                          <tr key={i}>
                            <td style={{ paddingBottom: "8px", verticalAlign: "top" }}>
                              <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                <tbody>
                                  <tr>
                                    {/* Red icon circle */}
                                    <td style={{ verticalAlign: "center", paddingRight: "10px", paddingTop: "2px" }}>
                                      <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "26px", height: "26px", borderRadius: "50%", backgroundColor: "#f8f6f6", }}>
                                        <tbody>
                                          <tr>
                                            <td style={{ textAlign: "center", padding: "8px" }}>
                                              {item.icon}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td style={{ verticalAlign: "center" }}>
                                      <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                        <tbody>
                                          <tr>
                                            <td style={{ fontSize: "12px", color: "#faf6f6", fontWeight: "500", lineHeight: "1.5" }}>
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