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
                height: "240px",
                borderCollapse: "collapse",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                fontFamily: "'Segoe UI', sans-serif",
                margin: "40px auto",
                display: "block",
                backgroundColor: "#ffffff",
                wordBreak: "normal",
                overflowWrap: "break-word"
            }}
        >
            <tbody>
                <tr>

                    {/* ── LEFT PANEL: white with green blobs top-left & bottom-left ── */}
                    <td
                        style={{
                            width: "250px",
                            backgroundColor: "#ffffff",
                            verticalAlign: "top",
                            padding: "0",
                        }}
                    >
                        <table style={{ width: "100%", height: "140px", borderCollapse: "collapse" }}>
                            <tbody>

                                {/* ROW 1: top-left green blob + name area */}
                                <tr>
                                    <td style={{ padding: "0", verticalAlign: "top" }}>
                                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                            <tbody>
                                                <tr>
                                                    {/* Green blob top-left — large rounded cell */}
                                                    <td
                                                        style={{
                                                            width: "50px",
                                                            height: "50px",
                                                            backgroundColor: "#388e3c",
                                                            borderRadius: "0 0 90px 0",
                                                            verticalAlign: "top",
                                                            padding: "0",
                                                        }}
                                                    />
                                                    {/* Name block sits to the right of the blob */}
                                                    <td style={{ verticalAlign: "middle", padding: "19px 16px 0 20px" }}>
                                                        {name && (<span
                                                            style={{
                                                                fontSize: "20px",
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
                                                                fontSize: "11px",
                                                                color: "#558b2f",
                                                                fontWeight: "500",
                                                                letterSpacing: "0.5px",
                                                                display: "block",
                                                                marginTop: "4px",
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
                                    <td style={{ padding: "11px 20px 0 20px", verticalAlign: "top" }}>
                                        <table style={{ borderCollapse: "collapse" }}>
                                            <tbody>

                                                {contacts.map((item, i) => (
                                                    <tr key={i}>
                                                        <td style={{ paddingBottom: i < 3 ? "10px" : "0" }}>
                                                            <table style={{ borderCollapse: "collapse" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: "middle" }}>
                                                                            <table
                                                                                style={{
                                                                                    width: "28px",
                                                                                    height: "20px",
                                                                                    borderCollapse: "collapse",
                                                                                    borderRadius: "50%",
                                                                                    border: "1.5px solid #66bb6a",
                                                                                    backgroundColor: "#f1f8e9",
                                                                                    overflow: "hidden",
                                                                                    textAlign: "center",
                                                                                    verticalAlign: "middle",
                                                                                }}
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                verticalAlign: "middle",
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
                                                                                paddingLeft: "10px",
                                                                                verticalAlign: "middle",
                                                                                fontSize: "11px",
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

                    {/* ── RIGHT PANEL: dark green with logo + company + QR ── */}
                    <td
                        style={{
                            width: "260px",
                            background: "linear-gradient(160deg, #2e7d32 0%, #1b5e20 100%)",
                            verticalAlign: "top",
                            padding: "0",
                        }}
                    >
                        <table style={{ width: "100%", height: "340px", borderCollapse: "collapse" }}>
                            <tbody>

                                {/* Logo + Company Name */}
                                <tr>
                                    <td style={{ padding: "40px 28px 0 28px", verticalAlign: "top", textAlign: "center" }}>

                                        {/* Logo circle */}
                                        <table style={{ borderCollapse: "collapse", margin: "0 auto 10px auto" }}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table
                                                            style={{
                                                                width: "64px",
                                                                height: "64px",
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
                                                                            fontSize: "30px",
                                                                            lineHeight: "1",
                                                                        }}
                                                                    >
                                                                        {imageSrc ? <img
                                                                            src={imageSrc}
                                                                            style={{ objectFit: "cover", display: "block" }}
                                                                        /> : "🌿"}
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
                                                fontSize: "12px",
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
                                                fontSize: "16px",
                                                fontWeight: "900",
                                                color: "#ffffff",
                                                letterSpacing: "1.5px",
                                                textTransform: "uppercase",
                                                display: "block",
                                                marginTop: "5px",
                                            }}
                                        >
                                            {organization}
                                        </span>)}

                                        {/* Divider */}
                                        {(slogan || organization) && (<table style={{ borderCollapse: "collapse", margin: "14px auto 0 auto", width: "70%" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.25)" }} />
                                                </tr>
                                            </tbody>
                                        </table>)}
                                    </td>
                                </tr>

                                {/* Spacer */}
                                <tr>
                                    <td style={{ height: "20px" }} />
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