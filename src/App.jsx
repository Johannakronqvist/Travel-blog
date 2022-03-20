import React from 'react';
import Header from './components/Header';
import BloggPost from './components/BloggPost';
import travelData from './data'
import './style.css'

export default function() {
  let data = travelData

  let post = data.map( post => {
    return <BloggPost travelData={post} key={post.id}/>
  })

  return (
    <div>
      <Header />
      <main>
        {post}
      </main>
    </div>

  )
}