import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet.js";
import Welcome from "./components/Welcome.js";
import Hello from "./components/Hello.js";
import Message from "./components/Message.js";
import Counter from "./components/Counter.js";
import FunctionClick from "./components/FunctionClick.js";
import ClassClick from "./components/ClassClick.js";
import EventBind from "./components/EventBind.js";

import DataFetchingUseState from "./components/DataFetchingUseState.js";
import DataFetchingUseReducer from "./components/DataFetchingUseReducer.js";
function App() {
  return (
    <div className="App">


{/* <DataFetchingUseState/> */}
<DataFetchingUseReducer/>


{/* <EventBind/> */}

      {/* <Message /> */}

      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}

      {/* <Counter />

      <Greet name="Manali" surname="Neman" /> */}
      {/* <Greet name="Anuj" surname="More">
        <p>This is children props</p>
      </Greet>
      <Greet name="Anish" surname="More">
        {" "}
        <button>Action</button>
      </Greet>



 */}

      {/* <Welcome />
      <Hello /> */}
    </div>
  );
}

export default App;
