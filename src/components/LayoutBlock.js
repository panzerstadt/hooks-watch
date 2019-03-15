import React from "react";

import styles from "./LayoutBlock.module.css";

const dummyPage = text => {
  const dummyPageStyle = {
    page: {
      height: "100vh",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },

    text: {
      display: "inline-block",
      borderRight: "1px solid rgba(0, 0, 0,.3)",
      margin: 0,
      marginRight: 20,
      padding: "10px 23px 10px 0",
      fontSize: "24px",
      fontWeight: 500,
      verticalAlign: "top"
    },
    dummyContent: {
      display: "inline-block",
      textAlign: "left",
      lineHeight: 2.5,
      height: 49,
      verticalAlign: "middle"
    }
  };
  return (
    <div style={dummyPageStyle.page}>
      <div>
        <h1 style={dummyPageStyle.text}>here is where a page should be</h1>
        <p style={dummyPageStyle.dummyContent}>{text}</p>
      </div>
    </div>
  );
};

export default function Layout({ children, centered, ...rest }) {
  return (
    <div className={centered ? styles.centered : styles.default} {...rest}>
      {children || dummyPage("there is no content.")}
    </div>
  );
}
