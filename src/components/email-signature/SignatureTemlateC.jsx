import { POWERED_BY } from '@/utils/const';
import React from 'react'

function SignatureTemlateC({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook, hasStarted }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar5.png";
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

    const socialLinks = [];

    if (linkedin) {
        socialLinks.push(
            {
                href: linkedin,
                bg: "",
                icon: (
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                        width="70%"
                        height="70%"
                        style={{ display: "block" }}
                    />
                ),
            }
        )
    }

    if (facebook) {
        socialLinks.push(
            {
                href: facebook ,
                bg: "",
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                        width="70%"
                        height="70%"
                        style={{ display: "block" }}
                    />
                ),
            }
        )
    }

    if (twitter) {
        socialLinks.push(
            {
                href: twitter ,
                bg: "",
                icon: (
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                        width="70%"
                        height="70%"
                        style={{ display: "block" }}
                    />
                ),
            }
        )
    }

    if (instagram) {
        socialLinks.push(
            {
                href: instagram ,
                bg: "",
                icon: (
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                        width="70%"
                        height="70%"
                        style={{ display: "block" }}
                    />
                ),
            }
        )
    }


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
                                                            padding: "4px",
                                                            verticalAlign: "center",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <img
                                                            src={imageSrc}
                                                            alt="Jonathan Hansen"
                                                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "20% 20% 20% 20%" }}
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                    {/* Name, title, contacts */}
                                    <td style={{ padding: "20px 16px", verticalAlign: "middle" }}>
                                        {name && (<p
                                            style={{
                                                margin: "0 0 2px",
                                                fontSize: "18px",
                                                fontWeight: "700",
                                                color: "#1b3a5c",
                                                fontFamily: "Georgia, serif",
                                                letterSpacing: "0.3px",
                                            }}
                                        >
                                            {name}
                                        </p>)}
                                        {job_title && (
                                            <p
                                                style={{
                                                    margin: "0 0 12px",
                                                    fontSize: "11.5px",
                                                    color: "#6b7280",
                                                    fontFamily: "Arial, sans-serif",
                                                    fontStyle: "italic",
                                                }}
                                            >
                                                {job_title}
                                            </p>
                                        )}

                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                            <tbody>

                                                {/* Phone row */}
                                                {phone_no && (<tr>
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
                                                            {phone_no}
                                                        </a>
                                                    </td>
                                                </tr>)}

                                                {/* Email row */}
                                                {email && (
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
                                                                {email}
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )}



                                                {/* Address row */}
                                               {organization && (<tr>
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
                                                        {organization }
                                                    </td>
                                                </tr>)}

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
                                                            <i>Powered by <br /><strong>{POWERED_BY}</strong></i>
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