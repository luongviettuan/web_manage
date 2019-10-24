import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaEdit} from 'react-icons/fa';


export default class ListVoucher extends Component{
    render(){
        const {listVoucher} = this.props
        return(
            listVoucher && listVoucher.map(voucher =>
                <tr key={voucher.stt}>
                    <td className="styleStt">{voucher.stt}</td>
                    <td>{voucher.voucher_id}</td>
                    <td>{voucher.voucher_name}</td>
                    <td>
                        <Link to='/'>
                            <FaEdit />
                        </Link>
                    </td>
                </tr>    
            )
        )
    }
}