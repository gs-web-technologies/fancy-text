import React from 'react'

function First({name,email,job_title,phone_no,organization}) {
    return (
        <div>
            <table cellpadding="0" cellspacing="0" border="0" style={{fontFamily: "Arial, sans-serif"}}>
                <tr>
                    <td style={{paddingRight: "10px"}}>
                        <img src="https://via.placeholder.com/80" width="70" height="70" style={{borderRadius: "50%"}} />
                    </td>

                    <td>
                        <p style={{margin:"0", fontSize:"16px", fontWeight:"bold", color:"#333"}}>
                           { name ?  name : 'YourName'}
                        </p>
                        <p style={{margin:"0", fontSize:"13px", color:"#777"}}>
                           {job_title ? job_title : 'Job Title'}
                        </p>

                        <p style={{margin:"5px 0 0", fontSize:"13px"}}>
                            {email ? email : 'Email'}
                        </p>
                        <p style={{margin:"0", fontSize:"13px"}}>
                            {phone_no ? phone_no : 'Phone No'}
                        </p>

                         <p style={{margin:"0", fontSize:"13px"}}>
                            {organization ? organization : 'Ogranization'}
                        </p>

                        <p style={{ margin:"5px 0 0"}}>
                            <a href="#" style={{ color:"#0a66c2", textDecoration:"none"}}>LinkedIn</a> |
                            <a href="#" style={{ color:"#1da1f2", textDecoration:"none"}}>Twitter</a>
                        </p>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default First