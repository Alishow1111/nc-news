import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { postComment } from './utils/api';
import Spinner from 'react-bootstrap/Spinner';



function PostComment({setComments, user, article_id }) {
    const [commentEntry, setCommentEntry] = useState('')
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    function handleSubmit(event){
        event.preventDefault();
        setLoading(true);
        postComment(article_id, user.username, commentEntry)
        .then((response) => {
            setComments((currentComments) => {
                const newComments = [response, ...currentComments]
                return newComments;
            })
            setLoading(false);
            setErr(null);
        })
        .catch((error) => {
            setErr('Comment couldnt be posted, please try again')
        })

        setCommentEntry('')
    }

    function handleTextareaChange(event){
        setCommentEntry(event.target.value);
    }

    if (loading){
        return (
            <Spinner animation="border" role="status" style={{margin: 20}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
        );        
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Post a Comment:</Form.Label>
            <Form.Control as="textarea" rows={3} value={commentEntry} onChange={handleTextareaChange} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={commentEntry === "" ? true : false}>
            Submit
        </Button>
        </Form>
        {err ? <p>{err}</p> : null}
        </>
    )
}

export default PostComment