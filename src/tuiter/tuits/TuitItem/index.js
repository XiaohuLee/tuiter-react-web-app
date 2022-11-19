import React from "react";
import TuitStats from "../TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../../services/tuits-thunks";

const TuitItem = (eachPost) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img src={`/images/${eachPost.image}`} className="rounded-circle" width="50px" height="50px"/>
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(eachPost._id)}></i>
                    <span className="fw-bold">{eachPost.userName} <i className="fa-solid fa-circle-check text-primary"></i></span>
                    <span> {eachPost.handle} . {eachPost.time}</span>
                    <div>{eachPost.tuit}</div>
                </div>
            </div>
            <TuitStats
                id={eachPost._id}
                replies={eachPost.replies}
                retuits={eachPost.retuits}
                likes={eachPost.likes}
                liked={eachPost.liked}
                dislikes={eachPost.dislikes}
                disliked={eachPost.disliked}
            />

        </li>
    )
}
export default TuitItem