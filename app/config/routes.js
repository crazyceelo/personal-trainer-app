var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';


// require Main.js
import Home from "../components/Home";
import TrainerViewPage from "../components/Child1/TrainerViewPage";
import TrainerEditPage from "../components/TrainerEditPage";
import Navbar from "../components/Navbar";


module.exports = (
    <HashRouter >
        <div>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/trainer-view-page"  component={TrainerViewPage}/>
                    <Route path="/trainer-edit-page"  component={TrainerEditPage}/>
                </Switch>
        </div>
    </HashRouter>
);
