import React, { Component } from 'react';

export default class TrainerViewPage extends Component {
    constructor(props){
        super(props)

    }
    
    componentDidMount(){
        console.log(this.props.trainer);
    }

    render() {
        return (
            <div className="container border trainerView list-group-item-secondary cornerRound">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                    </div>
                </div>
                <dl className="row">
                    <dt className="col-sm-2">Full Name: </dt>
                    <dd className="col-sm-9">asdfasdf</dd>
              
                    <dt className="col-sm-2">Specialization: </dt>
                    <dd className="col-sm-9">{this.props.trainer.specialization}</dd>
              
                    <dt className="col-sm-2">Email: </dt>
                    <dd className="col-sm-9">{this.props.trainer.email}</dd>
                </dl>
                <dl className="row">
                    <div>
                        <dt className="col-sm-2">Description: </dt>
                    </div>
                </dl>
                <dl className="row">
                    <div>
                        <dd className="col-sm-12"> 
                        {this.props.trainer.description}
                        </dd>
                    </div>
                </dl>
            </div>

        )
    }
}
