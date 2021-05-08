import { Avatar } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectSignedIn, selectUserData, setSignedIn, setUserData } from '../features/userSlice';
import { GoogleLogout } from "react-google-login";
import "../Styling/ProfileNavbar.css"

const ProfileNavbar = () => {
    const history = useHistory();
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    };
    return (
        <div className="navbar"> 
            <img onClick={() => {
                history.push("/");
            }} className="navbar__header" src="https://i.ibb.co/br8KHGW/imageonline-co-transparentimage-1.png" alt="EduExpense"/>

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
    )
}

export default ProfileNavbar
