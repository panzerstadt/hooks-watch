import React, { useState } from "react";

// components
import Layout from "./components/LayoutBlock";
import Watch from "./components/Watch";
import BG from "./components/PulseBG";

const Index = () => {
  const [bgClr, setBgClr] = useState();

  return (
    <Layout centered>
      <BG color={bgClr}>
        <Watch onColorChange={setBgClr} />
      </BG>
    </Layout>
  );
};

export default Index;
