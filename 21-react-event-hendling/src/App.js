import "./App.css";
import SyntheticEvent from "./SyntheticEvent";
import Counter from "./Counter";
import HandlerEx from "./HandlerEx";
import ChngeColor from "./ChangeColor";
import ShowText from "./ShowText";
import Select from "./Select";

function App() {
  return (
    <div className="App">
      <h1>함성이벤트</h1>
      <SyntheticEvent />
      <Counter />
      <HandlerEx />
      <ChngeColor />
      <br />
      <ShowText />
      <Select />
    </div>
  );
}

export default App;
