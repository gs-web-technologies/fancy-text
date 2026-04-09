import React from 'react'

function VisitingCardT({ name, email, job_title, phone_no, organization, website, slogan, logo, hasStarted }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/logo.avif";
    
    if (!hasStarted) {
        name = "Your Name";
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
                width: "350px", // Updated
                height: "190px", // Updated
                borderCollapse: "collapse",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                fontFamily: "'Segoe UI', sans-serif",
                display: "block",
                backgroundColor: "#ffffff",
                wordBreak: "normal",
                overflowWrap: "break-word"
            }}
        >
            <tbody>
                <tr>
                    {/* ══ LEFT PANEL ══ */}
                    <td
                        style={{
                            width: "140px", // Proportional reduction
                            background: "linear-gradient(160deg, #0d1b2e 0%, #1a2f4a 100%)",
                            verticalAlign: "top",
                            padding: "0",
                        }}
                    >
                        <table style={{ width: "140px", height: "190px", borderCollapse: "collapse", tableLayout: "fixed" }}>
                            <tbody>
                                <tr><td style={{ height: "20px" }} /></tr>
                                <tr>
                                    <td style={{ textAlign: "center", verticalAlign: "middle", padding: "0 10px" }}>
                                        <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                            <tbody>
                                                {/* Arc 1 */}
                                                <tr>
                                                    <td style={{ padding: "0 0 2px 0" }}>
                                                        <div style={{ width: "50px", height: "18px", backgroundColor: "#2ec4c4", borderRadius: "25px 25px 0 0", margin: "0 auto" }} />
                                                    </td>
                                                </tr>
                                                {/* Arc 2 */}
                                                <tr>
                                                    <td style={{ padding: "0 0 2px 0" }}>
                                                        <div style={{ width: "60px", height: "18px", backgroundColor: "#4caf50", borderRadius: "30px 30px 0 0", margin: "0 auto" }} />
                                                    </td>
                                                </tr>
                                                {/* Arc 3 */}
                                                <tr>
                                                    <td>
                                                        <div style={{ width: "70px", height: "18px", backgroundColor: "#f5a623", borderRadius: "35px 35px 0 0", margin: "0 auto" }} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: "right", paddingRight: "4px" }}>
                                                        <span style={{ fontSize: "12px" }}>✈️</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center", padding: "10px 10px 0 10px" }}>
                                        {organization && (
                                            <span style={{ fontSize: "13px", fontWeight: "900", color: "#ffffff", letterSpacing: "1px", display: "block", textTransform: "uppercase" }}>
                                                <span style={{ color: "#f5a623" }}>{organization}</span>
                                            </span>
                                        )}
                                        <span style={{ fontSize: "8px", fontWeight: "500", color: "#ffffff", letterSpacing: "1px", display: "block", textTransform: "uppercase" }}>
                                            {slogan}
                                        </span>
                                    </td>
                                </tr>
                                <tr><td style={{ height: "20px" }} /></tr>
                            </tbody>
                        </table>
                    </td>

                    {/* ══ RIGHT PANEL ══ */}
                    <td
                        style={{
                            width: "210px",
                            backgroundColor: "#ffffff",
                            verticalAlign: "top",
                            padding: "0",
                        }}
                    >
                        <table style={{ width: "210px", height: "190px", borderCollapse: "collapse", tableLayout: "fixed" }}>
                            <tbody>
                                <tr style={{ height: "70px" }}>
                                    <td style={{ padding: "20px 15px 0 15px", verticalAlign: "top" }}>
                                        {name && (
                                            <span style={{ fontSize: "16px", color: "#1a2f4a", display: "block", lineHeight: "1.1" }}>
                                                <span style={{ fontWeight: "900" }}>{name}</span>
                                            </span>
                                        )}
                                        {job_title && (
                                            <span style={{ fontSize: "8px", color: "#f5a623", fontWeight: "700", display: "block", marginTop: "3px", letterSpacing: "1px", textTransform: "uppercase" }}>
                                                {job_title}
                                            </span>
                                        )}
                                        {(name || job_title) && (
                                            <div style={{ height: "1px", backgroundColor: "#e8e8e8", marginTop: "10px", width: "100%" }} />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "5px 15px 0 15px", verticalAlign: "top" }}>
                                        <table style={{ borderCollapse: "collapse", width: "100%" }}>
                                            <tbody>
                                                {/* Phone */}
                                                {phone_no && (
                                                    <tr>
                                                        <td style={{ paddingBottom: "8px" }}>
                                                            <span style={{ fontSize: "9px", color: "#333" }}>📞 {phone_no}</span>
                                                        </td>
                                                    </tr>
                                                )}
                                                {/* Email */}
                                                {email && (
                                                    <tr>
                                                        <td style={{ paddingBottom: "8px" }}>
                                                            <span style={{ fontSize: "9px", color: "#333" }}>✉️ {email}</span>
                                                        </td>
                                                    </tr>
                                                )}
                                                {/* Website */}
                                                {website && (
                                                    <tr>
                                                        <td>
                                                            <span style={{ fontSize: "9px", color: "#333" }}>🌐 {website}</span>
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr><td style={{ height: "15px" }} /></tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default VisitingCardT