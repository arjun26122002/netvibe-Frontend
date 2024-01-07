import React from 'react'
import Logosearch from "../../../Components/Left/LogoSearch/index"
import Profilecard from '../../../Components/Left/ProfileCard/index'
import "./index.css"
import FollowersCard from '../FollowersCard'
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <Logosearch/>
        <Profilecard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileSide