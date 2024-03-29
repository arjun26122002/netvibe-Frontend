import React from 'react'
import cover from "../../../img/cover.jpg"
import Profile from "../../../img/profileImg2.jpg"
import "./index.css"


const Profilecard = () => {


  const ProfilePge = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImage">
        <img src={cover} alt='' />
        <img src={Profile} alt='' />
      </div>

      <div className="ProfileName">
        <span>Arjun Dey</span>
        <span>Junior Software Developer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>11,000</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>11,000</span>
            <span>Followers</span>
          </div>

          {ProfilePge && (
            <>
              <div className="vl">

              </div>
              <div className="follow">
                <span>
                  3
                </span>
                <span>
                  Posts
                </span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePge ? "" : <span>My Profile</span>}
    </div>
  )
}

export default Profilecard