import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import Header from '../../common/header';
import MenuLeft from '../../common/menu_left';
import Title from '../../common/title';
import ModalInfo from '../../common/modal_info';

import Axios from 'axios';

export default class AddBrand extends Component {
    constructor(props){
        super(props);
        this.state= {
            brand_name: '',
            brand_img_url: '',
            modal: false,
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const {name, value} = event.target;
        if(name === 'brand_img_url'){
            let array = value.split('\\')
            let valuetemp = array[array.length-1];
            this.setState({
                brand_img_url : valuetemp
            })
        }
        else{
            this.setState({
                [name] : value
            })
        }
    }
    handleSubmit(){
        const {brand_name, brand_img_url} = this.state;
        if(brand_name && brand_img_url){
            Axios.post('http://localhost:8080/brand/create_info_brand',{brand_name, brand_img_url})
            .then(res=>{
                if(res.data.code === 200){
                    this.setState({
                        message: res.data.message,
                        modal: true
                    })
                }
                else{
                    return alert(res.data.message)
                }
            })
        }
    }
    render() {
        console.log(this.state);
        const {modal, message} = this.state
        return (
            <div className="skin-blue sidebar-mini">
                <div className="wrapper">
                    <Header />
                    <MenuLeft />
                    <div className="content-wrapper" style={{ minHeight: '811px' }}>
                        <Title title='Thương Hiệu' />
                        <section className="content">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 offset-10">
                                    <Button color='success' onClick={this.handleSubmit}>Thêm Mới</Button>{' '}
                                    <Link to='/brand'>
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
                                                    <strong>Tên Thương Hiệu</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="brand_name"
                                                        value={this.state.brand_name}
                                                        onChange={this.handleChange}    
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-2 text-right">
                                                    <strong>Đường Dẫn Ảnh</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input
                                                        type="file"
                                                        name="brand_img_url"
                                                        onChange={this.handleChange}
                                                        style={{display: 'block'}}
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
                        link={"/brand"}
                    />
                }
            </div>
        )
    }
}