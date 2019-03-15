import React, { useState } from "react";

const Coolors = () => {
  // involves calling my API to scrape coolors/app

  let result;
  fetch("http")
    .then(v => {
      result = v;
    })
    .catch(e => {
      console.log("error");
      console.log(e);
    });

  return <p>{result}</p>;
};

export default Coolors;

export const ColorSchemes = [
  ["#44af69", "#f8333c", "#fcab10", "#2b9eb3", "#dbd5b5"],
  ["#4c6085", "#39a0ed", "#36f1cd", "#13c4a3", "#32322c"],
  ["#ffffff", "#ffe8d1", "#568ea3", "#68c3d4", "#826251"],
  ["#d33f49", "#d7c0d0", "#eff0d1", "#77ba99", "#262730"],
  ["#0b3954", "#bfd7ea", "#ff6663", "#e0ff4f", "#fefffe"],
  ["#6b2d5c", "#f0386b", "#ff5376", "#f8c0c8", "#e2c290"],
  ["#3f7cac", "#95afba", "#bdc4a7", "#d5e1a3", "#e2f89c"]
];
