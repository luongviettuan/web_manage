import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { withCookies } from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Header from '../../common/header';
import MenuLeft from '../../common/menu_left';
import Title from '../../common/title';
import ListOrder from './list_order';
import ModalInfo from '../../common/modal_info';
import { OrderProvider, OrderContext } from './store/order.context'
class Order extends Component {
    render() {
        const { cookies } = this.props;
        const token = cookies.get('token')
        if(!token) return <Redirect to='/login' />
        else return (
            <OrderProvider>
                <div className="skin-blue sidebar-mini">
                    <div className="wrapper">
                        <Header />
                        <MenuLeft />
                        <div className="content-wrapper" style={{ minHeight: '811px' }}>
                            <Title title='Đơn Hàng' />
                            <section className="content">
                                <div id="fade-spinner"></div>
                                <div id="modal-spinner">
                                    <img id="loader" src={require('../../public/img/icon/loading_spinner.gif')} alt="" />
                                </div>
                                <div className="servers-index">
                                    <div className="row actionServer top">
                                        <div className="col-md-4 col-xs-6">
                                            <OrderContext.Consumer>
                                                {({handleUpdate})=>(
                                                    <Button
                                                        color="success"
                                                        onClick={handleUpdate}
                                                    >
                                                        Lưu Trạng Thái
                                                    </Button>
                                                )}
                                            </OrderContext.Consumer>
                                        </div>
                                        <div className="col-md-4 col-xs-6 offset-4">
                                            <OrderContext.Consumer>
                                                {({handleChange}) => (
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            name="q"
                                                            className="form-control"
                                                            placeholder="Nhập Từ Khóa Tìm Kiếm ..."
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                )}
                                            </OrderContext.Consumer>
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
                                                                    <ListOrder />
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
                    <OrderContext.Consumer>
                        {({modal, message})=>{
                                if(modal === true && message){
                                    return <ModalInfo modal={modal} message={message} link={"/"}/>
                                }
                        }}
                    </OrderContext.Consumer>
                </div>
            </OrderProvider>
        )
    }
}
export default withCookies(Order)