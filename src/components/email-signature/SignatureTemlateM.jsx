import { POWERED_BY } from '@/utils/const';
import React from 'react'

function SignatureTemlateM({ name, email, job_title, phone_no, organization, logo, linkedin, instagram, twitter, facebook, hasStarted }) {
  const imageSrc = logo && logo.length != 0 ? logo : "/assets/images/avatar.png";

  if (!hasStarted) {
    name = "Your name";
    email = "youremail@example.com";
    job_title = "Job Title";
    phone_no = "+91-229229929";
    organization = "Organization";
    linkedin = "https://linkedin.com";
    instagram = "https://instagram.com";
    twitter = "https://twitter.com";
    facebook = "https://facebook.com"
  }

  const SocialLinks = [];

  if (twitter) {
    SocialLinks.push(
      {
        label: 'X',
        icon: (<img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="13" height="13" style={{ display: "block" }} />),
        href: twitter,
      }
    );
  }

  if (instagram) {
    SocialLinks.push(
      {
        label: 'instagram',
        icon: (<img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="13" height="13" style={{
          display: "block"
        }} />),
        href: instagram,
      }
    );
  }

  if (facebook) {
    SocialLinks.push(
      {
        label: 'facebook',
        icon: (<img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="13" height="13" style={{
          display: "block"
        }} />),
        href: facebook,
      }
    );
  }

  if (linkedin) {
    SocialLinks.push(
      {
        label: 'linkedIn',
        icon: (<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="13" height="13" style={{ display: "block" }} />),
        href: linkedin,
      }
    );
  }

  return (
    <table style={{ display: "flex", justifyContent: "center" }}>
      <tbody>
        <tr>
          <td>

            <table
              cellPadding="0"
              cellSpacing="0"
              style={{
                width: "600px",
                minWidth: "600px",
                borderRadius: "10px",
                overflow: "hidden",
                fontFamily: "'Segoe UI', Arial, sans-serif",
                boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
              }}
            >
              <tbody>

                {/* ══════════════════════════════════════════
              ROW 1 — Main content (3 cols)
          ══════════════════════════════════════════ */}
                <tr>

                  {/* COL 1 — Mint green photo panel */}
                  <td
                    style={{
                      width: "160px",
                      backgroundColor: "#a8e6c3",
                      verticalAlign: "bottom",
                      padding: "0",

                    }}
                  >

                    {/* Profile photo — bottom-aligned, no circle */}
                    <div style={{ textAlign: "center", paddingTop: "24px" }}>
                      <img
                        src={imageSrc}
                        alt="Julian Flores"
                        width="150"
                        height="160"
                        style={{
                          display: "block",
                          objectFit: "cover",
                          objectPosition: "top center",
                          width: "100%",
                          height: "160px",
                        }}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentNode.style.height = "160px";
                          e.target.parentNode.style.backgroundColor = "#85d4a8";
                        }}
                      />
                    </div>
                  </td>

                  {/* COL 2 — Name, title, address */}
                  <td
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "22px 20px 0px 24px",
                      verticalAlign: "top",
                      width: "210px",
                      borderRight: "1px solid #eeeeee",
                    }}
                  >
                    {/* First name */}
                    {name && (<div style={{
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "#1b3a2f",
                      lineHeight: "1.1",
                      letterSpacing: "-0.5px",
                    }}>
                      {name}
                    </div>)}

                    {/* Job title */}
                    {job_title && (<div style={{
                      fontSize: "10.5px",
                      color: "#4caf87",
                      fontWeight: "600",
                      letterSpacing: "1.8px",
                      textTransform: "uppercase",
                      marginBottom: "0",
                    }}>
                      {job_title}
                    </div>)}
                  </td>

                  {/* COL 3 — Contact details */}
                  <td
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "22px 22px 0px 22px",
                      verticalAlign: "top",
                    }}
                  >
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        {/* PHONE */}

                        {phone_no && (<tr>
                          <td style={{ paddingBottom: "12px" }}>
                            <div style={{ fontSize: "8.5px", color: "#aaaaaa", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "2px" }}>
                              PHONE
                            </div>
                            <div style={{ fontSize: "12.5px", color: "#1a1a1a", fontWeight: "500" }}>
                              {phone_no}
                            </div>
                          </td>
                        </tr>)}
                        {/* WEBSITE */}

                       {linkedin && ( <tr>
                          <td style={{ paddingBottom: "12px" }}>
                            <div style={{ fontSize: "8.5px", color: "#aaaaaa", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "2px" }}>
                              LinkedIn
                            </div>
                            <div style={{ fontSize: "12.5px", color: "#1a1a1a", fontWeight: "500" }}>
                              <a style={{ textDecoration: "none" }}>
                                {linkedin}
                              </a>
                            </div>
                          </td>
                        </tr>)}
                        {/* EMAIL */}
                       {email && ( <tr>
                          <td>
                            <div style={{ fontSize: "8.5px", color: "#aaaaaa", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "2px" }}>
                              EMAIL
                            </div>
                            <div style={{ fontSize: "12.5px", color: "#1a1a1a", fontWeight: "500" }}>
                              <a style={{ textDecoration: "none" }}>
                                {email}
                              </a>
                            </div>
                          </td>
                        </tr>)}
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* ══════════════════════════════════════════
              ROW 2 — Address bar (spans col 2+3)
          ══════════════════════════════════════════ */}
                <tr>
                  <td style={{ backgroundColor: "#a8e6c3" }} />
                  <td
                    colSpan={2}
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "10px 22px 10px 24px",
                      borderTop: "1px solid #eeeeee",
                      verticalAlign: "middle",
                      width: "70%"
                    }}
                  >
                    <table cellPadding="0" cellSpacing="0" width="100%">
                      <tbody>
                        <tr>
                         {organization && ( <td style={{ paddingRight: "10px", verticalAlign: "middle" }}>
                            <table>
                              <tbody>
                                <tr style={{ verticalAlign: "middle" }}>
                                  <td style={{
                                    width: "22px", height: "22px", borderRadius: "5px",
                                    backgroundColor: "#4caf87",
                                  }}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="13" height="13" style={{ display: "block", margin: "5px" }} />

                                  </td>
                                  <td>
                                    <span style={{ fontSize: "11.5px", color: "#555555", margin: "10px" }}>
                                      {organization}
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>)}
                          <td style={{ textAlign: "right" }}>
                            <div>
                              <span style={{ color: "black", fontSize: "10px" }}><i>Powered by <strong>{POWERED_BY}</strong></i></span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* ══════════════════════════════════════════
              ROW 3 — Dark footer bar
          ══════════════════════════════════════════ */}
                <tr>
                  {/* Footer left — dark green with logo */}
                  <td
                    style={{
                      backgroundColor: "#1b3a2f",
                      padding: "10px 16px",
                      verticalAlign: "middle",
                    }}
                  >
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: "8px", verticalAlign: "middle" }}>
                            {/* Logo icon — green rounded square */}

                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            <span style={{ fontSize: "13px", fontWeight: "600", color: "#ffffff", letterSpacing: "0.2px" }}>

                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  {/* Footer right — dark with social icons */}
                  <td
                    colSpan={2}
                    style={{
                      backgroundColor: "#222222",
                      padding: "10px 20px",
                      verticalAlign: "middle",
                      textAlign: "right",
                    }}
                  >
                    <table cellPadding="0" cellSpacing="0" style={{ marginLeft: "auto" }}>
                      <tbody>
                        <tr>
                          {SocialLinks.map((s, i) => (
                            <td key={i} style={{ paddingLeft: i > 0 ? "14px" : "0" }}>
                              <a href={s.href} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                                {s.icon}
                              </a>
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
  );
}

export default SignatureTemlateM