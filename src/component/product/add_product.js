import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import Header from '../../common/header';
import MenuLeft from '../../common/menu_left';
import Title from '../../common/title';
import ModalInfo from '../../common/modal_info';
import Axios from 'axios';

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listBrand: [],
            listCategory: [],
            listColor: [],
            product: {
                product_name: '',
                price: '',
                brand_id: '',
                category_id: '',
                product_image_url: '',
                status: false,
                color: {},
                size: {},
                description: '',
                overview: ''
            },
            modal: false,
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, checked,value } = event.target;
        if(name === 'product_name' ||
            name === 'price' ||
            name === 'brand_id' ||
            name === 'category_id' ||
            name === 'description' ||
            name ===  'overview'
            ){
                this.setState({
                    product:{
                        ...this.state.product,
                        [name] : value
                    }
                })
            }
        else if(name === 'product_image_url'){
            let array = value.split('\\')
            let valuetemp = array[array.length-1];
            this.setState({
                product:{
                    ...this.state.product,
                    product_image_url : valuetemp
                }  
            })
        }
        else if (name === 'status') {
            this.setState({
                product: {
                    ...this.state.product,
                    status: checked
                }
            })
        }
        else {
            let [property, val] = name.split('_');
            if (property === 'color') {
                this.setState({
                    product: {
                        ...this.state.product,
                        color: {
                            ...this.state.product.color,
                            [val]: checked
                        }
                    }
                })
            }
            else {
                this.setState({
                    product: {
                        ...this.state.product,
                        size: {
                            ...this.state.product.size,
                            [val]: checked
                        }
                    }

                })
            }

        }
    }
    handleSubmit(){
        Axios.post('http://localhost:8080/product/create_info_product', this.state.product)
            .then(res=>{
                if(res.data.code === 200){
                    this.setState({
                        modal: true,
                        message: res.data.message
                    })
                }
                
            })
    }
    componentDidMount() {
        Axios.get('http://localhost:8080/brand')
            .then(res => {
                if (res.data.code === 200) {
                    const listBrand = res.data.result;
                    this.setState({
                        listBrand: listBrand
                    })
                }
            })
        Axios.get('http://localhost:8080/category')
            .then(res => {
                if (res.data.code === 200) {
                    const listCategory = res.data.result
                    this.setState({
                        listCategory: listCategory
                    })
                }
            })
        Axios.get('http://localhost:8080/color')
            .then(res =>{
                if(res.data.code === 200){
                    const listColor = res.data.result;
                    this.setState({
                        listColor: listColor
                    })
                }
            })
    }
    render() {
        const { listBrand, listCategory, listColor, modal, message } = this.state;
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
                                    <Button color='success' onClick={this.handleSubmit}>Thêm Mới</Button>{' '}
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
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="product_name"
                                                        value={this.state.product.product_name}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Giá</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="price"
                                                        value={this.state.product.price}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Thương Hiệu</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <select
                                                        className="form-control"
                                                        name="brand_id"
                                                        value={this.state.product.brand_id}
                                                        onChange={this.handleChange}
                                                    >
                                                        {
                                                            listBrand && listBrand.map(brand =>
                                                                <option key={brand.brand_id} value={brand.brand_id}>{brand.brand_name}</option>)
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Loại Sản Phẩm</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <select
                                                        className="form-control"
                                                        name="category_id"
                                                        value={this.state.product.category_id}
                                                        onChange={this.handleChange}
                                                    >
                                                        {
                                                            listCategory && listCategory.map(category=>
                                                                <option key={category.category_id} value={category.category_id}>{category.category_name}</option>)
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Đường Dẫn Ảnh</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input
                                                        type="file"
                                                        name="product_image_url"
                                                        onChange={this.handleChange}
                                                        style={{ display: 'block' }} />
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
                                                        {
                                                            listColor && listColor.map(color=>
                                                                <div key={color.color_id}>
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        name={"color_" + color.color_name}
                                                                        onChange={this.handleChange}
                                                                    />
                                                                    <label className="form-check-label">
                                                                        <strong>{color.color_name}</strong>
                                                                    </label>
                                                                </div>
                                                            )
                                                        }          
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
                                                    <textarea
                                                        className="form-control"
                                                        name="overview"
                                                        value={this.state.product.overview}
                                                        onChange={this.handleChange}
                                                    >
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Mô Tả Chi Tiết</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <textarea
                                                        className="form-control"
                                                        name="description"
                                                        value={this.state.product.description}
                                                        onChange={this.handleChange}
                                                    >
                                                    </textarea>
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
                        link={"/product"}
                    />
                }
            </div>
        )
    }
}