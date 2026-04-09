import React from 'react'

function VisitingCardL({ name, email, job_title, phone_no, organization, logo, website, slogan, hasStarted }) {
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

    const contacts = [];
    if (phone_no) contacts.push({ icon: "📞", text: phone_no });
    if (email) contacts.push({ icon: "✉️", text: email });
    if (website) contacts.push({ icon: "🌐", text: website });
    if (organization) contacts.push({ icon: "📍", text: organization });

    return (
        <table
            style={{
                width: "350px", // Reduced width
                height: "190px", // Reduced height
                borderCollapse: "collapse",
                borderRadius: "10px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
                fontFamily: "'Segoe UI', sans-serif",
                margin: "20px auto",
                display: "block",
                backgroundColor: "#1a1a1a",
                wordBreak: "break-all",
                overflowWrap: "break-word",
                tableLayout: "fixed"
            }}
        >
            <tbody>
                <tr>
                    {/* ══ LEFT DARK PANEL ══ */}
                    <td
                        style={{
                            width: "62%",
                            backgroundColor: "#1c1c1c",
                            verticalAlign: "middle",
                            padding: "0",
                            borderRadius: "10px",
                        }}
                    >
                        <table style={{ width: "100%", height: "190px", borderCollapse: "collapse" }}>
                            <tbody>
                                <tr style={{ width: "100%" }}>
                                    {/* Thinner decorative strips */}
                                    <td style={{ width: "12px", padding: "0", verticalAlign: "top" }}>
                                        <table style={{ width: "12px", height: "190px", borderCollapse: "collapse" }}>
                                            <tbody></tbody>
                                        </table>
                                    </td>

                                    <td style={{ width: "6px", padding: "0", verticalAlign: "top" }}>
                                        <table style={{ width: "6px", height: "190px", borderCollapse: "collapse" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ height: "8px", width: "4px", backgroundColor: "#e09010", padding: "0" }} />
                                                </tr>
                                                <tr>
                                                    <td style={{ height: "15px", backgroundColor: "#1c1c1c", padding: "0" }} />
                                                </tr>
                                                <tr>
                                                    <td style={{ height: "8px", width: "4px", backgroundColor: "#e09010", padding: "0" }} />
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                    {/* Main content area */}
                                    <td style={{ verticalAlign: "top", padding: "18px 12px 10px 10px", width: "100%" }}>
                                        <table style={{ borderCollapse: "collapse", width: "100%" }}>
                                            <tbody>
                                                {/* Name */}
                                                {name && (<tr>
                                                    <td style={{ paddingBottom: "1px" }}>
                                                        <span style={{ fontSize: "16px", fontWeight: "900", color: "#ffffff", letterSpacing: "0.5px", textTransform: "uppercase", wordBreak: "normal", overflowWrap: "break-word" }}>
                                                            {name}
                                                        </span>
                                                    </td>
                                                </tr>)}

                                                {/* Job Title */}
                                                {job_title && (<tr>
                                                    <td style={{ paddingBottom: "8px" }}>
                                                        <span style={{ fontSize: "8px", color: "#f5a623", fontWeight: "500", letterSpacing: "0.5px" }}>
                                                            {job_title}
                                                        </span>
                                                    </td>
                                                </tr>)}

                                                {/* Divider */}
                                                {(name || job_title) && (<tr>
                                                    <td style={{ paddingBottom: "10px" }}>
                                                        <table style={{ borderCollapse: "collapse", width: "100%" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ height: "1.5px", backgroundColor: "#f5a623", width: "30px", borderRadius: "1px" }} />
                                                                    <td style={{ height: "1.5px", backgroundColor: "#333" }} />
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>)}

                                                {/* Contact rows */}
                                                {contacts.map((item, i) => (
                                                    <tr key={i}>
                                                        <td style={{ paddingBottom: i < 4 ? "4px" : "0" }}>
                                                            <table style={{ borderCollapse: "collapse" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: "middle" }}>
                                                                            <table style={{ width: "18px", height: "18px", borderCollapse: "collapse", borderRadius: "50%", overflow: "hidden" }}>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style={{ textAlign: "center", verticalAlign: "middle", fontSize: "8px", lineHeight: "1" }}>
                                                                                            {item.icon}
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td style={{ paddingLeft: "6px", verticalAlign: "middle", fontSize: "9px", color: "#cccccc", whiteSpace: "nowrap" }}>
                                                                            {item.text}
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </td>
                                    <td style={{ width: "100%" }}></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>

                    {/* ══ RIGHT WHITE PANEL ══ */}
                    <td
                        style={{
                            width: "38%",
                            backgroundColor: "#1c1c1c",
                            verticalAlign: "top",
                            padding: "0",
                            borderRadius: "10px",
                        }}
                    >
                        <table style={{ width: "100%", height: "190px", borderCollapse: "collapse" }}>
                            <tbody>
                                <tr style={{ width: "100%" }}>
                                    <td style={{ verticalAlign: "middle", padding: "0 15px", textAlign: "center" }}>
                                        <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ padding: "3px" }}>
                                                        <img
                                                            src={imageSrc}
                                                            width="45"
                                                            height="45"
                                                            style={{ objectFit: "cover", objectPosition: "center", display: "inline-block", width: "45px", height: "45px" }}
                                                        />
                                                    </td>
                                                </tr>
                                                {organization && (<tr>
                                                    <td style={{ textAlign: "center" }}>
                                                        <span style={{ fontSize: "10px", fontWeight: "900", color: "#fcf6f6", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                                                            {organization}
                                                        </span>
                                                    </td>
                                                </tr>)}
                                                {slogan && (<tr>
                                                    <td style={{ textAlign: "center", paddingTop: "2px" }}>
                                                        <span style={{ fontSize: "6px", color: "#f7f3f3", letterSpacing: "1px", textTransform: "uppercase", display: "block" }}>
                                                            {slogan}
                                                        </span>
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

export default VisitingCardL