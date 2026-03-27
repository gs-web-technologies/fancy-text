import React from 'react'

function SignatureTemlateK() {
   return (
    <div style={{ backgroundColor: "#f5f5f5", padding: "40px", display: "flex", justifyContent: "center" }}>
      <table
        cellPadding="0"
        cellSpacing="0"
        style={{
          width: "580px",
          minWidth: "580px",
          backgroundColor: "#ffffff",
          fontFamily: "'Georgia', 'Times New Roman', serif",
          boxShadow: "0 1px 8px rgba(0,0,0,0.07)",
        }}
      >
        <tbody>
          <tr>
            {/* ══════════════════════════════
                LEFT COLUMN
                Photo + Name + Title + Icon
            ══════════════════════════════ */}
            <td
              style={{
                width: "220px",
                padding: "30px 0px 30px 28px",
                verticalAlign: "bottom",
                position: "relative",
              }}
            >
              {/* Thin vertical divider line — top portion */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "1px",
                  height: "38%",
                  backgroundColor: "#cccccc",
                }}
              />

              {/* Profile photo — circle, slightly overlapping top */}
              <div style={{ marginBottom: "14px" }}>
                <div
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid #e8e8e8",
                    backgroundColor: "#f0ede8",
                    display: "inline-block",
                  }}
                >
                  {/* Replace src with your photo */}
                  <img
                    src="/profile.jpg"
                    alt="Mariana Napolitani"
                    width="110"
                    height="110"
                    style={{
                      objectFit: "cover",
                      display: "block",
                      filter: "grayscale(15%)",
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentNode.style.backgroundColor = "#ddd8d0";
                    }}
                  />
                </div>
              </div>

              {/* Name */}
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#1a1a1a",
                  letterSpacing: "0.2px",
                  marginBottom: "4px",
                  fontFamily: "'Georgia', serif",
                }}
              >
                Mariana Napolitani
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: "10px",
                  color: "#888888",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  fontFamily: "'Segoe UI', Arial, sans-serif",
                  marginBottom: "14px",
                }}
              >
                PROJECT MANAGER
              </div>

              {/* Camera / edit icon circle */}
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: "#e8e8e8",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#888"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
            </td>

            {/* ══════════════════════════════
                RIGHT COLUMN
                Company name + contact info
            ══════════════════════════════ */}
            <td
              style={{
                padding: "30px 28px 30px 36px",
                verticalAlign: "top",
              }}
            >
              {/* Company name */}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#1a1a1a",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  fontFamily: "'Georgia', serif",
                  marginBottom: "4px",
                }}
              >
                WARNER &amp; SPENCER
              </div>

              {/* Company subtitle */}
              <div
                style={{
                  fontSize: "10px",
                  color: "#aaaaaa",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontFamily: "'Segoe UI', Arial, sans-serif",
                  marginBottom: "32px",
                }}
              >
                INTERIOR DESIGN
              </div>

              {/* Contact rows */}
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  {[
                    {
                      icon: (
                        /* Phone */
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 12.07a19.79 19.79 0 01-3.07-8.64A2 2 0 011.9 1.11h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                      ),
                      text: "+123-456-7890",
                    },
                    {
                      icon: (
                        /* Cursor / pointer */
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4l6.5 17 2.5-7 7-2.5L4 4z" />
                        </svg>
                      ),
                      text: "www.reallygreatsite.com",
                    },
                    {
                      icon: (
                        /* Envelope */
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      ),
                      text: "hello@reallygreatsite.com",
                    },
                    {
                      icon: (
                        /* Pin */
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      ),
                      text: "123 Anywhere St., Any City, ST 12345",
                    },
                  ].map((item, i) => (
                    <tr key={i}>
                      <td
                        style={{
                          paddingBottom: "9px",
                          verticalAlign: "middle",
                          paddingRight: "10px",
                          color: "#666",
                        }}
                      >
                        {item.icon}
                      </td>
                      <td
                        style={{
                          paddingBottom: "9px",
                          fontSize: "11.5px",
                          color: "#444444",
                          fontFamily: "'Segoe UI', Arial, sans-serif",
                          letterSpacing: "0.2px",
                          verticalAlign: "middle",
                        }}
                      >
                        {item.text}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SignatureTemlateK