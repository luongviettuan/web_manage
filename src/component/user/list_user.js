import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FaEdit} from "react-icons/fa";

export default class ListUser extends Component {
    render() {
        const { listUser } = this.props
        return (
            listUser && listUser.map(user =>
                <tr key={user.stt}>
                    <td className="styleStt">{user.stt}</td>
                    <td>{user.fullName}</td>
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