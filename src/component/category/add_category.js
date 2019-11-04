import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import Header from '../../common/header';
import MenuLeft from '../../common/menu_left';
import Title from '../../common/title';
import ModalInfo from '../../common/modal_info';
import Axios from 'axios';

export default class AddCategory extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            message: '',
            category_name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const {name,value} = event.target;
        this.setState({
            [name] : value
        })
    }
    handleSubmit(){
        const {category_name} = this.state;
        if(category_name){
            Axios.post('http://localhost:8080/category/create_category', {category_name})
                .then(res=>{
                    if(res.data.code === 200){
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
        const {modal, message} = this.state
        return (
            <div className="skin-blue sidebar-mini">
                <div className="wrapper">
                    <Header />
                    <MenuLeft />
                    <div className="content-wrapper" style={{ minHeight: '811px' }}>
                        <Title title='Loại Sản Phẩm' />
                        <section className="content">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 offset-10">
                                    <Button color='success' onClick={this.handleSubmit}>Thêm Mới</Button>{' '}
                                    <Link to='/category'>
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
                                                    <strong>Tên Loại Sản Phẩm</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={this.state.category_name}
                                                        name="category_name"
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
                        link={"/category"}
                    />
                }
            </div>
        )
    }
}