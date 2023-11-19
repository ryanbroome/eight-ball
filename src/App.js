import "./App.css";
import EightBall from "./EightBall";
import answers from "./Answers";

function App() {
  return (
    <div>
      <EightBall answers={answers} />
    </div>
  );
}

export default App;
