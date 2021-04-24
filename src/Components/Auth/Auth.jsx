import "./Auth.css"
import {googleProvider} from "../../config/authproviders"
import socialAuthProvider from "../../service/auth"
 
function Auth() {
    const handleOnClick = async (provider) => {
        const res = await socialAuthProvider(provider)
        console.log(res)
    }
    return (
        <div className="loginAuthContainer">
            <div className="loginAuth">
                <div className="loginAuthTextButtons">
                    <h1 className="title">Welcome</h1>
                    <p className="loginSSL">By logging in you accept our <a target="_blank" href="https://youtu.be/dQw4w9WgXcQ" className="loginSSLlinks">Privacy Policy</a> and <a target="_blank" href="https://youtu.be/dQw4w9WgXcQ" className="loginSSLlinks">Terms of Service</a>.</p>
                    <button onClick={() => handleOnClick(googleProvider)} className="signWithAuthProvBtn"> <img className="logoAuthIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" /> <span className="loginAuthText">Sign in with Google</span></button>
                </div>
            </div>
        </div>
    )
}

export default Auth
