import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import Header from '../../common/header';
import MenuLeft from '../../common/menu_left';
import Title from '../../common/title';
import Axios from 'axios';
import ModalInfo from '../../common/modal_info';

export default class AddColor extends Component {
    constructor(props){
        super(props);
        this.state = {
            color_name : '',
            modal: false,
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }
    handleSubmit(){
        const {color_name} = this.state;
        if(color_name){
            Axios.post('http://localhost:8080/color/create_color', {color_name})
                .then(res =>{
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
        const {modal, message} = this.state;
        return (
            <div className="skin-blue sidebar-mini">
                <div className="wrapper">
                    <Header />
                    <MenuLeft />
                    <div className="content-wrapper" style={{ minHeight: '811px' }}>
                        <Title title='Màu Sắc' />
                        <section className="content">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 offset-10">
                                    <Button color='success' onClick={this.handleSubmit} >Thêm Mới</Button>{' '}
                                    <Link to='/color'>
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
                                                    <strong>Tên Màu Sắc</strong>
                                                </label>
                                                <div className="col-md-10">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={this.state.color_name}
                                                        name="color_name"
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
                        link={"/color"}
                    />
                }
            </div>
        )
    }
}