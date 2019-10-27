import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import Header from '../../common/header';
import MenuLeft from '../../common/menu_left';
import Title from '../../common/title';

export default class AddUser extends Component {
    render() {
        return (
            <div className="skin-blue sidebar-mini">
                <div className="wrapper">
                    <Header />
                    <MenuLeft />
                    <div className="content-wrapper" style={{ minHeight: '811px' }}>
                        <Title title='Khách Hàng' />
                        <section className="content">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 offset-10">
                                    <Button color='success'>Thêm Mới</Button>{' '}
                                    <Link to='/user'>
                                        <Button color='danger'>Huỷ Bỏ</Button>
                                    </Link>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='top' style={{width : '100%'}}>
                                    <div className='box box-primary'>
                                        <div className='box-body'>
                                            <br></br>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Họ Tên</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Số Điện Thoại</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Tỉnh/Thành Phố</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <select className="form-control">
                                                        <option>Hà Nội</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Huyện/Phường</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <select className="form-control" >
                                                        <option>Hà Đông</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Tên Tài Khoản</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Mật Khẩu</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Nhập Lại Mật Khẩu</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}