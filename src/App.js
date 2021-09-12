import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet.js";
import Welcome from "./components/Welcome.js";
import Hello from "./components/Hello.js";
import Message from "./components/Message.js";
import Counter from "./components/Counter.js";
function App() {
  return (
    <div className="App">
      {/* <Message /> */}
      <Counter />

      <Greet name="Manali" surname="Neman" />
      {/* <Greet name="Anuj" surname="More">
        <p>This is children props</p>
      </Greet>
      <Greet name="Anish" surname="More">
        {" "}
        <button>Action</button>
      </Greet>


      <Welcome name="Anuj" surname="More" />
      <Welcome name="Anish" surname="More" />
      <Welcome name="Manali" surname="Neman" />
 */}

      {/* <Welcome />
      <Hello /> */}
    </div>
  );
}

export default App;
