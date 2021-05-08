import React from 'react'
import { useSelector } from 'react-redux';
import { selectUserData } from '../features/userSlice';
import "../Styling/Pageblog.css";

const Pageblog = ({ author, content, image, tag, title}) => {
    const userData = useSelector(selectUserData);
    return (
        <div className="pageblog">
            <div className="post">
                <div className="post__header">
                    <img src={userData?.imageUrl} alt=""/>
                    <h1>{userData?.name}</h1>
                </div>                
                <div className="post__body">
                    <h1>{title}</h1> 
                    <p>{content}</p>
                    <img src={image} alt={title}/>
                    <h3 className="post__tag">
                        <span>{tag}</span> 
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Pageblog
