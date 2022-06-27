import React from 'react'
import "./Information.scss"
import dg from "../../assets/images/1dg.png";

function Information() {
    return (
        <div className="i" id="Information">
            <div className="i-left">
                <div className="i-left-wrapper">

                    <h1 className="i-name">Welcome to the Bell Gardens Grand Prix</h1>
                    <h3>About Us</h3>
                    <p className="i-description">

                        The Bell Gardens GP is Bell Gardens newest yugioh tournament.
                        As high schoolers we did not have the opportunity to play a tournament that was
                        in the city of Bell Gardens. As a result we always had to duel within our own small circle of friends.
                        Now it is our turn to host these tournaments and give others a chance to experience something we were not able to.

                    </p>
                    <h2> First Tournament Scheduled July 10, 12:00 PM</h2>
                    <h3>Location: 6427 Eastern Avenue, Bell Gardens - next to Allen English &amp; Estrada Funeral Services</h3>
                    <h5> If You are interested, have questions, or want to provide feeback, fill out the form <a href='#Register'>HERE</a></h5>
                    <h5> Please make sure the read the Rules and format below</h5>


                </div>
            </div>

            <div className="i-right">
                <img src={dg} className="i-img" alt="logo" />


            </div>


        </div>
    )
}

export default Information