import { Link } from "react-router-dom";
import "./index.css"
const Profile = ({profile}) => {
    return (
        <>
            <div className="list-group-item d-flex flex-column">
                <h5 className="m-0">{profile.username}</h5>
                <p className="m-0 text-secondary small">{profile.tweetCount} Tweets</p>
            </div>
            <div className="list-group-item p-0 position-relative">
                <img src={profile.bannerPicture} className="wd-profile-banner" />
                <img
                    src={profile.profilePicture}
                    className="position-absolute rounded-circle border border-4 border-white wd-profile-pic"
                />

            </div>
            <div className="list-group-item wd-profile-gap">
                <Link to="edit-profile">
                    <button
                        type="button"
                        className="btn border fw-bold rounded-pill wd-profile-edit position-absolute top-0 end-0 me-3 mt-3"
                    >
                        Edit Profile
                    </button>
                </Link>
                <h5 className="fw-bold m-0">{profile.username}</h5>
                <div className="text-secondary">@{profile.handle}</div>
                <div className="my-2">{profile.bio}</div>
                <div className="d-flex flex-wrap text-secondary mb-2">
                    {profile.location && (
                        <div className="me-3">
                            <i className="bi bi-geo-alt pe-2"></i>
                            {profile.location}
                        </div>
                    )}
                    {profile.dob && (
                        <div className="me-3">
                            <i className="bi bi-balloon pe-2"></i>
                            {new Date(profile.dob).toLocaleDateString("en-us", {
                                timeZone: "UTC",
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </div>
                    )}
                    {profile.joined && (
                        <div className="me-3">
                            <i className="bi bi-calendar3 pe-2"></i>
                            {"Joined "}
                            {new Date(profile.joined).toLocaleDateString("en-us", {
                                timeZone: "UTC",
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </div>
                    )}
                </div>
                <div className="d-flex text-secondary small">
                    <span className="fw-bold">{profile.followingCount}</span>
                    <span className="me-3">&nbsp;Following</span>
                    <span className="fw-bold">{profile.followersCount}</span>
                    <span className="me-3">&nbsp;Followers</span>
                </div>
            </div>

        </>
    )
}
export default Profile;