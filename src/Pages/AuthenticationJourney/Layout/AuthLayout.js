import React from "react";
import "./AuthLayout.css";

function AuthLayout({ children }) {
  return (
    <section
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage:
          "url('https://img.freepik.com/free-vector/banquet-hall-ballroom-castle-ready-wedding-ceremony-cartoon-vector-interior-decorated-flower_33099-1198.jpg?w=1800&t=st=1691031850~exp=1691032450~hmac=5120e7f903bf9286bc92dfcc3ec58ef594b3d6bdfd60a9efa63a0f3053923cb9')",
      }}
      className="auth_layout_container"
    >
      {children}
    </section>
  );
}

export default AuthLayout;
