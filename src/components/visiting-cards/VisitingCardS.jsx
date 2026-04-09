import React from 'react'

function VisitingCardS({ name, email, job_title, phone_no, organization, website, slogan, logo, hasStarted }) {
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
        <table style={{
            width: "350px",
            height: "190px",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            borderRadius: "6px",
            overflow: "hidden",
            boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
            background: "#ffffff",
            display: "block",
            wordBreak: "normal",
            overflowWrap: "break-word"
        }}>
            <tbody>
                {/* Top Block: Name + job + logo */}
                <tr style={{ height: "75px" }}>
                    <td style={{ width: "200px", verticalAlign: "top", padding: "12px 10px 0 15px", background: "#ffffff" }}>
                        <table style={{ borderCollapse: "collapse" }}>
                            <tbody>
                                {name && (<tr>
                                    <td style={{ paddingBottom: "1px" }}>
                                        <span style={{ fontSize: "18px", fontWeight: "800", color: "#cc0000", fontFamily: "Georgia,serif", letterSpacing: "2px" }}>
                                            {name}
                                        </span>
                                    </td>
                                </tr>)}
                                {job_title && (<tr>
                                    <td style={{ paddingBottom: "1px" }}>
                                        <span style={{ fontSize: "10px", color: "#444444", fontFamily: "Georgia,serif", letterSpacing: "0.5px" }}>
                                            {job_title}
                                        </span>
                                    </td>
                                </tr>)}
                                {email && (<tr>
                                    <td>
                                        <span style={{ fontSize: "9px", color: "#777777", fontFamily: "Georgia,serif" }}>{email}</span>
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>
                    </td>
                    <td style={{ width: "150px", background: "#ffffff", textAlign: "center", verticalAlign: "middle" }}>
                        {imageSrc ? (
                            <img
                                src={imageSrc}
                                width="45"
                                height="45"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    display: "inline-block",
                                    width: "45px",
                                    height: "45px",
                                    borderRadius: "12px"
                                }}
                            />
                        ) : ""}
                    </td>
                </tr>

                {/* Red middle banner */}
                <tr>
                    <td colSpan={2} style={{ padding: "0" }}>
                        <table style={{ width: "350px", borderCollapse: "collapse", tableLayout: "fixed", padding: "3px" }}>
                            <tbody>
                                <tr><td style={{ height: "4px", background: "#ffffff" }}></td></tr>
                                <tr>
                                    <td style={{ height: "24px", background: "#cc0000", textAlign: "right", paddingRight: "8px", verticalAlign: "middle" }}>
                                        {organization && <span style={{ fontSize: "11px", fontWeight: "800", color: "#ffffff", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>{organization}</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ height: "16px", background: "#cc0000", textAlign: "right", paddingRight: "8px", verticalAlign: "middle", padding: "2px", lineHeight: "16px" }}>
                                        {slogan && <span style={{ fontSize: "9px", color: "#ffcccc", fontFamily: "Georgia,serif", padding: "5px" }}>{slogan}</span>}
                                    </td>
                                </tr>
                                <tr><td style={{ height: "2px", background: "#b30000" }}></td></tr>
                                <tr><td style={{ height: "2px", background: "#b30000" }}></td></tr>
                            </tbody>
                        </table>
                    </td>
                </tr>

                {/* Bottom Block: Contact Info */}
                <tr style={{ height: "70px" }}>
                    <td colSpan={2} style={{ verticalAlign: "top", padding: "3px 15px 0 15px", background: "#ffffff" }}>
                        <table style={{ borderCollapse: "collapse", width: "100%" }}>
                            <tbody>
                                {phone_no && (<tr>
                                    <td style={{ paddingBottom: "0.2px" }}>
                                        <span style={{ fontSize: "10px", color: "#cc0000", fontFamily: "Georgia,serif", fontWeight: "700" }}>Phone: </span>
                                        <span style={{ fontSize: "10px", color: "#555555", fontFamily: "Georgia,serif" }}>{phone_no}</span>
                                    </td>
                                </tr>)}
                                {website && (<tr>
                                    <td>
                                        <span style={{ fontSize: "10px", color: "#cc0000", fontFamily: "Georgia,serif", fontWeight: "700" }}>Website: </span>
                                        <span style={{ fontSize: "10px", color: "#555555", fontFamily: "Georgia,serif" }}>{website}</span>
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default VisitingCardS;
