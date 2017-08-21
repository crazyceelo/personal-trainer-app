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
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    <p>Email:</p><input  type="text"/>
                        
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Home;