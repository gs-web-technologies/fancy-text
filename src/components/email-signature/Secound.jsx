import React from 'react'

function Secound({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar.png";
  const contacts = [
    {
      href: `tel:${phone_no}`,
      label: phone_no ? phone_no : "+880 1831 034992",
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3a9e3f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.36 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.04 6.04l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      href: `mailto:${email}`,
      label: email ? email : "shop@123@gmail.com",
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3a9e3f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      href: null,
      label: organization ? organization : 'Your Organization',
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3a9e3f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      href: twitter, bg: "#1da1f2",
      icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>,
    },
    {
      href: linkedin, bg: "#0077b5",
      icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
    },
    {
      href: facebook, bg: "#1877f2",
      icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
    },
    {
      href: instagram, bg: "#e91e8c",
      icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>,
    },
  ];

  return (
    <div style={{ width: "600px", backgroundColor: "#e5e7eb", display: "flex", justifyContent: "center" }}>
      <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "680px", borderRadius: "6px", overflow: "hidden", boxShadow: "0 3px 18px rgba(0,0,0,0.18)" }}>
        <tbody>
          <tr>

            {/* LEFT: Logo + Photo */}
            <td style={{ width: "210px", padding: "0", verticalAlign: "top", background: "#3a9e3f", overflow: "hidden" }}>
              {/* Logo strip */}
              <div style={{ background: "#3a9e3f", padding: "10px 14px 8px 14px", display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "6px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#3a9e3f" />
                    <path d="M2 17l10 5 10-5" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
                    <path d="M2 12l10 5 10-5" stroke="#3a9e3f" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p style={{ margin: "0", fontSize: "9px", fontWeight: "800", color: "#fff", fontFamily: "Arial, sans-serif", letterSpacing: "0.8px", lineHeight: "1.2" }}>GRAPHICS</p>
                  <p style={{ margin: "0", fontSize: "9px", fontWeight: "800", color: "#fff", fontFamily: "Arial, sans-serif", letterSpacing: "0.8px", lineHeight: "1.2" }}>FAMILY</p>
                </div>
              </div>
              {/* Photo */}
              <div style={{ overflow: "hidden", height: "130px" }}>
                <img
                  src={imageSrc}
                  alt="Profile"
                  style={{ width: "210px", height: "155px", objectFit: "cover", objectPosition: "top", display: "block", marginTop: "-10px" }}
                />
              </div>
              <div style={{ display:"flex" , marginTop:"5px" , justifyContent: "center" }}>
                <span style={{ color: "white", fontSize: "10px" }}><i>Powered by <strong>thynktales</strong></i></span>
              </div>
            </td>

            {/* MIDDLE: Contacts */}
            <td style={{ width: "240px", padding: "0", verticalAlign: "top", background: "#f9fafb", borderLeft: "3px solid #3a9e3f" }}>
              <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", height: "100%" }}>
                <tbody>
                  <tr><td style={{ background: "#3a9e3f", height: "4px", padding: "0" }} /></tr>
                  <tr><td style={{ color:"#3a9e3f", padding: "17px 0px 0px 13px" }}><b>{ name ? name : 'Your Name' } </b></td></tr>
                  <tr>
                    <td style={{ padding: "18px 18px 16px 18px", verticalAlign: "top" }}>
                      <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                        <tbody>
                          {contacts.map((c, i) => (
                            <tr key={i}>
                              <td style={{ padding: "5px 10px 5px 0", verticalAlign: "middle", width: "28px" }}>
                                <div style={{ width: "26px", height: "26px", borderRadius: "50%", border: "2px solid #3a9e3f", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
                      <p style={{ margin: "0 0 2px", fontSize: "10px", fontWeight: "600", color: "#aaa", fontFamily: "Arial, sans-serif", letterSpacing: "1.5px", textTransform: "uppercase" }}>{organization ? organization : 'Business Company Ltd.'}</p>
                      <p style={{ margin: "0 0 12px", fontSize: "10px", color: "#888", fontFamily: "Arial, sans-serif", letterSpacing: "0.8px" }}>{job_title ? job_title : 'Your Job title'}</p>
                      <p style={{ margin: "0", fontSize: "26px", fontWeight: "900", color: "#fff", fontFamily: "Georgia, serif", lineHeight: "1.1", letterSpacing: "-0.5px" }}>
                        GROW YOUR<br />
                        <span style={{ color: "#fff" }}>BUSIN</span><span style={{ color: "#3a9e3f" }}>ESS</span>
                      </p>
                    </td>
                  </tr>
                  {/* Social icons */}
                  <tr>
                    <td style={{ padding: "14px 22px 18px 22px", verticalAlign: "bottom" }}>
                      <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
                        {socialLinks.map((s,i) => (
                          <a key={`${s.href}-${i}`} href={s.href} style={{ textDecoration: "none" }}>
                            <div style={{ width: "26px", height: "26px", backgroundColor: s.bg, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {s.icon}
                            </div>
                          </a>
                        ))}
                      </div>
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
    </div>
  );
}

export default Secound