import { POWERED_BY } from '@/utils/const';
import React from 'react'

function SignatureTemlateI({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar5.png";
    const socialLinks = [{
        label: "facebook",
        href: facebook || "https://facebook.com",
        icon: (< svg width="10" height="10" viewBox="0 0 24 24" fill="white" > <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg >
        ),
    },
    {
        label: "linkedIn",
        href: linkedin || "https://linkedin.com",
        icon: (<svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" fill="white" /></svg>
        ),
    },
    {
        label: "twitter",
        href: twitter || "https://x.com",
        icon: (<svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
        ),
    },
    ];

    return (
        <div style={{ backgroundColor: "#f0f4f8", display: "flex", justifyContent: "center" }} >
            <table
                cellPadding="0"
                cellSpacing="0"
                style={{
                    width: "620px",
                    minWidth: "620px",
                    backgroundColor: "#ffffff",
                    borderRadius: "14px",
                    overflow: "hidden",
                    fontFamily: "'Segoe UI', Arial, sans-serif",
                    boxShadow: "0 2px 16px rgba(0,188,212,0.10)",
                    position: "relative",
                }}
            >
                <tbody>
                    <tr>
                        {/* ═══════════════════════════════
                LEFT COLUMN — white background
                Logo | Name | Job | Socials
            ════════════════════════════════ */}
                        <td
                            style={{
                                width: "240px",
                                padding: "24px 20px 20px 24px",
                                verticalAlign: "top",
                                backgroundColor: "#ffffff",
                                position: "relative",
                            }}
                        >
                            {/* Large teal decorative circle — bottom left */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "-40px",
                                    left: "-40px",
                                    width: "130px",
                                    height: "130px",
                                    borderRadius: "50%",
                                    backgroundColor: "#00bcd4",
                                    zIndex: 0,
                                    opacity: 0.95,
                                }}
                            />
                            {/* Small teal circle — mid left */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "60px",
                                    left: "-18px",
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%",
                                    backgroundColor: "#00bcd4",
                                    zIndex: 0,
                                    opacity: 0.5,
                                }}
                            />

                            {/* LOGO ROW */}
                            <table cellPadding="0" cellSpacing="0" style={{ marginBottom: "20px", position: "relative", zIndex: 1 }}>
                                <tbody>
                                    <tr>
                                        <td style={{ verticalAlign: "middle", paddingRight: "10px" }}>
                                            <div
                                                style={{
                                                    width: "38px",
                                                    height: "38px",
                                                    borderRadius: "50%",
                                                    backgroundColor: "#e0f7fa",
                                                    border: "2px solid #00bcd4",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="9" stroke="#00bcd4" strokeWidth="2.5" />
                                                    <circle cx="12" cy="12" r="4" fill="#00bcd4" />
                                                </svg>
                                            </div>
                                        </td>
                                        <td style={{ verticalAlign: "middle" }}>
                                            <div style={{ fontWeight: "800", fontSize: "13px", color: "#00bcd4", lineHeight: "1.2", textTransform: "uppercase" }}>
                                                {organization ? organization : 'Organization'}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* NAME */}
                            <div
                                style={{
                                    fontWeight: "800",
                                    fontSize: "19px",
                                    color: "#111111",
                                    lineHeight: "1.2",
                                    marginBottom: "4px",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                {name ? name : 'Your Name'}
                            </div>

                            {/* JOB POSITION */}
                            <div
                                style={{
                                    fontSize: "11px",
                                    color: "#020202",
                                    fontWeight: "600",
                                    letterSpacing: "1px",
                                    textTransform: "uppercase",
                                    marginBottom: "22px",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                {job_title ? job_title : 'Job title'}
                            </div>

                            {/* SOCIAL ICONS ROW */}
                            <table cellPadding="0" cellSpacing="0" style={{ position: "relative", zIndex: 1 }}>
                                <tbody>
                                    <tr>
                                        {socialLinks.map((s, i) => (
                                            <td key={i} style={{ paddingRight: i < 2 ? "8px" : "0" }}>
                                                <a
                                                    href={s.href}
                                                    style={{
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        width: "26px",
                                                        height: "26px",
                                                        borderRadius: "50%",
                                                        backgroundColor: "#00bcd4",
                                                        textDecoration: "none",
                                                        border: "2px solid white"
                                                    }}
                                                >
                                                    {s.icon}
                                                </a>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        {/* ═══════════════════════════════
                CENTER COLUMN — photo bubble
            ════════════════════════════════ */}
                        <td
                            style={{
                                width: "160px",
                                verticalAlign: "middle",
                                textAlign: "center",
                                padding: "0",
                                position: "relative",
                            }}
                        >
                            {/* Outer teal ring */}
                            <div
                                style={{
                                    width: "140px",
                                    height: "140px",
                                    borderRadius: "50%",
                                    backgroundColor: "#00bcd4",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                }}
                            >
                                {/* White border ring */}
                                <div
                                    style={{
                                        width: "128px",
                                        height: "128px",
                                        borderRadius: "50%",
                                        backgroundColor: "#fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: "hidden",
                                    }}
                                >
                                    {/* Profile photo — replace src with your image */}
                                    <img
                                        src={imageSrc}
                                        alt="Profile"
                                        width="128"
                                        height="128"
                                        style={{
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            display: "block",
                                            filter: "grayscale(30%)",
                                        }}
                                        onError={(e) => {
                                            e.target.style.display = "none";
                                            e.target.parentNode.style.backgroundColor = "#cfe9f0";
                                        }}
                                    />
                                </div>

                                {/* Dot decorators */}
                                <div style={{ position: "absolute", top: "8px", right: "-6px", width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "#00bcd4" }} />
                                <div style={{ position: "absolute", bottom: "10px", right: "-10px", width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#00bcd4", opacity: 0.6 }} />
                            </div>
                        </td>

                        {/* ═══════════════════════════════
                RIGHT COLUMN — contact info
            ════════════════════════════════ */}
                        <td
                            style={{
                                verticalAlign: "top",
                                padding: "45px 24px 20px 16px",
                                backgroundColor: "#ffffff",
                                position: "relative",
                            }}
                        >
                            {/* Teal decorative circle — top right */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "-30px",
                                    right: "-30px",
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                    backgroundColor: "#00bcd4",
                                    opacity: 0.9,
                                    zIndex: 0,
                                }}
                            />
                            {/* Smaller teal dot */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "48px",
                                    right: "-10px",
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    backgroundColor: "#00bcd4",
                                    opacity: 0.4,
                                    zIndex: 0,
                                }}
                            />


                            {/* CONTACT ROWS */}
                            <table cellPadding="0" cellSpacing="0" style={{ position: "relative", zIndex: "1" }}>
                                <tbody>
                                    {[
                                        {
                                            icon: (
                                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00bcd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 12.12a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                                </svg>
                                            ),
                                            label: phone_no || "+000 00 0000 000",
                                        },
                                        {
                                            icon: (
                                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00bcd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                    <polyline points="22,6 12,13 2,6" />
                                                </svg>
                                            ),
                                            label: email || "your email here",
                                        },
                                        {
                                            icon: (
                                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00bcd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <line x1="2" y1="12" x2="22" y2="12" />
                                                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                                                </svg>
                                            ),
                                            label: instagram || "your instagram here",
                                        },
                                    ].map((item, i) => (
                                        <tr key={i}>
                                            <td style={{ paddingBottom: "10px", verticalAlign: "middle" }}>
                                                <table cellPadding="0" cellSpacing="0">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                style={{
                                                                    width: "22px",
                                                                    height: "22px",
                                                                    borderRadius: "50%",
                                                                    backgroundColor: "#e0f7fa",
                                                                    textAlign: "center",
                                                                    verticalAlign: "middle",
                                                                    paddingRight: "10px",
                                                                }}
                                                            >
                                                                {item.icon}
                                                            </td>
                                                            <td
                                                                style={{
                                                                    fontSize: "12px",
                                                                    color: "#444",
                                                                    fontWeight: "500",
                                                                    whiteSpace: "nowrap",
                                                                }}
                                                            >
                                                                {item.label}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td>
                                            <div>
                                                <span style={{ color: "black", fontSize: "10px" }}><i>Powered by <strong>{ POWERED_BY }</strong></i></span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}

export default SignatureTemlateI