import React from 'react'

function Sixth({ name, email, job_title, phone_no, organization, logo }) {
    return (
        <div
            id="s1"
            style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderTop: "3px solid #2563eb",
                fontFamily: "'Poppins', Arial, sans-serif",
                maxWidth: "480px",
            }}
        >
            <table cellPadding="0" cellSpacing="0" border="0" style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                    <tr>
                        <td style={{ padding: "16px 18px" }}>
                            {/* Top Section */}
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <tbody>
                                    <tr>
                                        {/* Avatar */}
                                        <td style={{ paddingRight: "14px" }}>
                                            <div
                                                style={{
                                                    width: "52px",
                                                    height: "52px",
                                                    borderRadius: "50%",
                                                    background: "#2563eb",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "20px",
                                                    fontWeight: "700",
                                                    color: "#fff",
                                                }}
                                            >
                                                JR
                                            </div>
                                        </td>

                                        {/* Name + Role */}
                                        <td>
                                            <div style={{ fontSize: "17px", fontWeight: "700", color: "#1e293b" }}>
                                                 {name ? name : 'YourName'}
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "11px",
                                                    color: "#2563eb",
                                                    letterSpacing: "0.08em",
                                                    textTransform: "uppercase",
                                                    marginTop: "2px",
                                                }}
                                            >
                                               {job_title ? job_title : 'Job Title'}
                                            </div>
                                        </td>

                                        {/* Company */}
                                        <td style={{ textAlign: "right" }}>
                                            <div style={{ fontSize: "15px", fontWeight: "700", color: "#2563eb" }}>
                                              {organization ? organization : 'Ogranization'}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Divider */}
                            <div
                                style={{
                                    height: "1px",
                                    background: "#e2e8f0",
                                    margin: "12px 0",
                                }}
                            />

                            {/* Contact Row */}
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <tbody>
                                    <tr>
                                        <td style={{ fontSize: "12px", color: "#475569", paddingRight: "16px" }}>
                                            <span style={{ color: "#2563eb" }}>✆</span>&nbsp; {phone_no ? phone_no : '+91 98765 43210'}
                                        </td>

                                        <td style={{ fontSize: "12px", color: "#475569" }}>
                                            <span style={{ color: "#2563eb" }}>✉</span>&nbsp; {email ? email : 'youremail@gmail.com'}
                                        </td>

                                       
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                        <td
                            style={{
                                background: "#eff6ff",
                                padding: "8px 18px",
                                fontSize: "11px",
                                color: "#2563eb",
                            }}
                        >
                            www.techflow.io &nbsp;|&nbsp;
                            <span style={{ color: "#64748b" }}>San Francisco, CA</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Sixth