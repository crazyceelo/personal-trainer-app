var React = require("react");
import { HashRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';


// require Main.js
var Main = require("../components/Main");
var Category = require("../components/Category");

module.exports = (
    <Router>
        <Route path="/" component={Main}/>
        {/* <Route path="category" component={Category}/> */}
    </Router>
);
