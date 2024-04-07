// import { ClassProps, ClassProps2 } from "./components/ClassProps";
// import ClassState from "./components/ClassState";
// import { FunctionProps, FunctionProps2 } from "./components/FunctionProps";
// import FunctionState from "./components/FunctionState";
import Alphabet from "./components/Alphabet";
import InputInfo from "./components/InputInfo";
import PracticeMap from "./components/PracticeMap";
import PracticeMap2 from "./components/PracticeMap2";
import PropsMap from "./components/PropsMap";
// import PororoObj from "./components/practice/PororoObj";
// import PracticeState from "./components/practice/PracticeState";

function App() {
  const dataArr = [
    { name: "peach", number: 5, price: 5000 },
    { name: "banana", number: 1, price: 3000 },
    { name: "apple", number: 10, price: 7000 },
    { name: "grape", number: 2, price: 8000 },
  ];
  return (
    <div className="App">
      <h1>map과 filter 사용</h1>
      {/* <PropsMap arr={dataArr} /> */}
      <Alphabet />
      <InputInfo />
      <PracticeMap />
      <PracticeMap2 />
      {/* <h1>hello, props</h1>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치" />
      <ClassProps2
        name="포비"
        color="beige"
        nickname="곰"
        // bgColor="black"
      />
      <FunctionProps name="사과" number={5} price={1000} />
      <FunctionProps2 price={50000} />
      <FunctionProps2 price={10000} name="딸기">
        <section style={{ backgroundColor: "yellow" }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2>

      <h1>hello, state</h1>
      <ClassState />
      <FunctionState />

      <h1>연습문제</h1>
      <PracticeState></PracticeState>
      <PororoObj /> */}
    </div>
  );
}

export default App;
