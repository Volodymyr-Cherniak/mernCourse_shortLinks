import React, {useContext} from "react";
import {NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

export const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    };

    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
                <span className="brand-logo">Скорочення посиланнь</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Створити</NavLink></li>
                    <li><NavLink to="/links">Посилання</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Вийти</a></li>
                </ul>
            </div>
        </nav>
    )
};
