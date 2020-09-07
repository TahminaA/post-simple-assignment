import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';



const Post = (props) => {
     const{userId,title,id,body}=props.post;
     const history=useHistory();

     const handleClickPost= (postId) =>{
         history.push(`/post/${postId}`)
    }

     const postStyle={
         border:'1px solid purple',
         margin:'20px',
         padding:'20px',
         borderRadius:'20px'
     }
     
    return (
        <div style={postStyle}>
            <h1>User ID :{userId}</h1>
            <h1>ID :{id}</h1>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <Button onClick={ () => handleClickPost (id)} variant="contained" color="secondary">See More</Button>
        </div>
    );
};

export default Post;