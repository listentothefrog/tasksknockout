import React from 'react'
import {auth} from "../Auth/Auth"
import "./Home.css"
import Todo from "../Todo/Todo"
import {useAuthState} from "react-firebase-hooks/auth"
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardIcon from '@material-ui/icons/Dashboard';


function Home() {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div className="todoMainContainer">
            <div className="todoMainUserInfoHeader">
                <div className="logoContainer">
                    <h3>TasksKnockout</h3>
                </div>
                <div className="userAccountOptions">
                    <DashboardIcon className="siteUpdatesIcons"/>
                    <NotificationsIcon className="siteUpdatesIcons"/>
                    <button className="signOut" onClick={() => auth.signOut()}>Sign Out</button>
                    <img className="userProfile" src={user.photoURL} />
                </div>
            </div>
        </div>
        <Todo />
        </div>
    )
}

export default Home
