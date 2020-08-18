import React from 'react'
import { useSelector } from 'react-redux'

const MyProfile = () => {
    const userInfo = useSelector((state) => state.userReducer);
    
    return (
    <>
        <img src={userInfo.photoURL}></img>
        <label>Full Name</label>
        <input type="text" value={userInfo.displayName}></input>

        <label>Full Name</label>
        <input type="email" value={userInfo.email}></input>
    </>
)};

export default MyProfile;