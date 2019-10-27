import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaEdit} from 'react-icons/fa'

export default class ListBrand extends Component{
    render(){
        const {listBrand} = this.props;
        return(
            listBrand && listBrand.map((brand, index)=>
                <tr key={index+1}>
                    <td className="styleStt">{index+1}</td>
                    <td>{brand.brand_name}</td>
                    <td>{brand.quatity}</td>
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