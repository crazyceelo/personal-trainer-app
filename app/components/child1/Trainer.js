var React = require("react");
import profilePic from "../../profilePic.jpg";

export default class Trainer extends React.Component {
    constructor(props){
        super(props)


        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.props.trainer.email);
        console.log(this.props.trainer.specialization);
        console.log(this.props.trainer.description);
    }

    render(){
        return (
            <span className="align-content-left">
                {this.props.trainers.map((trainer)=>{
                    return(
                        <a className="d-inline-block list-group-item-light border text-left align-top trainerInfo" key={trainer._id}  href="/#/home/trainers/details" onClick={()=>{this.props.selected(trainer)}}>
                            <div className="col-md-11" >
                                <img src={profilePic} alt="image here" />
                                <div className="d-flex flex-row">
                                    <span className="p-2">Trainer: </span><span className="p-2">{trainer.email} </span>
                                </div>
                                <div className="d-flex flex-row">
                                    <span className="p-2">Specialization: </span><span className="p-2">{trainer.specialization} </span>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </span>
        )
    }
}