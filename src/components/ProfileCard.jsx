import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {Link } from "react-router-dom";



function ProfileCard({user}) {

  return (
    <Col>
        <Card style={{margin: 30}}>
        <Card.Img variant="top" src={user.avatar_url} />
        <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <Card.Text>
            Full Name: {user.name}
            </Card.Text>
            <Link> 
              <Button variant="primary">Select User</Button>
            </Link>
        </Card.Body>
        </Card>
    </Col>
  );
}

export default ProfileCard;