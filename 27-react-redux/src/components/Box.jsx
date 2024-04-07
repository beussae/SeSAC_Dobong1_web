// App>Box1 >Box2

import { useDispatch, useSelector } from "react-redux";
import { countMinus, countPlus } from "../store/module/counterReducer";
import { useState } from "react";
import { withdraw } from "../store/module/bankReducer";
export function Box1() {
  return (
    <div style={{ border: "2px dashed pink", padding: "10px" }}>
      <h3>Box1</h3>
      <Box2 />
      <Box3 />
    </div>
  );
}
export function Box2() {
  //   const state = useSelector((state) => state);
  //   console.log(state);

  const isData = useSelector((state) => state.isData);
  const counter = useSelector((state) => state.counter);
  //   console.log(isData);
  //   console.log(counter);
  const dispatch = useDispatch();
  return (
    <div style={{ border: "1.5px solid pink", padding: "10px" }}>
      <h3>Box2</h3>
      <p>count:{counter}</p>
      <p>isData:{isData.toString()}</p>
      <button onClick={() => dispatch({ type: "counter/INCREMENT" })}>
        count+1
      </button>
      <button onClick={() => dispatch({ type: "counter/DECREMENT" })}>
        count-1
      </button>
      <button onClick={() => dispatch({ type: "isData/CHANGE" })}>
        to {(!isData).toString}
      </button>

      <br />

      <button onClick={() => dispatch(countPlus())}>count+1</button>
      <button onClick={() => dispatch(countMinus())}>count-1</button>
    </div>
  );
}

export function Box3() {
  const [money, setMoney] = useState(0);
  const balance = useSelector((state) => state.bank); //Number
  const dispatch = useDispatch();
  return (
    <div>
      <h1>코딩온 은행</h1>
      <p>잔액:{money}원</p>
      <input
        type="number"
        value={money}
        onChange={(e) => setMoney(Number(e.target.value))}
      />
      <button onClick={() => dispatch(deposite(money))}>deposite입금</button>
      <button onClick={() => dispatch(withdraw(money))}>withdraw출금</button>
    </div>
  );
}
