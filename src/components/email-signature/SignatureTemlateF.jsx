import { POWERED_BY } from '@/utils/const';
import React from 'react'

function SignatureTemlateF({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar5.png";
  const contacts = [
    {
      bg: "",
      href: `tel:${phone_no}`,
      label: phone_no || "+880 1831 034992",
      icon: (
        <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="13" height="13" style={{ display: "block" }} />
      ),
    },
    {
      bg: "",
      href: `mailto:${email}`,
      label: email || "example@gmail.com",
      icon: (
        <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="13" height="13" style={{ display: "block" }} />
      ),
    },
    {
      bg: "",
      href: null,
      label: organization || "510 Road, Noapara, Jessore",
      icon: (

        <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="13" height="13" style={{ display: "block" }} />
      ),
    },
  ];

  const socialLinks = [
    {
      href: "https://youtube.com",
      bg: "",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
          width="80%"
          height="80%"
          style={{ display: "block" }}
          alt="YouTube"
        />
      ),
    },
    {
      href: twitter,
      bg: "",
      icon: (
       <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="80%" height="80%" style={{ display: "block" }} />
      ),
    },
    {
      href: linkedin,
      bg: "",
      icon: (
      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="80%" height="80%" style={{ display: "block" }} />
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
                        {socialLinks.map((s, i) => (
                          <a key={`${s.href}-${i}`} href={s.href} style={{ textDecoration: "none" }}>
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
    </div>
  );
}

export default SignatureTemlateF