import React from 'react'
import {auth} from "../Auth/Auth"
import "./Home.css"
import Todo from "../Todo/Todo"
import {useAuthState} from "react-firebase-hooks/auth"


function Home() {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div className="todoMainContainer">
            <div className="todoMainUserInfoHeader">
                <div className="userProfileContainer">
                    <img className="userProfile" width="100" height="100" src={user.photoURL} />
                    <h1 className="userName">{user.displayName}'s Tasks</h1>
                </div>
                <div className="userAccountOptions">
                    <p className="siteUpdates">Site Patch Notes</p>
                    <button className="signOut" onClick={() => auth.signOut()}>Sign Out</button>
                </div>
            </div>
        </div>
        <Todo />
        </div>
    )
}

export default Home
