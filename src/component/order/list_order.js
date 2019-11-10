import React, {Component} from 'react';
import {Button} from 'reactstrap';
import { withOrder } from './store/order.context';

class ListOrder extends Component{
    render(){
        const {listOrder} = this.props;
        return(
            listOrder && listOrder.map((order, index) =>
                <tr key={index+1}>
                    <td className="styleStt">{index+1}</td>
                    <td>{order.order_id}</td>
                    <td>
                        <Button color='success' size='sm'>Xem Chi Tiết</Button>
                    </td>
                    <td>
                        <select
                            defaultValue={order.status}
                            onChange={this.props.handleChangeStatus}
                            name={`${order.order_id}_status`}
                        >
                            <option value='Chờ Xác Nhận'>Chờ Xác Nhận</option>
                            <option value='Đang Lấy Hàng'>Đang Lấy Hàng</option>
                            <option value='Đang Giao Hàng'>Đang Giao Hàng</option>
                            <option value='Đã Giao Hàng'>Đã Giao Hàng</option>
                        </select>
                    </td>
                </tr>
            )
        )
    }
}
export default  withOrder(ListOrder)