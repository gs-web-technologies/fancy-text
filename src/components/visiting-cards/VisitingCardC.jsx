import React from 'react'

function VisitingCardC({ name, email, job_title, phone_no, organization, logo, website, slogan, hasStarted }) {
    const imageSrc = logo && logo.length != 0 ? logo : '';
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
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                fontFamily: "'Segoe UI', sans-serif",
                display: "block",
               wordBreak: "normal",
               overflowWrap:"break-word"
            }}
        >
            <tbody>
                <tr>
                    {/* LEFT PANEL - Dark */}
                    <td
                        style={{
                            width: "175px",
                            backgroundColor: "#1e1e1e",
                            verticalAlign: "middle",
                            padding: "18px 16px",
                        }}
                    >
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <tbody>
                                {/* Logo Icon */}
                                <tr>
                                    <td style={{ paddingBottom: "7px" }}>
                                        <table
                                            style={{
                                                borderCollapse: "collapse",
                                                width: "36px",
                                                height: "36px",
                                                borderRadius: "9px",
                                                overflow: "hidden",
                                                background: "linear-gradient(135deg, #ff6b6b, #f7971e, #ffd200)",
                                            }}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            fontSize: "16px",
                                                            lineHeight: "1",
                                                        }}
                                                    >
                                                        {imageSrc ? (
                                                            <img
                                                                src={imageSrc}
                                                                style={{ objectFit: "cover", display: "block" }}
                                                            />
                                                        ) : "🏠"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                {/* Brand Name */}
                                {organization && (<tr>
                                    <td>
                                        <span
                                            style={{
                                                fontSize: "11px",
                                                fontWeight: "800",
                                                letterSpacing: "1px",
                                                color: "#f7971e",
                                                display: "block",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {organization}
                                        </span>
                                    </td>
                                </tr>)}

                                {/* Slogan */}
                                {slogan && (<tr>
                                    <td style={{ paddingTop: "2px" }}>
                                        <span
                                            style={{
                                                fontSize: "7px",
                                                letterSpacing: "2px",
                                                fontWeight: "600",
                                                color: "#f7971e",
                                                textTransform: "uppercase",
                                                display: "block",
                                            }}
                                        >
                                            {slogan}
                                        </span>
                                    </td>
                                </tr>)}

                                {/* Divider */}
                                {(organization || slogan) && (<tr>
                                    <td style={{ paddingTop: "10px", paddingBottom: "8px" }}>
                                        <table style={{ borderCollapse: "collapse", width: "100%" }}>
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            height: "1px",
                                                            background: "linear-gradient(90deg, #f7971e, transparent)",
                                                        }}
                                                    />
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>)}

                                {/* Contact Info */}
                                <tr>
                                    <td>
                                        <table style={{ borderCollapse: "collapse" }}>
                                            <tbody>
                                                {email && (<tr>
                                                    <td style={{ color: "#ddd", fontSize: "8px", paddingBottom: "4px" }}>
                                                        📧&nbsp; {email}
                                                    </td>
                                                </tr>)}
                                                {phone_no && (<tr>
                                                    <td style={{ color: "#ddd", fontSize: "8px", paddingBottom: "4px" }}>
                                                        📞&nbsp; {phone_no}
                                                    </td>
                                                </tr>)}
                                                {website && (<tr>
                                                    <td style={{ color: "#ddd", fontSize: "8px" }}>
                                                        🌐&nbsp; {website}
                                                    </td>
                                                </tr>)}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>

                    {/* RIGHT PANEL - Gold */}
                    <td
                        style={{
                            width: "175px",
                            background: "linear-gradient(145deg, #f7c948 0%, #f7971e 100%)",
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
                                {/* Top dark strip */}
                                <tr>
                                    <td
                                        style={{
                                            height: "40px",
                                            backgroundColor: "#1e1e1e",
                                            verticalAlign: "bottom",
                                            padding: "0",
                                        }}
                                    >
                                        <table style={{ width: "100%", borderCollapse: "collapse", height: "18px" }}>
                                            <tbody>
                                                <tr>
                                                    {[...Array(12)].map((_, i) => (
                                                        <td
                                                            key={i}
                                                            style={{
                                                                height: `${6 + i * 1.2}px`,
                                                                backgroundColor: i < 6 ? "#1e1e1e" : "#f7c948",
                                                                verticalAlign: "bottom",
                                                                padding: "0",
                                                                width: "8.33%",
                                                            }}
                                                        />
                                                    ))}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                {/* Middle: Name and Title */}
                                <tr>
                                    <td style={{ verticalAlign: "middle", padding: "10px 10px 10px 14px" }}>
                                        <table style={{ borderCollapse: "collapse" }}>
                                            <tbody>
                                                {name && (<tr>
                                                    <td>
                                                        <span
                                                            style={{
                                                                fontSize: "15px",
                                                                fontWeight: "900",
                                                                color: "#1a1a1a",
                                                                letterSpacing: "-0.5px",
                                                                display: "block",
                                                                lineHeight: "1.1",
                                                            }}
                                                        >
                                                            {name}
                                                        </span>
                                                    </td>
                                                </tr>)}
                                                {job_title && (<tr>
                                                    <td style={{ paddingTop: "3px" }}>
                                                        <span
                                                            style={{
                                                                fontSize: "7px",
                                                                color: "#3a3a3a",
                                                                fontWeight: "600",
                                                                letterSpacing: "1px",
                                                                textTransform: "uppercase",
                                                                display: "block",
                                                            }}
                                                        >
                                                            {job_title}
                                                        </span>
                                                    </td>
                                                </tr>)}
                                                {/* Underline accent */}
                                                {(name || job_title) && (<tr>
                                                    <td style={{ paddingTop: "6px" }}>
                                                        <table style={{ borderCollapse: "collapse" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ width: "28px", height: "2px", backgroundColor: "#1a1a1a", borderRadius: "2px" }} />
                                                                    <td style={{ width: "5px" }} />
                                                                    <td style={{ width: "12px", height: "2px", backgroundColor: "#1a1a1a", opacity: "0.4", borderRadius: "2px" }} />
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>)}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                {/* Bottom dark strip */}
                                <tr>
                                    <td
                                        style={{
                                            height: "40px",
                                            backgroundColor: "#1a1a1a",
                                            verticalAlign: "top",
                                            padding: "0",
                                        }}
                                    >
                                        <table style={{ width: "100%", borderCollapse: "collapse", height: "18px" }}>
                                            <tbody>
                                                <tr>
                                                    {[...Array(12)].map((_, i) => (
                                                        <td
                                                            key={i}
                                                            style={{
                                                                height: `${18 - i * 1.2}px`,
                                                                backgroundColor: i < 6 ? "#f7971e" : "#1a1a1a",
                                                                verticalAlign: "top",
                                                                padding: "0",
                                                                width: "8.33%",
                                                            }}
                                                        />
                                                    ))}
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

export default VisitingCardC