import React, { Component } from 'react';
import helper from "../components/utils/helpers";
import TrainerEditPage from "../components/TrainerEditPage";
import { HashRouter, Route, Switch } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleMemberSubmit = this.handleMemberSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleMemberClick(){
    // console.log("handleMemberClick is clicked");
  }

  handleMemberSubmit(event){
    event.preventDefault();
    console.log("handleMemberSubmit is submitted");
    console.log("email is " + this.state.email);
    console.log("password is " + this.state.password);
    helper.postMember(this.state.email, this.state.password);
  }

  renderTrainers(){
    
  }

    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a className="navbar-brand" href="#/home" >Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="#" data-toggle="modal" data-target="#signUpMemberModal">Sign up as member <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/#/trainer-edit-page">Sign up as trainer <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#" data-toggle="modal" data-target="#memberModal">Member Login</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#" data-toggle="modal" data-target="#trainerModal">Trainer Login</a>
                        </li>
                    </ul>
                    </div>
                </nav>
                  <div className="modal fade" id="signUpMemberModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="exampleModalLabel">Sign up as Member</h4>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-md-12">
                              <form onSubmit={this.handleMemberSubmit}>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email"  value={this.state.email} onChange={this.handleChange} className="form-control" id="email" placeholder="abc@abc.com" />
                                <br />
                                <label htmlFor="memberPassword">Password</label>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="memberPassword" placeholder="Password" />
                                <br />
                                <br />
                                <button onClick={this.handleMemberClick} type="submit" value="Submit" className="btn btn-primary" >Confirm</button>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal fade" id="signUpTrainerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="exampleModalLabel">Sign up as Trainer</h4>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-md-12">
                              <form>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" value={this.state.email} className="form-control" id="email2" placeholder="abc@abc.com" />
                                <br />
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" name="password" value={this.state.password} className="form-control" id="password2" placeholder="Password" />
                                <br />
                                <br />
                                <button type="button" className="btn btn-primary" >Continue to sign up</button>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal fade" id="memberModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Login in as member</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <hr />
                          <label htmlFor="exampleInputEmail1">Full Name</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Jon Doe" />
                          <br />
                          <label htmlFor="trainerPassword">Password</label>
                          <input type="password" className="form-control" id="trainerPassword" placeholder="Password" />
                          <br />
                          <br />
                          <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        <div className="modal-footer">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal fade" id="trainerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Login in as trainer</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <hr />
                          <label htmlFor="exampleInputEmail1">Full Name</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Jon Doe" />
                          <br />
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                          <br />
                          <br />
                          <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        <div className="modal-footer">
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        )
    }
};
