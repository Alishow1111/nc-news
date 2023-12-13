import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext, useState} from "react";



function ProfileCard({user}) {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [selected, setSelected] = useState(false);

    function setUser (event){
        event.preventDefault();
        setCurrentUser(user);
        setSelected(true);
        console.log(currentUser);
    }

    return (
        <Col>
            <Card style={{margin: 30}}>
            <Card.Img variant="top" src={user.avatar_url} />
            <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>
                Full Name: {user.name}
                </Card.Text>
                <Button variant="primary" onClick={(event) => {setUser(event)}}>{selected ? "Selected" : "Select User"}</Button>
            </Card.Body>
            </Card>
        </Col>
    );
}

export default ProfileCard;