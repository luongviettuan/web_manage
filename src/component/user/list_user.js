import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FaEdit} from "react-icons/fa";

export default class ListUser extends Component {
    render() {
        const { listUser } = this.props
        return (
            listUser && listUser.map((user, index) =>
                <tr key={index}>
                    <td className="styleStt">{index+1}</td>
                    <td>{user.full_name}</td>
                    <td>{user.username}</td>
                    <td>{user.phone_number}</td>
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