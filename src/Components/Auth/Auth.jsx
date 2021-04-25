import Footer from "../Footer/Footer"
import "./Auth.css"
import firebase from "firebase"

firebase.initializeApp({
    apiKey: "AIzaSyB-cc9a8rbcXe6_HvJi_JKs4ylsKxVAlGM",
    authDomain: "tasksknockout.firebaseapp.com",
    projectId: "tasksknockout",
    storageBucket: "tasksknockout.appspot.com",
    messagingSenderId: "207432997257",
    appId: "1:207432997257:web:3218062878028d99f92958",
    measurementId: "G-NMEWX1G5HB"
})

export const auth = firebase.auth()

function Auth() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <div className="loginAuthContainer">
                <div className="loginAuth">
                    <div className="loginAuthTextButtons">
                        <h1 className="title">Welcome</h1>
                        <p className="loginSSL">By logging in you accept our <a target="_blank" href="https://youtu.be/dQw4w9WgXcQ" className="loginSSLlinks">Privacy Policy</a> and <a target="_blank" href="https://youtu.be/dQw4w9WgXcQ" className="loginSSLlinks">Terms of Service</a>.</p>
                        <button onClick={signInWithGoogle} className="signWithAuthProvBtn"> <img className="logoAuthIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" /> <span className="loginAuthText">Sign in with Google</span></button>
                    </div>
                </div>
            </div>
            <Footer />
      </>
    )
  
}

export default Auth