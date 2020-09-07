import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });



const CommentInfo = (props) => {
    const classes = useStyles();
     const{postId,name,email,body}=props.comment;
     const commentStyle={
     padding:"15px",
     marginRight:'15px',  
     marginTop:"50px",
     float:"left"
    }
     
   return (
        <div style={commentStyle}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="static/image/profile/profile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Comment Info
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p >Post ID: {postId}</p>
           <p>Name : {name}</p>
           <p>Email : {email}</p>
           <p>Body : {body}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
          
          
           </div>
          
    );
};

export default CommentInfo;