import React from 'react'
import './Sidebar.css'
import Newsfeed from './Newsfeed'

const Sidebar = () => {
    return (
        <div className="container-fluid sidebar__option">
            <div className="side__bar">
                <ul className="ul__items">
                    <li><a href="#"><i class="social__icon fas fa-rss"></i> Feed</a></li>
                    <li><a href="#"><i class="social__icon far fa-comment-alt"></i> Chat</a></li>
                    <li><a href="#"><i class="social__icon fas fa-play-circle"></i> Videos</a></li>
                    <li><a href="#"><i class="social__icon fas fa-users"></i>Groups</a></li>
                    <li><a href="#"><i class="social__icon fas fa-bookmark"></i> Bookmarks</a></li>
                    <li><a href="#"><i class="social__icon far fa-question-circle"></i>Questions</a></li>
                    <li><a href="#"><i class="social__icon fas fa-briefcase"></i>Jobs</a></li>
                    <li><a href="#"> <i class="social__icon far fa-calendar-week"></i>Events</a></li>
                    <li><a href="#"><i class="social__icon fas fa-graduation-cap"></i>Courses</a></li>
                    
                </ul>
                <div className="search__div"> 
                <button className="search__btn btn btn-primary">Search more</button>
                </div>
                

            </div>
        
            <div>
                    <Newsfeed />
            </div>
        </div>
    )
}

export default Sidebar
