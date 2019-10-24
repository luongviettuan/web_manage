import React, {Component} from 'react';

import Header from '../../common/header';
import MenuLeft from '../../common/menu_left';
import Title from '../../common/title';
import ListOrder from './list_order';

export default class Order extends Component{
    constructor(props){
        super(props);
        this.state ={
            listOrder : [
                {
                    stt: 1,
                    order_id: '12d4ds',
                    status: "3"
                },
                {
                    stt: 2,
                    order_id: '13dd54',
                    status: "2"
                }
            ]
        }
    }
    render(){
        const {listOrder} = this.state;
        return(
            <div className="skin-blue sidebar-mini">
                <div className="wrapper">
                    <Header />
                    <MenuLeft />
                    <div className="content-wrapper" style={{minHeight: '811px'}}>
                        <Title title='Đơn Hàng' />
                        <section className="content">
                            <div id="fade-spinner"></div>
                            <div id="modal-spinner">
                                <img id="loader" src={require( '../../public/img/icon/loading_spinner.gif')} alt="" />
                            </div>
                            <div className="servers-index">
                                <div className="row actionServer top">
                                    <div className="col-md-4 col-xs-6 offset-8">
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
                                                                    <th>Mã Đơn Hàng</th>
                                                                    <th>Chi Tiết Đơn Hàng</th>
                                                                    <th>Trạng Thái</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <ListOrder listOrder={listOrder} />
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