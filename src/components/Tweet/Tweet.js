import React, { useMemo } from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';

import './Tweet.css';

function Tweet({ tweet }) {

    const { content, createdAt, image_url: tweet_url, author } = tweet;
    const { name, identify, image_url } = author;

    const date = useMemo(() => 
    formatDistanceToNow(parseISO(createdAt), { locale: pt })
    , [createdAt])

    return (
        <div className="tweet-container">
            <img src={image_url} alt="perfil" />
            <div>
                <strong>{name}</strong>
                <span>{identify} - {date}</span>
                <p>{content}</p>
                {tweet_url && 
                <img src={tweet_url} alt="tweet" />}
            </div>
        </div>
    )

}

export default Tweet;