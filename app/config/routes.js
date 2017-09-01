var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';
import "../style.css";


// require Main.js
import Home from "../components/Home";
import TrainerEditPage from "../components/TrainerEditPage";
import Navbar from "../components/Navbar";


module.exports = (
    <HashRouter >
        <div>
            <Navbar />
                <Switch>
                    <Route path="/" component={Home}/>
                    <Route path="/trainer-edit-page"  component={TrainerEditPage}/>
                </Switch>
        </div>
    </HashRouter>
);
