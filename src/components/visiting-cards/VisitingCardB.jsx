import React from 'react'

function VisitingCardB({ name, email, job_title, phone_no, organization, logo, website, slogan, hasStarted }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/logo.avif";
    if (!hasStarted) {
        name = "Your name";
        email = "youremail@example.com";
        job_title = "Job Title";
        phone_no = "+91-229229929";
        organization = "Organization";
        website = "https://your_website.com";
        slogan = "Your slogan goes here";
    }

    return (
        <table
            style={{
                width: "350px",
                height: "190px",
                borderCollapse: "collapse",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
                fontFamily: "'Segoe UI', sans-serif",
                display: "block",
                backgroundColor: "#5b1f6e",
                wordBreak: "normal",
                overflowWrap: "break-word"
            }}
        >
            <tbody>
                <tr>
                    {/* LEFT WHITE CURVED PANEL */}
                    <td
                        style={{
                            width: "125px",
                            backgroundColor: "#ffffff",
                            verticalAlign: "middle",
                            borderRadius: "0 80px 80px 0",
                            padding: "16px 14px",
                            textAlign: "center",
                        }}
                    >
                        <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                            <tbody>
                                {/* Logo circle */}
                                <tr>
                                    <td style={{ textAlign: "center", verticalAlign: "middle", paddingBottom: "3px" }}>
                                        <table
                                            style={{
                                                borderCollapse: "collapse",
                                                margin: "0 auto",
                                                width: "48px",
                                                height: "48px",
                                                borderRadius: "50%",
                                                backgroundColor: "#f3e8ff",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            fontSize: "22px",
                                                            lineHeight: "1",
                                                        }}
                                                    >
                                                        <img
                                                            src={imageSrc}
                                                            width="100%"
                                                            height="100%"
                                                            style={{ objectFit: "cover", display: "block" }}
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                {/* Brand Name */}
                                {organization && (<tr>
                                    <td style={{ textAlign: "center", paddingTop: "4px" }}>
                                        <span
                                            style={{
                                                fontSize: "10px",
                                                fontWeight: "900",
                                                color: "#5b1f6e",
                                                letterSpacing: "1.5px",
                                                textTransform: "uppercase",
                                                display: "block",
                                            }}
                                        >
                                            {organization}
                                        </span>
                                    </td>
                                </tr>)}

                                {/* Slogan */}
                                {slogan && (<tr>
                                    <td style={{ textAlign: "center", paddingTop: "2px" }}>
                                        <span
                                            style={{
                                                fontSize: "7px",
                                                fontWeight: "600",
                                                color: "#999",
                                                letterSpacing: "1px",
                                                textTransform: "uppercase",
                                                display: "block",
                                            }}
                                        >
                                            {slogan}
                                        </span>
                                    </td>
                                </tr>)}

                                {/* Decorative dots */}
                                <tr>
                                    <td style={{ textAlign: "center", paddingTop: "4px" }}>
                                        <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#5b1f6e" }} />
                                                    <td style={{ width: "5px" }} />
                                                    <td style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#c084fc" }} />
                                                    <td style={{ width: "5px" }} />
                                                    <td style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#5b1f6e" }} />
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>

                    {/* RIGHT PURPLE PANEL */}
                    <td
                        style={{
                            backgroundColor: "#5b1f6e",
                            verticalAlign: "top",
                            padding: "0",
                        }}
                    >
                        <table
                            style={{
                                width: "100%",
                                height: "190px",
                                borderCollapse: "collapse",
                            }}
                        >
                            <tbody>
                                {/* Name & Position */}
                                <tr>
                                    <td
                                        colSpan="2"
                                        style={{
                                            padding: "14px 16px 6px 3px",
                                            verticalAlign: "top",
                                        }}
                                    >
                                        {name && (<span
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: "900",
                                                color: "#ffffff",
                                                letterSpacing: "1.5px",
                                                textTransform: "uppercase",
                                                display: "block",
                                                lineHeight: "1",
                                            }}
                                        >
                                            {name}
                                        </span>)}
                                        {job_title && (
                                            <span
                                                style={{
                                                    fontSize: "10px",
                                                    color: "#d4a8e8",
                                                    fontWeight: "400",
                                                    letterSpacing: "1px",
                                                    display: "block",
                                                    marginTop: "3px",
                                                }}
                                            >
                                                {job_title}
                                            </span>
                                        )}
                                        {/* Divider */}
                                        {(name || job_title) && (<table
                                            style={{
                                                borderCollapse: "collapse",
                                                marginTop: "8px",
                                                width: "100%",
                                            }}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.2)" }} />
                                                </tr>
                                            </tbody>
                                        </table>)}
                                    </td>
                                </tr>

                                {/* Contact Row */}
                                <tr>
                                    <td style={{ verticalAlign: "middle", padding: "6px 0 10px 6px" }}>
                                        <table style={{ borderCollapse: "collapse" }}>
                                            <tbody>
                                                {/* Phone */}
                                                {phone_no && (<tr>
                                                    <td style={{ paddingBottom: "8px" }}>
                                                        <table style={{ borderCollapse: "collapse" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ verticalAlign: "middle" }}>
                                                                        <table>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style={{  width: "24px",
                                                                                            height: "24px", borderCollapse: "collapse" }}>
                                                                                        <div style={{
                                                                                            width:"100%",
                                                                                            height:"100%",
                                                                                            borderRadius: "50%",
                                                                                            overflow: "hidden",
                                                                                            fontSize: "12px",
                                                                                            lineHeight: "12px",
                                                                                            padding:"5px"
                                                                                        }}>
                                                                                            📞
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td style={{ paddingLeft: "7px", verticalAlign: "middle", color: "#ffffff", fontSize: "9px", fontWeight: "500" }}>
                                                                        {phone_no}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>)}

                                                {/* Email */}
                                                {email && (<tr>
                                                    <td style={{ paddingBottom: "8px" }}>
                                                        <table style={{ borderCollapse: "collapse" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ verticalAlign: "middle" }}>
                                                                        <table
                                                                            style={{
                                                                                width: "24px",
                                                                                height: "24px",
                                                                                borderCollapse: "collapse",
                                                                                borderRadius: "50%",
                                                                                overflow: "hidden",
                                                                            }}
                                                                        >
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style={{ textAlign: "center", verticalAlign: "middle", fontSize: "12px", lineHeight: "1" }}>
                                                                                        ✉️
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td style={{ paddingLeft: "7px", verticalAlign: "middle", color: "#ffffff", fontSize: "9px", fontWeight: "500" }}>
                                                                        {email}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>)}

                                                {/* Organization/Location */}
                                                {organization && (
                                                    <tr>
                                                        <td>
                                                            <table style={{ borderCollapse: "collapse" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: "middle" }}>
                                                                            <table
                                                                                style={{
                                                                                    width: "24px",
                                                                                    height: "24px",
                                                                                    borderCollapse: "collapse",
                                                                                    borderRadius: "50%",
                                                                                    overflow: "hidden",
                                                                                }}
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style={{ textAlign: "center", verticalAlign: "middle", fontSize: "12px", lineHeight: "1" }}>
                                                                                            📍
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td style={{ paddingLeft: "7px", verticalAlign: "middle", color: "#ffffff", fontSize: "9px", fontWeight: "500" }}>
                                                                            {organization}
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>)}
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

export default VisitingCardB
