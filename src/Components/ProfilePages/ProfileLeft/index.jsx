import React from 'react'
import "./index.css"
import LogoSearch from "../../Left/LogoSearch"
import FollowersCard from "../../Left/FollowersCard"
import InfoCard from '../InfoCard'

const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
         <LogoSearch />
         <InfoCard />
         <FollowersCard />

    </div>
  )
}

export default ProfileLeft