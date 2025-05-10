import { useState } from "react";
import { Button, Card } from "./components";
import { add, subtract } from "./math/math";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <Card title="Math Operations">
        <Button onClick={() => setResult(add(3, 4))}>Add 3 + 4</Button>
        <Button onClick={() => setResult(subtract(10, 5))}>
          Subtract 10 - 5
        </Button>
        {result !== null && <p>Result: {result}</p>}
      </Card>
    </div>
  );
}

export default App;
