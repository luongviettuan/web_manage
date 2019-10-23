import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <a className="logo wraptext">
                    <b className="wraptext" style={{ fontSize: "15px" }}>QUEENOK</b>
                </a>
                <nav className="navbar navbar-static-top" role="navigation">
                    <div className="navbar-custom-menu right">
                        <ul className="nav navbar-nav user-nav">

                            <li className="dropdown user user-menu">
                                <a className="dropdown-toggle">
                                    <img src={require('../public/img/icon/user_icon.png')} className="user-image" alt="" />
                                    <span className="hidden-xs">Admin</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img src={require('../public/img/icon/user_icon.png')} className="img-circle" alt="User Image" />
                                        <p>Admin</p>
                                    </li>

                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a className="btn btn-default btn-flat" href="https://camera-cms.viettel.vn/user/update?id=12340&amp;site_id=722">Profile</a>
                                        </div>
                                        <div className="pull-right">
                                            <a className="btn btn-default btn-flat" href="https://camera-cms.viettel.vn/site/logout" data-method="post">Sign out</a> </div>
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