import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

import Header from '../../common/header';
import MenuLeft from '../../common/menu_left';
import Title from '../../common/title';
import ListBrand from '../brand/list_brand'
export default class Brand extends Component{
    constructor(props){
        super(props);
        this.state ={
            listBrand : [
                {
                    stt: 1,
                    brand_name: 'Adtisno',
                    number: 120
                },
                {
                    stt: 2,
                    brand_name: 'Puma',
                    number: 150
                }
            ]
        }
    }
    render(){
        const {listBrand} = this.state;
        return(
            <div className="skin-blue sidebar-mini">
                <div className="wrapper">
                    <Header />
                    <MenuLeft />
                    <div className="content-wrapper" style={{minHeight: '811px'}}>
                        <Title />
                        <section className="content">
                            <div id="fade-spinner"></div>
                            <div id="modal-spinner">
                                <img id="loader" src={require( '../../public/img/icon/loading_spinner.gif')} alt="" />
                            </div>
                            <div className="servers-index">
                                <div className="row actionServer top">
                                    <div className="col-md-4 col-xs-6 ">
                                        <div className="form-group">
                                            <Link to='/'>
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
                                                                    <th>Thương Hiệu</th>
                                                                    <th>Số Lượng</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <ListBrand listBrand={listBrand} />
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