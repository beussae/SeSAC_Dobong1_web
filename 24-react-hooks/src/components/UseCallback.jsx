import { useCallback, useEffect, useState } from "react";

export default function UseCallback() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  const fucn1 = () => {
    console.log(`number: $${number}❤`);
  };
  const fucn2 = useCallback(() => {
    console.log(`number: $${number}🖤`);
  }, []);
  useEffect(() => {
    console.log("함수1 변경 ❤");
  }, [fucn1]);
  useEffect(() => {
    console.log("함수2 변경 🖤");
  }, [fucn2]);
  return (
    <>
      <h1>useCallback 사용</h1>
      <div>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <button>call function</button>
        <button>{isTrue.toString()}</button>
      </div>
    </>
  );
}
