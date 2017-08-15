var React = require("react");
var router = require("react-router");
import { HashRouter as Router, Route } from 'react-router-dom';


// require Main.js
var Main = require("../components/Main");

module.exports = (
    <Router>
        <div>
            <Route path="/" component={Main}/>
        </div>
    </Router>
)
