import { useReducer, useState } from "react";

const reducer = (prevState, action) => {
  // action:(state를 어떻게 바꿀지에 대한) 요구
  // dispatch: action을 담아 reducer로 전달을 해줌
  console.log("dispatch가 호출되면 reducer 동작");
  console.log(action);

  //   reducer 내부의 로직은 switch, if등의 조건문을 많이 씀
  switch (action.type) {
    case "deposit":
      return prevState + action.payload;
    case "withdraw":
      return prevState - action.payload;
  }
};
export default function UseReducer() {
  const [number, setNumber] = useState(0);
  //   const [스테이트, 디스패치] = useReducer(리듀서,스테이트의초기값);
  // reducer:실제로 스테이트를 바꿔준느 함수
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>useReducer사용</h1>
      <p>잔고:{money}원</p>
      <inputs
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        step={1000}
      />
      <button onClick={() => dispatch({ type: "deposit", payload: number })}>
        예금
      </button>
      <button onClick={() => dispatch({ type: "withdraw", payload: number })}>
        출금
      </button>
    </>
  );
}
