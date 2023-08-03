import React from "react";
import Text from "../../SharedComponents/Texts/Text";
import "./dashboardlayout.css";

function PageLayout({ pageTitle = "", children }) {
  return (
    <section id="page-container" className="page-container">
      <div className="page-header">
        <Text text={pageTitle} variant="h2" />
      </div>
      <div className="page-body">{children}</div>
    </section>
  );
}

export default PageLayout;
