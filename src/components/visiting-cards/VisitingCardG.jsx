import React from 'react'

function VisitingCardG({ name, email, job_title, phone_no, organization, logo, website, slogan, hasStarted }) {
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

    const contacts = [];
    if (phone_no) contacts.push({ icon: "📞", text: phone_no });
    if (email) contacts.push({ icon: "✉️", text: email });
    if (website) contacts.push({ icon: "🌐", text: website });
    if (organization) contacts.push({ icon: "📍", text: organization });

    return (
        <table
            style={{
                width: "350px",
                height: "190px",
                borderCollapse: "collapse",
                borderRadius: "9px",
                overflow: "hidden",
                boxShadow: "0 13px 40px rgba(0,0,0,0.35)",
                fontFamily: "'Segoe UI', sans-serif",
                display: "block",
                backgroundColor: "#ffffff",
                wordBreak: "break-all"
            }}
        >
            <tbody>
                <tr>

                    {/* LEFT PANEL */}
                    <td style={{ width: "58%", backgroundColor: "#ffffff", verticalAlign: "top", padding: "0" }}>
                        <table style={{ width: "100%", height: "190px", borderCollapse: "collapse" }}>
                            <tbody>

                                {/* TOP ROW: blue blob + name */}
                                <tr>
                                    <td style={{ padding: "0", verticalAlign: "top", height: "50px" }}>
                                        <table style={{ width: "100%", height: "50px", borderCollapse: "collapse" }}>
                                            <tbody>
                                                <tr>
                                                    {/* Blue blob */}
                                                    <td style={{
                                                        width: "67px",
                                                        height: "34px",
                                                        backgroundColor: "#1976d2",
                                                        borderRadius: "0 0 67px 0",
                                                        verticalAlign: "top",
                                                        padding: "0",
                                                    }} />

                                                    {/* Name + position */}
                                                    <td style={{ verticalAlign: "middle", padding: "13px 11px 0 13px" }}>
                                                        {name && (<span style={{
                                                            fontSize: "13px",
                                                            fontWeight: "900",
                                                            color: "#0d1b2a",
                                                            letterSpacing: "1px",
                                                            display: "block",
                                                            textTransform: "uppercase",
                                                        }}>{name}</span>)}
                                                        {job_title && (<span style={{
                                                            fontSize: "7px",
                                                            color: "#1976d2",
                                                            fontWeight: "500",
                                                            letterSpacing: "0.5px",
                                                            display: "block",
                                                            marginTop: "3px",
                                                            textTransform: "uppercase",
                                                        }}>{job_title}</span>)}
                                                        {(name || job_title) && (<table style={{ borderCollapse: "collapse", marginTop: "5px" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ width: "27px", height: "2px", backgroundColor: "#1976d2", borderRadius: "2px" }} />
                                                                    <td style={{ width: "4px" }} />
                                                                    <td style={{ width: "11px", height: "2px", backgroundColor: "#90caf9", borderRadius: "2px" }} />
                                                                </tr>
                                                            </tbody>
                                                        </table>)}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                {/* CONTACT INFO */}
                                <tr>
                                    <td style={{ padding: "11px 13px 0 13px", verticalAlign: "top" }}>
                                        <table style={{ borderCollapse: "collapse" }}>
                                            <tbody>
                                                {contacts.map((item, i) => (
                                                    <tr key={i}>
                                                        <td style={{ paddingBottom: i < 3 ? "3px" : "0" }}>
                                                            <table style={{ borderCollapse: "collapse" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: "middle" }}>
                                                                            <table style={{
                                                                                width: "17px",
                                                                                height: "17px",
                                                                                borderCollapse: "collapse",
                                                                                borderRadius: "50%",
                                                                                border: "1px solid #1976d2",
                                                                                backgroundColor: "#e3f2fd",
                                                                                overflow: "hidden",
                                                                            }}>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style={{ textAlign: "center", verticalAlign: "middle", fontSize: "8px", lineHeight: "1" }}>
                                                                                            {item.icon}
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td style={{ paddingLeft: "7px", verticalAlign: "middle", fontSize: "8px", color: "#333", whiteSpace: "nowrap" }}>
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
                                </tr>

                                <tr><td style={{ height: "100%" }}></td></tr>

                                {/* WAVE STRIP */}
                                <tr>
                                    <td style={{ padding: "0", height: "20px" }}>
                                        <table style={{ width: "100%", height: "20px", borderCollapse: "collapse" }}>
                                            <tbody>
                                                <tr>
                                                    {/* Left solid */}
                                                    <td style={{ width: "37px", height: "20px", backgroundColor: "#0d47a1", padding: "0" }} />
                                                    {/* Rising wave */}
                                                    {[19, 16, 13, 11, 8, 5, 3, 1].map((h, i) => (
                                                        <td key={i} style={{
                                                            width: "9px",
                                                            height: `${h}px`,
                                                            backgroundColor: "#1565c0",
                                                            verticalAlign: "bottom",
                                                            padding: "0",
                                                            borderRadius: i === 7 ? "0 5px 0 0" : "0",
                                                        }} />
                                                    ))}
                                                    {/* Gap */}
                                                    <td style={{ width: "20px", backgroundColor: "#ffffff", padding: "0" }} />
                                                    {/* Falling wave */}
                                                    {[1, 3, 5, 8, 11, 13, 16, 19].map((h, i) => (
                                                        <td key={i} style={{
                                                            width: "9px",
                                                            height: `${h}px`,
                                                            backgroundColor: "#1976d2",
                                                            verticalAlign: "bottom",
                                                            padding: "0",
                                                            borderRadius: i === 0 ? "5px 0 0 0" : "0",
                                                        }} />
                                                    ))}
                                                    {/* Right solid */}
                                                    <td style={{ backgroundColor: "#0d47a1", height: "20px", padding: "0" }} />
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </td>

                    {/* RIGHT PANEL */}
                    <td style={{
                        width: "42%",
                        backgroundColor: "#0d47a1",
                        padding: "0",
                        verticalAlign: "top",
                    }}>
                        <table style={{ width: "100%", height: "190px", borderCollapse: "collapse" }}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: "0 16px", textAlign: "center", verticalAlign: "middle" }}>

                                        {/* Logo circle */}
                                        <table style={{ borderCollapse: "collapse", margin: "0 auto 7px auto" }}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table style={{
                                                            width: "42px",
                                                            height: "42px",
                                                            borderCollapse: "collapse",
                                                            borderRadius: "50%",
                                                            border: "1px solid rgba(255,255,255,0.6)",
                                                            backgroundColor: "rgba(255,255,255,0.15)",
                                                            overflow: "hidden",
                                                        }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ textAlign: "center", verticalAlign: "middle", fontSize: "19px", lineHeight: "1" }}>
                                                                        {imageSrc ? (
                                                                            <img src={imageSrc} width="42" height="42" style={{ objectFit: "cover", objectPosition: "center", display: "inline-block", width: "42px", height: "42px" }} />
                                                                        ) : "💼"}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        {slogan && (<span style={{
                                            fontSize: "7px",
                                            fontWeight: "600",
                                            color: "rgba(255,255,255,0.7)",
                                            letterSpacing: "1px",
                                            display: "block",
                                            textTransform: "uppercase",
                                        }}>{slogan}</span>)}
                                        {organization && (<span style={{
                                            fontSize: "10px",
                                            fontWeight: "900",
                                            color: "#ffffff",
                                            letterSpacing: "1px",
                                            textTransform: "uppercase",
                                            display: "block",
                                            marginTop: "3px",
                                            wordBreak: "normal",
                                            overflowWrap: "break-word"
                                        }}>{organization}</span>)}

                                        <table style={{ borderCollapse: "collapse", margin: "8px auto 0 auto", width: "60%" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.3)" }} />
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

export default VisitingCardG