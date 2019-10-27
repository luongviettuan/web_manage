import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'


import Header from '../../common/header';
import MenuLeft from '../../common/menu_left';
import Title from '../../common/title';
import ListProduct from './list_product';
import axios from 'axios';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q: '',
            listProduct: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    componentDidUpdate(prevProps, prevState){
        const {q} = this.state;
        if(q !== prevState.q){
            axios.post('http://localhost:8080/product/find_info_product', {q : q})
            .then(rs => {
                if (rs.data.code === 200) {
                    const listProduct = rs.data.result;                   
                    this.setState({
                        listProduct: listProduct
                    })
                }
            })
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/product')
            .then(res => {
                const listProduct = res.data;
                this.setState({
                    listProduct: listProduct
                })
            })
    }
    render() {
        const { listProduct } = this.state;
        return (
            <div className="skin-blue sidebar-mini">
                <div className="wrapper">
                    <Header />
                    <MenuLeft />
                    <div className="content-wrapper" style={{ minHeight: '811px' }}>
                        <Title title='Sản Phẩm' />
                        <section className="content">
                            <div id="fade-spinner"></div>
                            <div id="modal-spinner">
                                <img id="loader" src={require('../../public/img/icon/loading_spinner.gif')} alt="" />
                            </div>
                            <div className="servers-index">
                                <div className="row actionServer top">
                                    <div className="col-md-4 col-xs-6 ">
                                        <div className="form-group">
                                            <Link to='/product/add'>
                                                <Button color="success">
                                                    Tạo Mới
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-xs-6 offset-4">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                name="q"
                                                className="form-control"
                                                placeholder="Nhập Từ Khóa Tìm Kiếm ..."
                                                value={this.state.q}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="lisviewcontent">
                                    <div className="grid-view">
                                        <div className="box box-primary">
                                            <div className="box-body">
                                                <div id="w0" className="row">
                                                    <div className="col-sm-12">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>STT</th>
                                                                    <th>Tên Sản Phẩm</th>
                                                                    <th>Loại Sản Phẩm</th>
                                                                    <th>Thương Hiệu</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <ListProduct listProduct={listProduct} />
                                                            </tbody>
                                                        </table>
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
            </div>

        )
    }
}