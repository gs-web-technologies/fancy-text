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

    // Diagonal red banner rows: [whiteWidth] — white shrinks left, red fills right
    const diagRows = [60, 45, 30, 15, 0];

    return (
        <table style={{
            width: "520px", height: "270px",
            borderCollapse: "collapse", tableLayout: "fixed",
            borderRadius: "6px", overflow: "hidden",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
            background: "#ffffff", margin: "40px auto", display: "block",
            wordBreak: "normal",
            overflowWrap: "break-word"
        }}>
            <tbody>


                {/* Name + job + email block */}
                <tr style={{ height: "108px" }}>
                    <td style={{ width: "270px", verticalAlign: "top", padding: "18px 14px 0 22px", background: "#ffffff" }}>
                        <table style={{ borderCollapse: "collapse" }}><tbody>
                            {name && (<tr>
                                <td style={{ paddingBottom: "1px" }}>
                                    <span style={{ fontSize: "25px", fontWeight: "800", color: "#cc0000", fontFamily: "Georgia,serif", letterSpacing: "3.5px" }}>
                                        {name}
                                    </span>
                                </td>
                            </tr>)}
                            {job_title && (<tr>
                                <td style={{ paddingBottom: "1px" }}>
                                    <span style={{ fontSize: "13px", color: "#444444", fontFamily: "Georgia,serif", letterSpacing: "0.5px" }}>
                                        {job_title}
                                    </span>
                                </td>
                            </tr>)}
                            {email && (<tr>
                                <td>
                                    <span style={{ fontSize: "13px", color: "#777777", fontFamily: "Georgia,serif", letterSpacing: "0.3px" }}>{email}</span>
                                </td>
                            </tr>)}
                        </tbody></table>
                    </td>
                    <td style={{ width: "250px", background: "#ffffff", textAlign: "center" }}>
                        {imageSrc ? (
                            <img
                                src={imageSrc}
                                width="62"
                                height="62"
                                style={{
                                    objectFit: "cover", objectPosition: "center", display: "inline-block", width: "62px",
                                    height: "62px",
                                    borderRadius: "20px"
                                }}
                            />
                        ) : ""}
                    </td>
                    <td style={{ height: "100%" }}></td>
                </tr>

                {/* Red diagonal banner */}
                <tr style={{ height: "30px" }}>
                    <td colSpan={2} style={{ padding: "0", verticalAlign: "top" }}>
                        <table style={{ width: "520px", borderCollapse: "collapse", tableLayout: "fixed" }}><tbody>

                            {/* White gap */}
                            <tr><td colSpan={2} style={{ height: "6px", background: "#ffffff", padding: "0" }}></td></tr>

                            {/* Company Name row */}
                            <tr style={{ width: "520px" }}>
                                <td colSpan={2} style={{ height: "30px", background: "#cc0000", padding: "0 20px", verticalAlign: "middle" }}>
                                    <table style={{ borderCollapse: "collapse", width: "100%" }}><tbody><tr>
                                        <td style={{ width: "50%" }}></td>
                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                            {organization && <span style={{ fontSize: "16px", fontWeight: "800", color: "#ffffff", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>{organization}</span>}
                                        </td>
                                    </tr></tbody></table>
                                </td>
                            </tr>

                            {/* Company message row */}
                            <tr>
                                <td colSpan={2} style={{ height: "20px", background: "#cc0000", padding: "0 20px", verticalAlign: "top" }}>
                                    <table style={{ borderCollapse: "collapse", width: "100%" }}><tbody><tr>
                                        <td style={{ width: "50%" }}></td>
                                        <td style={{ textAlign: "center", verticalAlign: "top" }}>
                                            {slogan && <span style={{ fontSize: "13px", color: "#ffcccc", fontFamily: "Georgia,serif", letterSpacing: "0.5px" }}>{slogan}</span>}
                                        </td>
                                    </tr></tbody></table>
                                </td>
                            </tr>

                            <tr><td colSpan={2} style={{ height: "3px", background: "#b30000", padding: "0" }}></td></tr>

                        </tbody></table>
                    </td>
                </tr>

                {/* Bottom: address left, contact right */}
                <tr style={{ height: "108px" }}>

                    <td style={{ width: "250px", verticalAlign: "top", padding: "12px 22px 0 22px", background: "#ffffff", textAlign: "left" }}>
                        <table style={{ borderCollapse: "collapse", marginRight: "auto" }}>
                            <tbody>

                                {phone_no && (<tr>
                                    <td style={{ paddingBottom: "5px", textAlign: "left" }}>
                                        <span style={{ fontSize: "12px", color: "#cc0000", fontFamily: "Georgia,serif", fontWeight: "700" }}>Phone no: </span>
                                        <span style={{ fontSize: "12px", color: "#555555", fontFamily: "Georgia,serif" }}>{phone_no}
                                        </span>
                                    </td>
                                </tr>)}
                                {website && (<tr>
                                    <td style={{ textAlign: "left" }}>
                                        <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span style={{ fontSize: "12px", color: "#cc0000", fontFamily: "Georgia,serif", fontWeight: "700" }}>
                                                            Website: </span>
                                                        <span style={{ fontSize: "12px", color: "#555555", fontFamily: "Georgia,serif" }}>
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

                    {/* <td style={{ width: "250px", verticalAlign: "top", padding: "12px 22px 0 14px", background: "#ffffff", textAlign: "left" }}>
                        <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                            <tbody>

                                {email && (<tr>
                                    <td style={{ paddingBottom: "5px", textAlign: "left" }}>
                                        <span style={{ fontSize: "10px", color: "#555555", fontFamily: "Georgia,serif" }}>{email}
                                        </span>
                                    </td>
                                </tr>)}
                                {website && (<tr>
                                    <td style={{ textAlign: "left" }}>
                                        <table style={{ borderCollapse: "collapse", marginLeft: "auto" }}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span style={{ fontSize: "10px", color: "#cc0000", fontFamily: "Georgia,serif", fontWeight: "700" }}>
                                                            {website}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span style={{ fontSize: "10px", color: "#777777", fontFamily: "Georgia,serif" }}>
                                                            /
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span style={{ fontSize: "10px", color: "#cc0000", fontFamily: "Georgia,serif", fontWeight: "700" }}>
                                                            Other</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>
                    </td> */}
                </tr>

                {/* Spacer */}
                <tr><td colSpan={2} style={{ height: "100%" }}></td></tr>

            </tbody>
        </table>
    );
}

export default VisitingCardS;
