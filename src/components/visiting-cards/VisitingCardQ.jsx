import React from 'react'

function VisitingCardQ({ name, email, job_title, phone_no, organization, website, slogan, logo, hasStarted }) {
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

    const contact1 = [];
    if (email) contact1.push({ icon: "✉️", label: "Email", text: email });
    if (phone_no) contact1.push({ icon: "📞", label: "Phone No", text: phone_no });

    const contact2 = [];
    if (website) contact2.push({ icon: "🌐", label: "Website", text: website });
    if (organization) contact2.push({ icon: "📍", label: "Address", text: organization });

    return (
        <table
            style={{
                width: "350px", // Updated
                height: "190px", // Updated
                borderCollapse: "collapse",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                fontFamily: "'Segoe UI', sans-serif",
                display: "block",
                backgroundColor: "#f0f0f0",
                wordBreak: "normal",
                overflowWrap: "break-word"
            }}
        >
            <tbody>
                {/* ── ROW 1: Orange top strip ── */}
                <tr>
                    <td
                        style={{
                            height: "65px", // Reduced
                            backgroundColor: "#f0a500",
                            verticalAlign: "middle",
                            padding: "0",
                            width: "350px"
                        }}
                    >
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <tbody>
                                <tr>
                                    {/* Icon/Logo */}
                                    <td style={{ width: "50px", textAlign: "center", verticalAlign: "middle" }}>
                                        <table
                                            style={{
                                                width: "32px",
                                                height: "32px",
                                                borderCollapse: "collapse",
                                                borderRadius: "4px",
                                                backgroundColor: "rgba(255,255,255,0.2)",
                                                margin: "0 auto",
                                                overflow: "hidden"
                                            }}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: "center", verticalAlign: "middle", fontSize: "18px" }}>
                                                        {imageSrc ? (
                                                            <img src={imageSrc} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                        ) : (
                                                            "🏠"
                                                        )}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                    {/* Name + Title */}
                                    <td style={{ verticalAlign: "middle", padding: "0 10px 0 2px" }}>
                                        {name && (
                                            <span style={{
                                                fontSize: "14px",
                                                fontWeight: "900",
                                                color: "#ffffff",
                                                letterSpacing: "1px",
                                                display: "block",
                                                textTransform: "uppercase",
                                                lineHeight: "1.2"
                                            }}>
                                                {name}
                                            </span>
                                        )}
                                        {job_title && (
                                            <span style={{
                                                fontSize: "8px",
                                                color: "rgba(255,255,255,0.85)",
                                                fontStyle: "italic",
                                                display: "block",
                                                marginTop: "2px"
                                            }}>
                                                {job_title}
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>

                {/* ── ROW 2: Thin Divider ── */}
                <tr>
                    <td style={{ height: "4px", backgroundColor: "#2c2c2c", padding: "0" }}></td>
                </tr>

                {/* ── ROW 3: Main body ── */}
                <tr>
                    <td
                        style={{
                            height: "121px", // Adjusted for total 190px
                            backgroundColor: "#3a3a3a",
                            verticalAlign: "top",
                            padding: "0"
                        }}
                    >
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <tbody>
                                <tr>
                                    {/* LEFT column */}
                                    <td style={{
                                        width: "50%",
                                        verticalAlign: "top",
                                        padding: "12px 8px 10px 15px",
                                        borderRight: "1px solid #555"
                                    }}>
                                        {contact1.map((item, i) => (
                                            <div key={i} style={{ marginBottom: i === 0 ? "8px" : "0", display: "flex", alignItems: "center" }}>
                                                <div style={{
                                                    width: "18px", height: "18px", borderRadius: "50%",
                                                    display: "flex", justifyContent: "center", alignItems: "center", fontSize: "9px", color: "#fff",
                                                }}>
                                                    {item.icon}
                                                </div>
                                                <div style={{ marginLeft: "6px" }}>
                                                    <div style={{ fontSize: "7px", color: "#f0a500", fontWeight: "600", textTransform: "uppercase" }}>{item.label}</div>
                                                    <div style={{ fontSize: "9px", color: "#fff" }}>{item.text}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </td>

                                    {/* RIGHT column */}
                                    <td style={{ width: "50%", verticalAlign: "top", padding: "12px 15px 10px 8px" }}>
                                        {contact2.map((item, i) => (
                                            <div key={i} style={{ marginBottom: i === 0 ? "8px" : "0", display: "flex", alignItems: "center" }}>
                                                <div style={{
                                                    width: "18px", height: "18px", borderRadius: "50%",
                                                    display: "flex", justifyContent: "center", alignItems: "center", fontSize: "9px", color: "#fff",
                                                }}>
                                                    {item.icon}
                                                </div>
                                                <div style={{ marginLeft: "6px" }}>
                                                    <div style={{ fontSize: "7px", color: "#f0a500", fontWeight: "600", textTransform: "uppercase" }}>{item.label}</div>
                                                    <div style={{ fontSize: "9px", color: "#fff" }}>{item.text}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>

                {/* ── ROW 4: Bottom accent ── */}
                <tr>
                    <td style={{ height: "3px", backgroundColor: "#f0a500", padding: "0" }}></td>
                </tr>
            </tbody>
        </table>
    );
}

export default VisitingCardQ