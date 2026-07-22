import React, { use, useEffect, useState } from 'react'
import axios from 'axios'

const PostSingle = () => {
  const [post, setPost] = useState({})
  const [id, setId] = useState(0)
  const [buttonClicked, setButtonClicked] = useState(0)

  useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClicked}`)
      .then((res) => {
        setPost(res.data)
      }).catch((err) => {
        console.log(err);
        
      });
      },[buttonClicked])

      const handleClick=()=>{
        setButtonClicked(id);
      }
  return (
    <div>
      <input type="text" onChange={(e)=>setId(e.target.value)} />
      <button onClick={handleClick}>Search</button>
      <h2>{post.title}</h2>
    </div>
  )
}

export default PostSingle
