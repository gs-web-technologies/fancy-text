import React from 'react'

function Secound({ name, email, job_title, phone_no, organization, logo }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar1.jpg";
    return (
        <div>
            <table
                cellPadding="0"
                cellSpacing="0"
                border="0"
                style={{
                    borderCollapse: "collapse",
                    border: "1px solid #e0ddd8",
                    borderLeft: "4px solid #8B7355",
                    background: "#ffffff",
                }}
            >
                <tbody>
                    <tr>
                        <td
                            style={{
                                padding: "20px 18px",
                                borderRight: "1px solid #e0ddd8",
                                background: "#f9f7f4",
                                textAlign: "center",
                            }}
                        >
                            <table>
                                <tbody>
                                    <tr>
                                        <td
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                border: "1px solid #8B7355",
                                                textAlign: "center",
                                                verticalAlign: "middle",
                                                color: "#8B7355",
                                                fontFamily: "Arial, sans-serif",
                                                fontSize: "9px",
                                                letterSpacing: "0.08em",
                                            }}
                                        >
                                            <img src={imageSrc} width="70" height="70" style={{ borderRadius: "50%" }} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td style={{ padding: "20px 24px" }}>
                            <p style={{ margin: 0, fontSize: "22px", fontWeight: "bold" }}>
                                {name ? name : 'YourName'}
                            </p>

                            <p
                                style={{
                                    margin: 0,
                                    fontSize: "10px",
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase",
                                    color: "#8B7355",
                                }}
                            >
                                {job_title ? job_title : 'Job Title'}
                            </p>

                            <p style={{ fontStyle: "italic", marginTop: "10px" }}>
                                {organization ? organization : 'Ogranization'}
                            </p>

                            <p style={{ fontSize: "12px" }}>
                                &#9990;   {phone_no ? phone_no : '+91 98765 43210'}  |{" "}
                                <a href="mailto:test@test.com">{email ? email : 'youremail@gmail.com'}</a>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Secound