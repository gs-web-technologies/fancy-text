import { POWERED_BY } from '@/utils/const';
import React from 'react'

function SignatureTemlateG({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook, hasStarted }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar.png";
    if (!hasStarted) {
        name = "Your name";
        email = "youremail@example.com";
        job_title = "Job Title";
        phone_no = "+91-229229929";
        organization = "Organization";
        linkedin = "https://linkedin.com";
        instagram = "https://instagram.com";
        twitter = "https://twitter.com";
        facebook = "https://facebook.com"
    }


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
                                                        {name && (
                                                            <div style={{ fontSize: "17px", fontWeight: "700", color: "#1e293b" }}>
                                                                {name}
                                                            </div>)}
                                                        {job_title && (
                                                            <div
                                                                style={{
                                                                    fontSize: "11px",
                                                                    color: "#2563eb",
                                                                    letterSpacing: "0.08em",
                                                                    textTransform: "uppercase",
                                                                    marginTop: "2px",
                                                                }}
                                                            >
                                                                {job_title}
                                                            </div>)}
                                                    </td>

                                                    {/* Company */}
                                                    {organization && (
                                                        <td style={{ textAlign: "right" }}>
                                                            <div style={{ fontSize: "15px", fontWeight: "700", color: "#2563eb" }}>
                                                                {organization ? organization : 'Ogranization'}
                                                            </div>
                                                        </td>)}
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
                                                    {phone_no && (
                                                        <td style={{ fontSize: "12px", color: "#475569", paddingRight: "16px" }}>
                                                            <span style={{ color: "#2563eb" }}>✆</span>&nbsp; {phone_no}
                                                        </td>)}

                                                    {email && (
                                                        <td style={{ fontSize: "12px", color: "#475569", textAlign: "end" }}>
                                                            <span style={{ color: "#2563eb" }}>✉</span>&nbsp;
                                                            <a style={{ textDecoration: "none", color: "#2563eb" }}>{email}
                                                            </a>
                                                        </td>)}


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
                                                            {linkedin}
                                                            {(linkedin || job_title) && " | "}
                                                            {job_title && (
                                                                <small style={{ color: "#64748b" }}>
                                                                    {job_title}
                                                                </small>
                                                            )}
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