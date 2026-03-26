import React from 'react'

function Ninth({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
   const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar.png";   
  const contacts = [
    {
      bg: "#1a1a2e",
      href: `tel:${phone_no}`,
      label: phone_no || "+880 1831 034992",
      icon: (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.36 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.04 6.04l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      bg: "#f97316",
      href: `mailto:${email}`,
      label: email || "example@gmail.com",
      icon: (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      bg: "#1da1f2",
      href: linkedin,
      label: "LinkedIn",
      icon: (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      bg: "#22c55e",
      href: null,
      label: organization || "510 Road, Noapara, Jessore",
      icon: (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      href: "https://youtube.com",
      bg: "#ff0000",
      icon: (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#ff0000" />
        </svg>
      ),
    },
    {
      href: twitter,
      bg: "#1da1f2",
      icon: (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
    {
      href: linkedin,
      bg: "#0077b5",
      icon: (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <div style={{ width: "600px", backgroundColor: "#e5e7eb", display: "flex", justifyContent: "center" }}>
      <table
        cellPadding="0"
        cellSpacing="0"
        style={{
          borderCollapse: "collapse",
          width: "660px",
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
              {/* Logo */}
              <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "18px" }}>
                <div
                  style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: "linear-gradient(135deg,#f97316,#facc15,#22d3ee)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", color: "#ffffff", fontFamily: "Arial, sans-serif", letterSpacing: "0.5px" }}>
                  {organization ? organization : 'GRAPHICS FAMILY'}
                </p>
              </div>

              {/* Name */}
              <p style={{ margin: "0 0 4px", fontSize: "22px", fontWeight: "800", color: "#ffffff", fontFamily: "Georgia, serif", lineHeight: "1.1" }}>
                {name ? name : 'Rose Angels'}
              </p>

              {/* Title badge */}
              <div style={{ backgroundColor: "#f97316", borderRadius: "3px", padding: "4px 10px", display: "inline-block", marginTop: "10px" }}>
                <p style={{ margin: "0", fontSize: "10px", fontWeight: "700", color: "#ffffff", fontFamily: "Arial, sans-serif", letterSpacing: "1px" }}>
                  {job_title ? job_title : 'GRAPHIC DESIGNER'}
                </p>
              </div>
            </td>

            {/* Right white panel */}
            <td style={{ backgroundColor: "#ffffff", padding: "0", verticalAlign: "top" }}>
              <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                <tbody>
                  {/* Header banner */}
                  <tr>
                    <td style={{ backgroundColor: "#1a1a2e", padding: "14px 20px" }}>
                    </td>
                    {/* Social icons */}
                    <td style={{ backgroundColor: "#1a1a2e", padding: "10px 14px", verticalAlign: "middle", width: "34px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
                        {socialLinks.map((s) => (
                          <a key={s.href} href={s.href} style={{ textDecoration: "none" }}>
                            <div
                              style={{
                                width: "22px", height: "22px", backgroundColor: s.bg,
                                borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center",
                              }}
                            >
                              {s.icon}
                            </div>
                          </a>
                        ))}
                      </div>
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
                                    <span style={{ color: "black", fontSize: "10px" }}><i>Powered by <strong>thynktales</strong></i></span>
                                </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Ninth