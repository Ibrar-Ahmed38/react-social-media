import React from 'react'
import './OnlineStatus.css'
import Images from './Images/meelad.jpg'
import ib__Somro from './Images/ibrar.jpg'
const OnlineStutus = () => {
    return (
        <div className="container-fluid right__sidesection">
            <div className="OnlineStatus">
                <p>
                    <i class="gift fas fa-gift"></i>
                    <span className="Ibrar__faster">Ibrar  Ahmed</span> and <span className="three__others">3 others friends </span>
                     have a birthday today
                </p>

                <div className="ad__img">
                    <img src={Images} className="add__image" alt="ibrar.jpg" />
                </div>
            </div>

            <div className="status">
                <h5>Online Friends</h5>
                <div className="show__Status">
                    <img src={ib__Somro} className="online__img" alt="" />
                    <h5>Ibrar Ahmed</h5>
                </div>

                <div className="show__Status">
                    <img src={ib__Somro} className="online__img" alt="" />
                    <h5>Ibrar Ahmed</h5>
                </div>

                <div className="show__Status">
                    <img src={ib__Somro} className="online__img" alt="" />
                    <h5>Ibrar Ahmed</h5>
                </div>

                <div className="show__Status">
                    <img src={ib__Somro} className="online__img" alt="" />
                    <h5>Ibrar Ahmed</h5>
                </div>
            </div>
        </div>
    )
}

export default OnlineStutus
