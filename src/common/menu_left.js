import React, { Component } from 'react';
import { IconContext } from "react-icons";
import {FaServer, FaUserCog, FaInfoCircle } from "react-icons/fa";
import {IoIosTrendingUp} from "react-icons/io";
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
                                <a href="https://camera-cms.viettel.vn/sitessub?site_id=722">
                                    <IoIosTrendingUp />
                                    <span> Thống Kê</span>
                                </a>
                            </li>
                            <li className="treeview active">
                                <a href="https://camera-cms.viettel.vn/servers?site_id=722#">
                                    <FaUserCog />
                                    <span> Quản Lý Web</span>
                                    <i className="fa fa-angle-left pull-right"></i>
                                </a>
                                <ul className="treeview-menu" style={{ display: 'block' }}>
                                    <li>
                                        <a href="https://camera-cms.viettel.vn/user?site_id=722&amp;type=1">
                                        <FaServer /> Quản Lý Khách Hàng
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://camera-cms.viettel.vn/user?site_id=722&amp;type=2">
                                            <FaServer /> Quản Lý Sản Phẩm
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://camera-cms.viettel.vn/sites/update?id=722&amp;site_id=722">
                                            <FaServer /> Quản Lý Loại Sản Phẩm
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://camera-cms.viettel.vn/batchgoods?site_id=722">
                                            <FaServer /> Quản Lý Thương Hiệu
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://camera-cms.viettel.vn/cameraconfig?site_id=722">
                                            <FaServer /> Quản Lý Voucher
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://camera-cms.viettel.vn/cdn?site_id=722">
                                            <FaServer /> Quản Lý Màu Sắc
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview active">
                                <a href="https://camera-cms.viettel.vn/servers?site_id=722#">
                                    <FaInfoCircle />
                                    <span> Thông Tin</span>
                                </a>
                            </li>
                        </ul>
                    </section>
                </aside>
            </IconContext.Provider>   
        )
    }
}