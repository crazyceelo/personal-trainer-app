var React = require("react");
import { HashRouter, Route, Switch } from 'react-router-dom';
import helper from "../components/utils/helpers";
import Navbar from "../components/Navbar";
import Trainer from "./child1/Trainer";
import TrainerViewPage from "./child1/child2/TrainerViewPage";
import TrainerEditPage from "../components/TrainerEditPage";

export default class Home extends React.Component {
    constructor(props){
        super(props)

        this.state={
            zip: '',
            results: [],
            selected: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleZipSubmit = this.handleZipSubmit.bind(this);
        this.updateSelected = this.updateSelected.bind(this);
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
      

    handleZipSubmit(event){
        event.preventDefault();
        if (this.state.zip){
            helper.getLocalTrainers(this.state.zip).then((data) => {
                this.setState({
                    results: data
                });
                location.href="#/home/trainers"
            })
        }
        else{
            console.log("no trainers in this area");
        }
    }

    updateSelected(trainer){
        this.setState({
            selected: trainer
        });
    }
    
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="caption">
                            <span className="display-1 title">Spot Me</span>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="pitch">
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
                    <div className="col-md-12 text-center instructions">
                        <p>
                            <strong>Search and book any personal trainer your area</strong>
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <form onSubmit={this.handleZipSubmit} className="form-inline">
                            <div className="form-group">
                                <label htmlFor="zipCodeSearch" className="zipLabel">Zip Code: </label>
                                <input type="text" name="zip" min="1" max="5" onChange={this.handleChange} id="zipCodeSearch" className="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                                <button type="submit" value="Submit" className="btn btn-primary" id="zipButton">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="row border text-center rounded" >
                    <Route path="/home/trainers" render={()=><Trainer trainers={this.state.results} selected={this.updateSelected} />} />
                </div>
                <Route path="/home/trainers/details" render={()=><TrainerViewPage trainer={this.state.selected}/>} />
                <br />
            </div>
        )
    }
}