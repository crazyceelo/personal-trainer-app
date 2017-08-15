var React = require("react");
var router = require("react-router");
import { HashRouter as Router, Route } from 'react-router-dom';

export default class Main extends React.Component {
    constructor(){
        super()

        this.state={
            //code: "goeshere"
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