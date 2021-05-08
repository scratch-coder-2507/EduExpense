import React, { useEffect, useState } from 'react';
import db from '../firebase';
import "../Styling/Post.css";
import Userblog from './Userblog';

const Post = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        db.collection('blog')
        .get()
        .then((snapshot) => {
            setPost(
            snapshot.docs.map((doc) => doc.data()))
        })
    },[]);
    console.log(post);
    return (
        <div className="post">
            <h1>Your blogs</h1>
            <div className="post__blogs">
                {post.map(({content, title, image, tag, author}) => (
                    <Userblog
                    content={content}
                    title={title}
                    image={image}
                    tag={tag}
                    author={author}

                    />
                ))}

            </div>
        </div>
    )
}

export default Post
