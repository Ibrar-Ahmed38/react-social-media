import React from "react";
import "./Newsfeed.css";
import Images from "./Images/ibrar.jpg";


const Newsfeed = () => {
  return (
    <div className="container_fluid">
      <div className="newsfeed">
        <div className="profile__data">
          <img src={Images} className="setImg" alt="ibrar.jpg" />
        </div>

        <div className="search__input">
          <input
            type="search"
            className="input___search"
            placeholder="  Share your idea's with friend"
          />

          <div className="shareIcons">
            <p className="img__p">
              <i class="img__icon fas fa-images"></i>Images/Video
            </p>

            <p className="tag">
              <i class="tag__icon fas fa-tags"></i>Tag
            </p>

            <p className="location">
              <i class="location__icon fas fa-map-marker-alt"></i> Location
            </p>
          </div>
        </div>
          
  
      </div>

    </div>
  );
};

export default Newsfeed;
