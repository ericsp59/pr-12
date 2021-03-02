import React from 'react';
import s from './Body.module.css';
import {getUsers} from '../../api/api'

const Body = (props) => {

    return (
        <div className={s.body}>
            <h3>body</h3>
        </div>

    )
}
getUsers()

export default Body