import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor() {
    super()

    this.handleMemberSave = this.handleMemberSave.bind(this);
  }

  handleMemberClick(){
    console.log("handleMemberClick is clicked");
  }

  handleMemberSave(){
    console.log("handleMemberSave is saved");
  }
    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/" >Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <a className="nav-link" href="#" data-toggle="modal" data-target="#signUpModal">Sign up <span className="sr-only">(current)</span></a>
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
                  <div className="modal fade" id="signUpModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Sign up</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-md-6">
                              <h4>Sign up as Member</h4>
                              <form onSubmit={this.handleMemberSave}>
                                <hr />
                                <label htmlFor="exampleInputEmail1">Full Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Jon Doe" />
                                <br />
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                <br />
                                <br />
                                <button onClick={this.handleMemberClick} type="submit" className="btn btn-primary" >Save changes</button>
                              </form>
                            </div>
                            <div className="col-md-6">
                              <h4>Sign up as Trainer</h4>
                              <hr />
                              <label htmlFor="exampleInputEmail1">Full Name</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Jon Doe" />
                              <br />
                              <label htmlFor="exampleInputPassword1">Password</label>
                              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                              <br />
                              <br />
                              <button type="button" className="btn btn-primary" >Continue to sign up</button>
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
