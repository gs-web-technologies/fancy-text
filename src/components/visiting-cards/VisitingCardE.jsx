import React from 'react'

function VisitingCardE() {
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

                    {/* ── LEFT PANEL: white with green blobs top-left & bottom-left ── */}
                    <td
                        style={{
                            width: "55%",
                            backgroundColor: "#ffffff",
                            verticalAlign: "top",
                            padding: "0",
                        }}
                    >
                        <table style={{ width: "100%", height: "340px", borderCollapse: "collapse" }}>
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
                                                            width: "110px",
                                                            height: "110px",
                                                            backgroundColor: "#388e3c",
                                                            borderRadius: "0 0 90px 0",
                                                            verticalAlign: "top",
                                                            padding: "0",
                                                        }}
                                                    />
                                                    {/* Name block sits to the right of the blob */}
                                                    <td style={{ verticalAlign: "middle", padding: "24px 16px 0 20px" }}>
                                                        <span
                                                            style={{
                                                                fontSize: "20px",
                                                                fontWeight: "900",
                                                                color: "#1a1a1a",
                                                                letterSpacing: "1px",
                                                                display: "block",
                                                                textTransform: "uppercase",
                                                            }}
                                                        >
                                                            YOUR NAME
                                                        </span>
                                                        <span
                                                            style={{
                                                                fontSize: "11px",
                                                                color: "#558b2f",
                                                                fontWeight: "500",
                                                                letterSpacing: "0.5px",
                                                                display: "block",
                                                                marginTop: "4px",
                                                            }}
                                                        >
                                                            Job Position
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                {/* ROW 2: contact info */}
                                <tr>
                                    <td style={{ padding: "18px 20px 0 20px", verticalAlign: "top" }}>
                                        <table style={{ borderCollapse: "collapse" }}>
                                            <tbody>

                                                {[
                                                    { icon: "📞", text: "+00 123 456 789" },
                                                    { icon: "✉️", text: "email address goes here" },
                                                    { icon: "🌐", text: "website goes here" },
                                                    { icon: "📍", text: "address goes here, your city" },
                                                ].map((item, i) => (
                                                    <tr key={i}>
                                                        <td style={{ paddingBottom: i < 3 ? "12px" : "0" }}>
                                                            <table style={{ borderCollapse: "collapse" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ verticalAlign: "middle" }}>
                                                                            <table
                                                                                style={{
                                                                                    width: "28px",
                                                                                    height: "28px",
                                                                                    borderCollapse: "collapse",
                                                                                    borderRadius: "50%",
                                                                                    border: "1.5px solid #66bb6a",
                                                                                    backgroundColor: "#f1f8e9",
                                                                                    overflow: "hidden",
                                                                                }}
                                                                            >
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td
                                                                                            style={{
                                                                                                textAlign: "center",
                                                                                                verticalAlign: "middle",
                                                                                                fontSize: "13px",
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

                                {/* ROW 3: bottom-left green blob */}
                                <tr>
                                    <td style={{ padding: "0", verticalAlign: "bottom", height: "80px" }}>
                                        <table style={{ width: "100%", height: "80px", borderCollapse: "collapse" }}>
                                            <tbody>
                                                <tr>
                                                    {/* green blob bottom-left */}
                                                    <td
                                                        style={{
                                                            width: "110px",
                                                            height: "80px",
                                                            backgroundColor: "#388e3c",
                                                            borderRadius: "0 60px 0 0",
                                                            verticalAlign: "bottom",
                                                            padding: "0",
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

                    {/* ── RIGHT PANEL: dark green with logo + company + QR ── */}
                    <td
                        style={{
                            width: "45%",
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
                                                                        🌿
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
                                                fontSize: "12px",
                                                fontWeight: "600",
                                                color: "rgba(255,255,255,0.75)",
                                                letterSpacing: "1.5px",
                                                display: "block",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            YOUR LOGO
                                        </span>
                                        <span
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
                                            COMPANY NAME
                                        </span>

                                        {/* Divider */}
                                        <table style={{ borderCollapse: "collapse", margin: "14px auto 0 auto", width: "70%" }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.25)" }} />
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                {/* QR Code */}
                                <tr>
                                    <td style={{ padding: "18px 28px 0 28px", verticalAlign: "top", textAlign: "center" }}>
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
                                                                    backgroundColor: cell ? "#1b5e20" : "#ffffff",
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