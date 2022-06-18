import React, { Component } from 'react'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import "./Footer.scss"




class Footer extends Component {
    render() {
        return (
            <div className="ftr" id="Follow">
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 d-flex align-items-center">
                            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                <svg className="bi" width="30" height="24"></svg>
                            </a>
                            <p>Follow Us</p>

                            <a href="https://twitter.com/ygoGrandPrix" target="_blank" rel="noreferrer" className="ml-3 text-muted text-decoration-none">
                                <FaTwitter className="icon" />
                            </a>

                            <a href="https://www.youtube.com/channel/UCZB0ERdrG9h69omWEztMjsw" target="_blank" rel="noreferrer" className="ml-3 text-muted text-decoration-none">
                                <FaYoutube className="icon" />
                            </a>
                            <a href="https://www.instagram.com/bellgardensgp/" target="_blank" rel="noreferrer" className="ml-3 text-muted text-decoration-none">
                                <FaInstagram className="icon" />
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        )

    }
}
export default Footer



