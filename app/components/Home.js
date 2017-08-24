var React = require("react");

import Navbar from "../components/Navbar";

export default class Home extends React.Component {
    constructor(){
        super()

        this.state={
            //code: 
        }
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-1">Spot Me</h1>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            asdfa sdf as fasdf asdfasdfasdfa sdfasdf asdfasd fasdf as
                            asdfa sdf as fasdf asdfasdfasdfa sdfasdf asdfasd fasdf as
                            asdfa sdf as fasdf asdfasdfasdfa sdfasdf asdfasd fasdf as
                            asdfa sdf as fasdf asdfasdfasdfa sdfasdf asdfasd fasdf as
                            asdfa sdf as fasdf asdfasdfasdfa sdfasdf asdfasd fasdf as
                            asdfa sdf as fasdf asdfasdfasdfa sdfasdf asdfasd fasdf as
                            asdfa sdf as fasdf asdfasdfasdfa sdfasdf asdfasd fasdf as
                            asdfa sdf as fasdf asdfasdfasdfa sdfasdf asdfasd fasdf as
                            asdfa sdf as fasdf asdfasdfasdfa sdfasdf asdfasd fasdf as
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            <strong>Search and book any personal trainer your area</strong>
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <form className="form-inline">
                            <div className="form-group">
                                <label htmlFor="zipCodeSearch">Zip Code: </label>
                                <input type="text" id="zipCodeSearch" className="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                            </div>
                        </form>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="row border text-center">
                    <div className="col-md-3">
                        <div>
                            <span>Trainer: </span> <span>Jon Doe</span>
                        </div>
                        <div>
                            <span>Specialization: </span> <span>Yoga</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <span>Trainer: </span> <span>Jon Doe</span>
                        </div>
                        <div>
                            <span>Specialization: </span> <span>Yoga</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <span>Trainer: </span> <span>Jon Doe</span>
                        </div>
                        <div>
                            <span>Specialization: </span> <span>Yoga</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <span>Trainer: </span> <span>Jon Doe</span>
                        </div>
                        <div>
                            <span>Specialization: </span> <span>Yoga</span>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row border text-center">
                    <div className="col-md-3">
                        <div>
                            <span>Trainer: </span> <span>Jon Doe</span>
                        </div>
                        <div>
                            <span>Specialization: </span> <span>Yoga</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <span>Trainer: </span> <span>Jon Doe</span>
                        </div>
                        <div>
                            <span>Specialization: </span> <span>Yoga</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <span>Trainer: </span> <span>Jon Doe</span>
                        </div>
                        <div>
                            <span>Specialization: </span> <span>Yoga</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <span>Trainer: </span> <span>Jon Doe</span>
                        </div>
                        <div>
                            <span>Specialization: </span> <span>Yoga</span>
                        </div>
                    <div className="col-md-2">
                    <p>Email:</p><input  type="text" />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}