import React, { Fragment } from 'react'

function Third({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar3.png";
  const contacts = [
    {
      rows: [phone_no || "000 0000 00000", phone_no || "000 0000 00000"],
      href: `tel:${phone_no}`,
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a2356" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.36 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.04 6.04l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      rows: ["linkedIn"],
      href: linkedin || '',
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a2356" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      rows: [email || "your email name here"],
      href: `mailto:${email}`,
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a2356" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      rows: [organization || "organization"],
      href: null,
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a2356" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      href: instagram || "https://instagram.com",
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      href: twitter || "https://twitter.com",
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      href: linkedin || "https://linkedin.com",
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
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
          width: "680px",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          background: "#1a2356",
        }}
      >
        <tbody>
          <tr>

            {/* LEFT: Name + social */}
            <td style={{ width: "260px", padding: "0", verticalAlign: "top", position: "relative", background: "#1a2356", overflow: "hidden" }}>
              {/* Yellow left border */}
              <div style={{ position: "absolute", left: 0, top: 0, width: "5px", height: "100%", background: "#f5a623", zIndex: 1 }} />

              {/* Decorative SVG arcs */}
              <svg style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }} width="260" height="160" viewBox="0 0 260 160">
                <path d="M0,0 L90,0 Q130,0 130,40 L130,100 Q130,140 90,140 L0,140 Z" fill="#f5a623" opacity="0.15" />
                <path d="M0,0 L60,0 Q95,0 95,35 L95,85 Q95,120 60,120 L0,120 Z" fill="#f5a623" opacity="0.18" />
              </svg>

              <div style={{ position: "relative", zIndex: 2, padding: "28px 20px 24px 24px" }}>
                {/* Dot + Name */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f5a623", flexShrink: 0 }} />
                  <div>
                    <p style={{ margin: "0", fontSize: "20px", fontWeight: "800", color: "#ffffff", fontFamily: "Arial, sans-serif", letterSpacing: "0.3px", lineHeight: "1" }}>
                      {name ? name : 'your name'}
                    </p>
                    <p style={{ margin: "4px 0 0", fontSize: "11px", color: "#f5a623", fontFamily: "Arial, sans-serif", letterSpacing: "1px" }}>
                      {job_title ? job_title : 'your job'}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.12)", margin: "18px 0" }} />

                {/* Social icons */}
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  {socialLinks.map((s, i) => (
                    <a key={i} href={s.href} style={{ textDecoration: "none" }}>
                      <div style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {s.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <span style={{ color: "white", fontSize: "10px", padding: "0px 12px", }}><i>Powered by <strong>thynktales</strong></i></span>
              </div>
            </td>

            {/* CENTER: Organic blob photo */}
            <td style={{ width: "130px", padding: "0", verticalAlign: "middle", textAlign: "center", background: "#1a2356" }}>
              <div style={{ position: "relative", width: "110px", height: "120px", margin: "0 auto" }}>
                {/* Yellow blob border */}
                <div style={{ position: "absolute", top: "-4px", left: "-4px", width: "118px", height: "128px", background: "#f5a623", borderRadius: "60% 40% 55% 45% / 50% 45% 55% 50%" }} />
                {/* Photo blob */}
                <div style={{ position: "absolute", top: "0", left: "0", width: "110px", height: "120px", borderRadius: "60% 40% 55% 45% / 50% 45% 55% 50%", overflow: "hidden" }}>
                  <img
                    src={imageSrc}
                    alt="Profile"
                    style={{ width: "110px", height: "120px", objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>
            </td>

            {/* RIGHT: Contacts */}
            <td style={{ width: "290px", padding: "0", verticalAlign: "middle", background: "#1a2356", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ padding: "24px 24px 24px 20px" }}>
                <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                  <tbody>
                    {contacts.map((c, i) => (
                      <Fragment key={i}>
                        <tr key={`row-${i}`}>
                          <td style={{ padding: "5px 12px 5px 0", verticalAlign: "middle", width: "30px" }}>
                            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#f5a623", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {c.icon}
                            </div>
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
                              <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Third