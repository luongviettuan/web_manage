import React, {Component} from 'react';
import {FaEdit} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class ListCategory extends Component{
    render(){
        const {listCategory} = this.props;
        return(
            listCategory && listCategory.map((category, index) =>
                <tr key={index+1}>
                    <td className="styleStt">{index+1}</td>
                    <td>{category.category_name}</td>
                    <td>{category.quatity}</td>
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