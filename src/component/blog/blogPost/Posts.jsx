import React from 'react'
import './posts.css'
function Posts(props) {
  return (
    <>
         <div className="blog-card">
            <div className="blogImage">
                <img src={props.image} alt="Loadingimage" width='100%'></img>
            </div>
            <div className="blog-detail">
            <div className="detail-date">{props.date}</div>
            <div className="detail-title">{props.title}</div>
            <div className="continue">Continue Reading</div>
            </div>
         </div>
    </>
  )
}

export default Posts
