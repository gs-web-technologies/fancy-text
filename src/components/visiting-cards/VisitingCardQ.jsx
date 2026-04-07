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

    if (email) {
        contact1.push(
            { icon: "✉️", "label": "Email", text: email }
        );
    }
    if (phone_no) {
        contact1.push(
            { icon: "📞", "label": "Phone No", text: phone_no }
        );
    }


    const contact2 = [];

    if (website) {
        contact2.push(
            { icon: "🌐", "label": "Website", text: website }
        );
    }


    if (organization) {
        contact2.push(
            { icon: "📍", "label": "Address", text: organization }
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
                boxShadow: "0 16px 48px rgba(0,0,0,0.3)",
                fontFamily: "'Segoe UI', sans-serif",
                display: "block",
                backgroundColor: "#f0f0f0",
                wordBreak:"normal",
                overflowWrap: "break-word"
            }}
        >
            <tbody>

                {/* ── ROW 1: Orange top strip with house icon + company name ── */}
                <tr>
                    <td
                        style={{
                            height: "100px",
                            backgroundColor: "#f0a500",
                            verticalAlign: "middle",
                            padding: "0",
                            width: "520px"
                        }}
                    >
                        <table style={{ width: "100%", borderCollapse: "collapse", height: "60px" }}>
                            <tbody>
                                <tr>

                                    {/* House emoji icon */}
                                    <td style={{ width: "60px", textAlign: "center", verticalAlign: "middle" }}>
                                        <table
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                borderCollapse: "collapse",
                                                borderRadius: "6px",
                                                backgroundColor: "rgba(255,255,255,0.2)",
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
                                                            🏠
                                                        </td>
                                                    )}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                    {/* Company name + tagline */}
                                    <td style={{ verticalAlign: "middle", padding: "0 16px 0 4px" }}>
                                        {name && (<span
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: "900",
                                                color: "#ffffff",
                                                letterSpacing: "1.5px",
                                                display: "block",
                                                textTransform: "uppercase",
                                                lineHeight: "1",
                                            }}
                                        >
                                            {name}
                                        </span>)}
                                        {job_title && (<span
                                            style={{
                                                fontSize: "10px",
                                                color: "rgba(255,255,255,0.85)",
                                                fontStyle: "italic",
                                                fontWeight: "400",
                                                display: "block",
                                                marginTop: "4px",
                                                letterSpacing: "0.5px",
                                            }}
                                        >
                                            {job_title}
                                        </span>)}
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>

                {/* ── ROW 2: Dark grey divider strip ── */}
                <tr>
                    <td
                        style={{
                            height: "8px",
                            backgroundColor: "#2c2c2c",
                            padding: "0",
                            width: "520px"
                        }}
                    >
                    </td>
                </tr>

                {/* ── ROW 3: Dark grey main body ── */}
                <tr>
                    <td
                        style={{
                            height: "162px",
                            backgroundColor: "#3a3a3a",
                            verticalAlign: "top",
                            padding: "0",
                            width: "520px"
                        }}
                    >
                        <table style={{ width: "100%", height: "202px", borderCollapse: "collapse" }}>
                            <tbody>

                                {/* Inner top: subtle darker strip for depth */}
                                <tr>
                                    <td
                                        colSpan="3"
                                        style={{
                                            height: "4px",
                                            backgroundColor: "#2a2a2a",
                                            padding: "0",
                                        }}
                                    />
                                </tr>

                                {/* Two column contact layout */}
                                <tr>
                                    {/* LEFT contact column */}
                                    <td
                                        style={{
                                            width: "50%",
                                            verticalAlign: "top",
                                            padding: "20px 10px 20px 24px",
                                            borderRight: "1px solid #555",
                                        }}
                                    >
                                        <table style={{ borderCollapse: "collapse" }}>
                                            <tbody>
                                                {contact1.map((item, i) => (
                                                    <tr key={i}>
                                                        <td style={{ paddingBottom: i === 0 ? "14px" : "0" }}>
                                                            <table style={{ borderCollapse: "collapse" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: "middle" }}>
                                                                            <table
                                                                                style={{
                                                                                    width: "26px",
                                                                                    height: "26px",
                                                                                    borderCollapse: "collapse",
                                                                                    borderRadius: "50%",
                                                                                    border: "1.5px solid #f0a500",
                                                                                    backgroundColor: "rgba(240,165,0,0.12)",
                                                                                    overflow: "hidden",
                                                                                }}
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                verticalAlign: "middle",
                                                                                                fontSize: "12px",
                                                                                                lineHeight: "1",
                                                                                            }}
                                                                                        >
                                                                                            {item.icon}
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td style={{ paddingLeft: "8px", verticalAlign: "middle" }}>
                                                                            <span
                                                                                style={{
                                                                                    fontSize: "9px",
                                                                                    color: "#f0a500",
                                                                                    fontWeight: "600",
                                                                                    display: "block",
                                                                                    letterSpacing: "0.3px",
                                                                                }}
                                                                            >
                                                                                {item.label}
                                                                            </span>
                                                                            <span
                                                                                style={{
                                                                                    fontSize: "11px",
                                                                                    color: "#ffffff",
                                                                                    fontWeight: "500",
                                                                                    display: "block",
                                                                                    marginTop: "1px",
                                                                                }}
                                                                            >
                                                                                {item.text}
                                                                            </span>
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

                                    {/* RIGHT contact column */}
                                    <td
                                        style={{
                                            width: "50%",
                                            verticalAlign: "top",
                                            padding: "20px 24px 20px 20px",
                                        }}
                                    >
                                        <table style={{ borderCollapse: "collapse" }}>
                                            <tbody>
                                                {contact2.map((item, i) => (
                                                    <tr key={i}>
                                                        <td style={{ paddingBottom: i === 0 ? "14px" : "0" }}>
                                                            <table style={{ borderCollapse: "collapse" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: "middle" }}>
                                                                            <table
                                                                                style={{
                                                                                    width: "26px",
                                                                                    height: "26px",
                                                                                    borderCollapse: "collapse",
                                                                                    borderRadius: "50%",
                                                                                    border: "1.5px solid #f0a500",
                                                                                    backgroundColor: "rgba(240,165,0,0.12)",
                                                                                    overflow: "hidden",
                                                                                }}
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                verticalAlign: "middle",
                                                                                                fontSize: "12px",
                                                                                                lineHeight: "1",
                                                                                            }}
                                                                                        >
                                                                                            {item.icon}
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td style={{ paddingLeft: "8px", verticalAlign: "middle" }}>
                                                                            <span
                                                                                style={{
                                                                                    fontSize: "9px",
                                                                                    color: "#f0a500",
                                                                                    fontWeight: "600",
                                                                                    display: "block",
                                                                                    letterSpacing: "0.3px",
                                                                                }}
                                                                            >
                                                                                {item.label}
                                                                            </span>
                                                                            <span
                                                                                style={{
                                                                                    fontSize: "11px",
                                                                                    color: "#ffffff",
                                                                                    fontWeight: "500",
                                                                                    display: "block",
                                                                                    marginTop: "1px",
                                                                                }}
                                                                            >
                                                                                {item.text}
                                                                            </span>
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

                                {/* Bottom orange accent line */}
                                <tr>
                                    <td
                                        colSpan="3"
                                        style={{
                                            height: "5px",
                                            backgroundColor: "#f0a500",
                                            padding: "0",
                                        }}
                                    />
                                </tr>

                            </tbody>
                        </table>
                    </td>
                </tr>

            </tbody>
        </table>
    );
}

export default VisitingCardQ