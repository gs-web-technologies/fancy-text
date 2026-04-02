import { POWERED_BY } from '@/utils/const';
import React from 'react'

function SignatureTemlateE({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook, hasStarted }) {
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

    const contacts = [];

    if (phone_no) {
        contacts.push({ label: "mobile:", value: phone_no, href: "" });
    }
    if (email) {
        contacts.push({ label: "email:", value: email, href: "" });
    }
    if (linkedin) {
        contacts.push({ label: "LinkedIn:", value: linkedin, href: linkedin });
    }
    if (organization) {
        contacts.push({ label: "address:", value: organization, href: null });
    }

    return (
        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
            <tbody>
                <tr>
                    <td>
                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "600px", fontFamily: "'Georgia', serif", padding: "5px" }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            cellPadding="0"
                                            cellSpacing="0"
                                            style={{
                                                borderCollapse: "collapse",
                                                backgroundColor: "#ffffff",
                                                borderRadius: "10px",
                                                overflow: "hidden",
                                                boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                                                maxWidth: "520px",
                                                width: "100%",
                                            }}
                                        >
                                            <tbody>

                                                {/* Main Info Row */}
                                                <tr>
                                                    {/* Photo Cell */}
                                                    <td style={{ padding: "24px 16px 16px 24px", verticalAlign: "middle", width: "110px" }}>
                                                        <img
                                                            src={imageSrc}
                                                            alt="Johnathan Pope"
                                                            style={{
                                                                width: "90px",
                                                                height: "90px",
                                                                objectFit: "cover",
                                                                display: "block",
                                                                border: "2px solid #e8eaf0",
                                                            }}
                                                        />
                                                    </td>

                                                    {/* Divider */}
                                                    <td style={{ width: "3px", padding: "16px 0" }}>
                                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "3px", height: "100%", minHeight: "80px" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ width: "3px", backgroundColor: "#1a3a6b", borderRadius: "2px", minHeight: "80px" }}>&nbsp;</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>

                                                    {/* Info Cell */}
                                                    <td style={{ padding: "20px 24px 16px 20px", verticalAlign: "top" }}>
                                                        {/* Name */}
                                                        {name && (<p style={{ margin: "0 0 2px 0", fontSize: "20px", fontWeight: "800", color: "#1a3a6b", letterSpacing: "0.5px", fontFamily: "'Georgia', serif" }}>
                                                            {name}
                                                        </p>)}

                                                        {/* Title */}
                                                        {job_title && (
                                                            <p style={{ margin: "0 0 14px 0", fontSize: "11px", color: "#6b7280", fontWeight: "600", letterSpacing: "1.2px", textTransform: "uppercase", fontFamily: "'Arial', sans-serif" }}>
                                                                {job_title}
                                                            </p>
                                                        )}

                                                        {/* Contact Table */}
                                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                                            <tbody>
                                                                {contacts.map((row) => (
                                                                    <tr key={row.label}>
                                                                        <td style={{ paddingRight: "8px", paddingBottom: "3px", fontSize: "11.5px", fontWeight: "700", color: "#1a3a6b", fontFamily: "'Arial', sans-serif", verticalAlign: "top", whiteSpace: "nowrap" }}>
                                                                            {row.label}
                                                                        </td>
                                                                        <td style={{ paddingBottom: "3px", fontSize: "11.5px", color: "#374151", fontFamily: "'Arial', sans-serif", verticalAlign: "top" }}>
                                                                            {row.href ? (
                                                                                <a href={row.href} style={{ color: "#374151", textDecoration: "none" }}>{row.value}</a>
                                                                            ) : (
                                                                                row.value
                                                                            )}
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>

                                                {/* Social Icons Row */}
                                                <tr>
                                                    <td colSpan="3" style={{ padding: "0 24px 10px 24px" }}>
                                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                                            <tbody>
                                                                <tr>

                                                                    {/* instagram */}

                                                                    {instagram && (<td style={{ paddingRight: "8px" }}>
                                                                        <a href={instagram} style={{ textDecoration: "none" }}>
                                                                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "30px", height: "30px", borderRadius: "50%" }}>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="80%" height="80%" style={{
                                                                                                display: "block"
                                                                                            }} />
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </a>
                                                                    </td>)}

                                                                    {/* Facebook */}
                                                                    {facebook && (
                                                                        <td style={{ paddingRight: "8px" }}>
                                                                            <a href={facebook} style={{ textDecoration: "none" }}>
                                                                                <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "30px", height: "30px", backgroundColor: "#1877f2", borderRadius: "50%" }}>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                                                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="80%" height="80%" style={{ display: "block", borderRadius: "100%" }} />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </a>
                                                                        </td>
                                                                    )}

                                                                    {/* X / Twitter */}
                                                                    {twitter && (
                                                                        <td>
                                                                            <a href={twitter} style={{ textDecoration: "none" }}>
                                                                                <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "30px", height: "30px", backgroundColor: "#f8f5f5", borderRadius: "50%" }}>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                                                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="80%" height="80%" style={{ display: "block", borderRadius: "100%" }} />
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </a>
                                                                        </td>
                                                                    )}
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>

                                                {/* CTA Banner Row */}
                                                <tr>
                                                    <td colSpan="3" style={{ padding: "0" }}>
                                                        <a href={facebook} style={{ textDecoration: "none" }}>
                                                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", background: "linear-gradient(90deg, #1a3a6b 0%, #1877f2 100%)", borderRadius: "0 0 10px 10px" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ padding: "11px 24px", verticalAlign: "middle" }}>
                                                                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" }}>
                                                                                <tbody>
                                                                                    <tr>

                                                                                        {/* Facebook icon circle (overlapping) */}
                                                                                    {facebook && (<td style={{ paddingRight: "4px", verticalAlign: "middle" }}>
                                                                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "32px", height: "32px", backgroundColor: "#1877f2", border: "2px solid transparent", borderRadius: "50%", marginLeft: "-10px" }}>
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                                                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="100%" height="100%" style={{ display: "block", borderRadius: "50%" }} />
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>)}

                                                                                    {facebook && (<td style={{ verticalAlign: "middle", paddingRight: "4px" }}>
                                                                                        <span style={{ color: "#ffffff", fontWeight: "700", fontSize: "13.5px", fontFamily: "'Arial', sans-serif", letterSpacing: "0.3px" }}>
                                                                                            Join our Facebook group
                                                                                        </span>
                                                                                    </td>)}

                                                                                        {/* Powered by */}
                                                                                        <td style={{ verticalAlign: "middle", textAlign: "end" }}>
                                                                                            <span style={{ color: "white", fontSize: "10px" }}>
                                                                                                <i>Powered by <strong>{POWERED_BY}</strong></i>
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </a>
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

export default SignatureTemlateE