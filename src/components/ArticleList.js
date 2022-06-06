import React from "react"
import Article from "./Article"

function ArticleList({posts}){
    const postItems = posts.map((post)=>(
        <Article
        key = {post.id}
        title = {post.title}
        preview = {post.preview}
        minutes = {post.minutes}
        />
    ))
    return (
        <main>{postItems}</main>
    )
}

export default ArticleList