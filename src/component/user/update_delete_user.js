import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import axios from 'axios';

import Header from '../../common/header';
import MenuLeft from '../../common/menu_left';
import Title from '../../common/title';
import ModalInfo from '../../common/modal_info';

export default class UpdateDeleteUser extends Component {
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
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            user:{
                ...this.state.user,
                [name]: value
            }
        })
    }
    handleUpdate(){
        const {full_name,
            phone_number,
            province_id,
            district_id,
            address_detail,
            username,
            password,
            confirm_password} = this.state.user;
            if(full_name &&
                phone_number &&
                province_id &&
                district_id &&
                address_detail &&
                username &&
                password === confirm_password){
                    axios.post('http://localhost:8080/user/update_user',
                        {
                            user_id: this.props.match.params.id,
                            full_name,
                            phone_number,
                            province_id,
                            district_id,
                            address_detail,
                            username,
                            password
                        }
                    ).then(res=>{
                        this.setState({
                            message: res.data.message,
                            modal : true
                        })
                        
                    })
                }
                else{
                    return alert('Xác Nhận Lại Mật Khẩu Không Chính Xác')
                }
    }
    handleDelete(){
        const user_id = this.props.match.params.id;
        if(user_id){
            axios.post('http://localhost:8080/user/delete_user', {user_id})
                .then(res=>{
                    console.log(res)
                    if(res.data.code === 200){
                        
                        this.setState({
                            message: res.data.message,
                            modal : true
                        })
                    }
                }
            )
        }
        else{
            return alert('Có Lỗi Sảy Ra, Thử Lại Sau')
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
        axios.get("http://localhost:8080/location/province")
            .then(res=>{
                this.setState({
                    province : res.data.result
                }
            )
        })
        const user_id = this.props.match.params.id
        if(user_id){
            axios.post('http://localhost:8080/user/get_user_by_id',{user_id})
                .then(res=>{
                    const user = res.data.result;
                    this.setState({
                        user:{
                            full_name: user.full_name,
                            phone_number: user.phone_number,
                            province_id: user.province_id,
                            district_id: user.district_id,
                            address_detail: user.address_detail,
                            username: user.username,
                            password: '',
                            confirm_password: ''
                        }
                    })
                    
                }
            )
        }
        
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
                                <div className="col-xs-6 col-sm-6">
                                <Button color='danger' onClick={this.handleDelete}>Xoá Bỏ</Button>{' '}
                                </div>
                                <div className="col-xs-6 col-sm-6 text-right">
                                    <Button color='success' onClick={this.handleUpdate}>Cập Nhật</Button>{' '}
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
                                                        value={this.state.user.province_id}
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