import React from 'react'
import "./index.css"
import { PostData } from '../../../Data/PostData'
import Post from '../Post'

const Posts = () => {
  return (
    <div className="Posts">
      {PostData.map((post, id) => {
        return <Post data={post} id={id} />
      })}
    </div>
  )
}

export default Posts