import React from 'react';
import history from '@history';
import { useSelector } from 'react-redux';

import Button from 'components/Button';

import './Profile.css';

function Profile() {

    const user = useSelector(state => state.user.data);

    function handleEdit() {
        history.push('/edit-profile')
    }

    return (
        <div className="profile-container">
            <div className="title">
                {!!user && <strong>{user.name}</strong>}
            </div>
            <div className="profile">
                {!!user && <>
                {!!user.background_url && <img src={user.background_url} alt="profile" />}
                {!user.background_url && <div className="no-picture"></div>}
                <div className="details">
                    <img src={user.image_url} alt="profile" />
                    <strong>{user.name}</strong><br/>
                    <span>{user.identify}</span>
                    <Button onClick={handleEdit}>Editar Perfil</Button>
                </div></>}
            </div>
        </div>
    )
}

export default Profile;