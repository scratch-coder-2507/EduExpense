import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUserData } from '../features/userSlice';
import db from '../firebase';
import "../Styling/Page.css";
import Pageblog from './Pageblog';
import ProfileNavbar from './ProfileNavbar';

const Page = () => {
    const [page,setPage] = useState([]);
    const userData = useSelector(selectUserData);

    useEffect(() => {
        db.collection('blog')
        .get()
        .then((snapshot) => {
            setPage(
            snapshot.docs.map((doc) => doc.data()))
        })
    },[]);
    console.log(page);
    return (
        <div classname="page">
            <div className="page__navbar">
                <ProfileNavbar/>
            </div>
            <div className="page__body">
                <div className="sidebar">
                    <img src={userData?.imageUrl} alt="profile"/>
                    <h1>{userData?.name}</h1>
                </div>
                <div className="page__tab">
                    {page.map(({author, content, title, image, tag}) => (
                        <div classNAme="pageblogs">
                        <Pageblog
                        author={author}
                        content={content}
                        title={title}
                        image={image}
                        tag={tag}
                        />
                        </div>
                    ))}
                </div>
            </div>       
        </div>
    )
}

export default Page

