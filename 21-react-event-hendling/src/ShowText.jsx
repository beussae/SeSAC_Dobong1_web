import { useState } from "react";

export default function ShowText() {
  const [text, setText] = useState(true);

  return (
    <div>
      <button onClick={() => setText(!text)}>
        {text ? "!!!뿅!!!!" : "뿅."}
      </button>
      <h1>{text ? "!!!번쩍!" : ""}</h1>
    </div>
  );
}
