import React from 'react'

function Third({ name, email, job_title, phone_no, organization, logo }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar1.jpg";
    return (
        <div>
            <table
                style={{
                    borderCollapse: "collapse",
                    border: "1px solid #e0ddd8",
                    background: "#f3eded",
                    width: "480px",
                }}
            >
                <tbody>
                    <tr>
                        <td style={{ padding: "16px 20px", borderBottom: "1px solid #e0ddd8" }}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{ paddingRight: "14px" }}>
                                            <div
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                    border: "1px solid #8B7355",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "8px",
                                                }}
                                            >
                                                <img src={imageSrc} width="70" height="70" style={{ borderRadius: "50%" }} />
                                            </div>
                                        </td>

                                        <td>
                                            <p style={{ margin: 0, fontWeight: "bold" }}>
                                                {name ? name : 'YourName'}
                                            </p>
                                            <p style={{ margin: 0, fontSize: "10px", color: "#8B7355" }}>
                                                {job_title ? job_title : 'Job Title'}
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style={{ padding: "10px 20px", background: "#f9f7f4" }}>
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td style={{ fontStyle: "italic" }}>
                                            {organization ? organization : 'Ogranization'}
                                        </td>
                                        <td style={{ textAlign: "right" }}>
                                            &#9990; +91 98765 43210
                                            &#9990;   {phone_no ? phone_no : '+91 98765 43210'}  |{" "}
                                            <a href="mailto:test@test.com">{email ? email : 'youremail@gmail.com'}</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Third