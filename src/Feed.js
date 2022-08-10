import React, { useEffect, useState } from 'react'
import './styles/feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import foto from './IMG_1077 (1).jpg'
import {auth, db} from './Firebase'
import FlipMove from 'react-flip-move'

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);
    return (
        <div className='feed'>
            <div className='feed_header'>
            <h2>Home</h2>
            </div>

            {/*tweetBox*/}
            <TweetBox />

            {/*post*/}
            <FlipMove>
            {posts.map(post => (
            <Post 
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={foto}
            />
            ))}
            </FlipMove>
            {/*post*/}
            {/*post*/}
            {/*post*/}
            {/*post*/}
            {/*post*/}


        </div>
    )
}


export default Feed;