import { POWERED_BY } from '@/utils/const';
import React from 'react'

function SignatureTemlateI({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar5.png";
    const socialLinks = [{
        label: "facebook",
        href: facebook || "https://facebook.com",
        icon: (<img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="40%" height="40%" style={{
            display: "block"
        }} />
        ),
    },
    {
        label: "linkedIn",
        href: linkedin || "https://linkedin.com",
        icon: (<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="40%" height="40%" style={{ display: "block" }} />
        ),
    },
    {
        label: "twitter",
        href: twitter || "https://x.com",
        icon: (<img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="40%" height="40%" style={{ display: "block" }} />
        ),
    },
    ];

    return (
        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "500px", height: "50%", backgroundColor: "#f0f4f8" }}>
            <tbody>
                <tr>
                    <td style={{ textAlign: "center" }}>
                        <table
                            cellPadding="0"
                            cellSpacing="0"
                            style={{
                                width: "500px",
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
                                            width: "169px",
                                            padding: "20px",
                                            verticalAlign: "top",
                                            backgroundColor: "#ffffff",
                                        }}
                                    >

                                        {/* Decorative circles (stacked instead of absolute) */}
                                        <table cellPadding="0" cellSpacing="0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table width="60" height="60" style={{ borderRadius: "50%", backgroundColor: "#00bcd4", opacity: 0.2 }}>
                                                            <tbody><tr><td></td></tr></tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        {/* LOGO */}
                                        <table cellPadding="0" cellSpacing="0" style={{ marginBottom: "12px" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ fontWeight: "800", fontSize: "13px", color: "#00bcd4", textTransform: "uppercase" }}>
                                                        {organization || "Organization"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        {/* NAME */}
                                        <table cellPadding="0" cellSpacing="0">
                                            <tbody>
                                                <tr>
                                                    <td style={{ fontWeight: "800", fontSize: "18px", color: "#111" }}>
                                                        {name || "Your Name"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        {/* JOB */}
                                        <table cellPadding="0" cellSpacing="0" style={{ marginBottom: "16px" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase" }}>
                                                        {job_title || "Job Title"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        {/* SOCIAL */}
                                        <table cellPadding="0" cellSpacing="0">
                                            <tbody>
                                                <tr>
                                                    {socialLinks.map((s, i) => (
                                                        <td key={i}>
                                                            <a href={s.href}>
                                                                {s.icon}
                                                            </a>
                                                        </td>
                                                    ))}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                    {/* CENTER COLUMN */}
                                    <td
                                        style={{
                                            width: "160px",
                                            height: "160px",
                                            border: "2px solid #00bcd4",
                                            backgroundColor: "#00bcd4",
                                            alignItems: "center"
                                        }}
                                    >
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img
                                                            src={imageSrc}
                                                            style={{
                                                                padding: "4px",
                                                                display: "block",
                                                                objectFit: "cover",
                                                                // borderRadius: "50px",
                                                                width: "160px",
                                                                height:"160px"
                                                            }}
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                    {/* RIGHT COLUMN */}
                                    <td
                                        style={{
                                            padding: "24px",
                                            verticalAlign: "top",
                                            backgroundColor: "#ffffff",
                                        }}
                                    >

                                        {/* CONTACT */}
                                        <table cellPadding="0" cellSpacing="0">
                                            <tbody>
                                                {[
                                                    {
                                                        icon: (
                                                            <img
                                                                src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                                                                width="13"
                                                                height="13"
                                                                style={{ display: "block",  margin:"4px" }}
                                                            />
                                                        ),
                                                        label: phone_no || "+000 00 0000",
                                                    },
                                                    {
                                                        icon: (
                                                            <img
                                                                src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                                                                width="13"
                                                                height="13"
                                                                style={{ display: "block",  margin:"4px" }}
                                                            />
                                                        ),
                                                        label: email || "email here",
                                                    },
                                                    {
                                                        icon: (
                                                            <img
                                                                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                                                                width="13"
                                                                height="13"
                                                                style={{ display: "block", margin:"4px" }}
                                                            />
                                                        ),
                                                        label: instagram || "instagram",
                                                    },
                                                ].map((item, i) => (
                                                    <tr key={i}>
                                                        <td style={{ paddingBottom: "10px" }}>
                                                            <table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{
                                                                            width: "22px",
                                                                            height: "22px",
                                                                            borderRadius: "50%",
                                                                            backgroundColor: "#e0f7fa",
                                                                            verticalAlign:"center",
                                                                            textAlign: "center",
                                                                        }}>
                                                                           {item.icon}
                                                                        </td>
                                                                        <td>
                                                                            <a style={{
                                                                                textDecoration: "none",
                                                                                fontSize: "12px",
                                                                                paddingLeft: "8px",
                                                                                color: "#444"
                                                                            }}>
                                                                                {item.label}
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                ))}

                                                {/* POWERED */}
                                                <tr>
                                                    <td style={{ fontSize: "10px", marginTop:"10px" }}>
                                                        <i>Powered by <strong>{POWERED_BY}</strong></i>
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