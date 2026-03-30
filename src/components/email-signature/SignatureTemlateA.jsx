import React from 'react';
import Link from 'next/link';
import { POWERED_BY } from '@/utils/const';

function SignatureTemlateA({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar.png";
    return (
        <div
            style={{
                width: "600px",
                fontFamily: "Arial, sans-serif",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                position: "relative",
                backgroundColor: "#ffffff",
            }}
        >

            <div
                style={{
                    position: "absolute",
                    top: "-18px",
                    right: "120px",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "2px solid #dbeafe",
                    opacity: 0.6,
                    zIndex: 0,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "-10px",
                    right: "90px",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    border: "2px solid #bfdbfe",
                    opacity: 0.4,
                    zIndex: 0,
                }}
            />

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
                            style={{
                                width: "170px",
                                backgroundColor: "#1e3a8a",
                                padding: "0",
                                verticalAlign: "middle",
                                position: "relative",
                            }}
                        >
                            {/* Blue rounded right edge */}
                            <div
                                style={{
                                    position: "relative",
                                    width: "170px",
                                    minHeight: "140px",
                                    backgroundColor: "#1e3a8a",
                                    borderRadius: "0 60px 60px 0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "20px 10px 20px 20px",
                                }}
                            >
                                {/* Outer light blue ring */}
                                <div
                                    style={{
                                        width: "110px",
                                        height: "110px",
                                        borderRadius: "50%",
                                        backgroundColor: "#bfdbfe",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    {/* Inner photo circle */}
                                    <div
                                        style={{
                                            width: "96px",
                                            height: "96px",
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                            border: "3px solid #ffffff",
                                        }}
                                    >
                                        {/* Replace src with your actual photo */}
                                        <img
                                            src={imageSrc}
                                            alt="Micheal Smith"
                                            width="96"
                                            height="96"
                                            style={{ display: "block", objectFit: "cover", objectPosition: "center", width: "100%", height: "100%" }}
                                        />
                                    </div>
                                </div>
                            </div>
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
                                        <td style={{ verticalAlign: "middle" }}>
                                            <div
                                                style={{
                                                    fontSize: "22px",
                                                    fontWeight: "700",
                                                    color: "#1e3a8a",
                                                    lineHeight: "1.2",
                                                    fontFamily: "Arial, sans-serif",
                                                }}
                                            >
                                                {name ? name : 'Your Name'}
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "13px",
                                                    color: "#64748b",
                                                    marginTop: "2px",
                                                    fontFamily: "Arial, sans-serif",
                                                }}
                                            >
                                                {job_title ? job_title : 'JOB TITLE'}
                                            </div>
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
                                        <td colSpan="2" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                                            <div
                                                style={{
                                                    height: "1px",
                                                    backgroundColor: "#e2e8f0",
                                                    width: "100%",
                                                }}
                                            />
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
                                                        <td style={{ paddingRight: "6px", verticalAlign: "middle" }}>
                                                            <div
                                                                style={{
                                                                    width: "18px",
                                                                    height: "18px",
                                                                    backgroundColor: "#1e3a8a",
                                                                    borderRadius: "50%",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    fontSize: "9px",
                                                                    color: "#ffffff",
                                                                    textAlign: "center",
                                                                    lineHeight: "18px",
                                                                    fontFamily: "Arial, sans-serif",
                                                                }}
                                                            >
                                                                &#9990;
                                                            </div>
                                                        </td>
                                                        <td
                                                            style={{
                                                                fontSize: "12px",
                                                                color: "#374151",
                                                                paddingRight: "10px",
                                                                fontFamily: "Arial, sans-serif",
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
                                                        <td style={{ paddingRight: "6px", verticalAlign: "middle" }}>
                                                            <div
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
                                                                &#9993;
                                                            </div>
                                                        </td>
                                                        <td
                                                            style={{
                                                                fontSize: "12px",
                                                                color: "#374151",
                                                                paddingRight: "14px",
                                                                fontFamily: "Arial, sans-serif",
                                                            }}
                                                        >
                                                            {email ? email : 'youremail@gmail.com'}
                                                        </td>
                                                        {/* Globe icon */}
                                                        <td style={{ paddingRight: "6px", verticalAlign: "middle" }}>
                                                            <div
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
                                                                &#127760;
                                                            </div>
                                                        </td>
                                                        <td
                                                            style={{
                                                                fontSize: "12px",
                                                                color: "#374151",
                                                                fontFamily: "Arial, sans-serif",
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
                                                        <td style={{ paddingRight: "6px", verticalAlign: "middle" }}>
                                                            <div
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
                                                                &#9679;
                                                            </div>
                                                        </td>
                                                        <td
                                                            style={{
                                                                fontSize: "12px",
                                                                color: "#374151",
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
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* ── BOTTOM BAR ── */}
            <div
                style={{
                    backgroundColor: "#1e3a8a",
                    padding: "8px 18px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px",
                }}
            >
                <div>
                    <span style={{ color:"white", fontSize:"10px" }}><i>Powered by <strong>{ POWERED_BY }</strong></i></span>
                </div>
                <div style={{
                    padding: "8px 18px",
                    display: "flex",
                    justifyContent: "justify-end",
                    alignItems: "center",
                    gap: "8px",
                }}>
                    {/* Facebook */}
                    <Link href={facebook || "https://facebook.com"}>
                        <div
                            style={{
                                width: "26px",
                                height: "26px",
                                backgroundColor: "#ffffff",
                                borderRadius: "50%",
                                textAlign: "center",
                                lineHeight: "26px",
                                fontSize: "11px",
                                fontWeight: "700",
                                color: "#1e3a8a",
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            f
                        </div>
                    </Link>
                    {/* Twitter */}
                    <Link href={twitter || "https://x.com"}>
                        <div
                            style={{
                                width: "26px",
                                height: "26px",
                                backgroundColor: "#ffffff",
                                borderRadius: "50%",
                                textAlign: "center",
                                lineHeight: "26px",
                                fontSize: "11px",
                                fontWeight: "700",
                                color: "#1e3a8a",
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            t
                        </div>
                    </Link>
                    {/* LinkedIn */}
                    <Link href={linkedin || "https://linkedin.com"}>
                        <div
                            style={{
                                width: "26px",
                                height: "26px",
                                backgroundColor: "#ffffff",
                                borderRadius: "50%",
                                textAlign: "center",
                                lineHeight: "26px",
                                fontSize: "11px",
                                fontWeight: "700",
                                color: "#1e3a8a",
                                fontFamily: "Arial, sans-serif",
                            }}
                        >
                            in
                        </div>
                    </Link>
                </div>
            </div>

            {/* Bottom-left decorative circles */}
            <div
                style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "170px",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border: "2px solid #bfdbfe",
                    opacity: 0.4,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "195px",
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    border: "2px solid #93c5fd",
                    opacity: 0.3,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
        </div>
    )
}

export default SignatureTemlateA