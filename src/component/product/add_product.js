import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import Header from '../../common/header';
import MenuLeft from '../../common/menu_left';
import Title from '../../common/title';

export default class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            status : false,
            color : {},
            size: {}
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name,checked} = event.target;
        if(name === 'status'){
            this.setState({
                status : checked
            })
        }
        else{
            let [property, val] = name.split('_');
            if(property === 'color'){
                this.setState({
                    color : {
                        ...this.state.color,
                        [val] : checked
                    }
                })
            }
            else{
                this.setState({
                    size : {
                        ...this.state.size,
                        [val] : checked
                    }
                })
            }
            
        }
        
        
    }
    render() {
        console.log(this.state);
        
        return (
            <div className="skin-blue sidebar-mini">
                <div className="wrapper">
                    <Header />
                    <MenuLeft />
                    <div className="content-wrapper" style={{ minHeight: '811px' }}>
                        <Title title='Sản Phẩm' />
                        <section className="content">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 offset-10">
                                    <Button color='success'>Thêm Mới</Button>{' '}
                                    <Link to='/product'>
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
                                                    <strong>Tên Sản Phẩm</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Giá</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Thương Hiệu</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <select className="form-control">
                                                        <option>Hà Nội</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Loại Sản Phẩm</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <select className="form-control" >
                                                        <option>Hà Đông</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="form-check col-md-3 offset-3">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        onChange={this.handleChange}
                                                        name="status"
                                                    />
                                                    <label className="form-check-label">
                                                        <strong>Còn Hàng</strong>
                                                    </label>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-check">
                                                        <label className="control-label">
                                                            <strong>Màu Sắc</strong>
                                                        </label>
                                                        <div>
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                name="color_Xanh"
                                                                onChange={this.handleChange}
                                                            />
                                                            <label className="form-check-label">
                                                                <strong>Xanh</strong>
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                name="color_Đỏ"
                                                                onChange={this.handleChange}
                                                            />
                                                            <label className="form-check-label">
                                                                <strong>Đỏ</strong>
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                name="color_Tím"
                                                                onChange={this.handleChange}    
                                                            />
                                                            <label className="form-check-label">
                                                                <strong>Tím</strong>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-check">
                                                        <label className="control-label">
                                                            <strong>Kích Cỡ</strong>
                                                        </label>
                                                        <div>
                                                            <input
                                                                type="checkbox"
                                                                name="size_S"
                                                                className="form-check-input"
                                                                onChange={this.handleChange}
                                                            />
                                                            <label className="form-check-label">
                                                                <strong>S</strong>
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="checkbox"
                                                                name="size_M"
                                                                className="form-check-input"
                                                                onChange={this.handleChange}
                                                            />
                                                            <label className="form-check-label">
                                                                <strong>M</strong>
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="checkbox"
                                                                name="size_L"
                                                                className="form-check-input"
                                                                onChange={this.handleChange}
                                                            />
                                                            <label className="form-check-label">
                                                                <strong>L</strong>
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="checkbox"
                                                                name="size_XL"
                                                                className="form-check-input"
                                                                onChange={this.handleChange}
                                                            />
                                                            <label className="form-check-label">
                                                                <strong>XL</strong>
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type="checkbox"
                                                                name="size_XXL"
                                                                className="form-check-input"
                                                                onChange={this.handleChange}
                                                            />
                                                            <label className="form-check-label">
                                                                <strong>XXL</strong>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Mô Tả Tổng Quan</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <textarea className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Mô Tả Chi Tiết</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <textarea className="form-control"></textarea>
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