import React from 'react'

function VisitingCardG() {
    return (
        <table
            style={{
                width: "620px",
                height: "340px",
                borderCollapse: "collapse",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                fontFamily: "'Segoe UI', sans-serif",
                margin: "40px auto",
                display: "block",
                backgroundColor: "#ffffff",
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
                        <table style={{ width: "100%", height: "340px", borderCollapse: "collapse" }}>
                            <tbody>

                                {/* TOP ROW: blue blob top-left + name top-right */}
                                <tr>
                                    <td style={{ padding: "0", verticalAlign: "top", height: "120px" }}>
                                        <table style={{ width: "100%", height: "120px", borderCollapse: "collapse" }}>
                                            <tbody>
                                                <tr>

                                                    {/* Large blue rounded blob top-left */}
                                                    <td
                                                        style={{
                                                            width: "130px",
                                                            height: "120px",
                                                            background: "linear-gradient(135deg, #0d47a1, #1976d2, #42a5f5)",
                                                            borderRadius: "0 0 100px 0",
                                                            verticalAlign: "top",
                                                            padding: "0",
                                                        }}
                                                    />

                                                    {/* Name + position top-right */}
                                                    <td style={{ verticalAlign: "middle", padding: "20px 16px 0 20px" }}>
                                                        <span
                                                            style={{
                                                                fontSize: "20px",
                                                                fontWeight: "900",
                                                                color: "#0d1b2a",
                                                                letterSpacing: "1px",
                                                                display: "block",
                                                                textTransform: "uppercase",
                                                            }}
                                                        >
                                                            YOUR NAME
                                                        </span>
                                                        <span
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
                                                            Marketing Consultant
                                                        </span>
                                                        {/* blue underline accent */}
                                                        <table style={{ borderCollapse: "collapse", marginTop: "8px" }}>
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
                                                        </table>
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
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

                                {/* CONTACT INFO */}
                                <tr>
                                    <td style={{ padding: "16px 20px 0 20px", verticalAlign: "top" }}>
                                        <table style={{ borderCollapse: "collapse" }}>
                                            <tbody>
                                                {[
                                                    { icon: "📞", text: "+00 123 456 789" },
                                                    { icon: "✉️", text: "email address goes here" },
                                                    { icon: "🌐", text: "website goes here" },
                                                    { icon: "📍", text: "address goes here, your city" },
                                                ].map((item, i) => (
                                                    <tr key={i}>
                                                        <td style={{ paddingBottom: i < 3 ? "11px" : "0" }}>
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

                                {/* BOTTOM: blue blob bottom-left */}
                                <tr>
                                    <td style={{ padding: "0", height: "60px", verticalAlign: "bottom" }}>
                                        <table style={{ width: "100%", height: "60px", borderCollapse: "collapse" }}>
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            width: "110px",
                                                            height: "60px",
                                                            background: "linear-gradient(135deg,#1976d2,#0d47a1)",
                                                            borderRadius: "0 50px 0 0",
                                                            padding: "0",
                                                            verticalAlign: "bottom",
                                                        }}
                                                    />
                                                    <td style={{ backgroundColor: "#ffffff" }} />
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
                            background: "linear-gradient(160deg, #0d47a1 0%, #01579b 50%, #0288d1 100%)",
                            verticalAlign: "top",
                            padding: "0",
                        }}
                    >
                        <table style={{ width: "100%", height: "340px", borderCollapse: "collapse" }}>
                            <tbody>

                                {/* White curved blob top-right */}
                                <tr>
                                    <td style={{ padding: "0", height: "100px", verticalAlign: "top" }}>
                                        <table style={{ width: "100%", height: "100px", borderCollapse: "collapse" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ backgroundColor: "transparent" }} />
                                                    <td
                                                        style={{
                                                            width: "120px",
                                                            height: "100px",
                                                            backgroundColor: "#ffffff",
                                                            borderRadius: "0 0 0 90px",
                                                            padding: "0",
                                                            verticalAlign: "top",
                                                        }}
                                                    />
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                {/* Logo circle + company name */}
                                <tr>
                                    <td style={{ padding: "0 24px 0 24px", verticalAlign: "top", textAlign: "center" }}>

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
                                                                        💼
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <span
                                            style={{
                                                fontSize: "11px",
                                                fontWeight: "600",
                                                color: "rgba(255,255,255,0.7)",
                                                letterSpacing: "2px",
                                                display: "block",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            YOUR LOGO
                                        </span>
                                        <span
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
                                            COMPANY NAME
                                        </span>

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

                                {/* QR Code */}
                                <tr>
                                    <td style={{ padding: "16px 24px 0 24px", verticalAlign: "top", textAlign: "center" }}>
                                        <table
                                            style={{
                                                borderCollapse: "collapse",
                                                border: "3px solid rgba(255,255,255,0.8)",
                                                borderRadius: "8px",
                                                overflow: "hidden",
                                                backgroundColor: "#ffffff",
                                                padding: "5px",
                                                margin: "0 auto",
                                            }}
                                        >
                                            <tbody>
                                                {[
                                                    [1, 1, 1, 0, 1, 0, 1, 1, 1],
                                                    [1, 0, 1, 0, 0, 0, 1, 0, 1],
                                                    [1, 0, 1, 0, 1, 0, 1, 0, 1],
                                                    [1, 1, 1, 1, 0, 1, 1, 1, 1],
                                                    [0, 1, 0, 1, 1, 1, 0, 0, 0],
                                                    [1, 1, 1, 1, 0, 1, 1, 1, 1],
                                                    [1, 0, 1, 0, 1, 0, 1, 0, 1],
                                                    [1, 0, 1, 0, 0, 0, 1, 0, 1],
                                                    [1, 1, 1, 0, 1, 0, 1, 1, 1],
                                                ].map((row, ri) => (
                                                    <tr key={ri}>
                                                        {row.map((cell, ci) => (
                                                            <td
                                                                key={ci}
                                                                style={{
                                                                    width: "9px",
                                                                    height: "9px",
                                                                    backgroundColor: cell ? "#0d47a1" : "#ffffff",
                                                                    padding: "0",
                                                                }}
                                                            />
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                {/* White blob bottom-right */}
                                <tr>
                                    <td style={{ padding: "0", height: "60px", verticalAlign: "bottom" }}>
                                        <table style={{ width: "100%", height: "60px", borderCollapse: "collapse" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ backgroundColor: "transparent" }} />
                                                    <td
                                                        style={{
                                                            width: "100px",
                                                            height: "60px",
                                                            backgroundColor: "#ffffff",
                                                            borderRadius: "60px 0 0 0",
                                                            padding: "0",
                                                            verticalAlign: "bottom",
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

                </tr>
            </tbody>
        </table>
    );
}

export default VisitingCardG