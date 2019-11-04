import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import axios from 'axios';

import Header from '../../common/header';
import MenuLeft from '../../common/menu_left';
import Title from '../../common/title';
import ModalInfo from '../../common/modal_info';

export default class AddUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            province: [],
            district: [],
            modal: false,
            message: '',
            user: {
                full_name: '',
                phone_number: '',
                province_id: '',
                district_id: '',
                address_detail: '',
                username: '',
                password: '',
                confirm_password: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            user : {
                ...this.state.user,
                [name] : value
            }
        })
    }
    handleSubmit(){
        const {full_name, phone_number, province_id, district_id, address_detail, username, password, confirm_password} = this.state.user
        if(full_name &&
            phone_number &&
            province_id &&
            district_id &&
            address_detail &&
            username &&
            password &&
            confirm_password){
                axios.post('http://localhost:8080/user/register',
                    {
                        full_name,
                        phone_number,
                        province_id,
                        district_id,
                        address_detail,
                        username,
                        password,
                        confirm_password
                    }
                ).then(res =>{
                    const result = res.data;
                    if(result.code === 200){
                        this.setState({
                            message: res.data.message,
                            modal: true
                        })
                    }
                    else{
                        this.setState({
                            message: res.data.message
                        }, ()=>{alert(this.state.message)})
                    }
                    
                })
        }
    }
    componentDidUpdate(prevProps, prevState){
        const {province_id} = this.state.user;
        if(province_id !== prevState.user.province_id){
            axios.post("http://localhost:8080/location/province",
                {province_id : province_id}
            ).then(res=>{
                this.setState({
                    district : res.data.result
                })
            })
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8080/location/province')
            .then(res=>{
                this.setState({
                    province : res.data.result
                })
            })
    }
    render() {
        const {province, district, modal, message} = this.state
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
                                    <Button color='success' onClick={this.handleSubmit}>Thêm Mới</Button>{' '}
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
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="full_name"
                                                        value={this.state.user.full_name}
                                                        onChange={this.handleChange} 
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Số Điện Thoại</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="phone_number"
                                                        value={this.state.user.phone_number}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Tỉnh/Thành Phố</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <select
                                                        className="form-control"
                                                        value={this.state.province_id}
                                                        name="province_id"
                                                        onChange={this.handleChange}
                                                    >
                                                        {
                                                            province ? province.map(item =>
                                                                <option
                                                                    key={item.province_id}
                                                                    value={item.province_id}
                                                                >
                                                                    {item.province_name}
                                                                </option>)
                                                                : <option value="">Vui Lòng Chọn Tỉnh/ Thành Phố</option>
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Huyện/Phường</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <select
                                                        className="form-control"
                                                        value={this.state.user.district_id}
                                                        name="district_id"
                                                        onChange={this.handleChange}
                                                    >
                                                        {
                                                            district ? district.map(item =>
                                                                <option
                                                                    key={item.district_id}
                                                                    value={item.district_id}
                                                                >
                                                                    {item.district_name}
                                                                </option>)
                                                                : <option value="">Vui Lòng Chọn Tỉnh/ Thành Phố Trước</option>
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Địa Chỉ Chi Tiết</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={this.state.user.address_detail}
                                                        name="address_detail"
                                                        onChange={this.handleChange}    
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Tên Tài Khoản</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={this.state.user.username}
                                                        name="username"
                                                        onChange={this.handleChange}    
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Mật Khẩu</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        value={this.state.user.password}
                                                        name="password"
                                                        onChange={this.handleChange}    
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Nhập Lại Mật Khẩu</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        value={this.state.user.confirm_password}
                                                        name="confirm_password"
                                                        onChange={this.handleChange}    
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                {
                    modal &&
                    <ModalInfo
                        modal={modal}
                        message={message}
                        link={'/user'}
                    />
                }
            </div>
        )
    }
}