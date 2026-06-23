import { useState } from "react";

function App() {

  let [cnt, setCounter] = useState(15)

  const addValue = () => {
    setCounter(cnt+1)
    console.log(cnt);
    
  }

  const removeValue = () => {
    setCounter(cnt-1)
    console.log(cnt);
    
  }

  return (
    <div>
      <h2>Click any button</h2>
      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
      <br />
      <h3>{cnt}</h3>
      <h3>{cnt}</h3>
      <h3>{cnt}</h3>
    </div>
  );
}

export default App;
