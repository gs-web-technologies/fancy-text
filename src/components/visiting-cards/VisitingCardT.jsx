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
                width: "520px",
                height: "270px",
                borderCollapse: "collapse",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
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

                    {/* ══ LEFT PANEL: dark navy with wave logo ══ */}
                    <td
                        style={{
                            width: "210px",
                            background: "linear-gradient(160deg, #0d1b2e 0%, #1a2f4a 100%)",
                            verticalAlign: "top",
                            padding: "0",
                        }}
                    >
                        <table style={{ width: "210px", height: "270px", borderCollapse: "collapse", tableLayout:"fixed" }}>
                            <tbody>

                                {/* Top spacer */}
                                <tr>
                                    <td style={{ height: "30px" }} />
                                </tr>

                                {/* Wave logo - stacked colored arcs using border-radius */}
                                <tr>
                                    <td style={{ textAlign: "center", verticalAlign: "middle", padding: "0 20px" }}>
                                        <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                            <tbody>

                                                {/* Arc 1 - teal top */}
                                                <tr>
                                                    <td style={{ padding: "0 0 4px 0" }}>
                                                        <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            width: "80px",
                                                                            height: "28px",
                                                                            backgroundColor: "#2ec4c4",
                                                                            borderRadius: "40px 40px 0 0",
                                                                            padding: "0",
                                                                        }}
                                                                    />
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>

                                                {/* Arc 2 - green middle */}
                                                <tr>
                                                    <td style={{ padding: "0 0 4px 0" }}>
                                                        <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            width: "90px",
                                                                            height: "28px",
                                                                            backgroundColor: "#4caf50",
                                                                            borderRadius: "45px 45px 0 0",
                                                                            padding: "0",
                                                                        }}
                                                                    />
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>

                                                {/* Arc 3 - orange bottom */}
                                                <tr>
                                                    <td style={{ padding: "0" }}>
                                                        <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            width: "100px",
                                                                            height: "28px",
                                                                            backgroundColor: "#f5a623",
                                                                            borderRadius: "50px 50px 0 0",
                                                                            padding: "0",
                                                                        }}
                                                                    />
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>

                                                {/* Plane emoji */}
                                                <tr>
                                                    <td style={{ textAlign: "right", paddingRight: "4px", paddingTop: "2px" }}>
                                                        <span style={{ fontSize: "16px" }}>✈️</span>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                {/* Brand name */}
                                <tr>
                                    <td style={{ textAlign: "center", padding: "16px 16px 0 16px" }}>
                                        {organization && (
                                            <span
                                                style={{
                                                    fontSize: "18px",
                                                    fontWeight: "900",
                                                    color: "#ffffff",
                                                    letterSpacing: "2px",
                                                    display: "block",
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                <span style={{ color: "#f5a623" }}>
                                                    {organization}
                                                </span>
                                            </span>)}
                                        <span style={{
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            color: "#ffffff",
                                            letterSpacing: "2px",
                                            display: "block",
                                            textTransform: "uppercase",
                                        }}>
                                            {slogan}
                                        </span>
                                    </td>
                                </tr>

                                {/* Bottom spacer */}
                                <tr>
                                    <td style={{ height: "30px" }} />
                                </tr>

                            </tbody>
                        </table>
                    </td>

                    {/* ══ RIGHT PANEL: white with contact info ══ */}
                    <td
                        style={{
                            width: "210px",
                            backgroundColor: "#ffffff",
                            verticalAlign: "top",
                            padding: "0",
                        }}
                    >
                        <table style={{ width: "210px", height: "270px", borderCollapse: "collapse", tableLayout:"fixed" }}>
                            <tbody>

                                {/* Name + designation */}
                                <tr style={{ height: "100px" }}>
                                    <td style={{ padding: "28px 24px 0 24px", verticalAlign: "top" }}>
                                       {name && ( <span
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: "400",
                                                color: "#1a2f4a",
                                                display: "block",
                                                lineHeight: "1",
                                            }}
                                        >
                                            <span style={{ fontWeight: "900" }}>{name}</span>
                                        </span>)}
                                        {job_title && (<span
                                            style={{
                                                fontSize: "10px",
                                                color: "#f5a623",
                                                fontWeight: "700",
                                                display: "block",
                                                marginTop: "5px",
                                                letterSpacing: "2px",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {job_title}
                                        </span>)}

                                        {/* Divider */}
                                       {(name || job_title) && (<table style={{ borderCollapse: "collapse", marginTop: "14px", width: "100%" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ height: "1.5px", backgroundColor: "#e8e8e8" }} />
                                                </tr>
                                            </tbody>
                                        </table>)}
                                    </td>
                                </tr>

                                {/* Contact rows */}
                                <tr>
                                    <td style={{ padding: "14px 24px 0 24px", verticalAlign: "top" }}>
                                        <table style={{ borderCollapse: "collapse", width: "100%" }}>
                                            <tbody>

                                                {/* Phone */}
                                             {phone_no && ( <tr>
                                                    <td style={{ paddingBottom: "11px" }}>
                                                        <table style={{ borderCollapse: "collapse" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ verticalAlign: "top" }}>
                                                                        <table
                                                                            style={{
                                                                                width: "24px",
                                                                                height: "24px",
                                                                                borderCollapse: "collapse",
                                                                                borderRadius: "50%",
                                                                                backgroundColor: "#f5a623",
                                                                                overflow: "hidden",
                                                                            }}
                                                                        >
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style={{ textAlign: "center", verticalAlign: "middle", fontSize: "11px" }}>
                                                                                        📞
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td style={{ paddingLeft: "10px", verticalAlign: "middle" }}>
                                                                        <span style={{ fontSize: "10px", color: "#333", display: "block", lineHeight: "1.6" }}>
                                                                            {phone_no}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>)}

                                                {/* Email */}
                                               {email && (<tr>
                                                    <td style={{ paddingBottom: "11px" }}>
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
                                                                                backgroundColor: "#f5a623",
                                                                                overflow: "hidden",
                                                                            }}
                                                                        >
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style={{ textAlign: "center", verticalAlign: "middle", fontSize: "11px" }}>
                                                                                        ✉️
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td style={{ paddingLeft: "10px", verticalAlign: "middle" }}>
                                                                        <span style={{ fontSize: "10px", color: "#333", display: "block", lineHeight: "1.6" }}>
                                                                            {email}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>)}

                                                {/* website */}
                                                {website && (<tr>
                                                    <td>
                                                        <table style={{ borderCollapse: "collapse" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ verticalAlign: "top" }}>
                                                                        <table
                                                                            style={{
                                                                                width: "24px",
                                                                                height: "24px",
                                                                                borderCollapse: "collapse",
                                                                                borderRadius: "50%",
                                                                                backgroundColor: "#f5a623",
                                                                                overflow: "hidden",
                                                                            }}
                                                                        >
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style={{ textAlign: "center", verticalAlign: "middle", fontSize: "11px" }}>
                                                                                        🌐
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td style={{ paddingLeft: "10px", verticalAlign: "middle" }}>
                                                                        <span style={{ fontSize: "10px", color: "#333", display: "block", lineHeight: "1.6" }}>
                                                                           {website}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>)}

                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                {/* Bottom spacer */}
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

export default VisitingCardT