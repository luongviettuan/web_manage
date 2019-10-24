import React, {Component} from 'react';
import {Button} from 'reactstrap';

export default class ListOrder extends Component{
    render(){
        const {listOrder} = this.props;
        console.log(listOrder);
        
        return(
            listOrder && listOrder.map(order =>
                <tr key={order.stt}>
                    <td className="styleStt">{order.stt}</td>
                    <td>{order.order_id}</td>
                    <td>
                        <Button color='success' size='sm'>Xem Chi Tiết</Button>
                    </td>
                    <td>
                        <select defaultValue={order.status}>
                            <option value='1'>Chờ Xác Nhận</option>
                            <option value='2'>Đang Lấy Hàng</option>
                            <option value='3'>Đang Giao Hàng</option>
                            <option value='4'>Đã Giao Hàng</option>
                        </select>
                    </td>
                </tr>
            )
        )
    }
}