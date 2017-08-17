var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';


// require Main.js
import Main from "../components/Main";
import Category from "../components/Category";
import MemberDashboard from "../components/MemberDashboard";
import MemberProfile from "../components/MemberProfile";
import MemberView from "../components/MemberView";
import PersonalTrainerEdit from "../components/PersonalTrainerEdit";
import TrainerDashboard from "../components/TrainerDashboard";
import Navbar from "../components/Navbar";


module.exports = (
    <HashRouter >
        <div>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/category"  component={Category}/>
                    <Route path="/member-dashboard"  component={MemberDashboard}/>
                    <Route path="/member-profile"  component={MemberProfile}/>
                    <Route path="/member-view"  component={MemberView}/>
                    <Route path="/personal-trainer-edit"  component={PersonalTrainerEdit}/>
                    <Route path="/trainer-dashboard"  component={TrainerDashboard}/>
                </Switch>
        </div>
    </HashRouter>
);
