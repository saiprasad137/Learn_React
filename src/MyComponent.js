import * as React from 'react'

export default class MyComponent extends React.PureComponent {

  // 1).Constructor is called first when Page is reloaded.
    constructor(props) {
      console.log('in constructor')
      super(props);
      this.state = { count: 0 , count_2 : 0};
    }

    handleClickEvent = () => {
      console.log('in first click event')
      this.setState((prevState) => ({
          count : prevState.count + 1
      }));
      // this.props.count2 = this.props.count2 + 2 
    }

    handleSecondEvent = () => {
      console.log(' in second click event')
      this.setState((prevState) => ({
        count_2 : prevState.count_2 
      }))
    }

    // 2).getDerivedStateFromPros is called after Constructor
    static getDerivedStateFromProps(props, state) {
      console.log('in getDerivedStateFromProps')
      return null; // Return new state based on props if needed
    }
  
    // 3). ComponentDidMount is called after 2.
    componentDidMount() {
      console.log('component Did Mount')
      // Perform network requests, subscriptions
    }
    // 5). If any component is clicked on the UI , then it is called which checks old props , state
    //  with new props , state and returns true if any change , which will re render the Component
    shouldComponentUpdate(nextProps, nextState) {
      // console.log('')
      if( !(JSON.stringify(nextProps) === JSON.stringify(this.props)) || !(JSON.stringify(nextState) === JSON.stringify(this.state))){
          console.log('Should Component Update')
         return true; // Return false to prevent rendering
      }
      return false;
    }
  
    // 6). This is called just before updating the DOM(rendering again)
    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log(' get Snapshot before Update')
      return 'sai'; // Capture information (e.g., scroll position) before updates
    }
    
    // 7). After re-render this is invoked
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log(' Component Did Update ' + snapshot)
      // Perform side-effects after update
    }
    
    // 4). Component Will Unmount is called after component is Mounted at 3).
    componentWillUnmount() {
      console.log(' Component Will Unmount')
      // Clean up
    }
  
    componentDidCatch(error, info) {
      console.log('component did catch')
      // Handle errors
    }
  
    render() {
      return (
      <div>
        <button onClick = {this.handleClickEvent} >
        {this.state.count}
        </button>
        <button onClick= {this.handleSecondEvent} >
          {this.state.count_2}
        </button>
      </div>
      )
    }
  }
  