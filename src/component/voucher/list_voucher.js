import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaEdit} from 'react-icons/fa';


export default class ListVoucher extends Component{
    render(){
        const {listVoucher} = this.props
        return(
            listVoucher && listVoucher.map((voucher, index) =>
                <tr key={index + 1}>
                    <td className="styleStt">{index+1}</td>
                    <td>{voucher.voucher_id}</td>
                    <td>{voucher.voucher_name}</td>
                    <td>
                        <Link to={`/voucher/${voucher.voucher_id}`}>
                            <FaEdit />
                        </Link>
                    </td>
                </tr>    
            )
        )
    }
}