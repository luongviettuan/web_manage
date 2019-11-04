import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaEdit} from 'react-icons/fa';


export default class ListColor extends Component{
    render(){
        const {listColor} = this.props;
        return(
            listColor && listColor.map((color, index) =>
                <tr key={index + 1}>
                    <td className="styleStt">{index + 1}</td>
                    <td>{color.color_name}</td>
                    <td>
                        <Link to={`/color/${color.color_id}`}>
                            <FaEdit />
                        </Link>
                    </td>
                </tr>
            )
        )
    }
}