import React from "react";
import { useSelector } from "react-redux";
import Profile from "./profile";

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    return (
        <>
            <Profile profile={profile}/>
        </>
    )

}
export default ProfileComponent;