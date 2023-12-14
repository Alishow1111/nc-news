import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteComment } from './utils/api';
import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';


function CommentCard({comment, setComments, user}) {
  const [err, setErr] = useState(null);

  function removeComment(){
    setErr(null);
    setComments((currentComments) => {
      return currentComments.filter((item) => {
        if (comment.comment_id === item.comment_id){
          return false;
        }

        return true;
      })
    })

    deleteComment(comment.comment_id)
    .catch((error) => {
      setComments((currentComments) => {
        const updatedComments = [...currentComments, comment];
        return updatedComments;
      })
      setErr("Something went wrong, please try again")
    })

  }

  return (
    <Col>
        <Card style={{margin: 20}}>
        <Card.Body>
            <Card.Title>{comment.author}</Card.Title>
            <Card.Text>
            {comment.body}
            </Card.Text>
            <Card.Text>
            <ThumbUpRoundedIcon color="primary" /> {comment.votes}
            </Card.Text>
            <Card.Text>
            {user.username === comment.author ? <DeleteForeverIcon color="error" fontSize="large" onClick={removeComment}/> : null}
            </Card.Text>
            <Card.Text>
              {err ? <p>{err}</p> : null}
            </Card.Text>
        </Card.Body>
        </Card>
    </Col>
  );
}

export default CommentCard;