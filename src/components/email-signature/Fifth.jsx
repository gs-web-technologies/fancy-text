import React from 'react'

function Fifth({ name, email, job_title, phone_no, organization, logo }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar3.png";
    return (
        <div style={{ margin: 0, padding: "20px",width: "600px",  border: "1px solid #e2e8f0",  borderRadius: "10px 3px", background:"#f7f4f4" }}>
            <table
                cellPadding="0"
                cellSpacing="0"
                border="0"
                style={{
                    borderCollapse: "collapse",
                    fontFamily: "Arial, sans-serif",
                    maxWidth: "500px",
                }}
            >
                <tbody>
                    <tr>
                        {/* LEFT: Image + Social */}
                        <td style={{ padding: 0 }}>
                            <table style={{ borderCollapse: "collapse" }}>
                                <tbody>
                                    {/* Profile Image */}
                                    <tr>
                                        <td>
                                            <img
                                                src={imageSrc}
                                                alt="Profile"
                                                width="110"
                                                height="110"
                                                style={{ display: "block", objectFit: "cover" }}
                                            />
                                        </td>
                                    </tr>

                                    {/* Social Bar */}
                                    <tr>
                                        <td
                                            style={{
                                                background: "#F5A800",
                                                padding: "7px 0",
                                                textAlign: "center",
                                            }}
                                        >
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        {/* RIGHT: Info */}
                        <td
                            style={{
                                padding: "14px 16px 10px",
                                borderLeft: "3px solid #F5A800",
                            }}
                        >
                            <table style={{ width: "100%" }}>
                                <tbody>
                                    {/* Name + Logo */}
                                    <tr>
                                        <td>
                                            <table style={{ width: "100%" }}>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span
                                                                style={{
                                                                    fontSize: "18px",
                                                                    fontWeight: "bold",
                                                                    color: "#333",
                                                                }}
                                                            >
                                                                {name ? name : 'Your Name'}
                                                            </span>
                                                        </td>

                                                        <td style={{ textAlign: "right" }}>
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "flex-end",
                                                                }}
                                                            >
                                                                <svg width="28" height="28">
                                                                    <circle
                                                                        cx="14"
                                                                        cy="14"
                                                                        r="13"
                                                                        fill="none"
                                                                        stroke="#F5A800"
                                                                        strokeWidth="2"
                                                                    />
                                                                </svg>

                                                                <span
                                                                    style={{
                                                                        fontSize: "14px",
                                                                        fontWeight: "bold",
                                                                        color: "#F5A800",
                                                                        marginLeft: "5px",
                                                                    }}
                                                                >
                                                                    {organization ? organization : 'Organization'}
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>

                                    {/* Job */}
                                    <tr>
                                        <td style={{ paddingTop: "2px", paddingBottom: "10px" }}>
                                            <span style={{ fontSize: "12px", color: "#999" }}>
                                                {job_title ? job_title : 'JOB TITLE'}
                                            </span>
                                        </td>
                                    </tr>

                                    {/* Divider */}
                                    <tr>
                                        <td>
                                            <div
                                                style={{
                                                    height: "1px",
                                                    background: "#F5A800",
                                                    marginBottom: "8px",
                                                }}
                                            />
                                        </td>
                                    </tr>

                                    {/* Phone + Email */}
                                    <tr>
                                        <td style={{ fontSize: "12px", paddingBottom: "5px" }}>
                                            {phone_no ? phone_no : '+91-3393-3339'} |{" "}
                                            <a href="mailto:test@test.com">{email ? email : 'youremail@gmail.com'}</a>
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

export default Fifth