import React from 'react'
import '../Home/index.css'
import ProfileSide from '../../Components/Left/ProfileSide'
import PostSide from '../../Components/Middle/PostSide'
import RightSide from '../../Components/Right/RightSide'


const Home = () => {
    return (
        <div className="Home">
            <ProfileSide />
            <PostSide />
            <RightSide />
        </div>
    )
}

export default Home