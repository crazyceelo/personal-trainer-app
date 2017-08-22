import React, { Component } from 'react';

export default class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-light bg-faded">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                            <a className="navbar-brand" href="/">Home</a>
                        </div>
                        <div className="col-md-3 ">
                            <a className="nav-link text-center" href="#">Sign up</a>
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
        )
    }
};
