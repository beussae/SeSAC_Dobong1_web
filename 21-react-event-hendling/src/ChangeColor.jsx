import { useState } from "react";

export default function ChngeColor() {
  const [color, setColor] = useState("black");
  const [word, setWord] = useState("검정색");
  const changeColor = (Color) => {
    setColor(Color);
    setWord(` ${Color === "red" ? "빨간색" : "파란색"} `);
  };
  return (
    <div>
      <div style={{ color: color }}>{word}</div>
      <button onClick={() => changeColor("red")}>빨간색</button>
      <button onClick={() => changeColor("blue")}>파란색</button>
    </div>
  );
}
