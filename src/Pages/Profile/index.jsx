import React from 'react'
import ProfileLeft from '../../Components/ProfilePages/ProfileLeft'
import './index.css'
import Profilecard from '../../Components/Left/ProfileCard'
import PostSide from "../../Components/Middle/PostSide"
import RightSide from "../../Components/Right/RightSide"

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft />

        <div className="Profile-center">
          <Profilecard />
          <PostSide />
        </div>

        <RightSide />
    </div>
  )
}

export default Profile 