import React from 'react'

function SignatureTemlateL() {
 return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: "520px",
        backgroundColor: "#ffffff",
        fontFamily: "Georgia, 'Times New Roman', serif",
        borderCollapse: "collapse",
      }}
    >
      <tbody>
        <tr>
          {/* LEFT: Circular Profile Photo */}
          <td style={{ verticalAlign: "middle", paddingRight: "20px", width: "120px" }}>
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "none",
              }}
            >
              <img
                src="https://via.placeholder.com/110"
                alt="Profile Photo"
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </td>

          {/* VERTICAL DIVIDER */}
          <td
            style={{
              width: "1px",
              backgroundColor: "#cccccc",
              padding: "0",
            }}
          />

          {/* RIGHT: Info */}
          <td style={{ verticalAlign: "middle", paddingLeft: "24px" }}>
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                {/* Name */}
                <tr>
                  <td>
                    <p
                      style={{
                        margin: "0 0 2px 0",
                        fontSize: "30px",
                        fontWeight: "bold",
                        color: "#1a1a1a",
                        letterSpacing: "0.5px",
                        lineHeight: "1.1",
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      Alison Lebofsky
                    </p>
                  </td>
                </tr>

                {/* Title */}
                <tr>
                  <td style={{ paddingBottom: "2px" }}>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#1a1a1a",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      FOUNDER + CREATIVE DIRECTOR
                    </p>
                  </td>
                </tr>

                {/* Company */}
                <tr>
                  <td style={{ paddingBottom: "12px" }}>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#1a1a1a",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      PERSPETIIV DESIGN CO.
                    </p>
                  </td>
                </tr>

                {/* Phone */}
                <tr>
                  <td>
                    <p
                      style={{
                        margin: "0 0 2px 0",
                        fontSize: "12px",
                        color: "#444444",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      (720) 891-7858
                    </p>
                  </td>
                </tr>

                {/* Email */}
                <tr>
                  <td>
                    <p
                      style={{
                        margin: "0 0 2px 0",
                        fontSize: "12px",
                        color: "#444444",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      alison@perspektivv.com
                    </p>
                  </td>
                </tr>

                {/* Website */}
                <tr>
                  <td style={{ paddingBottom: "12px" }}>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "12px",
                        color: "#444444",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      perspektivv.com
                    </p>
                  </td>
                </tr>

                {/* Social Icons */}
                <tr>
                  <td>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          {/* Instagram */}
                          <td style={{ paddingRight: "10px" }}>
                            <div
                              style={{
                                width: "22px",
                                height: "22px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#333333"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="0.8" fill="#333333" stroke="none" />
                              </svg>
                            </div>
                          </td>

                          {/* Facebook */}
                          <td style={{ paddingRight: "10px" }}>
                            <div
                              style={{
                                width: "22px",
                                height: "22px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#333333"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                              </svg>
                            </div>
                          </td>

                          {/* Pinterest */}
                          <td>
                            <div
                              style={{
                                width: "22px",
                                height: "22px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="#333333"
                              >
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                              </svg>
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

export default SignatureTemlateL