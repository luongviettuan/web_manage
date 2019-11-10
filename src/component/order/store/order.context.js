import React, {Component} from 'react';
import axios from 'axios';

export const OrderContext = React.createContext()

export class OrderProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            listOrder: [],
            q: '',
            listUpdateOrder: [],
            modal: false,
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }
    handleChangeStatus(event){
        const {name, value} = event.target;
        let [order_id] = name.split('_');
        this.setState({
            listUpdateOrder:[
                ...this.state.listUpdateOrder,
                {order_id, status: value}
            ]
        })   
    }
    handleUpdate(){
        const {listUpdateOrder} = this.state
        if(listUpdateOrder.length >0){
            axios.post('http://localhost:8080/order/update_info_order', listUpdateOrder)
                .then(res=>{
                    if(res.data.code === 200){
                        this.setState({
                        modal: true,
                        message: res.data.message
                    })
                    }
                })
        }
    }
    componentDidUpdate(prevProps, prevState){
        const {q} = this.state;
        if(q !== prevState.q){
            axios.post('http://localhost:8080/order/find_info_order',{q : q})
                .then(res =>{
                    if(res.data.code === 200){
                        const listOrder = res.data.result;
                        this.setState({
                            listOrder : listOrder
                        })
                    }
                })
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8080/order')
            .then(res=>{
                if(res.data.code === 200){
                    this.setState({
                        listOrder: res.data.result,
                        handleChange: this.handleChange
                    })
                }
            })
    }
    render(){
        return <OrderContext.Provider 
            value={{
                listOrder : this.state.listOrder,
                modal: this.state.modal,
                message: this.state.message,
                handleChange: this.handleChange,
                handleChangeStatus: this.handleChangeStatus,
                handleUpdate: this.handleUpdate
            }}>
                {
                    this.props.children
                }
            </OrderContext.Provider>
    }
    
}
export function withOrder (Component) {
    return class _ extends React.Component {
      render () {
        return (
          <OrderContext.Consumer>
            {value => { return <Component {...this.props} {...value}/> }}
          </OrderContext.Consumer>
        )
      }
    }   
  }