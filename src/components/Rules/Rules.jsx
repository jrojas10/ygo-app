import React from 'react'
import "./Rules.scss"

function Rules() {
    return (
        <div className='r'>
            <h1 id="Rules"><u><b>Rules and Format</b></u></h1>
            <p> The tournament will follow the TCG banlist and we will adjust the price for entry and prizes based on number of entries. All duels will be a best out of 3, with a 40 minute time limit if needed.</p>
            <p>To give an opportunity to players that did not place high in the tournament, there will extra duels for packs at the end where 1st, 2nd, 3rd places cannot participate</p>
            <p> Free food and drinks</p>
            <ul>
                <li>If number of entries is between 8-15, the entry fee will be $10  </li>
                <ul>
                    <li>All particpants will get a Ghosts From the Past: The 2nd Haunting Pack and their choice of OTS tournament pack 18 or 19</li>
                    <li>The format will be a swiss system with 4 rounds</li>
                    <li>For every set won, the winnder will get a pack of Dimension Force booster pack</li>
                    <li>1st place gets a Dimension Force booster box</li>
                    <li>2nd &amp; 3rd each get half Dimension Force booster box</li>
                    <li>4th - 8th place get 2 Dimension Force booster packs</li>

                </ul>

            </ul>

            <ul>
                <li>If number of entries is 16, the entry fee will be  $20</li>
                <ul>
                    <li>All participants will get Ghost from the past: The 2nd Haunting pack, OTS Tournament pack 18 , 19 , and Dimension Force Booster pack</li>
                    <li>The format will follow a bracket double elimination system</li>
                    <li>1st place wins a Dimension Force booster box and Forbidden Droplett (UR)</li>
                    <li>2nd place gets Legendary Duelists: Duels from the deep booster box</li>
                    <li>3rd place gets 6 Dimension Force booster packs</li>
                    <li>4th - 6th get 2 Diemension Force booster packs</li>
                </ul>
            </ul>
        </div>
    )
}

export default Rules