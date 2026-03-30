import { POWERED_BY } from '@/utils/const';
import React from 'react'

function SignatureTemlateI({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar5.png";
    const socialLinks = [{
        label: "facebook",
        href: facebook || "https://facebook.com",
        icon: (<img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="100%" height="100%" style={{
            display: "block"
        }} />
        ),
    },
    {
        label: "linkedIn",
        href: linkedin || "https://linkedin.com",
        icon: (<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="100%" height="100%" style={{ display: "block" }} />
        ),
    },
    {
        label: "twitter",
        href: twitter || "https://x.com",
        icon: (<img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="100%" height="100%" style={{ display: "block" }} />
        ),
    },
    ];

    return (
        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%" , height:"50%", backgroundColor: "#f0f4f8" }}>
            <tbody>
                <tr>
                    <td style={{ textAlign: "center" }}>
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

                                    {/* LEFT COLUMN */}
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
                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "absolute", bottom: "-40px", left: "-40px", width: "130px", height: "130px", borderRadius: "50%", backgroundColor: "#00bcd4", zIndex: 0, opacity: 0.95 }}>
                                            <tbody><tr><td></td></tr></tbody>
                                        </table>

                                        {/* Small teal circle — mid left */}
                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "absolute", bottom: "60px", left: "-18px", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#00bcd4", zIndex: 0, opacity: 0.5 }}>
                                            <tbody><tr><td></td></tr></tbody>
                                        </table>

                                        {/* LOGO ROW */}
                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", marginBottom: "20px", position: "relative", zIndex: 1 }}>
                                            <tbody>
                                                <tr>
                                                   
                                                    <td style={{ verticalAlign: "middle", fontWeight: "800", fontSize: "13px", color: "#00bcd4", lineHeight: "1.2", textTransform: "uppercase" }}>
                                                        {organization ? organization : 'Organization'}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        {/* NAME */}
                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "relative", zIndex: 1, marginBottom: "4px" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ fontWeight: "800", fontSize: "19px", color: "#111111", lineHeight: "1.2" }}>
                                                        {name ? name : 'Your Name'}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        {/* JOB POSITION */}
                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "relative", zIndex: 1, marginBottom: "22px" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ fontSize: "11px", color: "#020202", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase" }}>
                                                        {job_title ? job_title : 'Job title'}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        {/* SOCIAL ICONS ROW */}
                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "relative", zIndex: 1 }}>
                                            <tbody>
                                                <tr>
                                                    {socialLinks.map((s, i) => (
                                                        <td key={i} style={{ padding: "4px" }}>

                                                            <a href={s.href}
                                                                style={{
                                                                    display: "inline-block",
                                                                    width: "26px",
                                                                    height: "26px",
                                                                    borderRadius: "50%",
                                                                    backgroundColor: "transparent",
                                                                    textDecoration: "none",
                                                                    border: "2px solid transparent",
                                                                    textAlign: "center",
                                                                    lineHeight: "26px",

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

                                    {/* CENTER COLUMN — photo bubble */}
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
                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "128px", height: "128px", borderRadius: "50%", backgroundColor: "#00bcd4", margin: "0 auto", position: "relative" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: "center", verticalAlign: "middle", position: "relative" }}>

                                                        {/* White border ring */}
                                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "128px", height: "128px", borderRadius: "50%", backgroundColor: "#fff", overflow: "hidden", margin: "0 auto" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ textAlign: "center", verticalAlign: "middle", padding: "0" }}>
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
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        {/* Dot decorator — top right */}
                                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "absolute", top: "8px", right: "-6px", width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "#00bcd4" }}>
                                                            <tbody><tr><td></td></tr></tbody>
                                                        </table>

                                                        {/* Dot decorator — bottom right */}
                                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "absolute", bottom: "10px", right: "-10px", width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#00bcd4", opacity: 0.6 }}>
                                                            <tbody><tr><td></td></tr></tbody>
                                                        </table>

                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                    {/* RIGHT COLUMN — contact info */}
                                    <td
                                        style={{
                                            verticalAlign: "top",
                                            padding: "45px 24px 20px 16px",
                                            backgroundColor: "#ffffff",
                                            position: "relative",
                                        }}
                                    >
                                        {/* Teal decorative circle — top right */}
                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "absolute", top: "-30px", right: "-30px", width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "#00bcd4", opacity: 0.9, zIndex: 0 }}>
                                            <tbody><tr><td></td></tr></tbody>
                                        </table>

                                        {/* Smaller teal dot */}
                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "absolute", top: "48px", right: "-10px", width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#00bcd4", opacity: 0.4, zIndex: 0 }}>
                                            <tbody><tr><td></td></tr></tbody>
                                        </table>

                                        {/* CONTACT ROWS */}
                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "relative", zIndex: 1 }}>
                                            <tbody>
                                                {[
                                                    {
                                                        icon: (
                                                            <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="13" height="13" style={{ display: "block" }} />
                                                        ),
                                                        label: phone_no || "+000 00 0000 000",
                                                    },
                                                    {
                                                        icon: (
                                                            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="13" height="13" style={{ display: "block" }} />
                                                        ),
                                                        label: email || "your email here",
                                                    },
                                                    {
                                                        icon: (
                                                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="13" height="13" style={{
                                                                display: "block"
                                                            }} />
                                                        ),
                                                        label: instagram || "your instagram here",
                                                    },
                                                ].map((item, i) => (
                                                    <tr key={i}>
                                                        <td style={{ paddingBottom: "10px", verticalAlign: "middle" }}>
                                                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ width: "22px", height: "22px", borderRadius: "50%", backgroundColor: "#e0f7fa", textAlign: "center", verticalAlign: "middle", padding: "4px" }}>
                                                                            {item.icon}
                                                                        </td>
                                                                        <td style={{ fontSize: "12px", color: "#444", fontWeight: "500", whiteSpace: "nowrap" }}>
                                                                            {item.label}
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                ))}

                                                {/* Powered by */}
                                                <tr>
                                                    <td>
                                                        <span style={{ color: "black", fontSize: "10px" }}>
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
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default SignatureTemlateI