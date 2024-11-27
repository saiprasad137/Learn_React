import { PureComponent  } from "react";
import './ToggleSwitch.scss';

export default class ToggleSwitch extends PureComponent {

    constructor(props) {
        super(props);
        this.checked  = false
        console.log('props', props)
    }


    handleClickEvent = () => {
        console.log('handle click event', this.checked)
        this.props.changeState(this.props.whichSwitch)
        console.log('props count', this.props)
        this.checked ? this.checked = false : this.checked = true
    }

    static getDerivedStateFromProps () {

    }
    shouldComponentUpdate(nextProps, nextState) {

    }
    

   

    render() {
        return (
            <div className="toggle-switch">
                <input type = "checkbox" onChange = {this.handleClickEvent} defaultChecked = {this.props.defaultChecked} className = "toggle-switch-checkbox" name = {this.props.label} id = {this.props.label}/>
                <label className="toggle-switch-label" htmlFor={this.props.label}>
                    <span className="toggle-switch-inner" data-yes={"Yes"} data-no={"No"}></span>
                    {/* <span className="toggle-switch-switch" /> */}
                    <span ></span>
                </label>
                <br />
            </div>
        )
    }
}