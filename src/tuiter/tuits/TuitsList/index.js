import React from "react";
import TuitItem from "../TuitItem";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const TuitArray = useSelector(state => state.tuits)

    return (
        <ul className="list-group">
            {
                TuitArray.map(post =>
                    <TuitItem
                        {...post}/>)
            }
        </ul>
    );
}
export default TuitsList