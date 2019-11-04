import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import Header from '../../common/header';
import MenuLeft from '../../common/menu_left';
import Title from '../../common/title';
import ModalInfo from '../../common/modal_info';

import Axios from 'axios';

export default class AddVoucher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            message: '',
            voucher_id: '',
            voucher_name: '',
            discount: '',
            unit: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit() {
        const { voucher_id, voucher_name, discount, unit } = this.state;
        if (voucher_id && voucher_name && discount && unit) {
            Axios.post('http://localhost:8080/voucher/create_voucher',
                {
                    voucher_id,
                    voucher_name,
                    discount,
                    unit
                }
            ).then(res => {
                if (res.data.code === 200) {
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
    render() {
        const {modal,message} = this.state
        console.log(this.state);
        
        return (
            <div className="skin-blue sidebar-mini">
                <div className="wrapper">
                    <Header />
                    <MenuLeft />
                    <div className="content-wrapper" style={{ minHeight: '811px' }}>
                        <Title title='Mã Giảm Giá' />
                        <section className="content">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 offset-10">
                                    <Button color='success' onClick={this.handleSubmit}>Thêm Mới</Button>{' '}
                                    <Link to='/voucher'>
                                        <Button color='danger'>Huỷ Bỏ</Button>
                                    </Link>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='top' style={{ width: '100%' }}>
                                    <div className='box box-primary'>
                                        <div className='box-body'>
                                            <br></br>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Mã Giảm Giá</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={this.state.voucher_id}
                                                        name="voucher_id"
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Nội Dung Giảm Giá</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <textarea
                                                        className="form-control"
                                                        value={this.state.voucher_name}
                                                        name="voucher_name"
                                                        onChange={this.handleChange}
                                                    >
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Giá Trị Giảm Giá</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={this.state.discount}
                                                        name="discount"
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Đơn Vị Giảm Giá</strong>
                                                </label>
                                                <div className="col-md-9 row offset-1">
                                                    <div className="col-md-3">
                                                        <input
                                                            type="radio"
                                                            className="form-check-input"
                                                            name="unit"
                                                            value="VNĐ"
                                                            onChange={this.handleChange}
                                                        />
                                                        <label className="form-check-label">
                                                            <strong>VNĐ</strong>
                                                        </label>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <input
                                                            type="radio"
                                                            className="form-check-input"
                                                            name="unit"
                                                            value="%"
                                                            onChange={this.handleChange}
                                                        />
                                                        <label className="form-check-label">
                                                            <strong>%</strong>
                                                        </label>
                                                    </div>
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
                        link={"/voucher"}
                    />
                }
            </div>
        )
    }
}