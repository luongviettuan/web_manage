import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaEdit} from "react-icons/fa";

export default class ListProduct extends Component{
    render(){
        const {listProduct} = this.props;
        return(
            listProduct && listProduct.map((product, index) =>
                <tr key={index + 1}>
                    <td className="styleStt">{index + 1}</td>
                    <td>{product.product_name}</td>
                    <td>{product.category_name}</td>
                    <td>{product.brand_name}</td>
                    <td>
                        <Link to={`/product/${product.product_id}`}>
                            <FaEdit />
                        </Link>
                    </td>
                </tr>
            )
        )
    }
}