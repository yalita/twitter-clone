import React, { useState } from 'react'
import foto from './IMG_1077 (1).jpg'
import {Button, Avatar} from '@mui/material'
import './styles/tweetBox.css'
import { db } from './Firebase'

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState ('');
    const [tweetImage, setTweetImage] = useState('')

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "yalita's",
            username: "@yalitallaver",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: {foto},
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                <Avatar src={foto}/>
                <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="what's happening?" type="Text" />
                </div>
                <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} className="tweetBox_imageInput" placeholder='Optional: Enter image url' type="text" />
                <Button onClick={sendTweet} type='submit' className='tweetBox_tweetButton'>tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;