import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaEdit} from 'react-icons/fa'

export default class ListBrand extends Component{
    render(){
        const {listBrand} = this.props;
        return(
            listBrand && listBrand.map(brand =>
                <tr key={brand.stt}>
                    <td className="styleStt">{brand.stt}</td>
                    <td>{brand.brand_name}</td>
                    <td>{brand.number}</td>
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