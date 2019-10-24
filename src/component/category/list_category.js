import React, {Component} from 'react';
import {FaEdit} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class ListCategory extends Component{
    render(){
        const {listCategory} = this.props;
        return(
            listCategory && listCategory.map(category =>
                <tr key={category.stt}>
                    <td className="styleStt">{category.stt}</td>
                    <td>{category.category_name}</td>
                    <td>{category.number}</td>
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