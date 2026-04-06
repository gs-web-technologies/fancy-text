import { POWERED_BY } from '@/utils/const';
import React from 'react'

function Secound({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook, hasStarted }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar.png";
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

  if (phone_no) {
    contacts.push(
      {
        href: null,
        label: phone_no,
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="24" height="24" style={{ display: "block" }} />
        ),
      }
    );
  }

  if (email) {
    contacts.push(
      {
        href: `mailto:${email}`,
        label: email,
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="24" height="24" style={{ display: "block" }} />
        ),
      }
    )
  }

  if (organization) {
    contacts.push(
      {
        href: null,
        label: organization,
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="24" height="24" style={{ display: "block" }} />
        ),
      }
    )
  }

  const socialLinks = [];

  if (twitter) {
    socialLinks.push(
      {
        href: twitter, bg: "",
        icon: <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="50%" height="50%" style={{ display: "block" }} />,
      }
    );
  }

  if (linkedin) {
    socialLinks.push(
      {
        href: linkedin, bg: "",
        icon: <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="50%" height="50%" style={{ display: "block" }} />,
      }
    );
  }

  if (facebook) {
    socialLinks.push(
      {
        href: facebook, bg: "",
        icon: <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="50%" height="50%" style={{
          display: "block"
        }} />,
      }
    );
  }

  if (instagram) {
    socialLinks.push(
      {
        href: instagram, bg: "",
        icon: <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="50%" height="50%" style={{
          display: "block"
        }} />,
      }
    )
  }


  return (
    <table style={{ width: "650px", backgroundColor: "#e5e7eb" }}>
      <tbody>
        <tr>
          <td>
            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "650px", height: "199px", borderRadius: "6px", overflow: "hidden", boxShadow: "0 3px 18px rgba(0,0,0,0.18)" }}>
              <tbody>
                <tr>

                  {/* LEFT: Logo + Photo */}
                  <td style={{ width: "150px", padding: "8px", verticalAlign: "top", background: "#3a9e3f", overflow: "hidden" }}>
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ background: "#3a9e3f", padding: "0px" }}></td>
                          <td>

                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* Photo */}
                    <div style={{ overflow: "hidden", height: "150px", alignItems: "center", padding: "2px" }}>
                      <img
                        src={imageSrc}
                        alt="Profile"
                        style={{ width: "150px", height: "150px", objectFit: "cover", objectPosition: "top", display: "block" }}
                      />
                    </div>
                    <div style={{ marginTop: "5px", textAlign: "center" }}>
                      <span style={{ color: "white", fontSize: "10px" }}><i>Powered by <strong>{POWERED_BY}</strong></i></span>
                    </div>
                  </td>

                  {/* MIDDLE: Contacts */}
                  <td style={{ width: "240px", padding: "0", verticalAlign: "top", background: "#f9fafb", borderLeft: "3px solid #3a9e3f" }}>
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", height: "100%" }}>
                      <tbody>
                        <tr><td style={{ background: "#3a9e3f", height: "4px", padding: "0" }} /></tr>
                        {name && (<tr>
                          <td style={{ color: "#3a9e3f", padding: "17px 0px 0px 13px" }}>
                            <b>{name ? name : 'Your Name'} </b>
                          </td>
                        </tr>)}
                        <tr>
                          <td style={{ padding: "18px 18px 16px 18px", verticalAlign: "top" }}>
                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                              <tbody>
                                {contacts.map((c, i) => (
                                  <tr key={i}>
                                    <td style={{ padding: "5px 10px 5px 0", verticalAlign: "middle", width: "28px", textAlign: "center" }}>
                                      <div style={{ width: "26px", height: "26px", padding:"6px",verticalAlign: "middle", textAlign: "center", borderRadius: "50%", border: "2px solid #3a9e3f" }}>
                                        {c.icon}
                                      </div>
                                    </td>
                                    <td style={{ fontSize: "11.5px", color: "#333", fontFamily: "Arial, sans-serif", padding: "5px 0" }}>
                                      {c.href ? <a href={c.href} style={{ color: "#333", textDecoration: "none" }}>{c.label}</a> : c.label}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  {/* RIGHT: Dark panel */}
                  <td style={{ background: "#1a1a2e", padding: "0", verticalAlign: "top", width: "230px" }}>
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", height: "100%" }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: "18px 22px 10px 22px", verticalAlign: "top" }}>
                            {organization && (<p style={{ margin: "0 0 2px", fontSize: "10px", fontWeight: "600", color: "#aaa", fontFamily: "Arial, sans-serif", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                              {organization ? organization : 'Business Company Ltd.'}
                            </p>)}
                            {job_title && (<p style={{ margin: "0 0 12px", fontSize: "10px", color: "#888", fontFamily: "Arial, sans-serif", letterSpacing: "0.8px" }}>
                              {job_title ? job_title : 'Your Job title'}
                            </p>)}
                            <p style={{ margin: "0", fontSize: "26px", fontWeight: "900", color: "#fff", fontFamily: "Georgia, serif", lineHeight: "1.1", letterSpacing: "-0.5px" }}>
                              GROW YOUR<br />
                              <span style={{ color: "#fff" }}>BUSIN</span><span style={{ color: "#3a9e3f" }}>ESS</span>
                            </p>
                          </td>
                        </tr>
                        {/* Social icons */}
                        <tr>
                          <td style={{ padding: "14px 22px 18px 22px", verticalAlign: "bottom" }}>
                            <table>
                              <tbody>
                                <tr>
                                  {socialLinks.map((s, i) => (
                                    <td key={`${s.href}-${i}`}>
                                      <a href={s.href} style={{ textDecoration: "none" }}>
                                        <div style={{ width: "26px", height: "26px"}}>
                                          {s.icon}
                                        </div>
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

                {/* Bottom green bar */}
                <tr>
                  <td colSpan="3" style={{ background: "#3a9e3f", height: "5px", padding: "0" }} />
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table >
  );
}

export default Secound