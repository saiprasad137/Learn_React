import { useState } from "react"
import './ToggleSwitch.scss';


const ToggleSwitches = () => {
    const [switches , setSwitches] = useState([false,false,false])

   const handleToggle = (index) => {
        const newSwitches = [...switches]
        newSwitches[index] = !newSwitches[index]

        const count = newSwitches.filter((s) => { return s})

        console.log('count', count)
        console.log('index', index)
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * (2));
        } while (randomNumber === index);
        
        if (count.length > 2)
            newSwitches[randomNumber] = false;
        setSwitches(newSwitches)
        console.log('newSwitches', newSwitches)

   }

   const setLabel = (index) => {
        if ( index === 0)
            return "Beautiful"
        else if ( index === 1)
            return "Dowry"
        else if ( index === 2)
            return "Seal Packed"
   }

    return (
        <div style = {{ padding : '20px'}}>
            <h2>Features</h2>
            <div >
            {switches.map((state,index) => (
                <div key={index} style={{ margin: '10px 10px 10px 10px' }}>
                  <input
                    type="checkbox"
                    checked={state}
                    onChange={() => handleToggle(index)}
                  />
                <label>
                    {setLabel(index)}
                </label>
              </div>
            ))}
            </div>
        </div>
    )
}



export default ToggleSwitches