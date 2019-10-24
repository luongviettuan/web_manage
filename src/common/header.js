import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <Link to='/' className="logo wraptext">
                    <b className="wraptext" style={{ fontSize: "15px" }}>QUEENOK</b>
                </Link>
                <nav className="navbar navbar-static-top" role="navigation">
                    <div className="navbar-custom-menu right">
                        <ul className="nav navbar-nav user-nav">

                            <li className="dropdown user user-menu">
                                <Link to='/' className="dropdown-toggle">
                                    <img src={require('../public/img/icon/user_icon.png')} className="user-image" alt="" />
                                    <span className="hidden-xs">Admin</span>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img src={require('../public/img/icon/user_icon.png')} className="img-circle" alt="" />
                                        <p>Admin</p>
                                    </li>
                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <Link to='/' className="btn btn-default btn-flat">Profile</Link>
                                        </div>
                                        <div className="pull-right">
                                            <Link to='/' className="btn btn-default btn-flat">Sign out</Link>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        )
    }
}