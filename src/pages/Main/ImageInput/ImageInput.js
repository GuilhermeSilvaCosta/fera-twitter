import React, { useState, useEffect } from 'react';
import api from 'services/api';

import './ImageInput.css'

function ImageInput({ value, onChange, name, waitUpload }) {

    const [preview, setPreview] = useState(value);
    const [fileName, setFileName] = useState(null);

    useEffect(() => {
        if (!value || (value && value === '')) {
            setFileName(null);
        }
    }, [value])

    async function handleChange(e) {

        waitUpload(true);
        const data = new FormData();

        const fileName = e.target.files[0].name;
        data.append('file', e.target.files[0]);

        const response = await api.post('files', data);

        setFileName(fileName)

        const { url } = response.data;
        setPreview(url);
        onChange({
            target: {
                name,
                value: url 
            }
        });
        waitUpload(false);
    }

    return (
        <div className="image-input-container">

            <label htmlFor="background">

                <img src="assets/icons/image.svg" alt="" />

                <input
                    type="file"
                    id="background"
                    accept="image/*"
                    data-file={preview}
                    onChange={handleChange}
                />
            </label>
            
            <span>{fileName}</span>
        </div>
    );

}

export default ImageInput;