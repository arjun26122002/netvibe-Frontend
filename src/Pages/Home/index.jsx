import React from 'react'
import '../Home/index.css'
import ProfileSide from '../../Components/Left/ProfileSide'


const Home = () => {
    return (
        <div className="Home">
            <ProfileSide/>
            <div className="PostSide">post</div>
            <div className="RightSide">Updated soon.....</div>
        </div>
    )
}

export default Home