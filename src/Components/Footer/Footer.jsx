import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerImageContainer">
                <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/boxing_glove.png" className="logoImg"/>
                <h3>TasksKnockout</h3>
            </div>
            <div className="footerSSL">
                <div className="footerSLLSub">
                    <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/discord_icon_130958.png" className="sslSubIcon"/>
                    <h3>Discord</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer
