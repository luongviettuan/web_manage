import React, { Component } from 'react';
import { IconContext } from "react-icons";
import {FaServer, FaUserCog, FaInfoCircle, FaShippingFast } from "react-icons/fa";
import {IoIosTrendingUp} from "react-icons/io";
import {Link} from 'react-router-dom';
export default class MenuLeft extends Component {
    render() {
        const style = {
                marginBottom: '4px',
                marginRight: '5px'
            }
        return (
            <IconContext.Provider value={{style: style}}> 
                <aside className="main-sidebar">
                    <section className="sidebar" style={{ height: 'auto' }}>
                        <ul className="sidebar-menu">
                            <li className="active treeview">
                                <Link to='/'>
                                    <IoIosTrendingUp />
                                    <span> Thống Kê</span>
                                </Link>
                            </li>
                            <li className="treeview active">
                                <Link to='/'>
                                    <FaUserCog />
                                    <span> Quản Lý Web</span>
                                    <i className="fa fa-angle-left pull-right"></i>
                                </Link>
                                <ul className="treeview-menu" style={{ display: 'block' }}>
                                    <li>
                                        <Link to='/user'>
                                            <FaServer /> Quản Lý Khách Hàng
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/product">
                                            <FaServer /> Quản Lý Sản Phẩm
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/category">
                                            <FaServer /> Quản Lý Loại Sản Phẩm
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/brand">
                                            <FaServer /> Quản Lý Thương Hiệu
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/voucher">
                                            <FaServer /> Quản Lý Voucher
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/color">
                                            <FaServer /> Quản Lý Màu Sắc
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview active">
                                <Link to="/order">
                                    <FaShippingFast />
                                    <span> Trạng Thái Đơn Hàng</span>
                                </Link>
                            </li>
                            <li className="treeview active">
                                <Link to="/about">
                                    <FaInfoCircle />
                                    <span> Thông Tin</span>
                                </Link>
                            </li>
                        </ul>
                    </section>
                </aside>
            </IconContext.Provider>   
        )
    }
}