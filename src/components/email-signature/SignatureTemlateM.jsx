import React from 'react'

function SignatureTemlateM({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar.png";
  const SocialLinks = [
    {
      label: 'X',
      icon: (<svg width="13" height="13" viewBox="0 0 24 24" fill="white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>),
      href: twitter || 'https://x.com',
    },
    {
      label: 'instagram',
      icon: (<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>),
      href: instagram || 'https://instagram.com',
    },
    {
      label: 'facebook',
      icon: (<svg width="13" height="13" viewBox="0 0 24 24" fill="white">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>),
      href: facebook || 'https://facebook.com',
    },
    {
      label: 'linkedIn',
      icon: (<svg width="13" height="13" viewBox="0 0 24 24" fill="white">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" fill="white" />
      </svg>),
      href: linkedin || 'https://linkedin.com',
    }
  ]
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table
        cellPadding="0"
        cellSpacing="0"
        style={{
          width: "600px",
          minWidth: "600px",
          borderRadius: "10px",
          overflow: "hidden",
          fontFamily: "'Segoe UI', Arial, sans-serif",
          boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
        }}
      >
        <tbody>

          {/* ══════════════════════════════════════════
              ROW 1 — Main content (3 cols)
          ══════════════════════════════════════════ */}
          <tr>

            {/* COL 1 — Mint green photo panel */}
            <td
              style={{
                width: "160px",
                backgroundColor: "#a8e6c3",
                verticalAlign: "bottom",
                padding: "0",
                position: "relative",
              }}
            >
              {/* Small green square decorators */}
              <div style={{
                position: "absolute", top: "18px", right: "14px",
                width: "10px", height: "10px", backgroundColor: "#4caf87", borderRadius: "2px",
              }} />
              <div style={{
                position: "absolute", top: "32px", right: "6px",
                width: "6px", height: "6px", backgroundColor: "#4caf87", borderRadius: "1px",
              }} />
              <div style={{
                position: "absolute", bottom: "22px", left: "10px",
                width: "8px", height: "8px", backgroundColor: "#4caf87", borderRadius: "2px",
              }} />
              <div style={{
                position: "absolute", bottom: "10px", left: "22px",
                width: "5px", height: "5px", backgroundColor: "#4caf87", borderRadius: "1px",
              }} />

              {/* Profile photo — bottom-aligned, no circle */}
              <div style={{ textAlign: "center", paddingTop: "24px" }}>
                <img
                  src={imageSrc}
                  alt="Julian Flores"
                  width="150"
                  height="160"
                  style={{
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "top center",
                    width: "100%",
                    height: "160px",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.style.height = "160px";
                    e.target.parentNode.style.backgroundColor = "#85d4a8";
                  }}
                />
              </div>
            </td>

            {/* COL 2 — Name, title, address */}
            <td
              style={{
                backgroundColor: "#ffffff",
                padding: "22px 20px 0px 24px",
                verticalAlign: "top",
                width: "210px",
                borderRight: "1px solid #eeeeee",
              }}
            >
              {/* First name */}
              <div style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#1b3a2f",
                lineHeight: "1.1",
                letterSpacing: "-0.5px",
              }}>
                {name ? name : 'Your Name'}
              </div>

              {/* Job title */}
              <div style={{
                fontSize: "10.5px",
                color: "#4caf87",
                fontWeight: "600",
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                marginBottom: "0",
              }}>
                {job_title ? job_title : 'Job Title'}
              </div>
            </td>

            {/* COL 3 — Contact details */}
            <td
              style={{
                backgroundColor: "#ffffff",
                padding: "22px 22px 0px 22px",
                verticalAlign: "top",
              }}
            >
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  {/* PHONE */}
                  <tr>
                    <td style={{ paddingBottom: "12px" }}>
                      <div style={{ fontSize: "8.5px", color: "#aaaaaa", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "2px" }}>
                        PHONE
                      </div>
                      <div style={{ fontSize: "12.5px", color: "#1a1a1a", fontWeight: "500" }}>
                        {phone_no ? phone_no : '(406) 555-0120'}
                      </div>
                    </td>
                  </tr>
                  {/* WEBSITE */}
                  <tr>
                    <td style={{ paddingBottom: "12px" }}>
                      <div style={{ fontSize: "8.5px", color: "#aaaaaa", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "2px" }}>
                        LinkedIn
                      </div>
                      <div style={{ fontSize: "12.5px", color: "#1a1a1a", fontWeight: "500" }}>
                        {linkedin ? linkedin : 'Your linkedIn'}
                      </div>
                    </td>
                  </tr>
                  {/* EMAIL */}
                  <tr>
                    <td>
                      <div style={{ fontSize: "8.5px", color: "#aaaaaa", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "2px" }}>
                        EMAIL
                      </div>
                      <div style={{ fontSize: "12.5px", color: "#1a1a1a", fontWeight: "500" }}>
                        {email ? email : 'Your email'}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* ══════════════════════════════════════════
              ROW 2 — Address bar (spans col 2+3)
          ══════════════════════════════════════════ */}
          <tr>
            <td style={{ backgroundColor: "#a8e6c3" }} />
            <td
              colSpan={2}
              style={{
                backgroundColor: "#ffffff",
                padding: "10px 22px 10px 24px",
                borderTop: "1px solid #eeeeee",
                verticalAlign: "middle",
                width: "70%"
              }}
            >
              <table cellPadding="0" cellSpacing="0" width="100%">
                <tbody>
                  <tr>
                    <td style={{ paddingRight: "10px", verticalAlign: "middle" }}>
                      {/* Map pin icon in green rounded square */}
                      <div style={{
                        width: "22px", height: "22px", borderRadius: "5px",
                        backgroundColor: "#4caf87",
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                       <span style={{ fontSize: "11.5px", color: "#555555", margin:"10px" }}>
                        {organization ? organization : 'Organization'}
                      </span>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <div>
                        <span style={{ color: "black", fontSize: "10px" }}><i>Powered by <strong>thynktales</strong></i></span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* ══════════════════════════════════════════
              ROW 3 — Dark footer bar
          ══════════════════════════════════════════ */}
          <tr>
            {/* Footer left — dark green with logo */}
            <td
              style={{
                backgroundColor: "#1b3a2f",
                padding: "10px 16px",
                verticalAlign: "middle",
              }}
            >
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                      {/* Logo icon — green rounded square */}
                      <div style={{
                        width: "22px", height: "22px", borderRadius: "5px",
                        backgroundColor: "#4caf87",
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                      </div>
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <span style={{ fontSize: "13px", fontWeight: "600", color: "#ffffff", letterSpacing: "0.2px" }}>

                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>

            {/* Footer right — dark with social icons */}
            <td
              colSpan={2}
              style={{
                backgroundColor: "#222222",
                padding: "10px 20px",
                verticalAlign: "middle",
                textAlign: "right",
              }}
            >
              <table cellPadding="0" cellSpacing="0" style={{ marginLeft: "auto" }}>
                <tbody>
                  <tr>
                    {SocialLinks.map((s, i) => (
                      <td key={i} style={{ paddingLeft: i > 0 ? "14px" : "0" }}>
                        <a href={s.href} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                          {s.icon}
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
    </div>
  );
}

export default SignatureTemlateM