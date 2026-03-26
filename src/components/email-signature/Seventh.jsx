import React from 'react'

function Seventh() {
    return (
        <div
            id="s2"
            style={{
                background: "#0f172a",
                fontFamily: "'Montserrat', Arial, sans-serif",
                maxWidth: "480px",
                border: "1px solid #1e293b",
            }}
        >
            <table cellPadding="0" cellSpacing="0" border="0" style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                    <tr>
                        <td
                            style={{
                                borderLeft: "3px solid #f59e0b",
                                padding: "18px 20px",
                            }}
                        >
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <tbody>
                                    <tr>
                                        {/* LEFT CONTENT */}
                                        <td>
                                            <div style={{ fontSize: "19px", fontWeight: "700", color: "#f8fafc" }}>
                                                Sarah Chen
                                            </div>

                                            <div
                                                style={{
                                                    fontSize: "10px",
                                                    color: "#f59e0b",
                                                    letterSpacing: "0.14em",
                                                    textTransform: "uppercase",
                                                    marginTop: "3px",
                                                }}
                                            >
                                                Creative Director
                                            </div>

                                            <div
                                                style={{
                                                    height: "1px",
                                                    background: "#1e293b",
                                                    margin: "10px 0",
                                                    width: "180px",
                                                }}
                                            />

                                            <div
                                                style={{
                                                    fontSize: "12px",
                                                    color: "#94a3b8",
                                                    fontStyle: "italic",
                                                }}
                                            >
                                                Studio Noir &amp; Co.
                                            </div>
                                        </td>

                                        {/* RIGHT CONTENT */}
                                        <td style={{ textAlign: "right" }}>
                                            <table style={{ borderCollapse: "collapse" }}>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ paddingBottom: "6px" }}>
                                                            <span style={{ fontSize: "12px", color: "#94a3b8" }}>
                                                                +1 415 987 6543
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style={{ paddingBottom: "6px" }}>
                                                            <span style={{ fontSize: "12px", color: "#f59e0b" }}>
                                                                sarah@studionoir.co
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    {/* Social Icons */}
                                                    <tr>
                                                        <td>
                                                            <table style={{ borderCollapse: "collapse" }}>
                                                                <tbody>
                                                                    <tr>
                                                                        {["be", "in", "ig"].map((icon, i) => (
                                                                            <td key={i} style={{ paddingLeft: "5px" }}>
                                                                                <div
                                                                                    style={{
                                                                                        width: "22px",
                                                                                        height: "22px",
                                                                                        border: "1px solid #334155",
                                                                                        borderRadius: "50%",
                                                                                        textAlign: "center",
                                                                                        lineHeight: "22px",
                                                                                        fontSize: "9px",
                                                                                        fontWeight: "700",
                                                                                        color: "#94a3b8",
                                                                                    }}
                                                                                >
                                                                                    {icon}
                                                                                </div>
                                                                            </td>
                                                                        ))}
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
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Seventh