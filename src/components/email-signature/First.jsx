import React from 'react';

function First({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
    const mail = email || 'email@domain.com';
    const tel = phone_no || '00000000000';
    const linkedIn = linkedin || "https://yourwebsite.com";
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar3.png";
    const contacts = [
        {
            label: tel,
            href: `tel:${tel}`,
            icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.36 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.04 6.04l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
        },
        {
            label: mail,
            href: `mailto:${mail}`,
            icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
            ),
        },
        {
            label: "LinkedIn",
            href: linkedIn,
            icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            ),
        },
        {
            label: organization || "Organization name",
            href: null,
            icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
        },
    ];

    const socialLinks = [
        {
            href: instagram ? instagram : "https://instagram.com",
            bg: "#e91e8c",
            icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
            ),
        },
        {
            href: twitter ? twitter : "https://x.com",
            bg: "#1da1f2",
            icon: (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
            ),
        },
        {
            href: facebook ? facebook : "https://facebook.com",
            bg: "#1877f2",
            icon: (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            ),
        },
    ];

    return (
        <div style={{ width: "600px", backgroundColor: "#f3f4f6", display: "flex", justifyContent: "center" }}>
            <table
                cellPadding="0"
                cellSpacing="0"
                style={{
                    borderCollapse: "collapse",
                    width: "640px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.13)",
                    background: "#fff",
                }}
            >
                <tbody>
                    <tr>
                        {/* LEFT: Info panel with pink triangle accent */}
                        <td style={{ width: "340px", padding: "0", verticalAlign: "top", background: "#fff" }}>
                            <div style={{ position: "relative", padding: "28px 24px 24px 24px", minHeight: "130px" }}>

                                {/* SVG decorative corner triangles */}
                                <svg style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }} width="120" height="110" viewBox="0 0 120 110">
                                    <polygon points="0,0 120,0 0,110" fill="#e91e8c" opacity="0.12" />
                                </svg>
                                <svg style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }} width="80" height="75" viewBox="0 0 80 75">
                                    <polygon points="0,0 80,0 0,75" fill="#e91e8c" opacity="0.22" />
                                </svg>

                                {/* Name */}
                                <div style={{ position: "relative", zIndex: 1, marginBottom: "2px" }}>
                                    <span style={{ fontSize: "18px", fontWeight: "700", color: "#e91e8c", fontFamily: "Arial, sans-serif" }}> {name ? name : 'Your Name'}</span>
                                </div>

                                {/* Title */}
                                <p style={{ position: "relative", zIndex: 1, margin: "0 0 14px", fontSize: "11px", color: "#888", fontFamily: "Arial, sans-serif", fontStyle: "italic" }}>
                                    {job_title ? job_title : 'JOB TITLE'}
                                </p>

                                {/* Contacts */}
                                <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "relative", zIndex: 1 }}>
                                    <tbody>
                                        {contacts.map((c, i) => (
                                            <tr key={i}>
                                                <td style={{ padding: "3px 8px 3px 0", verticalAlign: "middle" }}>{c.icon}</td>
                                                <td style={{ fontSize: "11.5px", color: "#444", fontFamily: "Arial, sans-serif", padding: "3px 0" }}>
                                                    {c.href ? (
                                                        <a href={c.href} style={{ color: "#444", textDecoration: "none" }}>{c.label}</a>
                                                    ) : c.label}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </td>


                        {/* RIGHT: Photo with pink diagonal overlay */}
                        <td style={{ width: "160px", padding: "0", verticalAlign: "top", position: "relative", overflow: "hidden", background: "#fff" }}>
                            <div style={{ position: "relative", width: "160px", height: "170px", overflow: "hidden" }}>
                                <img
                                    src={imageSrc}
                                    alt="Thomas Smith"
                                    style={{ width: "160px", height: "170px", objectFit: "cover", display: "block" }}
                                />
                                {/* Pink diagonal overlays */}
                                <svg style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }} width="160" height="170" viewBox="0 0 160 170">
                                    <polygon points="80,0 160,0 160,170" fill="#e91e8c" opacity="0.55" />
                                </svg>
                                <svg style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }} width="160" height="170" viewBox="0 0 160 170">
                                    <polygon points="110,0 160,0 160,80" fill="#e91e8c" opacity="0.35" />
                                </svg>
                            </div>
                            {/* CENTER: Logo + social */}
                            <div style={{ width: "140px", verticalAlign: "middle", textAlign: "center", padding: "10px 10px" }}>
                                {/* Social icons */}

                                <div style={{ display: "flex", justifyContent: "center", gap: "7px" }}>
                                    {socialLinks.map((s) => (
                                        <a key={s.href} href={s.href} style={{ textDecoration: "none" }}>
                                            <div style={{ width: "26px", height: "26px", backgroundColor: s.bg, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                {s.icon}
                                            </div>
                                        </a>
                                    ))}
                                </div>
                                <div>
                                    <span style={{ color: "black", fontSize: "10px" }}><i>Powered by <strong>thynktales</strong></i></span>
                                </div>
                            </div>
                        </td>
                    </tr>

                    {/* Bottom pink accent bar */}
                    <tr>
                        <td colSpan="3" style={{ background: "#e91e8c", height: "5px", padding: "0" }} />
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default First