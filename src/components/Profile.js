
import React, { useState } from 'react'
import "../Styling/Profile.css";
import { Tabs, Tab } from '@material-ui/core';
import Write from './Write';
import Post from "./Post";
import ProfileNavbar from "./ProfileNavbar"
import { useSelector } from 'react-redux';
import { selectUserData } from '../features/userSlice';

const Profile = () => {
    const userData = useSelector(selectUserData);
    const [selectedTab, setSelectedTab] = useState(0);

    const tabStyle = {
        default_tab:{
            color: '#68C222',
            fontSize: 15
        },
        active_tab:{
            fontFamily: "Segoe UI",
            fontSize: 20,
            fontWeight: "bold"
        }
    };

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <div className="profile">
            <div className="navbar">
                <ProfileNavbar/>
            </div>
            <div className="profile__body">
                <div className="sidebar">
                    <img src={userData?.imageUrl} alt="profile"/>
                    <h1>{userData?.name}</h1>
                </div>
                <div className="profile__tabs">
                    <Tabs clasName="profile__tab"
                    fullWidth
                    TabIndicatorProps={{style: { background:'orange', height: '6px'}}}
                    textColor="#0a9b77"  
                    value={selectedTab} onChange={handleChange}>
                        <Tab style={tabStyle.active_tab} label="Post a blog"/>
                        <Tab style={tabStyle.active_tab} label="Your blogs"/>
                    </Tabs>
                    {selectedTab === 0 && <Write/>}
                    {selectedTab === 1 && <Post/>}
                </div>
            </div> 
        </div>
    )
}

export default Profile
