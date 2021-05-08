import React, { useState } from 'react';
import "../Styling/Write.css";
import db from '../firebase';

const Write = ({id}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [tag, setTag] = useState("");
    const [author, setAuthor] = useState("");

    const getTitle = (event) => {
        setTitle(event.target.value);
    };
    const getContent = (event) => {
        setContent(event.target.value);
    }
    const getImage = (event) => {
        setImage(event.target.value);
    }
    const getTag = (event) => {
        setTag(event.target.value);
    }
    const getAuthor = (event) => {
        setAuthor(event.target.value);
    }

    const addValue = () => {
        db.collection("blog")
        .doc(id)
        .set({
            author: author,
            title: title,
            content: content,
            image: image,
            tag: tag,
        })
        .then(function() {
            console.log("Value successfully written");
        })
        .catch(function(error) {
            console.error("Error: ", error);
        });
    };

    return (
        <div className="write">
            <div className="write__blog">
                <form>
                    <h1>Write your own blogs...</h1>
                    <input className="author" onBlur={getAuthor} type="text" placeholder="Author"/>  
                    <input className="title" onBlur={getTitle} type="text" placeholder="Title"/>  
                    <textarea className="content" onBlur={getContent} type="text" placeholder="Content"/>
                    <input className="image" onBlur={getImage} type="text" placeholder="Image(Optional)" />
                    <input className="tag" onBlur={getTag} type="text" placeholder="Tag" />
                    <button className="post__button" onClick={addValue} type="submit" >Post</button>
                </form>
            </div>
        </div>
    )
}

export default Write
