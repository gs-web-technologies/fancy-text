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
                width: "520px",
                height: "270px",
                borderCollapse: "collapse",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
                fontFamily: "'Segoe UI', sans-serif",
                margin: "40px auto",
                display: "block",
                backgroundColor: "#1a1a1a",
                wordBreak: "normal",
                overflowWrap: "break-word"
            }}
        >
            <tbody>
                <tr>

                    {/* ══ LEFT PANEL: pink diagonal with logo ══ */}
                    <td
                        style={{
                            width: "200px",
                            backgroundColor: "#1a1a1a",
                            verticalAlign: "top",
                            padding: "0",
                        }}
                    >
                        <table style={{ width: "200px", height: "200px", borderCollapse: "collapse" }}>
                            <tbody>
                                <tr>

                                    {/* Pink solid block */}
                                    <td
                                        style={{
                                            width: "200px",
                                            backgroundColor: "#d63384",
                                            verticalAlign: "top",
                                            padding: "0",
                                        }}
                                    >
                                        <table style={{ width: "200px", height: "270px", borderCollapse: "collapse" }}>
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
                                                                                width: "52px",
                                                                                height: "52px",
                                                                                borderCollapse: "collapse",
                                                                                borderRadius: "50%",
                                                                                border: "2.5px solid #ffffff",
                                                                                backgroundColor: "rgba(255,255,255,0.15)",
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
                                                                                                fontSize: "28px",
                                                                                                lineHeight: "1",
                                                                                            }}
                                                                                        >
                                                                                            <img
                                                                                                src={imageSrc}
                                                                                                width="62"
                                                                                                height="62"
                                                                                                style={{
                                                                                                    objectFit: "cover", objectPosition: "center", display: "inline-block", width: "62px",
                                                                                                    height: "62px",
                                                                                                }}
                                                                                            />
                                                                                        </td>
                                                                                    ) : (
                                                                                        <td
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                verticalAlign: "middle",
                                                                                                fontSize: "22px",
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
                                                                                fontSize: "13px",
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
                                                                                    fontSize: "9px",
                                                                                    fontWeight: "100",
                                                                                    color: "#f5e0e0",
                                                                                    letterSpacing: "2px",
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
                            width: "320px",
                            backgroundColor: "#1a1a1a",
                            verticalAlign: "top",
                            padding: "0",
                            textAlign: "left"
                        }}
                    >
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <tbody>

                                {/* Name + Title top-right */}
                                <tr style={{ height: "120px" }}>
                                    <td
                                        colSpan="2"
                                        style={{ padding: "22px 20px 0 10px", verticalAlign: "middle", textAlign: "right" }}
                                    >
                                        {name && (<span
                                            style={{
                                                fontSize: "20px",
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
                                                fontSize: "10px",
                                                color: "#d63384",
                                                fontWeight: "600",
                                                display: "block",
                                                marginTop: "4px",
                                                letterSpacing: "1px",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {job_title}
                                        </span>)}

                                        {/* Pink underline */}
                                        {(name || job_title) && (<table style={{ borderCollapse: "collapse", marginLeft: "auto", marginTop: "8px" }}>
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            width: "50px",
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
                                                        <td style={{ padding:"0 10px 3px 0" }}>
                                                            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{
                                                                            paddingRight: "8px",
                                                                            verticalAlign: "middle",
                                                                            fontSize: "12px",
                                                                            color: "#cccccc",
                                                                            width: "100%",
                                                                            lineHeight: "1.4",
                                                                            textAlign: "right"
                                                                        }}>
                                                                            {item.text}
                                                                        </td>
                                                                        <td style={{
                                                                            verticalAlign: "middle",
                                                                            textAlign: "right",
                                                                            width: "30px",
                                                                        }}>
                                                                            <table style={{
                                                                                width: "22px",
                                                                                height: "22px",
                                                                                borderCollapse: "collapse",
                                                                                margin: "auto 3px auto auto",
                                                                            }}>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style={{
                                                                                            textAlign: "center",
                                                                                            verticalAlign: "middle",
                                                                                            fontSize: "10px",
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