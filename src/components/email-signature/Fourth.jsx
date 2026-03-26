import React from 'react'

function Fourth({ name, email, job_title, phone_no, organization, logo }) {
    const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar.png";
    return (
        <div>
            <table
                style={{
                    borderCollapse: "collapse",
                    border: "1px solid #e0ddd8",
                    background: "#ffffff",
                    width: "600px"
                }}
            >
                <tbody>
                    <tr>
                        <td
                            style={{
                                width: "88px",
                                background: "#8B7355",
                                textAlign: "center",
                                padding: "24px 16px",
                                color: "#fff",
                            }}
                        >
                            <img src={imageSrc} width="70" height="70" style={{ borderRadius: "50%" }} />
                        </td>

                        <td style={{ padding: "20px 24px" }}>
                            <p style={{ fontSize: "22px", fontWeight: "bold", margin: 0 }}>
                                {name ? name : 'Your Name'}
                            </p>

                            <p style={{ fontSize: "10px", color: "#8B7355", margin: 0 }}>
                                {job_title ? job_title : 'Job title'}
                            </p>

                            <p style={{ fontSize: "12px", paddingBottom: "5px" }}>
                                {phone_no ? phone_no : '+91-3393-3339'} |{" "}
                                <a href="mailto:test@test.com">{email ? email : 'youremail@gmail.com'}</a>
                            </p>

                            <p style={{ fontStyle: "italic" }}>
                                {organization ? organization : 'Organization'}
                            </p>

                            <p style={{ fontSize: "12px" }}>
                                &#9990; {phone_no ? phone_no : '+91-49303-3333'}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Fourth