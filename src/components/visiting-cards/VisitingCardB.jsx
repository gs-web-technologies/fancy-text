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
                width: "640px",
                height: "360px",
                borderCollapse: "collapse",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
                fontFamily: "'Segoe UI', sans-serif",
                margin: "40px auto",
                display: "block",
                backgroundColor: "#5b1f6e",
            }}
        >
            <tbody>
                <tr>
                    {/* LEFT WHITE CURVED PANEL */}
                    <td
                        style={{
                            width: "210px",
                            backgroundColor: "#ffffff",
                            verticalAlign: "middle",
                            borderRadius: "0 120px 120px 0",
                            padding: "30px 28px",
                            textAlign: "center",
                        }}
                    >
                        <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                            <tbody>
                                {/* Logo circle with emoji */}
                                <tr>
                                    <td style={{ textAlign: "center", paddingBottom: "6px" }}>
                                        <table
                                            style={{
                                                borderCollapse: "collapse",
                                                margin: "0 auto",
                                                width: "72px",
                                                height: "72px",
                                                borderRadius: "50%",
                                                backgroundColor: "#f3e8ff",
                                                border: "3px solid #5b1f6e",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            fontSize: "32px",
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
                                    <td style={{ textAlign: "center", paddingTop: "10px" }}>
                                        <span
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: "900",
                                                color: "#5b1f6e",
                                                letterSpacing: "4px",
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
                                    <td style={{ textAlign: "center", paddingTop: "4px" }}>
                                        <span
                                            style={{
                                                fontSize: "9px",
                                                fontWeight: "600",
                                                color: "#999",
                                                letterSpacing: "2px",
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
                                    <td style={{ textAlign: "center", paddingTop: "14px" }}>
                                        <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            width: "6px",
                                                            height: "6px",
                                                            borderRadius: "50%",
                                                            backgroundColor: "#5b1f6e",
                                                        }}
                                                    />
                                                    <td style={{ width: "6px" }} />
                                                    <td
                                                        style={{
                                                            width: "6px",
                                                            height: "6px",
                                                            borderRadius: "50%",
                                                            backgroundColor: "#c084fc",
                                                        }}
                                                    />
                                                    <td style={{ width: "6px" }} />
                                                    <td
                                                        style={{
                                                            width: "6px",
                                                            height: "6px",
                                                            borderRadius: "50%",
                                                            backgroundColor: "#5b1f6e",
                                                        }}
                                                    />
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
                                height: "360px",
                                borderCollapse: "collapse",
                            }}
                        >
                            <tbody>
                                {/* Name & Position */}
                                <tr>
                                    <td
                                        colSpan="2"
                                        style={{
                                            padding: "32px 30px 14px 30px",
                                            verticalAlign: "top",
                                        }}
                                    >
                                        {name && (<span
                                            style={{
                                                fontSize: "32px",
                                                fontWeight: "900",
                                                color: "#ffffff",
                                                letterSpacing: "2px",
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
                                                    fontSize: "15px",
                                                    color: "#d4a8e8",
                                                    fontWeight: "400",
                                                    letterSpacing: "1px",
                                                    display: "block",
                                                    marginTop: "7px",
                                                }}
                                            >
                                                {job_title}
                                            </span>
                                        )}
                                        {/* Divider */}
                                        {(name || job_title) && (<table
                                            style={{
                                                borderCollapse: "collapse",
                                                marginTop: "14px",
                                                width: "100%",
                                            }}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            height: "1px",
                                                            backgroundColor: "rgba(255,255,255,0.2)",
                                                        }}
                                                    />
                                                </tr>
                                            </tbody>
                                        </table>)}
                                    </td>
                                </tr>

                                {/* Contact + QR Row */}
                                <tr>
                                    {/* Contact Items */}
                                    <td style={{ verticalAlign: "middle", padding: "10px 0 20px 30px" }}>
                                        <table style={{ borderCollapse: "collapse" }}>
                                            <tbody>
                                                {/* Phone */}
                                                {phone_no && (<tr>
                                                    <td style={{ paddingBottom: "16px" }}>
                                                        <table style={{ borderCollapse: "collapse" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ verticalAlign: "middle" }}>
                                                                        <table
                                                                            style={{
                                                                                width: "38px",
                                                                                height: "38px",
                                                                                borderCollapse: "collapse",
                                                                                borderRadius: "50%",
                                                                                backgroundColor: "#ffffff",
                                                                                overflow: "hidden",
                                                                            }}
                                                                        >
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        style={{
                                                                                            textAlign: "center",
                                                                                            verticalAlign: "middle",
                                                                                            fontSize: "18px",
                                                                                            lineHeight: "1",
                                                                                        }}
                                                                                    >
                                                                                        📞
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td
                                                                        style={{
                                                                            paddingLeft: "12px",
                                                                            verticalAlign: "middle",
                                                                            color: "#ffffff",
                                                                            fontSize: "14px",
                                                                            fontWeight: "500",
                                                                        }}
                                                                    >
                                                                        {phone_no}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>)}

                                                {/* Email */}
                                                {email && (<tr>
                                                    <td style={{ paddingBottom: "16px" }}>
                                                        <table style={{ borderCollapse: "collapse" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ verticalAlign: "middle" }}>
                                                                        <table
                                                                            style={{
                                                                                width: "38px",
                                                                                height: "38px",
                                                                                borderCollapse: "collapse",
                                                                                borderRadius: "50%",
                                                                                backgroundColor: "#ffffff",
                                                                                overflow: "hidden",
                                                                            }}
                                                                        >
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        style={{
                                                                                            textAlign: "center",
                                                                                            verticalAlign: "middle",
                                                                                            fontSize: "18px",
                                                                                            lineHeight: "1",
                                                                                        }}
                                                                                    >
                                                                                        ✉️
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td
                                                                        style={{
                                                                            paddingLeft: "12px",
                                                                            verticalAlign: "middle",
                                                                            color: "#ffffff",
                                                                            fontSize: "14px",
                                                                            fontWeight: "500",
                                                                        }}
                                                                    >
                                                                        {email}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>)}

                                                {/* Location */}
                                                {organization && (
                                                    <tr>
                                                        <td>
                                                            <table style={{ borderCollapse: "collapse" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: "middle" }}>
                                                                            <table
                                                                                style={{
                                                                                    width: "38px",
                                                                                    height: "38px",
                                                                                    borderCollapse: "collapse",
                                                                                    borderRadius: "50%",
                                                                                    backgroundColor: "#ffffff",
                                                                                    overflow: "hidden",
                                                                                }}
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                verticalAlign: "middle",
                                                                                                fontSize: "18px",
                                                                                                lineHeight: "1",
                                                                                            }}
                                                                                        >
                                                                                            📍
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td
                                                                            style={{
                                                                                paddingLeft: "12px",
                                                                                verticalAlign: "middle",
                                                                                color: "#ffffff",
                                                                                fontSize: "14px",
                                                                                fontWeight: "500",
                                                                            }}
                                                                        >
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
