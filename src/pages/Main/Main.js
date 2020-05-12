import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ImageInput from './ImageInput';

import Button from 'components/Button';
import Tweet from 'components/Tweet'
import api from 'services/api';

import './Main.css';

function Main() {

    const user = useSelector(state => state.user.data);

    const [form, setForm] = useState({});
    const [tweets, setTweets] = useState([]);
    const [waitUpload, setWaitUpload] = useState(false);

    useEffect(() => {
        async function loadTweets() {
            const response = await api.get('/tweets');
            setTweets(response.data);
        }
        loadTweets();
    }, [])

    function handleChange({target}) {
        const { name, value} = target;

        setForm({
            ...form,
            [name]: value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const body = {
            ...form,
            author: user._id
        }

        const response = await api.post('/tweets', body);

        setForm({ content: '', image_url: '' })
        setTweets([
            response.data,
            ...tweets
        ]);
    }

    return (
        <div className="main-container">
            <div className="title">
                <strong>Página Inicial</strong>
            </div>
            <div className="post">
                {!!user && <img src={user.image_url} alt="perfil" />}
                <form onSubmit={handleSubmit}>
                    <textarea value={form.content} type="text" name="content" placeholder="O que está acontecendo?" onChange={handleChange} />
                    <div className="actions">
                        <ImageInput name="image_url" value={form.image_url} onChange={handleChange} waitUpload={setWaitUpload} />
                        {!waitUpload && 
                        <Button type="submit">
                            Tweetar
                        </Button>}
                        {!!waitUpload && <span>Aguarde, carregando imagem...</span>}
                    </div>
                </form>
            </div>
            {tweets.map(tweet => <Tweet key={tweet._id} tweet={tweet} />)}
        </div>
    )

}

export default Main;