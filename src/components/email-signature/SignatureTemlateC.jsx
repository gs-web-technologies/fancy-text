import React from 'react'

function SignatureTemlateC({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar3.png";
    const contacts = [
        {
            icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1b3a5c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.36 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.04 6.04l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            value: "+123-456-7890",
            value2: "+123-456-7891",
            href: "tel:+1234567890",
            href2: "tel:+1234567891",
        },
    ];

    const socialLinks = [
        {
            href: linkedin ? linkedin : "https://linkedin.com",
            bg: "#0077b5",
            icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
        },
        {
            href: facebook ? facebook : "https://facebook.com",
            bg: "#1877f2",
            icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            ),
        },
        {
            href: twitter ? twitter : "https://x.com",
            bg: "#000000",
            icon: (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
        {
            href: instagram ? instagram : "https://instagram.com",
            bg: "#e1306c",
            icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
            ),
        },
    ];

    return (
        <div style={{ padding: "", width: "600px", backgroundColor: "", display: "flex", justifyContent: "center" }}>
            <table
                cellPadding="0"
                cellSpacing="0"
                style={{
                    borderCollapse: "collapse",
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    width: "620px",
                    border: "0.5px solid #d1d5db",
                }}
            >
                <tbody>
                    <tr>
                        {/* Left accent bar */}
                        <td style={{ width: "6px", backgroundColor: "#1b3a5c", borderRadius: "12px 0 0 12px" }} />

                        {/* Photo */}
                        <td style={{ padding: "20px 0 20px 20px", verticalAlign: "middle", width: "90px" }}>
                            <div
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    border: "3px solid #1b3a5c",
                                }}
                            >
                                <img
                                    src={imageSrc}
                                    alt="Jonathan Hansen"
                                    style={{ width: "80px", height: "80px", objectFit: "cover", display: "block" }}
                                />
                                
                            </div>
                        </td>

                        {/* Name, title, contacts */}
                        <td style={{ padding: "20px 16px", verticalAlign: "middle" }}>
                            <p
                                style={{
                                    margin: "0 0 2px",
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    color: "#1b3a5c",
                                    fontFamily: "Georgia, serif",
                                    letterSpacing: "0.3px",
                                }}
                            >
                                {name ? name : 'Your Name'}
                            </p>
                            <p
                                style={{
                                    margin: "0 0 12px",
                                    fontSize: "11.5px",
                                    color: "#6b7280",
                                    fontFamily: "Arial, sans-serif",
                                    fontStyle: "italic",
                                }}
                            >
                                {job_title ? job_title : 'JOB TITLE'}
                            </p>

                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                <tbody>
                                    {/* Phone row */}
                                    <tr>
                                        <td style={{ paddingRight: "10px", paddingBottom: "3px", verticalAlign: "middle" }}>
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1b3a5c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.36 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.04 6.04l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                        </td>
                                        <td style={{ fontSize: "12px", color: "#374151", fontFamily: "Arial, sans-serif", paddingBottom: "3px" }}>
                                            <a href="tel:+1234567891" style={{ color: "#374151", textDecoration: "none" }}> {phone_no ? phone_no : '+000 1234 56789'}</a>
                                        </td>
                                    </tr>

                                    {/* Email row */}
                                    <tr>
                                        <td style={{ paddingRight: "10px", paddingBottom: "3px", verticalAlign: "middle" }}>
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1b3a5c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                            </svg>
                                        </td>
                                        <td colSpan="3" style={{ fontSize: "12px", color: "#374151", fontFamily: "Arial, sans-serif", paddingBottom: "3px" }}>
                                            <a href="mailto:info@youremail.com" style={{ color: "#374151", textDecoration: "none" }}>{email ? email : 'youremail@gmail.com'}</a>
                                        </td>
                                    </tr>

                                    {/* Website row */}
                                    <tr>
                                        <td style={{ paddingRight: "10px", paddingBottom: "3px", verticalAlign: "middle" }}>
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1b3a5c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                            </svg>
                                        </td>
                                        <td colSpan="3" style={{ fontSize: "12px", color: "#374151", fontFamily: "Arial, sans-serif", paddingBottom: "3px" }}>
                                            <a href="https://www.yourwebsite.com" style={{ color: "#374151", textDecoration: "none" }}>{linkedin ? linkedin : 'www.google.com'}</a>
                                        </td>
                                    </tr>

                                    {/* Address row */}
                                    <tr>
                                        <td style={{ paddingRight: "10px", verticalAlign: "middle" }}>
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1b3a5c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                                            </svg>
                                        </td>
                                        <td colSpan="3" style={{ fontSize: "12px", color: "#374151", fontFamily: "Arial, sans-serif" }}>
                                            {organization ? organization : 'Organization'}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        {/* Vertical divider */}
                        <td style={{ width: "1px", backgroundColor: "#d1d5db", padding: "0" }} />

                        {/* Brand + social icons */}
                        <td style={{ padding: "20px 24px", verticalAlign: "middle", textAlign: "center", width: "110px" }}>
                            {/* Brand box */}


                            {/* Social icons */}
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                                {socialLinks.map((s,i) => (
                                    <a key={`${s.href}-${i}`} href={s.href} style={{ textDecoration: "none" }}>
                                        <div
                                            style={{
                                                width: "26px",
                                                height: "26px",
                                                backgroundColor: s.bg,
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {s.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <div>
                                <span style={{ color: "black", fontSize: "10px" }}><i>Powered by <strong>thynktales</strong></i></span>
                            </div>
                        </td>

                        {/* Right accent bar */}
                        <td style={{ width: "6px", backgroundColor: "#1b3a5c", borderRadius: "0 12px 12px 0" }} />
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default SignatureTemlateC