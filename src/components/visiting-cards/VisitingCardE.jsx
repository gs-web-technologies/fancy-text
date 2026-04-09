import React from 'react'

function VisitingCardE({ name, email, job_title, phone_no, organization, logo, website, slogan, hasStarted }) {
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
                wordBreak: "normal",
                overflowWrap: "break-word"
            }}
        >
            <tbody>
                <tr>

                    {/* LEFT PANEL */}
                    <td
                        style={{
                            width: "168px",
                            backgroundColor: "#ffffff",
                            verticalAlign: "top",
                            padding: "0",
                        }}
                    >
                        <table style={{ width: "100%", height: "190px", borderCollapse: "collapse" }}>
                            <tbody>
                                {/* ROW 1: top-left green blob + name area */}
                                <tr>
                                    <td style={{ padding: "0", verticalAlign: "top" }}>
                                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                            <tbody>
                                                <tr>
                                                    {/* Green blob */}
                                                    <td
                                                        style={{
                                                            width: "34px",
                                                            height: "34px",
                                                            backgroundColor: "#388e3c",
                                                            borderRadius: "0 0 60px 0",
                                                            verticalAlign: "top",
                                                            padding: "0",
                                                        }}
                                                    />
                                                    {/* Name block */}
                                                    <td style={{ verticalAlign: "middle", padding: "13px 11px 0 13px" }}>
                                                        {name && (<span
                                                            style={{
                                                                fontSize: "13px",
                                                                fontWeight: "900",
                                                                color: "#1a1a1a",
                                                                letterSpacing: "1px",
                                                                display: "block",
                                                                textTransform: "uppercase",
                                                            }}
                                                        >
                                                            {name}
                                                        </span>)}
                                                        {job_title && (<span
                                                            style={{
                                                                fontSize: "8px",
                                                                color: "#558b2f",
                                                                fontWeight: "500",
                                                                letterSpacing: "0.5px",
                                                                display: "block",
                                                                marginTop: "3px",
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

                                {/* ROW 2: contact info */}
                                <tr>
                                    <td style={{ padding: "7px 13px 0 13px", verticalAlign: "top" }}>
                                        <table style={{ borderCollapse: "collapse" }}>
                                            <tbody>
                                                {contacts.map((item, i) => (
                                                    <tr key={i}>
                                                        <td style={{ paddingBottom: i < 3 ? "7px" : "0" }}>
                                                            <table style={{ borderCollapse: "collapse" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: "middle" }}>
                                                                            <table
                                                                                style={{
                                                                                    width: "19px",
                                                                                    height: "14px",
                                                                                    borderCollapse: "collapse",
                                                                                    borderRadius: "50%",
                                                                                    textAlign: "center",
                                                                                    verticalAlign: "middle",
                                                                                }}
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style={{ textAlign: "center", verticalAlign: "middle", fontSize: "9px" }}>
                                                                                            {item.icon}
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td
                                                                            style={{
                                                                                paddingLeft: "7px",
                                                                                verticalAlign: "middle",
                                                                                fontSize: "8px",
                                                                                color: "#333",
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
                                </tr>
                            </tbody>
                        </table>
                    </td>

                    {/* RIGHT PANEL */}
                    <td
                        style={{
                            width: "182px",
                            backgroundColor: "#1b5e20",
                            verticalAlign: "top",
                            padding: "0",
                        }}
                    >
                        <table style={{ width: "100%", height: "190px", borderCollapse: "collapse" }}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: "27px 19px 0 19px", verticalAlign: "top", textAlign: "center" }}>

                                        {/* Logo circle */}
                                        <table style={{ borderCollapse: "collapse", margin: "0 auto 7px auto" }}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table
                                                            style={{
                                                                width: "43px",
                                                                height: "43px",
                                                                borderCollapse: "collapse",
                                                                borderRadius: "50%",
                                                                backgroundColor: "#ffffff",
                                                                overflow: "hidden",
                                                            }}
                                                        >
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            textAlign: "center",
                                                                            verticalAlign: "middle",
                                                                            fontSize: "20px",
                                                                            lineHeight: "1",
                                                                        }}
                                                                    >
                                                                        {imageSrc ? <img src={imageSrc} style={{ objectFit: "cover", display: "block" }} /> : "🌿"}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        {slogan && (<span
                                            style={{
                                                fontSize: "8px",
                                                fontWeight: "600",
                                                color: "rgba(255,255,255,0.75)",
                                                letterSpacing: "1.5px",
                                                display: "block",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {slogan}
                                        </span>)}
                                        {organization && (<span
                                            style={{
                                                fontSize: "11px",
                                                fontWeight: "900",
                                                color: "#ffffff",
                                                letterSpacing: "1.5px",
                                                textTransform: "uppercase",
                                                display: "block",
                                                marginTop: "3px",
                                            }}
                                        >
                                            {organization}
                                        </span>)}

                                        {(slogan || organization) && (<table style={{ borderCollapse: "collapse", margin: "9px auto 0 auto", width: "70%" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.25)" }} />
                                                </tr>
                                            </tbody>
                                        </table>)}
                                    </td>
                                </tr>

                                <tr>
                                    <td style={{ height: "13px" }} />
                                </tr>
                            </tbody>
                        </table>
                    </td>

                </tr>
            </tbody>
        </table>
    );
}

export default VisitingCardE