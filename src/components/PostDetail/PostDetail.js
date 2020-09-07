import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentInfo from '../CommentInfo/CommentInfo';


 
  

const PostDetail = () => {
            const {postId} = useParams();
            const [postDetail,setpostDetail]= useState({})
            const [comments,setComment]=useState([])
            
        
   useEffect( () => {
                const url=`https://jsonplaceholder.typicode.com/posts/${postId}`
                fetch(url)
                .then( res => res.json())
                .then(data => setpostDetail(data))
            },[])

   
    useEffect(()=> {
            const url2=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
            fetch(url2)
            .then( res => res.json())
            .then( data =>setComment(data))
        },[])



     const postDetailStyle={
            margin:'20px',
            padding:'20px',
           
        }

    return (
        <div>
             <div style={postDetailStyle}>
             <h1>Post detail of ID: {postId} </h1>
             <p>Title: {postDetail.title}</p>
             <p>Body: {postDetail.body}</p>
               
             </div>
            
            <div>
                    {
                    comments.map(comment => <CommentInfo comment={comment}></CommentInfo>)
        
                    } 
            </div>
                
   </div>
    );
};

export default PostDetail;
 
  