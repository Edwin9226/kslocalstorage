import axios from "axios";
import React, { useEffect, useState } from 'react'

const Axios = () => {
    const [post, setPost]= useState([]);

    console.log(`${process.env.REACT_APP_URL}`);
    
    useEffect(() => {
      axios({
        url: `${process.env.REACT_APP_URL}`,
      })
        .then((response) => {
          setPost(response.data);
           
        })
        .catch((error) => {
          console.log(error);
        });
      
    }, [setPost]);


  return (
    <div>
    {post.map((item) => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    ))}
  </div>

  )
}

export default Axios