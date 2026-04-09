import React from 'react'

function VisitingCardR({ name, email, job_title, phone_no, organization, website, slogan, logo, hasStarted }) {
    const imageSrc = logo && logo.length != 0 ? logo : "";
    if (!hasStarted) {
        name = "Your Name";
        email = "youremail@example.com";
        job_title = "Job Title";
        phone_no = "+91-229229929";
        organization = "Organization";
        website = "https://your_website.com";
        slogan = "Your slogan goes here";
    }

    const contacts = [];

    if (phone_no) {
        contacts.push(
            { icon: "📞", text: phone_no }
        );
    }

    if (email) {
        contacts.push(
            { icon: "✉️", text: email }
        );
    }

    if (website) {
        contacts.push(
            { icon: "🌐", text: website }
        );
    }

    if (organization) {
        contacts.push(
            { icon: "📍", text: organization }
        );
    }

    return (
        <table
            style={{
                width: "350px", // Updated
                height: "190px", // Updated
                borderCollapse: "collapse",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
                fontFamily: "'Segoe UI', sans-serif",
                display: "block",
                backgroundColor: "#1a1a1a",
                wordBreak: "normal",
                overflowWrap: "break-word"
            }}
        >
            <tbody>
                <tr>
                    <td
                        style={{
                            width: "130px", // Scaled down
                            backgroundColor: "#1a1a1a",
                            verticalAlign: "top",
                            padding: "0",
                        }}
                    >
                        <table style={{ width: "130px", height: "190px", borderCollapse: "collapse" }}>
                            <tbody>
                                <tr>
                                    <td
                                        style={{
                                            width: "130px", // Scaled down
                                            backgroundColor: "#d63384",
                                            verticalAlign: "top",
                                            padding: "0",
                                        }}
                                    >
                                        <table style={{ width: "130px", height: "190px", borderCollapse: "collapse" }}>
                                            <tbody>

                                                {/* Top pink area with logo */}
                                                <tr style={{ width: "100%", height: "100%" }}>
                                                    <td style={{ verticalAlign: "middle", textAlign: "center" }}>
                                                        <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                                            <tbody>

                                                                {/* Circle logo */}
                                                                <tr>
                                                                    <td style={{ textAlign: "center", paddingBottom: "10px" }}>
                                                                        <table
                                                                            style={{
                                                                                width: "42px", // Scaled down
                                                                                height: "42px", // Scaled down
                                                                                borderCollapse: "collapse",
                                                                                overflow: "hidden",
                                                                                margin: "0 auto",
                                                                            }}
                                                                        >
                                                                            <tbody>
                                                                                <tr>
                                                                                    {imageSrc ? (
                                                                                        <td
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                verticalAlign: "middle",
                                                                                                fontSize: "20px",
                                                                                                lineHeight: "1",
                                                                                            }}
                                                                                        >
                                                                                            <img
                                                                                                src={imageSrc}
                                                                                                width="42"
                                                                                                height="42"
                                                                                                style={{
                                                                                                    objectFit: "cover", objectPosition: "center", display: "inline-block", width: "42px",
                                                                                                    height: "42px",
                                                                                                }}
                                                                                            />
                                                                                        </td>
                                                                                    ) : (
                                                                                        <td
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                verticalAlign: "middle",
                                                                                                fontSize: "18px",
                                                                                                lineHeight: "1",
                                                                                            }}
                                                                                        >
                                                                                            🏢
                                                                                        </td>
                                                                                    )}

                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>

                                                                {/* Company Name */}
                                                                {organization && (<tr>
                                                                    <td style={{ textAlign: "center" }}>
                                                                        <span
                                                                            style={{
                                                                                fontSize: "10px", // Scaled down
                                                                                fontWeight: "900",
                                                                                color: "#ffffff",
                                                                                letterSpacing: "1px",
                                                                                display: "block",
                                                                                textTransform: "uppercase",
                                                                                lineHeight: "1.2",
                                                                            }}
                                                                        >
                                                                            {organization}
                                                                        </span>
                                                                    </td>
                                                                </tr>)}

                                                                {slogan && (
                                                                    <tr style={{ paddingTop: "4px" }}>
                                                                        <td style={{ textAlign: "center" }}>
                                                                            <span
                                                                                style={{
                                                                                    fontSize: "7px", // Scaled down
                                                                                    fontWeight: "100",
                                                                                    color: "#f5e0e0",
                                                                                    letterSpacing: "1px",
                                                                                    display: "block",
                                                                                    lineHeight: "1.2",
                                                                                }}
                                                                            >
                                                                                {slogan}
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                )}

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

                    {/* ══ RIGHT PANEL: dark with name + contact + QR ══ */}
                    <td
                        style={{
                            width: "220px", // Updated to fill remaining space (350 - 130)
                            backgroundColor: "#1a1a1a",
                            verticalAlign: "top",
                            padding: "0",
                            textAlign: "left"
                        }}
                    >
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <tbody>
                                <tr style={{ height: "80px" }}> 
                                    <td
                                        colSpan="2"
                                        style={{ padding: "15px 15px 0 10px", verticalAlign: "middle", textAlign: "right" }}
                                    >
                                        {name && (<span
                                            style={{
                                                fontSize: "16px", // Scaled down
                                                fontWeight: "900",
                                                color: "#ffffff",
                                                letterSpacing: "1px",
                                                display: "block",
                                                textTransform: "uppercase",
                                                lineHeight: "1.1",
                                            }}
                                        >
                                            {name}
                                        </span>)}
                                        {job_title && (<span
                                            style={{
                                                fontSize: "9px", // Scaled down
                                                color: "#d63384",
                                                fontWeight: "600",
                                                display: "block",
                                                marginTop: "2px",
                                                letterSpacing: "1px",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {job_title}
                                        </span>)}

                                        {/* Pink underline */}
                                        {(name || job_title) && (<table style={{ borderCollapse: "collapse", marginLeft: "auto", marginTop: "6px" }}>
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            width: "35px", // Scaled down
                                                            height: "2px",
                                                            backgroundColor: "#d63384",
                                                            borderRadius: "2px",
                                                        }}
                                                    />
                                                </tr>
                                            </tbody>
                                        </table>)}
                                    </td>
                                </tr>

                                {/* Contact info */}
                                <tr style={{ width: "100%" }}>
                                    <td style={{ textAlign: "right", verticalAlign: "top" }}>
                                        <table style={{ borderCollapse: "collapse", width: "100%" }}>
                                            <tbody>
                                                {contacts.map((item, i) => (
                                                    <tr key={i}>
                                                        <td style={{ padding:"0 10px 2px 0" }}>
                                                            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{
                                                                            paddingRight: "6px",
                                                                            verticalAlign: "middle",
                                                                            fontSize: "10px", // Scaled down
                                                                            color: "#cccccc",
                                                                            width: "100%",
                                                                            lineHeight: "1.3",
                                                                            textAlign: "right"
                                                                        }}>
                                                                            {item.text}
                                                                        </td>
                                                                        <td style={{
                                                                            verticalAlign: "middle",
                                                                            textAlign: "right",
                                                                            width: "25px",
                                                                        }}>
                                                                            <table style={{
                                                                                width: "18px",
                                                                                height: "18px",
                                                                                borderCollapse: "collapse",
                                                                                margin: "auto 3px auto auto",
                                                                            }}>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style={{
                                                                                            textAlign: "center",
                                                                                            verticalAlign: "middle",
                                                                                            fontSize: "9px",
                                                                                            lineHeight: "1",
                                                                                        }}>
                                                                                            {item.icon}
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
                                                ))}
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

export default VisitingCardR