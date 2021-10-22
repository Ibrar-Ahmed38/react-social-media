import React from 'react'
import './Newsfeed.css'
import Images from './Images/ibrar.jpg'
const Newsfeed = () => {
    return (
        <div className="newsfeed">
            <div className="profile__data">
                    <img src={Images} className="setImg" alt="ibrar.jpg" />
            </div>

            <div className="search__input">
                        <input type="search" className="input___search" placeholder="  Share your idea's with friend" />
                    </div>
        </div>
    )
}

export default Newsfeed
