var React = require("react");

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

            <div>
                {this.props.trainers.map((trainer)=>{
                    return(
                        <div className="row border text-center" key={trainer._id}>
                            <a  href="/#/home/trainers/details" onClick={()=>{this.props.selected(trainer)}}>
                                <div className="col-md-3" >
                                    <div>
                                        <span >Trainer: </span><span>{trainer.email} </span>
                                    </div>
                                    <div>
                                        <span>Specialization: </span><span>{trainer.specialization} </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        )
    }
}