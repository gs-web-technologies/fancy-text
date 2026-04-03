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
                width: "600px",
                height: "340px",
                borderCollapse: "collapse",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                fontFamily: "'Segoe UI', sans-serif",
                margin: "40px auto",
                display: "block",
            }}
        >
            <tbody>
                <tr>
                    {/* LEFT PANEL - Dark */}
                    <td
                        style={{
                            width: "300px",
                            backgroundColor: "#1e1e1e",
                            verticalAlign: "middle",
                            padding: "40px 36px",
                        }}
                    >
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <tbody>
                                {/* Logo Icon - table-based hexagon feel */}
                                <tr>
                                    <td style={{ paddingBottom: "14px" }}>
                                        <table
                                            style={{
                                                borderCollapse: "collapse",
                                                width: "64px",
                                                height: "64px",
                                                borderRadius: "16px",
                                                overflow: "hidden",
                                                background:
                                                    "linear-gradient(135deg, #ff6b6b, #f7971e, #ffd200)",
                                            }}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            fontSize: "30px",
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
                                                fontSize: "26px",
                                                fontWeight: "800",
                                                letterSpacing: "4px",
                                                background:
                                                    "linear-gradient(90deg, #ff6b6b, #f7971e, #ffd200)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
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
                                    <td style={{ paddingTop: "4px" }}>
                                        <span
                                            style={{
                                                fontSize: "11px",
                                                letterSpacing: "4px",
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
                                    <td style={{ paddingTop: "24px", paddingBottom: "20px" }}>
                                        <table style={{ borderCollapse: "collapse", width: "100%" }}>
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            height: "1px",
                                                            background:
                                                                "linear-gradient(90deg, #f7971e, transparent)",
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
                                                    <td
                                                        style={{
                                                            color: "#ddd",
                                                            fontSize: "12px",
                                                            paddingBottom: "6px",
                                                        }}
                                                    >
                                                        📧&nbsp; {email}
                                                    </td>
                                                </tr>)}
                                                {phone_no && (<tr>
                                                    <td
                                                        style={{
                                                            color: "#ddd",
                                                            fontSize: "12px",
                                                            paddingBottom: "6px",
                                                        }}
                                                    >
                                                        📞&nbsp; {phone_no}
                                                    </td>
                                                </tr>)}
                                                {website && (<tr>
                                                    <td style={{ color: "#ddd", fontSize: "12px" }}>
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

                    {/* RIGHT PANEL - Gold with diagonal dark strips using table rows */}
                    <td
                        style={{
                            width: "300px",
                            background: "linear-gradient(145deg, #f7c948 0%, #f7971e 100%)",
                            verticalAlign: "top",
                            padding: "0",
                        }}
                    >
                        <table
                            style={{
                                width: "100%",
                                height: "340px",
                                borderCollapse: "collapse",
                            }}
                        >
                            <tbody>
                                {/* Top dark strip */}
                                <tr>
                                    <td
                                        style={{
                                            height: "70px",
                                            backgroundColor: "#1e1e1e",
                                            verticalAlign: "bottom",
                                            padding: "0",
                                        }}
                                    >
                                        {/* Diagonal effect using a table with alternating dark/gold cells */}
                                        <table
                                            style={{
                                                width: "100%",
                                                borderCollapse: "collapse",
                                                height: "30px",
                                            }}
                                        >
                                            <tbody>
                                                <tr>
                                                    {[...Array(12)].map((_, i) => (
                                                        <td
                                                            key={i}
                                                            style={{
                                                                height: `${10 + i * 2}px`,
                                                                backgroundColor:
                                                                    i < 6 ? "#1e1e1e" : "#f7c948",
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
                                    <td
                                        style={{
                                            verticalAlign: "middle",
                                            padding: "18px 20px 18px 30px",
                                        }}
                                    >
                                        <table style={{ borderCollapse: "collapse" }}>
                                            <tbody>
                                                {name && (<tr>
                                                    <td>
                                                        <span
                                                            style={{
                                                                fontSize: "26px",
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
                                                    <td style={{ paddingTop: "6px" }}>
                                                        <span
                                                            style={{
                                                                fontSize: "12px",
                                                                color: "#3a3a3a",
                                                                fontWeight: "600",
                                                                letterSpacing: "1.5px",
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
                                                    <td style={{ paddingTop: "12px" }}>
                                                        <table style={{ borderCollapse: "collapse" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            width: "50px",
                                                                            height: "3px",
                                                                            backgroundColor: "#1a1a1a",
                                                                            borderRadius: "2px",
                                                                        }}
                                                                    />
                                                                    <td style={{ width: "8px" }} />
                                                                    <td
                                                                        style={{
                                                                            width: "20px",
                                                                            height: "3px",
                                                                            backgroundColor: "#1a1a1a",
                                                                            opacity: "0.4",
                                                                            borderRadius: "2px",
                                                                        }}
                                                                    />
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>)}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                {/* Bottom dark strip - stepped diagonal */}
                                <tr>
                                    <td
                                        style={{
                                            height: "70px",
                                            backgroundColor: "#1a1a1a",
                                            verticalAlign: "top",
                                            padding: "0",
                                        }}
                                    >
                                        <table
                                            style={{
                                                width: "100%",
                                                borderCollapse: "collapse",
                                                height: "30px",
                                            }}
                                        >
                                            <tbody>
                                                <tr>
                                                    {[...Array(12)].map((_, i) => (
                                                        <td
                                                            key={i}
                                                            style={{
                                                                height: `${30 - i * 2}px`,
                                                                backgroundColor:
                                                                    i < 6 ? "#f7971e" : "#1a1a1a",
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