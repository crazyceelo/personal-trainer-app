var React = require("react");

export default class Trainer extends React.Component {

    render(){
        return (
            <a href="/#/trainer-view-page" >
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





{/* <a href="/#/trainer-view-page" key={trainer._id}>
    <div className="col-md-3" >
        <div>
            <span >Trainer: </span><span>{trainer.email} </span>
        </div>
        <div>
            <span>Specialization: </span><span>{trainer.specialization} </span>
        </div>
    </div>

</a> */}