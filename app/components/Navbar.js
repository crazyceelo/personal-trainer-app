import React, { Component } from 'react';

export default class Navbar extends Component {
    render(){
        return (
            <div>
                <nav className="navbar navbar-light bg-faded">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1">
                                <a className="navbar-brand" href="/">Home</a>
                            </div>
                            <div className="col-md-3 ">
                                <a className="nav-link text-center" href="#" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Sign up</a>
                            </div>
                            <div className="col-md-4">
                                <a className="nav-link text-center" href="#">Member Login</a>
                            </div>
                            <div className="col-md-4">
                                <a className="nav-link text-center" href="#">Trainer Login</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        ...
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
};
