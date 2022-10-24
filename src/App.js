import UseEffectHook from "./hooks/main/UseEffectHook";
import UseStateHook from "./hooks/main/UseStateHook";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <UseStateHook />
      <UseEffectHook />
    </div>
  );
}

export default App;
