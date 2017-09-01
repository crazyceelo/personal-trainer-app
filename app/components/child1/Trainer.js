var React = require("react");
import TrainerViewPage from "./child2/TrainerViewPage";

export default class Trainer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.props.trainer.email);
        console.log(this.props.trainer.specialization);
        console.log(this.props.trainer.description);
    }

    render(){
        return (
            <a href="/#/" onClick={this.handleClick}>
                <div className="col-md-3" >
                    <div>
                        <span >Trainer: </span><span>{this.props.trainer.email} </span>
                    </div>
                    <div>
                        <span>Specialization: </span><span>{this.props.trainer.specialization} </span>
                    </div>
                </div>
            </a>
        )
    }
}