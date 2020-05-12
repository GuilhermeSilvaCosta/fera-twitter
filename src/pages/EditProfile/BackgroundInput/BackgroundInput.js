import React,  { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from 'services/api';

import './BackgroundInput.css';

function BackgroundInput({ waitUpload }) {

    const { defaultValue, registerField } = useField('background_url');

    const [preview, setPreview] = useState(defaultValue);

    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'background_url',
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
        <div className="background-input-container">
            <label htmlFor="background">
                <img src={preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'} alt="" />

                <input
                    type="file"
                    id="background"
                    accept="image/*"
                    data-file={preview}
                    onChange={handleChange}
                    ref={ref}
                />
            </label>
        </div>
    );
}

export default BackgroundInput;