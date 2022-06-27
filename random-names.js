//import logo from './logo.svg';
import "./App.css";

function App() {
  const handleNameChange = () => {
    const names = ["Payam", "Pouya", "Ali", "Reza"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };

  return (
    <div className="App">
      <p>Hello {handleNameChange()}</p>
    </div>
  );
}

export default App;
