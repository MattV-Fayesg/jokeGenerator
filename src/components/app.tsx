import Joke from "./Joke";
import "./app.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Joke Generator: Using React and Joke API</h1>
      </div>
      <div className="Content">
        <Joke />
      </div>
    </div>
  );
}

export default App;
