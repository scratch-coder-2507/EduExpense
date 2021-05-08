import React from 'react'
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { selectSignedIn, setSignedIn, setUserData } from "../features/userSlice";
import "../Styling/Homepage.css"

const Homepage = () => {
    const isSignedIn = useSelector(selectSignedIn);
    const dispatch = useDispatch();
    
    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };

    return (
        <div className="home__page" style={{display: isSignedIn ? "none" : ""}}>
            {!isSignedIn ? ( 
            <div className="login__message">
            <img src="https://i.ibb.co/tzXcwVH/imageonline-co-transparentimage-2.png" alt="EduExpense"/>
            <h1>A Readers favourite place!</h1>
            <p>
                We provide high quality online resource for reading blogs. Just sign 
                up and start reading some quality blogs.
            </p>
            <GoogleLogin
                clientId="1001176643414-3iluf5f2usrm6td6pq1q80d2cs589psf.apps.googleusercontent.com"
                render={(renderProps)=> (
                    <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="login__button"
                    >
                        Login with Google
                    </button>
                )}
                onSuccess={login}
                onFailure={login}
                isSignedIn={true}
                cookiePolicy={"single_host_origin"}
                />
        </div> 
            ) : (
                ""
            )}
            
        </div>
    );
};

export default Homepage;

