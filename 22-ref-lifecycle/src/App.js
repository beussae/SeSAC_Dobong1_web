import LifeCycleFunc from "./components/LifeCycleClass";
import { RefClass } from "./components/RefClass";
import { RefClass2 } from "./components/RefClass";
import { RefFunction1 } from "./components/RefFunction";
import { RefFunction2 } from "./components/RefFunction";
import LifeCycleClass from "./components/LifeCycleFunc";
import PracticeCycle from "./components/PracticeCycle";
import PostList from "./components/PostList";
import Container from "./components/Container";
function App() {
  return (
    <div className="App">
      {/* <h1>1</h1> */}
      {/* <RefClass />
      <RefClass2 />
      <RefFunction1 />
      <RefFunction2 /> */}
      {/* <h1>life cycle</h1> */}
      {/* <LifeCycleClass /> */}
      {/* <LifeCycleFunc /> */}
      {/* <PracticeCycle /> */}
      <Container>
        <PostList />
      </Container>
    </div>
  );
}

export default App;
