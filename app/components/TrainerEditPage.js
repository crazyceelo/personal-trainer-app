import React, { Component } from 'react';

export default class TrainerEditPage extends Component {
    constructor(props) {
        super()

        this.state = {
            // asdf: asdf
        }
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
                <form>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group row">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" id="staticEmail" placeholder="email@example.com" />
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
                            <button onClick={this.handleSave} type="submit" className="btn btn-primary" id="saveButon">Save</button>
                        </div>
                    </div>
                </form>
            </div>      
        )
    }
}
