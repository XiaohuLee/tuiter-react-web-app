import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item"><i className="bi bi-twitter"></i></a>
            <Link to={'/tuiter/home'} className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-fill"></i>
                <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Home</span>
            </Link>
            <Link to={'/tuiter/explore'} className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i>
                <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Notifications</span>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Messages</span>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Bookmarks</span>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-card-list"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Lists</span>
            </a>
            <Link to={'/tuiter/profile'} className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">Profile</span>
            </Link>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots"></i><span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">More</span>
            </a>
        </div>


    );
};
export default NavigationSidebar;

