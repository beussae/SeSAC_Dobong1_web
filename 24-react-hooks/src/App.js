import UseMemo from "./components/UseMemo";
import UseMemoObj from "./components/UseMemoObj";
import UseCallback from "./components/UseCallback";
import UseCallback2 from "./components/UseCallback2";
import UseReducer from "./components/UseReducer";
import useTitle from "./hooks/useTitle";
import CustomHook from "./components/CustomHook";
import UseForm from "./components/UseForm";
import PracticeForm from "./components/PracticeForm";
function App() {
  useTitle("React hook!");
  return (
    <>
      <h1>react hooks</h1>
      {/* <UseMemo /> */}
      {/* <UseMemoObj /> */}
      {/* <UseCallback /> */}
      {/* <UseCallback2 /> */}
      {/* <UseReducer /> */}
      {/* <CustomHook /> */}
      {/* <UseForm /> */}
      <PracticeForm />
    </>
  );
}

export default App;
