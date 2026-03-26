import React from 'react';

function First({ name, email, job_title, phone_no, organization, logo }) {
     const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar.png";
    return (
        <div>
            <table cellPadding="0" cellSpacing="0" border="0" style={{ fontFamily: "Arial, sans-serif" }}>
                <tbody>
                    <tr>
                        <td style={{ paddingRight: "10px" }}>
                            <img src={imageSrc} width="70" height="70" style={{ borderRadius: "50%" }} />
                        </td>
                        <td>
                            <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold", color: "#333" }}>
                                {name ? name : 'YourName'}
                            </p>
                            <p style={{ margin: "0", fontSize: "13px", color: "#777" }}>
                                {job_title ? job_title : 'Job Title'}
                            </p>

                            <p style={{ margin: "5px 0 0", fontSize: "13px" }}>
                                {email ? email : 'Email'}
                            </p>
                            <p style={{ margin: "0", fontSize: "13px" }}>
                                {phone_no ? phone_no : 'Phone No'}
                            </p>

                            <p style={{ margin: "0", fontSize: "13px" }}>
                                {organization ? organization : 'Ogranization'}
                            </p>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default First