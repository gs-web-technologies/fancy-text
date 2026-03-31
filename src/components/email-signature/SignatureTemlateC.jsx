import { POWERED_BY } from '@/utils/const';
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
            bg: "",
            icon: (
                <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    width="70%"
                    height="70%"
                    style={{ display: "block" }}
                />
            ),
        },
        {
            href: facebook ? facebook : "https://facebook.com",
            bg: "",
            icon: (
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                    width="70%"
                    height="70%"
                    style={{ display: "block" }}
                />
            ),
        },
        {
            href: twitter ? twitter : "https://x.com",
            bg: "",
            icon: (
                <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                    width="70%"
                    height="70%"
                    style={{ display: "block" }}
                />
            ),
        },
        {
            href: instagram ? instagram : "https://instagram.com",
            bg: "",
            icon: (
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    width="70%"
                    height="70%"
                    style={{ display: "block" }}
                />
            ),
        },
    ];

    return (
        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "300px" }}>
            <tbody>
                <tr>
                    <td style={{ padding: "", width: "600px", backgroundColor: "" }}>
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
                                    <td style={{ padding: "20px 0 20px 20px", verticalAlign: "middle", width: "200px" }}>
                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            width: "150px",
                                                            height: "150px",

                                                            overflow: "hidden",
                                                            borderRadius: "5%",
                                                            padding: "0",
                                                        }}
                                                    >
                                                        <img
                                                            src={imageSrc}
                                                            alt="Jonathan Hansen"
                                                            style={{ width: "145px", height: "145px", objectFit: "cover", display: "block", borderRadius: "20% 20% 20% 20%" }}
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
                                                    <td
                                                        align="center"
                                                        valign="middle"
                                                        style={{
                                                            paddingRight: "10px",
                                                            paddingBottom: "3px",
                                                            width: "20px",
                                                            height: "20px",
                                                        }}
                                                    >
                                                        <img
                                                            src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                                                            width="13"
                                                            height="13"
                                                            style={{ display: "block" }}
                                                        />
                                                    </td>
                                                    <td
                                                        style={{
                                                            fontSize: "12px",
                                                            color: "#374151",
                                                            fontFamily: "Arial, sans-serif",
                                                            paddingBottom: "3px",
                                                        }}
                                                    >
                                                        <a
                                                            href={`tel:${phone_no}`}
                                                            style={{ color: "#374151", textDecoration: "none" }}
                                                        >
                                                            {phone_no ? phone_no : "+000 1234 56789"}
                                                        </a>
                                                    </td>
                                                </tr>

                                                {/* Email row */}
                                                <tr>
                                                    <td
                                                        align="center"
                                                        valign="middle"
                                                        style={{
                                                            paddingRight: "10px",
                                                            paddingBottom: "3px",
                                                            width: "20px",
                                                            height: "20px",
                                                        }}
                                                    >
                                                        <img
                                                            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                                                            width="13"
                                                            height="13"
                                                            style={{ display: "block" }}
                                                        />
                                                    </td>
                                                    <td
                                                        style={{
                                                            fontSize: "12px",
                                                            color: "#374151",
                                                            fontFamily: "Arial, sans-serif",
                                                            paddingBottom: "3px",
                                                        }}
                                                    >
                                                        <a
                                                            href={`mailto:${email}`}
                                                            style={{ color: "#374151", textDecoration: "none" }}
                                                        >
                                                            {email ? email : "youremail@gmail.com"}
                                                        </a>
                                                    </td>
                                                </tr>

                                               

                                                {/* Address row */}
                                                <tr>
                                                    <td
                                                        align="center"
                                                        valign="middle"
                                                        style={{
                                                            paddingRight: "10px",
                                                            width: "20px",
                                                            height: "20px",
                                                        }}
                                                    >
                                                        <img
                                                            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                                                            width="13"
                                                            height="13"
                                                            style={{ display: "block" }}
                                                        />
                                                    </td>
                                                    <td
                                                        style={{
                                                            fontSize: "12px",
                                                            color: "#374151",
                                                            fontFamily: "Arial, sans-serif",
                                                        }}
                                                    >
                                                        {organization ? organization : "Organization"}
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </td>

                                    {/* Vertical divider */}
                                    <td style={{ width: "1px", backgroundColor: "#d1d5db", padding: "0" }} />

                                    {/* Brand + social icons */}
                                    <td style={{ padding: "20px 24px", verticalAlign: "middle", textAlign: "center", width: "110px" }}>
                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                            <tbody>
                                                {socialLinks.map((s, i) => (
                                                    <tr key={`${s.href}-${i}`}>
                                                        <td style={{ paddingBottom: "8px", textAlign: "center" }}>
                                                            <a href={s.href} style={{ textDecoration: "none" }}>
                                                                <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td
                                                                                style={{
                                                                                    width: "26px",
                                                                                    height: "26px",
                                                                                    backgroundColor: s.bg,
                                                                                    borderRadius: "50%",
                                                                                    textAlign: "center",
                                                                                    verticalAlign: "middle",
                                                                                }}
                                                                            >
                                                                                {s.icon}
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <td style={{ textAlign: "center" }}>
                                                        <span style={{ color: "black", fontSize: "10px" }}>
                                                            <i>Powered by <br/><strong>{POWERED_BY}</strong></i>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                    {/* Right accent bar */}
                                    <td style={{ width: "6px", backgroundColor: "#1b3a5c", borderRadius: "0 12px 12px 0" }} />
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );

}

export default SignatureTemlateC