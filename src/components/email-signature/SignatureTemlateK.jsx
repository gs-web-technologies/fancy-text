import { POWERED_BY } from '@/utils/const';
import React from 'react'

function SignatureTemlateK({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar3.png";
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table
        cellPadding="0"
        cellSpacing="0"
        style={{
          width: "580px",
          minWidth: "580px",
          background: "linear-gradient(135deg, #000000 20%, #ffffff 0%, #ffffff 80%, #000000 20%)",
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
                  height: "80%",
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
                    src={imageSrc}
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
                <b>
                  {name ? name : 'Your Name'}
                </b>
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
                {job_title ? job_title : 'Job Title'}
              </div>

              <div>
                <span style={{ color: "black", fontSize: "10px" }}><i>Powered by <strong>{ POWERED_BY }</strong></i></span>
              </div>



            </td>

            {/* ══════════════════════════════
                RIGHT COLUMN
                Company name + contact info
            ══════════════════════════════ */}
            <td
              style={{
                padding: "30px 0px 30px 36px",
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
                {organization ? organization : 'Organization'}
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

              </div>

              {/* Contact rows */}
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  {[
                    {
                      icon: (
                        /* Phone */
                        <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="13" height="13" style={{ display: "block" }} />
                      ),
                      text: phone_no || "+123-456-7890",
                    },
                    {
                      icon: (
                        /* Cursor / pointer */
                       <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="13" height="13" style={{ display: "block" }} />
                      ),
                      text: linkedin || "www.reallygreatsite.com",
                    },
                    {
                      icon: (
                        /* Envelope */
                       <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="13" height="13" style={{ display: "block" }} />
                      ),
                      text: email || "youremail@gmail.com",
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