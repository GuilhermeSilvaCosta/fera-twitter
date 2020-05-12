import React,  { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from 'services/api';

import './AvatarInput.css';

function AvatarInput({ waitUpload }) {

    const { defaultValue, registerField } = useField('image_url');

    const [preview, setPreview] = useState(defaultValue);

    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'image_url',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref, registerField]);

    async function handleChange(e) {

        waitUpload(true);
        const data = new FormData();

        data.append('file', e.target.files[0]);

        const response = await api.post('files', data);

        const { url } = response.data;
        setPreview(url);
        waitUpload(false);
    }

    return (
        <div className="avatar-input-container">
            <label htmlFor="avatar">
                <img src={preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'} alt="" />

                <input
                    type="file"
                    id="avatar"
                    accept="image/*"
                    data-file={preview}
                    onChange={handleChange}
                    ref={ref}
                />
            </label>
        </div>
    );
}

export default AvatarInput;