import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInput, setBlogData } from '../features/userSlice';
import axios from "axios";
import "../Styling/Blog.css";
import db from '../firebase';
import { useHistory } from 'react-router-dom';

const Blog = () => {

    const searchInput = useSelector(selectUserInput);
    const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=74da443369bd202a1f3146a275d761fc`;
    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState();
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    
    const [post, setPost] = useState([]);

    useEffect(() => {
        db.collection('blog')
        .get()
        .then((snapshot) => {
            setPost(
            snapshot.docs.map((doc) => doc.data()))
        })
    },[searchInput]);
    console.log(post);

    useEffect(() => {
        axios
            .get(blog_url)
            .then((response) => {
                dispatch(setBlogData(response.data));
                setBlogs(response.data);
                setLoading(false);  
            }) 
            .catch((error) => {
                console.log(error);
            });       
    },[searchInput]);

    return (
        <div className="blog__page">
            <h1 className="blog__page__header">BLOGS</h1>
            <div className="blogs">
                {post.map(({author, content, title, image, tag}) => (
                    <div className="blog" onClick={() => {
                        history.push("/page")
                    }}>
                        <img src={image}/>
                        <div>
                            <h3 className="sourceName">
                                <span>{tag}</span> 
                            </h3>
                            <h1>{title}</h1>
                            <p>{content}</p>
                            <h4>-{author}</h4>
                        </div>
                    </div>
                ))}

                {blogs?.totalArticles === 0 && (
                    <h1 className="no__blogs">
                        No blogs available 😞. Search something else to read blogs on the 
                        greatest platform.
                    </h1>
                )}
            </div>
        </div>
    );
};

export default Blog;
