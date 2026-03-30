import React from 'react';
import Link from 'next/link';
import { POWERED_BY } from '@/utils/const';

function SignatureTemlateA({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar.png";
    return (
        <table
            width="600"
            cellPadding="0"
            cellSpacing="0"
            border="0"
            style={{
                fontFamily: "Arial, sans-serif",
                border: "1px solid #e2e8f0",
            }}
        >
            <tbody>

                <tr>

                    {/* ── MAIN ROW ── */}
                    <table
                        cellPadding="0"
                        cellSpacing="0"
                        border="0"
                        style={{ borderCollapse: "collapse", width: "100%", position: "relative", zIndex: 1 }}
                    >
                        <tbody>
                            <tr>
                                {/* LEFT: Blue block + circular photo */}
                                <td
                                    width="170"
                                    align="center"
                                    valign="middle"
                                    style={{
                                        backgroundColor: "#1e3a8a",
                                        padding: "20px 10px",
                                    }}
                                >
                                    <table cellPadding="0" cellSpacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td align="center" valign="middle">

                                                    {/* Outer circle */}
                                                    <table
                                                        cellPadding="0"
                                                        cellSpacing="0"
                                                        border="0"
                                                        style={{
                                                            width: "110px",
                                                            height: "110px",
                                                            backgroundColor: "#bfdbfe",
                                                            borderRadius: "50%",
                                                        }}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td align="center" valign="middle">

                                                                    {/* Inner circle */}
                                                                    <table
                                                                        cellPadding="0"
                                                                        cellSpacing="0"
                                                                        border="0"
                                                                        style={{
                                                                            width: "96px",
                                                                            height: "96px",
                                                                            borderRadius: "50%",
                                                                            border: "3px solid #ffffff",
                                                                            overflow: "hidden",
                                                                        }}
                                                                    >
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="center" valign="middle">
                                                                                    <img
                                                                                        src={imageSrc}
                                                                                        width="96"
                                                                                        height="96"
                                                                                        style={{
                                                                                            display: "block",
                                                                                            width: "96px",
                                                                                            height: "96px",
                                                                                        }}
                                                                                        alt="profile"
                                                                                    />
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
                                </td>

                                {/* RIGHT: Info block */}
                                <td
                                    style={{
                                        verticalAlign: "top",
                                        padding: "18px 18px 0 24px",
                                        backgroundColor: "#ffffff",
                                    }}
                                >
                                    <table
                                        cellPadding="0"
                                        cellSpacing="0"
                                        border="0"
                                        style={{ borderCollapse: "collapse", width: "100%" }}
                                    >
                                        <tbody>
                                            {/* Name + Logo row */}
                                            <tr>
                                                <td valign="middle" style={{ fontFamily: "Arial, sans-serif" }}>
                                                    <table cellPadding="0" cellSpacing="0" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style={{
                                                                        fontSize: "22px",
                                                                        fontWeight: "700",
                                                                        color: "#1e3a8a",
                                                                        lineHeight: "1.2",
                                                                    }}
                                                                >
                                                                    {name ? name : "Your Name"}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td
                                                                    style={{
                                                                        fontSize: "13px",
                                                                        color: "#64748b",
                                                                        paddingTop: "2px", // instead of marginTop
                                                                    }}
                                                                >
                                                                    {job_title ? job_title : "JOB TITLE"}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td style={{ verticalAlign: "middle", textAlign: "right", paddingLeft: "12px" }}>
                                                    {/* Logo */}
                                                    <table
                                                        cellPadding="0"
                                                        cellSpacing="0"
                                                        border="0"
                                                        style={{ borderCollapse: "collapse", marginLeft: "auto" }}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style={{
                                                                        width: "26px",
                                                                        height: "26px",
                                                                        backgroundColor: "#1e3a8a",
                                                                        borderRadius: "50%",
                                                                        textAlign: "center",
                                                                        lineHeight: "26px",
                                                                        fontSize: "10px",
                                                                        fontWeight: "700",
                                                                        color: "#ffffff",
                                                                        fontFamily: "Arial, sans-serif",
                                                                    }}
                                                                >
                                                                    L
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        paddingLeft: "6px",
                                                                        fontSize: "14px",
                                                                        fontWeight: "700",
                                                                        color: "#1e3a8a",
                                                                        fontFamily: "Arial, sans-serif",
                                                                    }}
                                                                >
                                                                    {organization ? organization : 'Organization'}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>

                                            {/* Divider */}
                                            <tr>
                                                <td
                                                    colSpan="2"
                                                    style={{
                                                        paddingTop: "10px",
                                                        paddingBottom: "10px",
                                                        borderTop: "1px solid #e2e8f0",
                                                        fontSize: "0px",
                                                        lineHeight: "0px",
                                                    }}
                                                >
                                                    &nbsp;
                                                </td>
                                            </tr>

                                            {/* Phone row */}
                                            <tr>
                                                <td colSpan="2" style={{ paddingBottom: "5px" }}>
                                                    <table
                                                        cellPadding="0"
                                                        cellSpacing="0"
                                                        border="0"
                                                        style={{ borderCollapse: "collapse" }}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                {/* Phone icon */}
                                                                <td
                                                                    align="center"
                                                                    valign="middle"
                                                                    style={{
                                                                        width: "18px",
                                                                        height: "18px",
                                                                        backgroundColor: "#1e3a8a",
                                                                        borderRadius: "50%",
                                                                        fontSize: "9px",
                                                                        color: "#ffffff",
                                                                        textAlign: "center",
                                                                        lineHeight: "18px",
                                                                        fontFamily: "Arial, sans-serif",
                                                                    }}
                                                                >
                                                                    &#9990;
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        fontSize: "12px",
                                                                        color: "#374151",
                                                                        paddingRight: "10px",
                                                                        fontFamily: "Arial, sans-serif",
                                                                         paddingLeft:"4px",
                                                                    }}
                                                                >
                                                                    {phone_no ? phone_no : '+000 1234 56789'}
                                                                </td>


                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>

                                            {/* Email + Website row */}
                                            <tr>
                                                <td colSpan="2" style={{ paddingBottom: "5px" }}>
                                                    <table
                                                        cellPadding="0"
                                                        cellSpacing="0"
                                                        border="0"
                                                        style={{ borderCollapse: "collapse" }}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                {/* Email icon */}
                                                                <td
                                                                    align="center"
                                                                    valign="middle"
                                                                    style={{
                                                                       width: "18px",
                                                                        height: "18px",
                                                                        backgroundColor: "#0ea5e9",
                                                                        borderRadius: "50%",
                                                                        fontSize: "9px",
                                                                        color: "#ffffff",
                                                                        textAlign: "center",
                                                                        lineHeight: "18px",
                                                                        fontFamily: "Arial, sans-serif",
                                                                    }}
                                                                >
                                                                    <span style={{ fontSize: "9px", color: "#ffffff" }}>
                                                                        &#9993;
                                                                    </span>
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        fontSize: "12px",
                                                                        color: "#374151",
                                                                        paddingRight: "14px",
                                                                        paddingLeft:"4px",
                                                                        fontFamily: "Arial, sans-serif",
                                                                    }}
                                                                >
                                                                    {email ? email : 'youremail@gmail.com'}
                                                                </td>
                                                                {/* Globe icon */}
                                                                <td
                                                                    align="center"
                                                                    valign="middle"
                                                                    style={{
                                                                        width: "18px",
                                                                        height: "18px",
                                                                        backgroundColor: "#0ea5e9",
                                                                        borderRadius: "50%",
                                                                        textAlign: "center",
                                                                        lineHeight: "18px",
                                                                        fontFamily: "Arial, sans-serif",
                                                                    }}
                                                                >
                                                                    <span style={{ fontSize: "9px", color: "#ffffff" }}>
                                                                        &#127760;
                                                                    </span>
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        fontSize: "12px",
                                                                        color: "#374151",
                                                                        fontFamily: "Arial, sans-serif",
                                                                         paddingLeft:"4px",
                                                                    }}
                                                                >
                                                                    {linkedin ? linkedin : 'www.yourlinkedIn.com'}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>

                                            {/* Address row */}
                                            <tr>
                                                <td colSpan="2" style={{ paddingBottom: "14px" }}>
                                                    <table
                                                        cellPadding="0"
                                                        cellSpacing="0"
                                                        border="0"
                                                        style={{ borderCollapse: "collapse" }}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                {/* Pin icon */}
                                                                <td
                                                                    align="center"
                                                                    valign="middle"
                                                                    style={{
                                                                        width: "18px",
                                                                        height: "18px",
                                                                        backgroundColor: "#1e3a8a",
                                                                        borderRadius: "50%",
                                                                        textAlign: "center",
                                                                        lineHeight: "18px",
                                                                        fontFamily: "Arial, sans-serif",
                                                                    }}
                                                                >
                                                                    <span style={{ fontSize: "9px", color: "#ffffff" }}>
                                                                        &#9679;
                                                                    </span>
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        fontSize: "12px",
                                                                        color: "#374151",
                                                                        fontFamily: "Arial, sans-serif",
                                                                         paddingLeft:"4px",
                                                                    }}
                                                                >
                                                                    {organization ? organization : 'Organization'}
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

                    {/* ── BOTTOM BAR ── */}
                    <table
                        width="100%"
                        cellPadding="0"
                        cellSpacing="0"
                        border="0"
                        style={{
                            backgroundColor: "#1e3a8a",
                            fontFamily: "Arial, sans-serif",
                        }}
                    >
                        <tbody>
                            <tr>
                                {/* LEFT: Powered by */}
                                <td
                                    style={{
                                        padding: "8px 18px",
                                        fontSize: "10px",
                                        color: "#ffffff",
                                    }}
                                >
                                    <i>
                                        Powered by <strong>{POWERED_BY}</strong>
                                    </i>
                                </td>

                                {/* RIGHT: Social Icons */}
                                <td
                                    align="right"
                                    style={{
                                        padding: "8px 18px",
                                    }}
                                >
                                    <table cellPadding="0" cellSpacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                {/* Facebook */}
                                                <td style={{ paddingLeft: "6px" }}>
                                                    <a href={facebook || "https://facebook.com"}>
                                                        <span
                                                            style={{
                                                                display: "inline-block",
                                                                width: "26px",
                                                                height: "26px",
                                                                backgroundColor: "#ffffff",
                                                                borderRadius: "50%",
                                                                textAlign: "center",
                                                                lineHeight: "26px",
                                                                fontSize: "11px",
                                                                fontWeight: "700",
                                                                color: "#1e3a8a",
                                                            }}
                                                        >
                                                            f
                                                        </span>
                                                    </a>
                                                </td>

                                                {/* Twitter */}
                                                <td style={{ paddingLeft: "6px" }}>
                                                    <a href={twitter || "https://x.com"}>
                                                        <span
                                                            style={{
                                                                display: "inline-block",
                                                                width: "26px",
                                                                height: "26px",
                                                                backgroundColor: "#ffffff",
                                                                borderRadius: "50%",
                                                                textAlign: "center",
                                                                lineHeight: "26px",
                                                                fontSize: "11px",
                                                                fontWeight: "700",
                                                                color: "#1e3a8a",
                                                            }}
                                                        >
                                                            t
                                                        </span>
                                                    </a>
                                                </td>

                                                {/* LinkedIn */}
                                                <td style={{ paddingLeft: "6px" }}>
                                                    <a href={linkedin || "https://linkedin.com"}>
                                                        <span
                                                            style={{
                                                                display: "inline-block",
                                                                width: "26px",
                                                                height: "26px",
                                                                backgroundColor: "#ffffff",
                                                                borderRadius: "50%",
                                                                textAlign: "center",
                                                                lineHeight: "26px",
                                                                fontSize: "11px",
                                                                fontWeight: "700",
                                                                color: "#1e3a8a",
                                                            }}
                                                        >
                                                            in
                                                        </span>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </tr>
            </tbody>


        </table>




    )
}

export default SignatureTemlateA