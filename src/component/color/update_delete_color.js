import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import Header from '../../common/header';
import MenuLeft from '../../common/menu_left';
import Title from '../../common/title';
import ModalInfo from '../../common/modal_info';
import Axios from 'axios';

export default class UpdateDeleteColor extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            message: '',
            color_name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(event){
        const {name,value} = event.target;
        this.setState({
            [name] : value
        })
    }
    handleUpdate(){
        const color_id = this.props.match.params.id;
        const {color_name} = this.state
        if(color_id){
            Axios.post('http://localhost:8080/color/update_info_color',
                {
                    color_id,
                    color_name,
                }
            ).then(res=>{
               if(res.data.code === 200){
                   this.setState({
                       message: res.data.message,
                       modal: true
                   })
               }
                
            })
        }
    }
    handleDelete(){
        const color_id = this.props.match.params.id;
        if(color_id){
            Axios.post('http://localhost:8080/color/delete_info_color', {color_id})
                .then(res =>{
                    if(res.data.code === 200){
                        this.setState({
                            message: res.data.message,
                            modal: true
                        })
                    }
                    
                })
        }
    }
    componentDidMount(){
        const color_id = this.props.match.params.id
        Axios.post('http://localhost:8080/color/get_info_color', {color_id})
            .then(res=>{
                if(res.data.code === 200){
                    this.setState({
                        color_name: res.data.result.color_name
                    })
                }
                
            })
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
                                <div className="col-xs-6 col-sm-6">
                                <Button color='danger' onClick={this.handleDelete}>Xoá Bỏ</Button>{' '}
                                </div>
                                <div className="col-xs-6 col-sm-6 text-right">
                                    <Button color='success' onClick={this.handleUpdate}>Cập Nhật</Button>{' '}
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
                                                    <strong>Tên Loại Sản Phẩm</strong>
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