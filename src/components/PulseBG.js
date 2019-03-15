import React, { useState, useEffect } from "react";

import styles from "./PulseBG.module.css";

const PulseBG = ({ children, style, color }) => {
  const shuffle = arr => {
    let currentIndex = arr.length;
    let tempVal, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempVal = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = tempVal;
    }

    return arr;
  };

  const [clrs, setClrs] = useState("white");
  useEffect(() => {
    if (color) {
      const c = shuffle(color);
      setClrs(c);
    }
  }, [color]);

  const [tick, setTick] = useState(""); //TODO: wave propogation

  return (
    <div
      className={styles.bg}
      style={{ ...style, backgroundColor: clrs[0] || "lightcyan" }}
    >
      {children}
    </div>
  );
};

// gib it default properties
PulseBG.defaultProps = {
  style: {
    height: "100"
  }
};

export default PulseBG;
