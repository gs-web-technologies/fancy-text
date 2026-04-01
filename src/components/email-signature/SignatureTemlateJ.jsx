import { POWERED_BY } from '@/utils/const';
import Link from 'next/link';
import React from 'react'

function SignatureTemlateJ({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar.png";
    const SocialLinks = [{
        icon: "f",
        href: facebook || "https://facebook.com"
    },
    {
        icon: "i",
        href: instagram || "https://instagram.com"
    },
    {
        icon: "X",
        href: twitter || "https://twitter.com"
    },
    {
        icon: "in",
        href: linkedin || "https://linkedin.com"
    }];
    return (
        <table
            cellPadding="0"
            cellSpacing="0"
            style={{
                width: "620px",
                backgroundColor: "#2b2b2b",
                fontFamily: "Arial, sans-serif",
                borderCollapse: "collapse",
            }}
        >
            <tbody>
                {/* TOP SECTION */}
                <tr>
                    {/* LEFT: Yellow accent bar */}
                    <td style={{ width: "8px", backgroundColor: "#f5a623" }} />

                    {/* CENTER: Photo + Name/Position */}
                    <td style={{ padding: "18px 16px", verticalAlign: "middle", width: "260px" }}>
                        <table cellPadding="0" cellSpacing="0">
                            <tbody>
                                <tr>
                                    {/* Circular photo placeholder */}
                                    <td style={{ paddingRight: "14px", verticalAlign: "middle" }}>
                                        <div
                                            style={{
                                                width: "150px",
                                                height: "150px",
                                                borderRadius: "50%",
                                                backgroundColor: "#555",
                                                border: "3px solid #f5a623",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                overflow: "hidden",
                                            }}
                                        >
                                            {/* Replace src with actual photo */}
                                            <img
                                                src={imageSrc}
                                                alt="Profile"
                                                style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover" }}
                                            />
                                        </div>
                                    </td>

                                    {/* Name + Position */}
                                    <td style={{ verticalAlign: "middle" }}>
                                        <p
                                            style={{
                                                margin: "0 0 4px 0",
                                                fontSize: "20px",
                                                fontWeight: "bold",
                                                color: "#ffffff",
                                                letterSpacing: "1px",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {name ? name : 'Your Name'}
                                        </p>
                                        <p
                                            style={{
                                                margin: "0 0 10px 0",
                                                fontSize: "12px",
                                                color: "#f5a623",
                                                letterSpacing: "0.5px",
                                            }}
                                        >
                                            {job_title ? job_title : 'Job Title'}
                                        </p>

                                        {/* Social icons row */}
                                        <table cellPadding="0" cellSpacing="0">
                                            <tbody>
                                                <tr>
                                                    {SocialLinks.map((s, i) => (
                                                        <td key={i} style={{ paddingRight: "5px" }}>
                                                            <Link href={s.href}>
                                                                <div
                                                                    style={{
                                                                        width: "22px",
                                                                        height: "22px",
                                                                        backgroundColor: "#f5a623",
                                                                        borderRadius: "50%",
                                                                        fontSize: "10px",
                                                                        color: "#2b2b2b",
                                                                        fontWeight: "bold",
                                                                        textAlign: "center",
                                                                        lineHeight: "22px",
                                                                    }}
                                                                >
                                                                    {s.icon}
                                                                </div>
                                                            </Link>
                                                        </td>
                                                    ))}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>

                    {/* DIVIDER */}
                    {/* <td style={{ width: "1px", backgroundColor: "#444" }} /> */}

                    {/* RIGHT: Contact info */}
                    <td style={{ padding: "18px 0px 18px 14px", verticalAlign: "middle", width:"200px" }}>
                        <table cellPadding="0" cellSpacing="0" width="200px">
                            <tbody>
                                <tr>
                                    <td style={{ paddingBottom: "6px" }}>
                                        <table cellPadding="0" cellSpacing="0">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            fontSize: "11px",
                                                            color: "#f5a623",
                                                            fontWeight: "bold",
                                                            paddingRight: "8px",
                                                            whiteSpace: "nowrap",
                                                        }}
                                                    >
                                                        Phone:
                                                    </td>
                                                    <td style={{ fontSize: "11px", color: "#cccccc" }}>
                                                        {phone_no ? phone_no : "123-456-7890"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingBottom: "6px" }}>
                                        <table cellPadding="0" cellSpacing="0">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            fontSize: "11px",
                                                            color: "#f5a623",
                                                            fontWeight: "bold",
                                                            paddingRight: "8px",
                                                            whiteSpace: "nowrap",
                                                        }}
                                                    >
                                                        Email:
                                                    </td>
                                                    <td style={{ fontSize: "11px", color: "#cccccc", textDecoration: "none" }}>
                                                        {email ? email : "your mail Here"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingBottom: "6px" }}>
                                        <table cellPadding="0" cellSpacing="0">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            fontSize: "11px",
                                                            color: "#f5a623",
                                                            fontWeight: "bold",
                                                            paddingRight: "8px",
                                                            whiteSpace: "nowrap",
                                                        }}
                                                    >
                                                        Organization:
                                                    </td>
                                                    <td style={{ fontSize: "11px", color: "#cccccc" }}>
                                                        {organization ? organization : "Organization"}
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

                {/* BOTTOM SECTION: disclaimer + social icons */}
                <tr>
                    <td style={{ backgroundColor: "#222", width: "8px" }} />
                    <td
                        colSpan={3}
                        style={{
                            backgroundColor: "#222",
                            padding: "10px 16px",
                            verticalAlign: "middle",
                        }}
                    >
                        <p
                            style={{
                                margin: "0",
                                fontSize: "9px",
                                color: "#777777",
                                lineHeight: "1.5",
                            }}
                        >
                            Powered by {POWERED_BY}
                        </p>
                    </td>
                    <td
                        style={{
                            backgroundColor: "#222",
                            padding: "10px 16px",
                            verticalAlign: "middle",
                            textAlign: "right",
                        }}
                    >
                        <table cellPadding="0" cellSpacing="0" style={{ marginLeft: "auto" }}>
                            <tbody>
                                <tr>
                                    {SocialLinks.map((s, i) => (
                                        <td key={i} style={{ paddingLeft: "5px" }}>
                                            <Link href={s.href}>
                                                <div
                                                    style={{
                                                        width: "24px",
                                                        height: "24px",
                                                        backgroundColor: "#f5a623",
                                                        borderRadius: "50%",
                                                        fontSize: "10px",
                                                        color: "#2b2b2b",
                                                        fontWeight: "bold",
                                                        textAlign: "center",
                                                        lineHeight: "24px",
                                                    }}
                                                >
                                                    {s.icon}
                                                </div>
                                            </Link>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default SignatureTemlateJ