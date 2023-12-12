import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';

function CommentCard({comment}) {

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
        </Card.Body>
        </Card>
    </Col>
  );
}

export default CommentCard;