import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import Axios from 'axios';
import { withCookies } from 'react-cookie';
class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
            redirect: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(){
        const {username, password} = this.state;
        if(username && password){
            Axios.post('http://localhost:8080/admin/login_administration', {username, password})
                .then(res=>{
                    if(res.data.code === 200){
                        const { cookies } = this.props;
                        cookies.set('token', res.data.token)
                    }
                    else{
                        return alert(res.data.message)
                    }
                })
        }
    }
    render(){
        const { cookies } = this.props;
        const token = cookies.get('token')
        if(token) return <Redirect to='/' />
        else return (
            <div className="wrap">
                <div className="container">
                    <div className="site-login">
                        <div className="login-box">
                            <div className="login-box-body">
                                <p className="login-box-msg"><strong style={{fontSize: '17px'}}>QueenOk Manage System</strong></p>
                                <Form>
                                    <FormGroup>
                                        <Label>Email</Label>
                                        <Input
                                            type="text"
                                            name="username"
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                            placeholder="Enter Username"
                                            autoComplete="username"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Password</Label>
                                        <Input
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            placeholder="Enter Password"
                                            autoComplete="password"    
                                        />
                                    </FormGroup>
                                    <Button
                                        color="success"
                                        onClick={this.handleSubmit}
                                    >
                                        Đăng Nhập
                                    </Button>
                                </Form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default withCookies(Login)