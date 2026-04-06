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
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                fontFamily: "'Segoe UI', sans-serif",
                margin: "40px auto",
                display: "block",
                backgroundColor: "#ffffff",
                wordBreak: "break-all"
            }}
        >
            <tbody>
                <tr>

                    {/* ── LEFT PANEL ── */}
                    <td
                        style={{
                            width: "58%",
                            backgroundColor: "#ffffff",
                            verticalAlign: "top",
                            padding: "0",
                        }}
                    >
                        <table style={{ width: "100%", height: "270px", borderCollapse: "collapse" }}>
                            <tbody>

                                {/* TOP ROW: blue blob top-left + name top-right */}
                                <tr>
                                    <td style={{ padding: "0", verticalAlign: "top", height: "75px" }}>
                                        <table style={{ width: "100%", height: "75px", borderCollapse: "collapse" }}>
                                            <tbody>
                                                <tr>

                                                    {/* Large blue rounded blob top-left */}
                                                    <td
                                                        style={{
                                                            width: "100px",
                                                            height: "50px",
                                                            background: "linear-gradient(135deg, #0d47a1, #1976d2, #42a5f5)",
                                                            borderRadius: "0 0 100px 0",
                                                            verticalAlign: "top",
                                                            padding: "0",
                                                        }}
                                                    />

                                                    {/* Name + position top-right */}
                                                    <td style={{ verticalAlign: "middle", padding: "20px 16px 0 20px" }}>
                                                        {name && (<span
                                                            style={{
                                                                fontSize: "20px",
                                                                fontWeight: "900",
                                                                color: "#0d1b2a",
                                                                letterSpacing: "1px",
                                                                display: "block",
                                                                textTransform: "uppercase",
                                                            }}
                                                        >
                                                            {name}
                                                        </span>)}
                                                        {job_title && (<span
                                                            style={{
                                                                fontSize: "10px",
                                                                color: "#1976d2",
                                                                fontWeight: "500",
                                                                letterSpacing: "0.5px",
                                                                display: "block",
                                                                marginTop: "4px",
                                                                textTransform: "uppercase",
                                                            }}
                                                        >
                                                            {job_title}
                                                        </span>)}
                                                        {/* blue underline accent */}
                                                        {(name || job_title) && (<table style={{ borderCollapse: "collapse", marginTop: "8px" }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            width: "40px",
                                                                            height: "2px",
                                                                            backgroundColor: "#1976d2",
                                                                            borderRadius: "2px",
                                                                        }}
                                                                    />
                                                                    <td style={{ width: "6px" }} />
                                                                    <td
                                                                        style={{
                                                                            width: "16px",
                                                                            height: "2px",
                                                                            backgroundColor: "#90caf9",
                                                                            borderRadius: "2px",
                                                                        }}
                                                                    />
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
                                    <td style={{ padding: "16px 20px 0 20px", verticalAlign: "top" }}>
                                        <table style={{ borderCollapse: "collapse" }}>
                                            <tbody>
                                                {contacts.map((item, i) => (
                                                    <tr key={i}>
                                                        <td style={{ paddingBottom: i < 3 ? "5px" : "0" }}>
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
                                                                                    border: "1.5px solid #1976d2",
                                                                                    backgroundColor: "#e3f2fd",
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

                                <tr>
                                    <td style={{ height: "100%" }}></td>
                                </tr>

                                {/* MIDDLE: blue swoosh wave strip across full width */}
                                <tr>
                                    <td style={{ padding: "0", height: "30px" }}>
                                        <table style={{ width: "100%", height: "30px", borderCollapse: "collapse" }}>
                                            <tbody>
                                                <tr>
                                                    {/* Left solid blue */}
                                                    <td
                                                        style={{
                                                            width: "55px",
                                                            height: "30px",
                                                            background: "linear-gradient(90deg,#0d47a1,#1565c0)",
                                                            padding: "0",
                                                        }}
                                                    />
                                                    {/* Rising wave cells */}
                                                    {[28, 24, 20, 16, 12, 8, 4, 2].map((h, i) => (
                                                        <td
                                                            key={i}
                                                            style={{
                                                                width: "14px",
                                                                height: `${h}px`,
                                                                background: "linear-gradient(90deg,#1565c0,#1976d2)",
                                                                verticalAlign: "bottom",
                                                                padding: "0",
                                                                borderRadius: i === 7 ? "0 8px 0 0" : "0",
                                                            }}
                                                        />
                                                    ))}
                                                    {/* gap */}
                                                    <td style={{ width: "30px", backgroundColor: "#ffffff", padding: "0" }} />
                                                    {/* Falling wave cells */}
                                                    {[2, 4, 8, 12, 16, 20, 24, 28].map((h, i) => (
                                                        <td
                                                            key={i}
                                                            style={{
                                                                width: "14px",
                                                                height: `${h}px`,
                                                                background: "linear-gradient(90deg,#1976d2,#1565c0)",
                                                                verticalAlign: "bottom",
                                                                padding: "0",
                                                                borderRadius: i === 0 ? "8px 0 0 0" : "0",
                                                            }}
                                                        />
                                                    ))}
                                                    {/* Right solid blue continues to edge */}
                                                    <td
                                                        style={{
                                                            background: "linear-gradient(90deg,#1565c0,#0d47a1)",
                                                            height: "30px",
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
                    </td>

                    {/* ── RIGHT PANEL: dark navy blue ── */}
                    <td
                        style={{
                            width: "42%",
                            height: "200px",
                            background: "linear-gradient(160deg, #0d47a1 0%, #01579b 50%, #0288d1 100%)",
                            padding: "0",
                        }}
                    >
                        <table style={{ width: "100%", height: "270px", borderCollapse: "collapse" }}>
                            <tbody>


                                {/* Logo circle + company name */}
                                <tr>
                                    <td style={{ padding: "0 24px 0 24px", textAlign: "center" }}>

                                        {/* Logo */}
                                        <table style={{ borderCollapse: "collapse", margin: "0 auto 10px auto" }}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table
                                                            style={{
                                                                width: "62px",
                                                                height: "62px",
                                                                borderCollapse: "collapse",
                                                                borderRadius: "50%",
                                                                border: "2px solid rgba(255,255,255,0.6)",
                                                                backgroundColor: "rgba(255,255,255,0.15)",
                                                                overflow: "hidden",
                                                            }}
                                                        >
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        style={{
                                                                            textAlign: "center",
                                                                            verticalAlign: "middle",
                                                                            fontSize: "28px",
                                                                            lineHeight: "1",
                                                                        }}
                                                                    >
                                                                        {imageSrc ? (
                                                                            <img
                                                                                src={imageSrc}
                                                                                width="62"
                                                                                height="62"
                                                                                style={{
                                                                                    objectFit: "cover", objectPosition: "center", display: "inline-block", width: "62px",
                                                                                    height: "62px",
                                                                                }}
                                                                            />
                                                                        ) : "💼"}
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
                                                fontSize: "11px",
                                                fontWeight: "600",
                                                color: "rgba(255,255,255,0.7)",
                                                letterSpacing: "1px",
                                                display: "block",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {slogan}
                                        </span>)}
                                        {organization && (<span
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "900",
                                                color: "#ffffff",
                                                letterSpacing: "1px",
                                                textTransform: "uppercase",
                                                display: "block",
                                                marginTop: "5px",
                                            }}
                                        >
                                            {organization}
                                        </span>)}

                                        {/* divider */}
                                        <table style={{ borderCollapse: "collapse", margin: "12px auto 0 auto", width: "60%" }}>
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