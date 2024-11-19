import './App.css';
import { useState } from 'react';
import Button from './Button';
import MyComponent from './MyComponent';

function App() {

  // const [count , setCount] = useState(0);

  // const handleOnClick = () => {
  //     setCount(count + 1)
  // }
  return (
    <div className="App">
      <table style = {{}} width = "100%">
        <tr>
          <td>
          <Button whichButton = {"first"}/>
          </td>  
          <td>
          <Button whichButton = {"second"}/>
          </td>  
          <td>
            <MyComponent />
          </td>
        </tr>
        <br />
      </table>
    </div>
  );
}

export default App;
