import './App.css';
import Message from "./Message";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h4>App component</h4>
          <p>First react app</p>
      </header>
        <Message message={"Some text....."}/>
    </div>
  );
}

export default App;
