import './App.css';
import { useState } from 'react';
import Button from './Button';
function App() {

  const [count , setCount] = useState(0);

  const handleOnClick = () => {
      setCount(count + 1)
  }
  return (
    <div className="App">
      <Button whichButton = {"first"}/>
      <br />
      <Button whichButton = {"second"}/>
    </div>
  );
}

export default App;
