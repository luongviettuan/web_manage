import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaEdit} from 'react-icons/fa';


export default class ListColor extends Component{
    render(){
        const {listColor} = this.props;
        return(
            listColor && listColor.map(color =>
                <tr key={color.stt}>
                    <td className="styleStt">{color.stt}</td>
                    <td>{color.color_name}</td>
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