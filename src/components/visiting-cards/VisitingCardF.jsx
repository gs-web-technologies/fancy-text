import React from 'react'

function VisitingCardF() {
   return (
    <table style={{ width: "700px", height: "340px", background: "#ffffff", borderCollapse: "collapse", tableLayout: "fixed", borderRadius: "6px", overflow: "hidden", boxShadow: "0 6px 30px rgba(0,0,0,0.25)" }}>
      <tbody>
        <tr>

          {/* LEFT: Navy Panel */}
          <td style={{ width: "180px", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "180px", height: "340px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>
                <tr><td style={{ height: "55px", background: "#1a2244", padding: "0" }}></td></tr>
                <tr><td style={{ height: "5px", background: "#c8a84b", padding: "0" }}></td></tr>
                <tr><td style={{ height: "2px", background: "#e8d060", padding: "0" }}></td></tr>
                <tr><td style={{ height: "130px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "2px", background: "#e8d060", padding: "0" }}></td></tr>
                <tr><td style={{ height: "5px", background: "#c8a84b", padding: "0" }}></td></tr>
                <tr><td style={{ height: "100%", background: "#1a2244", padding: "0" }}></td></tr>
              </tbody>
            </table>
          </td>

          {/* MIDDLE: Diagonal Wedge */}
          <td style={{ width: "70px", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "70px", height: "340px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <tbody>
                <tr><td style={{ height: "12px", background: "#1a2244", padding: "0" }}></td></tr>
                <tr><td style={{ height: "12px", background: "#1c2448", padding: "0" }}></td></tr>
                <tr><td style={{ height: "12px", background: "#1e274e", padding: "0" }}></td></tr>
                <tr><td style={{ height: "6px", background: "#c8a84b", padding: "0" }}></td></tr>
                <tr><td style={{ height: "3px", background: "#e8d060", padding: "0" }}></td></tr>
                <tr><td style={{ height: "15px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "15px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "15px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "15px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "15px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "15px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "15px", background: "#ffffff", padding: "0" }}></td></tr>
                <tr><td style={{ height: "3px", background: "#e8d060", padding: "0" }}></td></tr>
                <tr><td style={{ height: "6px", background: "#c8a84b", padding: "0" }}></td></tr>
                <tr><td style={{ height: "12px", background: "#1e274e", padding: "0" }}></td></tr>
                <tr><td style={{ height: "12px", background: "#1c2448", padding: "0" }}></td></tr>
                <tr><td style={{ height: "12px", background: "#1a2244", padding: "0" }}></td></tr>
              </tbody>
            </table>
          </td>

          {/* RIGHT: White Content Panel */}
          <td style={{ width: "450px", background: "#ffffff", verticalAlign: "top", padding: "0" }}>
            <table style={{ width: "450px", height: "340px", borderCollapse: "collapse" }}>
              <tbody>
                <tr><td style={{ height: "7px", background: "#1a2244", padding: "0" }}></td></tr>
                <tr><td style={{ height: "3px", background: "#c8a84b", padding: "0" }}></td></tr>

                {/* Name + Title */}
                <tr>
                  <td style={{ padding: "20px 28px 0 22px", verticalAlign: "top" }}>
                    <table style={{ borderCollapse: "collapse" }}>
                      <tbody>
                        <tr><td style={{ paddingBottom: "3px" }}><span style={{ fontSize: "22px", fontWeight: "800", color: "#1a2244", fontFamily: "Georgia,serif", letterSpacing: "1px", textTransform: "uppercase" }}>YOUR NAME</span></td></tr>
                        <tr><td style={{ paddingBottom: "8px" }}><span style={{ fontSize: "11px", color: "#c8a84b", fontFamily: "Georgia,serif", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "600" }}>Graphic Designer</span></td></tr>
                        <tr>
                          <td style={{ paddingBottom: "16px" }}>
                            <table style={{ borderCollapse: "collapse" }}>
                              <tbody>
                                <tr><td style={{ width: "170px", height: "2px", background: "#c8a84b" }}></td></tr>
                                <tr><td style={{ height: "3px" }}></td></tr>
                                <tr><td style={{ width: "110px", height: "1px", background: "#e8d060" }}></td></tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Contact rows */}
                <tr>
                  <td style={{ padding: "0 28px 0 22px" }}>
                    <table style={{ borderCollapse: "collapse" }}>
                      <tbody>
                        {["+00 1234 5678 963", "+00 9876 5432 100", "email@yoursite.com", "www.yourwebsite.com", "123 Street, City, Country"].map((item, i) => (
                          <tr key={i}><td style={{ paddingBottom: i < 4 ? "9px" : "0" }}>
                            <table style={{ borderCollapse: "collapse" }}><tbody><tr>
                              <td style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c8a84b", verticalAlign: "middle" }}></td>
                              <td style={{ width: "10px" }}></td>
                              <td><span style={{ fontSize: "11px", color: "#333333", fontFamily: "Georgia,serif" }}>{item}</span></td>
                            </tr></tbody></table>
                          </td></tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr><td style={{ height: "100%" }}></td></tr>
                <tr><td style={{ height: "3px", background: "#c8a84b", padding: "0" }}></td></tr>
                <tr><td style={{ height: "7px", background: "#1a2244", padding: "0" }}></td></tr>
              </tbody>
            </table>
          </td>

        </tr>
      </tbody>
    </table>
  );
}

export default VisitingCardF