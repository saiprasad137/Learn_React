import './App.css';
import { PureComponent, useState , useEffect} from 'react';
import Button from './Button';
import MyComponent from './MyComponent';
import ToggleSwitch from './ToggleSwitch';

export default class App extends PureComponent {

  constructor(props){
    super(props)
    // this.state = {
    //   checked1 : false,
    //   checked2 : false,
    //   checked3 : false,
    // }
    this.state = {
      checked : false
    }
    this.checked1 = false
    this.checked2 = false
    this.checked3 = false
    this.previouslyChecked = 0
  }
 

  setParentState = (args) => {
    this.previouslyChecked = args
    console.log('args', args)
    console.log('this.state', this.state)
   
    if ( args === 1){
      // this.setState((prevState) => ({
      //   checked1 : !prevState.checked1
      // }))
      this.checked1 = !this.checked1
    } else if ( args === 2) {
      // this.setState({checked2 : !this.state.checked2})
      this.checked2 = !this.checked2
    } else if ( args === 3) {
      // this.setState({checked3 : !this.state.checked3})
      this.checked3 = !this.checked3
    }

    console.log('this.checked1', this.checked1)
    console.log('this.checked2', this.checked2)
    console.log('this.checked3', this.checked3)
    if(this.checked1 === true && this.checked2 === true && this.checked3 === true)  {
      console.log('all 3 are checked', this.previouslyChecked)
      this.setState((prevState) => ({
          checked : !prevState.checked
      }))
        return true
    } else {
      this.setState((prevState) => ({
        checked : false
    }))
    }
  //  this.setCorrectToggle()
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (nextState.checked1 === true && nextState.checked2 === true && nextState.checked3 === true) {
    console.log("next State", nextState)
    console.log("prev checked", this.previouslyChecked)
    if ( nextState.checked ){
      this.checked1 = false
      return true
    }
    
    return false;
  }

  componentDidMount() {
    console.log('in component did mount')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(' get Snapshot before Update')
    return 'sai'; // Capture information (e.g., scroll position) before updates
  }

  // const [count , setCount] = useState(0);

  // const handleOnClick = () => {
  //     setCount(count + 1)
  // }
  render() {
      // if ( this.state.checked1 === true && this.state.checked2 === true && this.state.checked3 === true) {
      // }
   
    return (
      <div className="App">
        <table style = {{}} width = "100%">
          {/* <tr>
            <td>
            <Button whichButton = {"first"}/>
            </td>  
            <td>
            <Button whichButton = {"second"}/>
            </td>  
            <td>
              <MyComponent />
            </td>
          </tr> */}
          <tr className='container'>
              {/* <ToggleSwitch changeState = {this.setParentState} defaultChecked = {this.state.checked1} checked = {this.state.checked1} label = {"Beautiful"} whichSwitch = {1}/> */}
              <ToggleSwitch changeState = {this.setParentState} defaultChecked = {this.state.checked} label = {"Beautiful"} whichSwitch = {1}/>
              {/* <ToggleSwitch changeState = {this.setParentState} defaultChecked = {this.state.checked2} checked = {this.state.checked2} label = {"Dowry"} whichSwitch = {2}/> */}
              <ToggleSwitch changeState = {this.setParentState} defaultChecked = {this.checked2} label = {"Dowry"} whichSwitch = {2}/>
              {/* <ToggleSwitch changeState = {this.setParentState} defaultChecked = {this.state.checked3} checked = {this.state.checked3} label = {"Seal Packed"} whichSwitch = {3}/> */}
              <ToggleSwitch changeState = {this.setParentState} defaultChecked = {this.checked3} label = {"Seal Packed"} whichSwitch = {3}/>
          </tr>
          <br />
        </table>
      </div>
    );
  }
}
