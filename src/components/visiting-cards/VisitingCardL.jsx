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
                borderRadius: "14px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                fontFamily: "'Segoe UI', sans-serif",
                margin: "40px auto",
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
                            borderRadius: "14px",
                        }}
                    >
                        <table style={{ width: "100%", height: "250px", borderCollapse: "collapse" }}>
                            <tbody>
                                <tr style={{ width: "100%" }}>

                                    {/* Orange diagonal strips column */}
                                    <td style={{ width: "18px", padding: "0", verticalAlign: "top" }}>
                                        <table style={{ width: "18px", height: "270px", borderCollapse: "collapse" }}>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </td>

                                    {/* Second thinner strip */}
                                    <td style={{ width: "8px", padding: "0", verticalAlign: "top" }}>
                                        <table style={{ width: "8px", height: "270px", borderCollapse: "collapse" }}>
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            height: "12px",
                                                            width: "6px",
                                                            backgroundColor: "#e09010",
                                                            borderRadius: "0",
                                                            padding: "0",
                                                        }}
                                                    />
                                                </tr>
                                                <tr>
                                                    <td style={{ height: "20px", backgroundColor: "#1c1c1c", padding: "0" }} />
                                                </tr>
                                                <tr>
                                                    <td
                                                        style={{
                                                            height: "12px",
                                                            width: "6px",
                                                            backgroundColor: "#e09010",
                                                            borderRadius: "0",
                                                            padding: "0",
                                                        }}
                                                    />
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                    {/* Main content area */}
                                    <td style={{ verticalAlign: "top", padding: "28px 20px 12px 16px", width: "100%" }}>
                                        <table style={{ borderCollapse: "collapse", width: "100%" }}>
                                            <tbody>

                                                {/* Name */}
                                                {name && (<tr>
                                                    <td style={{ paddingBottom: "2px" }}>
                                                        <span
                                                            style={{
                                                                fontSize: "24px",
                                                                fontWeight: "900",
                                                                color: "#ffffff",
                                                                letterSpacing: "1px",
                                                                textTransform: "uppercase",
                                                                wordBreak: "normal",
                                                                overflowWrap: "break-word"
                                                            }}
                                                        >
                                                            {name}
                                                        </span>
                                                    </td>
                                                </tr>)}

                                                {/* Job Title */}
                                                {job_title && (<tr>
                                                    <td style={{ paddingBottom: "13px" }}>
                                                        <span
                                                            style={{
                                                                fontSize: "11px",
                                                                color: "#f5a623",
                                                                fontWeight: "500",
                                                                letterSpacing: "1px",
                                                            }}
                                                        >
                                                            {job_title}
                                                        </span>
                                                    </td>
                                                </tr>
                                                )}
                                                {/* Orange divider line */}
                                                {(name || job_title) && (<tr>
                                                    <td style={{ paddingBottom: "13px" }}>
                                                        <table style={{ borderCollapse: "collapse", width: "100%" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ height: "2px", backgroundColor: "#f5a623", width: "40px", borderRadius: "2px" }} />
                                                                    <td style={{ height: "2px", backgroundColor: "#333" }} />
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>)}

                                                {/* Contact rows */}
                                                {contacts.map((item, i) => (
                                                    <tr key={i}>
                                                        <td style={{ paddingBottom: i < 4 ? "5px" : "0" }}>
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
                                                                                    border: "1.5px solid #f5a623",
                                                                                    backgroundColor: "rgba(245,166,35,0.12)",
                                                                                    overflow: "hidden",
                                                                                }}
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                verticalAlign: "middle",
                                                                                                fontSize: "11px",
                                                                                                lineHeight: "1",
                                                                                            }}
                                                                                        >
                                                                                            {item.icon}
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td
                                                                            style={{
                                                                                paddingLeft: "9px",
                                                                                verticalAlign: "middle",
                                                                                fontSize: "13px",
                                                                                color: "#cccccc",
                                                                                whiteSpace: "nowrap",
                                                                            }}
                                                                        >
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
                            borderRadius: "14px",
                        }}
                    >
                        <table style={{ width: "100%", height: "270px", borderCollapse: "collapse" }}>
                            <tbody>

                                <tr style={{ width: "100%" }}>
                                    <td style={{ verticalAlign: "middle", padding: "0 30px", textAlign: "center" }}>
                                        <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                            <tbody>

                                                <tr>
                                                    <td style={{ padding: "4px" }}>
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
                                                </tr>

                                                {/* Brand Name */}
                                                {(organization) && (<tr>
                                                    <td style={{ textAlign: "center" }}>
                                                        <span
                                                            style={{
                                                                fontSize: "15px",
                                                                fontWeight: "900",
                                                                color: "#fcf6f6",
                                                                letterSpacing: "1spx",
                                                                textTransform: "uppercase",
                                                            }}
                                                        >
                                                            {organization}
                                                        </span>
                                                    </td>
                                                </tr>)}

                                                {/* Tagline */}
                                                {(slogan) && (<tr>
                                                    <td style={{ textAlign: "center", paddingTop: "4px" }}>
                                                        <span
                                                            style={{
                                                                fontSize: "9px",
                                                                color: "#f7f3f3",
                                                                letterSpacing: "2px",
                                                                textTransform: "uppercase",
                                                                display: "block",
                                                            }}
                                                        >
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