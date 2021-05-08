import React, { useState } from 'react';
import { Avatar } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from 'react-redux'
import { setSignedIn, setInput, selectSignedIn, selectUserData, setUserData } from '../features/userSlice'
import "../Styling/Navbar.css";
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();
    const [inputValue, setInputValue] = useState("tech")
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    };

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setInput(inputValue));
    };

    return (
        <div className="navbar"> 
            <img  className="navbar__header" src="https://i.ibb.co/br8KHGW/imageonline-co-transparentimage-1.png" alt="EduExpense"/>
            {isSignedIn && (
            <div className="blog__search">
                <input 
                className="search" 
                placeholder="Search for a blog " 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}/>
                <button className="submit" onClick={handleClick}> 
                    Search
                </button>
            </div> 
             )}

             {isSignedIn ? (
             <div className="navbar__user__data">
                <Avatar 
                onClick={() => {
                    history.push("/profile");
                }}
                className="user"
                src={userData?.imageUrl} 
                alt={userData?.name} />
                <h1 onClick={() => {
                    history.push("/profile");
                }}
                className="signedIn">{userData?.givenName}</h1>
                <GoogleLogout 
                clientId="1001176643414-3iluf5f2usrm6td6pq1q80d2cs589psf.apps.googleusercontent.com" 
                render={(renderProps) => (
                    <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="logout__button">
                        Logout
                    </button>
                )}
                onLogoutSuccess={logout}
                />
            </div>
        ) : (

            <h1 className="notSignedIn">User not available</h1>
        )}

        </div>
    );
};

export default Navbar;
