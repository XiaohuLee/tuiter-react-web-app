import React from "react";

const liked = (post) => {
    if(post.liked) {
        return <span><i className="fa fa-heart text-danger"></i></span>;
    } else {
        return <span><i className="fa fa-heart"></i></span>;
    }
}
const TuitStats = (post) => {
    return (
        <>
            <div className="row pt-2 ps-5 text-secondary">
                <div className="col-3">
                    <span><i className="fa fa-comment"></i></span>
                    <span className="ps-2">{post.replies}</span>
                </div>
                <div className="col-3">
                    <span><i className="fa fa-retweet"></i></span>
                    <span className="ps-2">{post.retuits}</span>
                </div>
                <div className="col-3">
                    {liked(post)}
                    <span className="ps-2">{post.likes}</span>
                </div>
                <div className="col-3">
                    <span><i className="fa fa-upload"></i></span>
                </div>
                <div className="border-bottom border-light pb-2"></div>
            </div>
        </>
    );
}
export default TuitStats;