import React, { Component } from 'react';
import helper from "../components/utils/helpers";

export default class TrainerEditPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            specialization: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            description: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleTrainerSubmit = this.handleTrainerSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleTrainerSubmit(event){
        event.preventDefault();
        console.log("handleTrainerSubmit is submitted");
        console.log("email: " + this.state.email);
        console.log("specialization: " + this.state.specialization);
        console.log("address1: " + this.state.address1);
        console.log("address2: " + this.state.address2);
        console.log("city: " + this.state.city);
        console.log("state: " + this.state.state);
        console.log("zip: " + this.state.zip);
        console.log("description: " + this.state.description);
        helper.postTrainer(
            this.state.email,
            this.state.specialization,
            this.state.address1,
            this.state.address2,
            this.state.city,
            this.state.state,
            this.state.zip,
            this.state.description 
        )
    }

    handleSave(){
        console.log("saved");
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                    </div>
                </div>
                <form onSubmit={this.handleTrainerSubmit}>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group row">
                                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-12">
                                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="email2" placeholder="email@example.com" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-md-12 col-form-label">Specialization</label>
                                <div className="col-md-12">
                                    <input type="text" className="form-control" id="specialization" placeholder="e.g. yoga" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="form-group row">
                                <label htmlFor="inputAddress" className="col-md-12 col-form-label">Address</label>
                                <div className="col-md-12">
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputAddress2" className="col-md-12 col-form-label">Address</label>
                                <div className="col-md-12">
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                            </div>
                            <div className="form-row row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputCity" className="col-form-label">City</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState" className="col-form-label">State</label>
                                    <input type="text" className="form-control" id="inputState" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip" className="col-form-label">Zip</label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label htmlFor="description" className="col-form-label">Description</label>
                                    <div>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" 
                                        placeholder="I am a Certified Personal Trainer through the American College of Sports Medicine (ACSM), a Certified Group Fitness Instructor through the American Council on Exercise (ACE), and serve as a Wellness Ambassador for the AU Recreational Sports and Fitness department. I specializes in positive body image, holistic wellness, and strength and endurance programming. In high school, I played lacrosse, and ran for the cross-country team. Along with teaching group exercise classes at AU, I run half-marathons and triathlons."></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button onClick={this.handleSave} type="submit" value="Submit" className="btn btn-primary" id="saveButon">Submit</button>
                        </div>
                    </div>
                </form>
            </div>      
        )
    }
}
