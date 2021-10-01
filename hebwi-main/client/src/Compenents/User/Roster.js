import React, { useState } from "react";
import { useSelector } from "react-redux";
import List from "./List";

const Roster = () => {
  const roster = useSelector((state) => state.players.players);
  const [top, settop] = useState("");
  const [jungle, setjungle] = useState("");
  const [mid, setmid] = useState("");
  const [adc, setadc] = useState("");
  const [support, setsupport] = useState("");
  return (
    <div>
      <button> Add TOPLANER</button>
      <button>Add JUNGLER</button>
      <button>Add MIDLANER</button>
      <button>Add ADC</button>
      <button>Add SUPPORT</button>
      <List />
    </div>
  );
};

export default Roster;
