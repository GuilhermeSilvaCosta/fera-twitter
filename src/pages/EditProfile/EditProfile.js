import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import AvatarInput from './AvatarInput';
import BackgroundInput from './BackgroundInput';
import { updateUserRequest } from 'store/modules/user/actions';
import history from '@history'

import Button from 'components/Button';

import './EditProfile.css';

function EditProfile() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.data);

    const [waitUpload, setWaitUpload] = useState(false);
    const [waitUpload2, setWaitUpload2] = useState(false);

    function handleSubmit(data) {
        dispatch(updateUserRequest(data));
        history.push('/profile')
    }

    return (
        <div className="edit-profile-container">
            <div className="title">
                <strong>{user.name}</strong>
            </div>
            <div className="profile">
                <div className="details">
                    <Form initialData={user} onSubmit={handleSubmit}>

                        <BackgroundInput name="background_url" waitUpload={setWaitUpload2} />

                        <AvatarInput name="image_url" waitUpload={setWaitUpload} />

                        <div className="inputs">
                            <label htmlFor="identify">Identificador</label>
                            <Input type="text" name="identify" />

                            <label htmlFor="name">Nome</label>
                            <Input type="text" name="name" />

                            <Input type="text" name="_id" style={{ display: 'none' }} />
                            

                            {!waitUpload && !waitUpload2 && 
                            <Button type="submit">
                                Salvar
                            </Button>}

                            {(!!waitUpload || !!waitUpload2) && <span>Aguarde, carregando imagem...</span>}
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;