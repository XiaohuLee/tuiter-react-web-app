import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

const TuitStats = ({ id, replies, retuits, likes, liked, dislikes, disliked }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="row pt-2 ps-5 text-secondary">
                <div className="col-2">
                    <span><i className="fa fa-comment"></i></span>
                    <span>{replies}</span>
                </div>
                <div className="col-2">
                    <span><i className="fa fa-retweet"></i></span>
                    <span>{retuits}</span>
                </div>
                <div className="col-2">
                    <i onClick={() => dispatch(updateTuitThunk({
                        _id: id,
                        liked: !liked,
                        likes: liked ? likes - 1 : likes + 1
                    }))} className={`fa fa-heart ${liked ? "text-danger" : ""}`}></i>
                    <span>{likes}</span>
                </div>
                <div className="col-2">
                    <i onClick={() => dispatch(updateTuitThunk({
                        _id: id,
                        disliked: !disliked,
                        dislikes: disliked ? dislikes - 1 : dislikes + 1
                    }))} className={`fa-regular fa-thumbs-down ${disliked ? "text-black" : ""}`}></i>
                    <span>{dislikes}</span>
                </div>
                <div className="col-2">
                    <span><i className="fa fa-upload"></i></span>
                </div>
                <div className="border-bottom border-light pb-2"></div>
            </div>
        </>
    );
}
export default TuitStats;