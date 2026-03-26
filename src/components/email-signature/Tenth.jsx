import React from 'react'

function Tenth({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar.png";
    return (
        <div>
            <div style={{ width: "600px", fontFamily: "'Georgia', serif", padding: "5px", display: "flex" }}>
                <table
                    cellPadding="0"
                    cellSpacing="0"
                    style={{
                        borderCollapse: "collapse",
                        backgroundColor: "#ffffff",
                        borderRadius: "10px",
                        overflow: "hidden",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                        maxWidth: "520px",
                        width: "100%",
                    }}
                >
                    {/* Main Info Row */}
                    <tbody>
                        <tr>
                            {/* Photo Cell */}
                            <td
                                style={{
                                    padding: "24px 16px 16px 24px",
                                    verticalAlign: "top",
                                    width: "110px",
                                }}
                            >
                                <img
                                    src={imageSrc}
                                    alt="Johnathan Pope"
                                    style={{
                                        width: "90px",
                                        height: "90px",
                                        borderRadius: "8px",
                                        objectFit: "cover",
                                        display: "block",
                                        border: "2px solid #e8eaf0",
                                    }}
                                />
                            </td>

                            {/* Divider */}
                            <td style={{ width: "3px", padding: "16px 0" }}>
                                <div
                                    style={{
                                        width: "3px",
                                        height: "100%",
                                        backgroundColor: "#1a3a6b",
                                        borderRadius: "2px",
                                        minHeight: "80px",
                                    }}
                                />
                            </td>

                            {/* Info Cell */}
                            <td style={{ padding: "20px 24px 16px 20px", verticalAlign: "top" }}>
                                {/* Name */}
                                <p
                                    style={{
                                        margin: "0 0 2px 0",
                                        fontSize: "20px",
                                        fontWeight: "800",
                                        color: "#1a3a6b",
                                        letterSpacing: "0.5px",
                                        fontFamily: "'Georgia', serif",
                                    }}
                                >
                                    {name ? name : 'Your name'}
                                </p>

                                {/* Title */}
                                <p
                                    style={{
                                        margin: "0 0 14px 0",
                                        fontSize: "11px",
                                        color: "#6b7280",
                                        fontWeight: "600",
                                        letterSpacing: "1.2px",
                                        textTransform: "uppercase",
                                        fontFamily: "'Arial', sans-serif",
                                    }}
                                >
                                   {job_title ? job_title : ''}
                                </p>

                                {/* Contact Table */}
                                <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                    <tbody>
                                        {[
                                            { label: "mobile:", value: phone_no || "+1 729 855 4555", href: "tel:+17298554555" },
                                            { label: "email:", value: email || "pope@mysignature.io", href: `mailto:${email}` },
                                            { label: "LinkedIn:", value: linkedin || "mysignature.io", href: {linkedin} },
                                            { label: "address:", value: organization || "10 California st, fl 6", href: null },
                                        ].map((row) => (
                                            <tr key={row.label}>
                                                <td
                                                    style={{
                                                        paddingRight: "8px",
                                                        paddingBottom: "3px",
                                                        fontSize: "11.5px",
                                                        fontWeight: "700",
                                                        color: "#1a3a6b",
                                                        fontFamily: "'Arial', sans-serif",
                                                        verticalAlign: "top",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    {row.label}
                                                </td>
                                                <td
                                                    style={{
                                                        paddingBottom: "3px",
                                                        fontSize: "11.5px",
                                                        color: "#374151",
                                                        fontFamily: "'Arial', sans-serif",
                                                        verticalAlign: "top",
                                                    }}
                                                >
                                                    {row.href ? (
                                                        <a
                                                            href={row.href}
                                                            style={{ color: "#374151", textDecoration: "none" }}
                                                        >
                                                            {row.value}
                                                        </a>
                                                    ) : (
                                                        row.value
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </td>
                        </tr>

                        {/* Social Icons Row */}
                        <tr>
                            <td colSpan="3" style={{ padding: "0 24px 10px 24px" }}>
                                <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                    <tbody>
                                        <tr>
                                            {/* LinkedIn */}
                                            <td style={{ paddingRight: "8px" }}>
                                                <a href={linkedin} style={{ textDecoration: "none" }}>
                                                    <div
                                                        style={{
                                                            width: "30px",
                                                            height: "30px",
                                                            backgroundColor: "#0077b5",
                                                            borderRadius: "50%",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                                                            <circle cx="4" cy="4" r="2" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </td>
                                            {/* Facebook */}
                                            <td style={{ paddingRight: "8px" }}>
                                                <a href={facebook} style={{ textDecoration: "none" }}>
                                                    <div
                                                        style={{
                                                            width: "30px",
                                                            height: "30px",
                                                            backgroundColor: "#1877f2",
                                                            borderRadius: "50%",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </td>
                                            {/* X / Twitter */}
                                            <td>
                                                <a href={twitter} style={{ textDecoration: "none" }}>
                                                    <div
                                                        style={{
                                                            width: "30px",
                                                            height: "30px",
                                                            backgroundColor: "#000000",
                                                            borderRadius: "50%",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>

                        {/* CTA Banner Row */}
                        <tr>
                            <td colSpan="3" style={{ padding: "0 0 0 0" }}>
                                <a
                                    href={facebook}
                                    style={{ textDecoration: "none" }}
                                >
                                    <div
                                        style={{
                                            background: "linear-gradient(90deg, #1a3a6b 0%, #1877f2 100%)",
                                            borderRadius: "0 0 10px 10px",
                                            padding: "11px 24px",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                        }}
                                    >
                                        {/* Camera + FB icon group */}
                                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                            <div
                                                style={{
                                                    width: "32px",
                                                    height: "32px",
                                                    backgroundColor: "rgba(255,255,255,0.15)",
                                                    borderRadius: "50%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                                    <circle cx="12" cy="13" r="4" />
                                                </svg>
                                            </div>
                                            <div
                                                style={{
                                                    width: "32px",
                                                    height: "32px",
                                                    backgroundColor: "#1877f2",
                                                    border: "2px solid white",
                                                    borderRadius: "50%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    marginLeft: "-10px",
                                                }}
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <span
                                            style={{
                                                color: "#ffffff",
                                                fontWeight: "700",
                                                fontSize: "13.5px",
                                                fontFamily: "'Arial', sans-serif",
                                                letterSpacing: "0.3px",
                                            }}
                                        >
                                            Join our Facebook group
                                        </span>
                                    </div>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tenth