import React, { useEffect, useState } from 'react'
import './blogBoard.css'
import BlogPost from './blogAPI.js'
import Posts from './blogPost/Posts'

function BlogBoard() {
    const [blogPosts, setBlogPosts] = useState([])

    useEffect(()=>{
        setBlogPosts(BlogPost)
    },[])

  return (
    <div className='blog-board'>
       <div className="title">From Our Blog</div>
       <hr className='horizontal-line'/>
       <div className="blog-post">
            {blogPosts.map((post)=>(
                <Posts
                image = {post.blogImage}
                date = {post.date}
                title = {post.title}
                describtion = {post.describtion}
                />
            ))}
       </div>
    </div>
  )
}

export default BlogBoard
