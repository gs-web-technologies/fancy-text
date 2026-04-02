import { POWERED_BY } from '@/utils/const';
import React from 'react'

function SignatureTemlateF({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook, hasStarted }) {
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

  const contacts = [];

  if (phone_no) {
    contacts.push(
      {
        bg: "",
        href: `tel:${phone_no}`,
        label: phone_no,
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="13" height="13" style={{ display: "block" }} />
        ),
      }
    );
  }

  if (email) {
    contacts.push(
      {
        bg: "",
        href: `mailto:${email}`,
        label: email,
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="13" height="13" style={{ display: "block" }} />
        ),
      }
    );
  }

  if (organization) {
    contacts.push(
      {
        bg: "",
        href: null,
        label: organization,
        icon: (

          <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="13" height="13" style={{ display: "block" }} />
        ),
      }
    );
  }

  const socialLinks = [];

  if (facebook) {
    socialLinks.push(
      {
        href: facebook,
        bg: "",
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="80%"
            height="80%"
            style={{ display: "block" }}
            alt="Facebook" />
        ),
      }
    );
  }

  if (twitter) {
    socialLinks.push(
      {
        href: twitter,
        bg: "",
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="80%" height="80%" style={{ display: "block" }} />
        ),
      }
    )
  }

  if (linkedin) {
    socialLinks.push(
      {
        href: linkedin,
        bg: "",
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="80%" height="80%" style={{ display: "block" }} />
        ),
      }
    )
  }

  if (instagram) {
    socialLinks.push(
      {
        href: instagram,
        bg: "",
        icon: (
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="80%" height="80%" style={{ display: "block" }} />
        ),
      }
    )
  }


  return (

    <table style={{ width: "600px", backgroundColor: "#e5e7eb", display: "flex", justifyContent: "center" }}>
      <tbody>

        <tr>
          <td>

            <table
              cellPadding="0"
              cellSpacing="0"
              style={{
                borderCollapse: "collapse",
                width: "600px",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
              }}
            >
              <tbody>
                <tr>
                  {/* Photo */}
                  <td style={{ width: "170px", padding: "0", verticalAlign: "top", backgroundColor: "#1a1a2e" }}>
                    <img
                      src={imageSrc}
                      alt="Rose Angel"
                      style={{ width: "170px", height: "170px", objectFit: "cover", display: "block" }}
                    />
                  </td>

                  {/* Dark left panel */}
                  <td style={{ backgroundColor: "#1a1a2e", padding: "18px 20px", verticalAlign: "middle", width: "190px" }}>
                    <table>
                      <tbody>
                        {name && (<tr>
                          <td>
                            <p style={{ margin: "6px 0 4px", fontSize: "22px", fontWeight: "800", color: "#ffffff", fontFamily: "Georgia, serif", lineHeight: "1.1" }}>
                              {name}
                            </p>
                          </td>
                        </tr>)}
                        {organization && (
                          <tr>
                            <td>
                              <span style={{ padding: "3px", margin: "0", fontSize: "11px", fontWeight: "700", color: "#ffffff", fontFamily: "Arial, sans-serif", letterSpacing: "0.5px" }}>
                                {organization}
                              </span>
                            </td>
                          </tr>
                        )}
                        {job_title && (
                          <tr>
                            <td style={{ backgroundColor: "#f97316", borderRadius: "3px", padding: "4px 10px", display: "inline-block", marginTop: "10px" }}>
                              <p style={{ margin: "0", fontSize: "10px", fontWeight: "700", color: "#ffffff", fontFamily: "Arial, sans-serif", letterSpacing: "1px" }}>
                                {job_title ? job_title : 'GRAPHIC DESIGNER'}
                              </p>
                            </td>
                          </tr>)}
                      </tbody>
                    </table>

                  </td>

                  {/* Right white panel */}
                  <td style={{ backgroundColor: "#ffffff", padding: "0", verticalAlign: "top", width: "250px" }}>
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                      <tbody>
                        {/* Header banner */}
                        <tr>
                          <td style={{ backgroundColor: "#1a1a2e", padding: "14px 20px" }}>
                          </td>
                          {/* Social icons */}
                          <td style={{ backgroundColor: "#1a1a2e", padding: "10px 14px", verticalAlign: "middle", width: "34px" }}>
                            <table>
                              <tbody>
                                <tr>
                                  <td>

                                    {socialLinks.map((s, i) => (
                                      <a key={`${s.href}-${i}`} href={s.href} style={{ textDecoration: "none" }}>
                                        <div
                                          style={{
                                            width: "22px", height: "22px", backgroundColor: s.bg,
                                            borderRadius: "3px", padding: "1px"
                                          }}
                                        >
                                          {s.icon}
                                        </div>
                                      </a>
                                    ))}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        {/* Contact rows */}
                        <tr>
                          <td colSpan="2" style={{ backgroundColor: "#ffffff", padding: "16px 20px" }}>
                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                              <tbody>
                                {contacts.map((c, i) => (
                                  <tr key={i}>
                                    <td style={{ padding: "4px 0", verticalAlign: "middle", width: "26px" }}>
                                      <div
                                        style={{
                                          width: "22px", height: "22px", backgroundColor: c.bg,
                                          borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center",
                                        }}
                                      >
                                        {c.icon}
                                      </div>
                                    </td>
                                    <td style={{ padding: "4px 0 4px 10px", fontSize: "12px", color: "#374151", fontFamily: "Arial, sans-serif" }}>
                                      {c.href ? (
                                        <a href={c.href} style={{ color: "#374151", textDecoration: "none" }}>{c.label}</a>
                                      ) : (
                                        c.label
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            <div>
                              <span style={{ color: "black", fontSize: "10px" }}><i>Powered by <strong>{POWERED_BY}</strong></i></span>
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
      </tbody>
    </table>

  );
}

export default SignatureTemlateF