import React from 'react'

function SignatureTemlateJ() {
    return (
        <table
            cellPadding="0"
            cellSpacing="0"
            style={{
                width: "620px",
                backgroundColor: "#2b2b2b",
                fontFamily: "Arial, sans-serif",
                borderCollapse: "collapse",
            }}
        >
            <tbody>
                {/* TOP SECTION */}
                <tr>
                    {/* LEFT: Yellow accent bar */}
                    <td style={{ width: "8px", backgroundColor: "#f5a623" }} />

                    {/* CENTER: Photo + Name/Position */}
                    <td style={{ padding: "18px 16px", verticalAlign: "middle", width: "260px" }}>
                        <table cellPadding="0" cellSpacing="0">
                            <tbody>
                                <tr>
                                    {/* Circular photo placeholder */}
                                    <td style={{ paddingRight: "14px", verticalAlign: "middle" }}>
                                        <div
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                borderRadius: "50%",
                                                backgroundColor: "#555",
                                                border: "3px solid #f5a623",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                overflow: "hidden",
                                            }}
                                        >
                                            {/* Replace src with actual photo */}
                                            <img
                                                src="https://via.placeholder.com/80"
                                                alt="Profile"
                                                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                                            />
                                        </div>
                                    </td>

                                    {/* Name + Position */}
                                    <td style={{ verticalAlign: "middle" }}>
                                        <p
                                            style={{
                                                margin: "0 0 4px 0",
                                                fontSize: "20px",
                                                fontWeight: "bold",
                                                color: "#ffffff",
                                                letterSpacing: "1px",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            YOUR NAME
                                        </p>
                                        <p
                                            style={{
                                                margin: "0 0 10px 0",
                                                fontSize: "12px",
                                                color: "#f5a623",
                                                letterSpacing: "0.5px",
                                            }}
                                        >
                                            Your Position
                                        </p>

                                        {/* Social icons row */}
                                        <table cellPadding="0" cellSpacing="0">
                                            <tbody>
                                                <tr>
                                                    {["f", "in", "t", "be"].map((icon, i) => (
                                                        <td key={i} style={{ paddingRight: "6px" }}>
                                                            <div
                                                                style={{
                                                                    width: "22px",
                                                                    height: "22px",
                                                                    backgroundColor: "#f5a623",
                                                                    borderRadius: "50%",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    fontSize: "10px",
                                                                    color: "#2b2b2b",
                                                                    fontWeight: "bold",
                                                                    textAlign: "center",
                                                                    lineHeight: "22px",
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

                    {/* DIVIDER */}
                    <td style={{ width: "1px", backgroundColor: "#444" }} />

                    {/* RIGHT: Contact info */}
                    <td style={{ padding: "18px 20px", verticalAlign: "middle" }}>
                        <table cellPadding="0" cellSpacing="0">
                            <tbody>
                                <tr>
                                    <td style={{ paddingBottom: "6px" }}>
                                        <table cellPadding="0" cellSpacing="0">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            fontSize: "11px",
                                                            color: "#f5a623",
                                                            fontWeight: "bold",
                                                            paddingRight: "8px",
                                                            whiteSpace: "nowrap",
                                                        }}
                                                    >
                                                        Phone:
                                                    </td>
                                                    <td style={{ fontSize: "11px", color: "#cccccc" }}>
                                                        123-456-7890
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingBottom: "6px" }}>
                                        <table cellPadding="0" cellSpacing="0">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            fontSize: "11px",
                                                            color: "#f5a623",
                                                            fontWeight: "bold",
                                                            paddingRight: "8px",
                                                            whiteSpace: "nowrap",
                                                        }}
                                                    >
                                                        Email:
                                                    </td>
                                                    <td style={{ fontSize: "11px", color: "#cccccc" }}>
                                                        your mail Here
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingBottom: "6px" }}>
                                        <table cellPadding="0" cellSpacing="0">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            fontSize: "11px",
                                                            color: "#f5a623",
                                                            fontWeight: "bold",
                                                            paddingRight: "8px",
                                                            whiteSpace: "nowrap",
                                                        }}
                                                    >
                                                        Address:
                                                    </td>
                                                    <td style={{ fontSize: "11px", color: "#cccccc" }}>
                                                        123 your address
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table cellPadding="0" cellSpacing="0">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            fontSize: "11px",
                                                            color: "#f5a623",
                                                            fontWeight: "bold",
                                                            paddingRight: "8px",
                                                        }}
                                                    />
                                                    <td style={{ fontSize: "11px", color: "#cccccc" }}>
                                                        State, City, 1234
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>

                    {/* LOGO area */}
                    <td
                        style={{
                            padding: "18px 20px",
                            verticalAlign: "top",
                            textAlign: "right",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <p
                            style={{
                                margin: "0",
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "#ffffff",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            LOGO HERE
                        </p>
                        <p
                            style={{
                                margin: "2px 0 0 0",
                                fontSize: "9px",
                                color: "#888888",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                            }}
                        >
                            TAGLINE HERE
                        </p>
                    </td>
                </tr>

                {/* BOTTOM SECTION: disclaimer + social icons */}
                <tr>
                    <td style={{ backgroundColor: "#222", width: "8px" }} />
                    <td
                        colSpan={3}
                        style={{
                            backgroundColor: "#222",
                            padding: "10px 16px",
                            verticalAlign: "middle",
                        }}
                    >
                        <p
                            style={{
                                margin: "0",
                                fontSize: "9px",
                                color: "#777777",
                                lineHeight: "1.5",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                    </td>
                    <td
                        style={{
                            backgroundColor: "#222",
                            padding: "10px 16px",
                            verticalAlign: "middle",
                            textAlign: "right",
                        }}
                    >
                        <table cellPadding="0" cellSpacing="0" style={{ marginLeft: "auto" }}>
                            <tbody>
                                <tr>
                                    {["f", "in", "t", "be"].map((icon, i) => (
                                        <td key={i} style={{ paddingLeft: "5px" }}>
                                            <div
                                                style={{
                                                    width: "24px",
                                                    height: "24px",
                                                    backgroundColor: "#f5a623",
                                                    borderRadius: "50%",
                                                    fontSize: "10px",
                                                    color: "#2b2b2b",
                                                    fontWeight: "bold",
                                                    textAlign: "center",
                                                    lineHeight: "24px",
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
    );
}

export default SignatureTemlateJ