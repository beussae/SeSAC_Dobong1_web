import { useState } from "react";

export default function Practice1() {
  const [number, setNumber] = useState(0);
  const increase = () => setNumber(number + 1);
  const decrease = () => setNumber(number - 1);
  const emo1 = "🖤";
  const emo2 = "💛";

  return (
    <div>
      <h1>
        {number}
        {number > 7 ? emo2 : emo1}
      </h1>
      <button onClick={increase}>1증가</button>
      <button onClick={decrease}>1감소</button>
    </div>
  );
}
