import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userRequest } from 'store/modules/user/actions';

import './Navigation.css'

function Navigation() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userRequest());
    }, [dispatch])

    return (
        <div className="navigation-container">
            <ul>
                <Link to="/">
                    <li><img src="assets/icons/twitter.svg" alt="twitter" /></li>
                </Link>
                <Link to="/">
                    <li>
                        <img src="assets/icons/home.svg" alt="home" />
                        <strong>Página Inícial</strong>
                    </li>
                </Link>
                <Link to="/profile">
                    <li
                        component={Link}
                        to="/profile"
                    >
                        <img src="assets/icons/profile.svg" alt="home" />
                        <strong>Perfil</strong>
                    </li>
                </Link>
            </ul>
        </div>
    )

}

export default Navigation;