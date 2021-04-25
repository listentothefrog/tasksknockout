import React from 'react'
import firebase from "firebase"
import Home from "./Components/Home/Home"
import Auth from "./Components/Auth/Auth"
import {useAuthState} from "react-firebase-hooks/auth"

const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();

function App() {
    const [user] = useAuthState(auth);
    return (
        <section>
            {user ? <Home /> : <Auth />}
        </section>
    )
}

export default App
