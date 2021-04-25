import React from 'react'
import firebase from "firebase"
import {auth} from "../Auth/Auth"
import {useAuthState} from "react-firebase-hooks/auth"


function Home() {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>{user.displayName}</h1>
            <img src={user.photoURL}/>
            <p>{user.email}</p>
            <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default Home
