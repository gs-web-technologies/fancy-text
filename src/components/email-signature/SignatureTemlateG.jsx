import { POWERED_BY } from '@/utils/const';
import React from 'react'

function SignatureTemlateG({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar.png";
    return (

        <table id="s1" style={{
            width: "600px",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderTop: "3px solid #2563eb",
            fontFamily: "'Poppins', Arial, sans-serif",
            maxWidth: "480px",
        }}>
            <tbody>
                <tr>
                    <td>

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
                                                                width: "96px",
                                                                height: "96px",
                                                                borderRadius: "50%",
                                                                overflow: "hidden",
                                                                border: "3px solid #ffffff",
                                                            }}
                                                        >
                                                            {/* Replace src with your actual photo */}
                                                            <img
                                                                src={imageSrc}
                                                                alt="Micheal Smith"
                                                                width="96"
                                                                height="96"
                                                                style={{ display: "block", objectFit: "cover", objectPosition: "center", width: "100%", height: "100%" }}
                                                            />
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

                                                    <td style={{ fontSize: "12px", color: "#475569", textAlign: "end" }}>
                                                        <span style={{ color: "#2563eb" }}>✉</span>&nbsp; 
                                                        <a style={{textDecoration:"none", color: "#2563eb"}}>{email ? email : 'youremail@gmail.com'}
                                                            </a>
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
                                            color: "#2563eb"
                                        }}
                                    >
                                        <table
                                            width="100%"
                                            cellPadding="0"
                                            cellSpacing="0"
                                            style={{ borderCollapse: "collapse" }}
                                        >
                                            <tbody>
                                                <tr>

                                                    {/* LEFT SIDE */}
                                                    <td style={{ verticalAlign: "middle" }}>
                                                        <span>
                                                            {linkedin || "www.techflow.com"}
                                                            {(linkedin || job_title) && " | "}
                                                            <small style={{ color: "#64748b" }}>
                                                                {job_title || "CA"}
                                                            </small>
                                                        </span>
                                                    </td>

                                                    {/* RIGHT SIDE */}
                                                    <td
                                                        style={{
                                                            textAlign: "right",
                                                            verticalAlign: "middle"
                                                        }}
                                                    >
                                                        <span style={{ color: "#000", fontSize: "10px" }}>
                                                            <i>
                                                                Powered by <strong>{POWERED_BY}</strong>
                                                            </i>
                                                        </span>
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

export default SignatureTemlateG