var React = require("react");

import Navbar from "../components/Navbar";

export default class Main extends React.Component {
    constructor(){
        super()

        this.state={
            //code: 
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">Main Test</h1>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Main;