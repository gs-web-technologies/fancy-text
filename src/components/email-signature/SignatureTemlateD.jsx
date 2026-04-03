import { POWERED_BY } from '@/utils/const';
import React from 'react';

function SignatureTemlateD({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook, hasStarted }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar3.png";

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
        contacts.push(
            {
                label: phone_no,
                href: '',
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" width="13" height="13" />
                ),
            }
        );
    }
    if (email) {
        contacts.push(
            {
                label: email,
                href: `mailto:${email}`,
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" width="13" height="13" style={{ display: "block" }} />
                ),
            }
        )
    }

    if (linkedin) {
        contacts.push(
            {
                label: "LinkedIn",
                href: linkedin,
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" width="13" height="13" style={{
                        display: "block"
                    }} />
                ),
            }
        )
    }

    if (organization) {
        contacts.push(
            {
                label: organization,
                href: null,
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="13" height="13" style={{ display: "block" }} />
                ),
            }
        )
    }


    const socialLinks = [];

    if (instagram) {
        socialLinks.push(
            {
                href: instagram,
                bg: "#f1ecef",
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="13" height="13" style={{
                        display: "block"
                    }} />
                ),
            }
        )
    }

    if (twitter) {
        socialLinks.push(
            {
                href: twitter ,
                bg: "#edf2f5",
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="13" height="13" style={{ display: "block" }} />
                ),
            }
        )
    }

    if (facebook) {
        socialLinks.push(
            {
                href: facebook ,
                bg: "#edf2f5",
                icon: (
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="13" height="13" style={{
                        display: "block"
                    }} />
                ),
            }
        )
    }




    return (
        <table cellPadding="0" cellSpacing="0" style={{ width: "300px", backgroundColor: "#f3f4f6", borderCollapse: "collapse" }}>
            <tbody>
                <tr>
                    <td style={{ textAlign: "center" }}>
                        <table
                            cellPadding="0"
                            cellSpacing="0"
                            style={{
                                borderCollapse: "collapse",
                                width: "500px",
                                height: "150px",
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
                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", position: "relative" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ padding: "28px 24px 24px 24px", verticalAlign: "top", position: "relative" }}>


                                                        {/* Name */}
                                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", zIndex: 1, marginBottom: "2px" }}>
                                                            <tbody>
                                                               {name && ( <tr>
                                                                    <td>
                                                                        <span style={{ fontSize: "18px", fontWeight: "700", color: "#e91e8c", fontFamily: "Arial, sans-serif" }}>
                                                                            {name }
                                                                        </span>
                                                                    </td>
                                                                </tr>)}
                                                                {job_title && (<tr>
                                                                    <td style={{ zIndex: 1, margin: "0 0 0px", fontSize: "11px", color: "#888", fontFamily: "Arial, sans-serif", fontStyle: "italic", alignItems: "start" }}>
                                                                        {/* Title */}
                                                                        {job_title }
                                                                    </td>
                                                                </tr>)}
                                                            </tbody>
                                                        </table>

                                                        {/* Contacts */}
                                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", position: "relative", zIndex: 1 }}>
                                                            <tbody>
                                                                {contacts.map((c, i) => (
                                                                    <tr key={i}>
                                                                        <td style={{ padding: "3px 7px 3px 0", verticalAlign: "middle" }}>{c.icon}</td>
                                                                        <td style={{ fontSize: "11.5px", color: "#444", fontFamily: "Arial, sans-serif", padding: "3px 0", textAlign: "start" }}>
                                                                            {c.href ? (
                                                                                <a href={c.href} style={{ color: "#444", textDecoration: "none", alignItems: "start" }}>{c.label}</a>
                                                                            ) : c.label}
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>

                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                    {/* RIGHT: Photo with pink diagonal overlay + social */}
                                    <td style={{ width: "160px", padding: "0", verticalAlign: "top", position: "relative", overflow: "hidden", background: "#fff" }}>
                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "160px" }}>
                                            <tbody>

                                                {/* Photo row */}
                                                <tr>
                                                    <td style={{ padding: "0", position: "relative", width: "160px", height: "170px", overflow: "hidden" }}>
                                                        <img
                                                            src={imageSrc}
                                                            alt="Thomas Smith"
                                                            style={{ width: "160px", height: "170px", objectFit: "cover", display: "block" }}
                                                        />
                                                        {/* Pink diagonal overlays */}

                                                    </td>
                                                </tr>

                                                {/* Social icons + powered by row */}
                                                <tr>
                                                    <td style={{ width: "140px", textAlign: "center", padding: "10px 10px" }}>
                                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                                            <tbody>
                                                                <tr>
                                                                    {socialLinks.map((s, i) => (
                                                                        <td key={`${s.href}-${i}`} style={{ paddingRight: i < socialLinks.length - 1 ? "7px" : "0" }}>
                                                                            <a href={s.href} style={{ textDecoration: "none" }}>
                                                                                <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", width: "100%", height: "100%", backgroundColor: s.bg, borderRadius: "50%" }}>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style={{ padding: "8px" }}>
                                                                                                {s.icon}
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </a>
                                                                        </td>
                                                                    ))}
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        {/* Powered by */}
                                                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ textAlign: "center" }}>
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

                                {/* Bottom pink accent bar */}
                                <tr>
                                    <td colSpan="3" style={{ background: "#e91e8c", height: "5px", padding: "0" }} />
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default SignatureTemlateD