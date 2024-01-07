import React from 'react'
import '../Home/index.css'
import ProfileSide from '../../Components/Left/ProfileSide'
import PostSide from '../../Components/Middle/PostSide'


const Home = () => {
    return (
        <div className="Home">
            <ProfileSide/>
            <PostSide/>
            <div className="RightSide">Updated soon.....</div>
        </div>
    )
}

export default Home