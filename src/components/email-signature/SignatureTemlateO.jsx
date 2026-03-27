import React from 'react'

function SignatureTemlateO() {
  return (
    <div style={{ backgroundColor: "#f7f9fc", padding: "40px", display: "flex", justifyContent: "center" }}>
      <table
        cellPadding="0"
        cellSpacing="0"
        style={{
          width: "420px",
          minWidth: "420px",
          backgroundColor: "#ffffff",
          fontFamily: "'Segoe UI', Arial, sans-serif",
        }}
      >
        <tbody>

          {/* ── "Kind regards," handwriting text ── */}
          <tr>
            <td colSpan={2} style={{ paddingBottom: "18px" }}>
              <div
                style={{
                  fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
                  fontSize: "22px",
                  color: "#222222",
                  fontWeight: "700",
                  lineHeight: "1",
                }}
              >
                Kind regards,
              </div>
            </td>
          </tr>

          {/* ── Main row: photo | info ── */}
          <tr>
            {/* Photo column */}
            <td
              style={{
                verticalAlign: "top",
                paddingRight: "16px",
                width: "70px",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #e8e8e8",
                  backgroundColor: "#f0e8e0",
                }}
              >
                {/* Replace /profile.jpg with your actual photo */}
                <img
                  src="/profile.jpg"
                  alt="Alex Perez"
                  width="64"
                  height="64"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.style.backgroundColor = "#d4b8a0";
                  }}
                />
              </div>
            </td>

            {/* Info column */}
            <td style={{ verticalAlign: "top" }}>

              {/* Name */}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  marginBottom: "2px",
                  letterSpacing: "0.1px",
                }}
              >
                Alex Perez
              </div>

              {/* Title line — "CFO at Finance Mile" with colored company */}
              <div style={{ fontSize: "12px", color: "#555555", marginBottom: "10px" }}>
                CFO at{" "}
                <span style={{ color: "#29b6f6", fontWeight: "600" }}>Finance Mile</span>
              </div>

              {/* Thin blue divider */}
              <div
                style={{
                  height: "1.5px",
                  backgroundColor: "#29b6f6",
                  width: "100%",
                  marginBottom: "10px",
                  borderRadius: "2px",
                }}
              />

              {/* Contact rows */}
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  {[
                    {
                      letter: "A",
                      value: "1948 Heritage Road, Visalia, CA 93291",
                    },
                    {
                      letter: "P",
                      value: "1559-741-7878",
                      extra: (
                        <>
                          {"  "}
                          <span style={{ color: "#aaaaaa", fontSize: "10px", marginRight: "4px" }}>E</span>
                          <span style={{ color: "#444" }}>alex.perez@financemile.com</span>
                        </>
                      ),
                    },
                    {
                      letter: "W",
                      value: "www.financemile.com",
                    },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td
                        style={{
                          fontSize: "10px",
                          color: "#aaaaaa",
                          fontWeight: "700",
                          paddingRight: "6px",
                          paddingBottom: "5px",
                          verticalAlign: "top",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {row.letter}
                      </td>
                      <td
                        style={{
                          fontSize: "11px",
                          color: "#444444",
                          paddingBottom: "5px",
                          verticalAlign: "top",
                          lineHeight: "1.5",
                        }}
                      >
                        {row.value}
                        {row.extra && row.extra}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Social icons */}
              <table cellPadding="0" cellSpacing="0" style={{ marginTop: "10px" }}>
                <tbody>
                  <tr>
                    {/* Facebook */}
                    <td style={{ paddingRight: "8px" }}>
                      <a
                        href="#"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          backgroundColor: "#1877f2",
                          textDecoration: "none",
                        }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                    </td>
                    {/* Twitter / X */}
                    <td>
                      <a
                        href="#"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          backgroundColor: "#1da1f2",
                          textDecoration: "none",
                        }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
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

export default SignatureTemlateO