import React, {Component} from 'react';
export default class Title extends Component{
    render(){
        const {title} = this.props;
        return(
            <section className="content-header">
                <h1>
                    {title}
                    <small>Quản Lý</small>
                </h1>
            </section>
        )
    }
}