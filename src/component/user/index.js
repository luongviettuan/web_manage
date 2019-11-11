import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import { withCookies } from 'react-cookie';
import axios from 'axios';

import Header from '../../common/header';
import MenuLeft from '../../common/menu_left';
import Title from '../../common/title';
import ListUser from './list_user';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q: '',
            listUser: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }
    componentDidUpdate(prevProps, prevState){
        const {q} = this.state;
        if(q !== prevState.q){
            axios.post('http://localhost:8080/user/find_user', {q : q})
            .then(rs => {
                if (rs.data.code === 200) {
                    const listUser = rs.data.result;                   
                    this.setState({
                        listUser: listUser
                    })
                }
            })
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/user/get_all_user')
            .then(rs => {
                if (rs.data.code === 200) {
                    const listUser = rs.data.result;
                    this.setState({
                        listUser: listUser
                    })
                }
            })
    }
    render() {
        const { listUser } = this.state
        const { cookies } = this.props;
        const token = cookies.get('token')
        if(!token) return <Redirect to='/login' />
        else return (
            <div className="skin-blue sidebar-mini">
                <div className="wrapper">
                    <Header />
                    <MenuLeft />
                    <div className="content-wrapper" style={{ minHeight: '811px' }}>
                        <Title title='Khách Hàng' />
                        <section className="content">
                            <div id="fade-spinner"></div>
                            <div id="modal-spinner">
                                <img id="loader" src={require('../../public/img/icon/loading_spinner.gif')} alt="" />
                            </div>
                            <div className="servers-index">
                                <div className="row actionServer top">
                                    <div className="col-md-4 col-xs-6 ">
                                        <div className="form-group">
                                            <Link to='/user/add'>
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
                                                                    <th>Họ Tên</th>
                                                                    <th>Tên Đăng Nhập</th>
                                                                    <th>Số Điện Thoại</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <ListUser listUser={listUser} />
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
export default withCookies(User)