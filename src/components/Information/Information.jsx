import React from 'react'
import "./Information.scss"
import bglogo from "../../assets/images/bg.png";

function Information() {
    return (
        <div className="i" id="Home">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h1 className="i-name">Welcome to the Bell Gardens Grand Prix</h1>
                    <p className="i-description">
                        The Bell Gardens GP is Bell Gardens newest yugioh tournament.
                        As high schoolers we did not have the opportunity to play a tournament that was
                        in the city of Bell Gardens. As a result we always had to duel within our own small circle of friends.
                        Now it is our turn to host these tournaments and give others a chance to experience something we were not able to.

                    </p>

                    <h3>Registration and more information coming soon...</h3>
                </div>
            </div>

            <div className="i-right">

                <img src={bglogo} className="i-img" alt="logo" />

            </div>


        </div>
    )
}

export default Information