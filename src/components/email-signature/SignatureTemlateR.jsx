import { POWERED_BY } from '@/utils/const';
import React from 'react'

function SignatureTemlateR({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
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
      label: "instagram",
      icon: (<img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="13" height="13" style={{
        display: "block"
      }} />
      ),
      href: instagram || "https://instagram.com"
    },
    {
      label: "twitter",
      icon: (<img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="13" height="13" style={{ display: "block" }} />
      ),
      href: twitter || "https://x.com",
    },
    {
      label: "linkedIn",
      icon: (<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="13" height="13" style={{ display: "block" }} />
      ),
      href: linkedin || "https://linkedin.com"
    }
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table
        cellPadding="0"
        cellSpacing="0"
        style={{
          width: "580px",
          minWidth: "580px",
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          overflow: "hidden",
          fontFamily: "'Segoe UI', Arial, sans-serif",
          boxShadow: "0 3px 18px rgba(0,0,0,0.13)",
          border: "1.5px solid #eeeeee",
        }}
      >
        <tbody>
          <tr>

            {/* FAR LEFT — Red vertical bar */}
            <td style={{ width: "10px", backgroundColor: "#e8192c", padding: "0" }} />

            {/* LEFT SECTION — Photo box + social icons */}
            <td
              style={{
                width: "120px",
                padding: "18px 14px 18px 14px",
                verticalAlign: "top",
                backgroundColor: "#ffffff",
              }}
            >
              {/* Photo — rounded square with red border */}
              <div
                style={{
                  width: "92px",
                  height: "92px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  border: "2.5px solid #e8192c",
                  backgroundColor: "#fce8ea",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={imageSrc}
                  alt="Your Name"
                  width="92"
                  height="92"
                  style={{ objectFit: "cover", display: "block" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e8192c" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
                  }}
                />
              </div>

              {/* Social icons — vertical stack */}
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  {SocialLinks.map((item, i) => (
                    <tr key={i}>
                      <td style={{ paddingBottom: i < 3 ? "7px" : "0" }}>
                        <a href={item.href} style={{
                          display: "inline-flex", alignItems: "center", justifyContent: "center",
                          width: "22px", height: "22px", borderRadius: "5px",
                          backgroundColor: "#e8192c", textDecoration: "none",
                        }}>
                          {item.icon}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>

            {/* MIDDLE SECTION — Name, title, contacts */}
            <td
              style={{
                padding: "18px 18px 18px 10px",
                verticalAlign: "top",
                backgroundColor: "#ffffff",
              }}
            >
              {/* Name */}
              <div style={{
                fontSize: "17px", fontWeight: "800", color: "#1a1a1a",
                letterSpacing: "0.2px", marginBottom: "2px",
              }}>
                {name ? name : 'Your Name'}
              </div>

              {/* Title */}
              <div style={{
                fontSize: "10px", color: "#e8192c", fontWeight: "600",
                letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: "10px",
              }}>
                {job_title ? job_title : 'Job Title'}
              </div>

              {/* Red divider */}
              <div style={{
                height: "1.5px", backgroundColor: "#e8192c",
                width: "100%", marginBottom: "12px", borderRadius: "2px",
              }} />

              {/* Contact rows */}
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  {[
                    {
                      icon: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 12.07a19.79 19.79 0 01-3.07-8.64A2 2 0 011.9 1.11h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" /></svg>,
                      text: phone_no || "+00 000 00 000",
                    },
                    {
                      icon: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
                      text: email || "yourmail@example.com",
                    },
                    {
                      icon: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
                      text: linkedin || "www.yourwebsite.com",
                    },
                    {
                      icon: <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
                      text: organization || "Organization",
                    },
                  ].map((item, i) => (
                    <tr key={i}>
                      <td style={{ paddingBottom: "7px", verticalAlign: "middle" }}>
                        <table cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>{item.icon}</td>
                              <td style={{ fontSize: "11px", color: "#444444", verticalAlign: "middle", whiteSpace: "nowrap" }}>
                                {item.text}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>

            {/* RED VERTICAL DIVIDER */}
            <td style={{ width: "2px", backgroundColor: "#e8192c", padding: "0" }} />

            {/* RIGHT SECTION — Company */}
            <td
              style={{
                width: "110px",
                backgroundColor: "#ffffff",
                padding: "18px 16px",
                verticalAlign: "middle",
                textAlign: "center",
              }}
            >
              {/* Company logo icon */}
              <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", margin: "0 auto 8px auto" }}>
                <tbody>
                  <tr>
                    <td style={{ width: "44px", height: "44px", borderRadius: "10px", backgroundColor: "#e8192c", textAlign: "center", verticalAlign: "middle" }}>
                      <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/windows-10.png"
                        width="22"
                        height="22"
                        alt="logo"
                        style={{ display: "block", margin: "0 auto" }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Company name */}
              <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                <tbody>
                  <tr>
                    <td style={{ fontSize: "12px", fontWeight: "800", color: "#1a1a1a", letterSpacing: "1.5px", textTransform: "uppercase", lineHeight: "1.3", textAlign: "center" }}>
                      {organization ? organization : 'Organization'}
                    </td>
                  </tr>

                  {/* Red accent line */}
                  <tr>
                    <td style={{ textAlign: "center", paddingTop: "8px" }}>
                      <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", height: "2px", width: "28px", backgroundColor: "#e8192c", borderRadius: "2px", margin: "0 auto" }}>
                        <tbody><tr><td></td></tr></tbody>
                      </table>
                    </td>
                  </tr>

                  {/* Powered by */}
                  <tr>
                    <td style={{ textAlign: "right", fontSize: "10px", color: "#e8192c", paddingTop: "3px" }}>
                      <i>Powered by <strong>{POWERED_BY}</strong></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>

            {/* FAR RIGHT red bar */}
            <td style={{ width: "10px", backgroundColor: "#e8192c", padding: "0" }} />

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SignatureTemlateR