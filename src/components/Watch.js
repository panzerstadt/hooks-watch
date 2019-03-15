// ref: https://codeburst.io/reacts-render-props-technique-in-3-minutes-462862bf462e

import React, { useState, useEffect } from "react";
import moment from "moment";

import { ColorSchemes } from "./Coolors";

const Strap = ({ children, clr }) => {
  const strapWidth = 45;
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: strapWidth,

    overflow: "visible",
    backgroundColor: clr || "lightgrey"
  };

  return <div style={style}>{children}</div>;
};

const Bezel = ({ children, clr }) => {
  const style = {
    padding: 8,
    borderRadius: 10,
    backgroundColor: clr || "salmon"
  };
  return <div style={style}>{children}</div>;
};

const Screen = ({ children, clr }) => {
  const style = {
    padding: 1,
    backgroundColor: clr || "whitesmoke"
  };
  return <div style={style}>{children}</div>;
};

const Face = ({ children, clr }) => {
  const style = {
    backgroundColor: clr || "black",
    padding: 10
  };
  return <div style={style}>{children}</div>;
};

const Value = ({ children, clr }) => {
  const style = {
    fontSize: 20,
    color: clr || "white"
  };
  return <div style={style}>{children}</div>;
};

const Watch = ({ colorScheme, time }) => {
  // random assignment of 5 colors
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

  const [clrs, setClrs] = useState(colorScheme);
  useEffect(() => {
    const c = shuffle(colorScheme);
    setClrs(c);
  }, [time]);

  return (
    <Strap clr={clrs[0]}>
      <Bezel clr={clrs[1]}>
        <Screen clr={clrs[2]}>
          <Face clr={clrs[3]}>
            <Value clr={clrs[4]}>{time.format("HH")}</Value>
            <Value clr={clrs[4]}>{time.format("mm")}</Value>
          </Face>
        </Screen>
      </Bezel>
    </Strap>
  );
};

const WatchEngine = ({ onColorChange }) => {
  const [time, setTime] = useState(moment());
  const [colorScheme, setColorScheme] = useState(ColorSchemes[0]);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(moment());
      // this doesn't rely on anything outside the function,
      // no deps needed on useEffect
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const randomColor = listOfColors => {
      const ind = Math.random() * listOfColors.length;
      const newColors = listOfColors[parseInt(ind, 10)];

      // send color set up to parent
      if (onColorChange) onColorChange(newColors);
      setColorScheme(newColors);
    };

    // if date changes, change color set
    randomColor(ColorSchemes);
  }, [time]);

  return <Watch colorScheme={colorScheme} time={time} />;
};

export default WatchEngine;
