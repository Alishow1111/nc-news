import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


function PostComment() {
    const [commentEntry, setCommentEntry] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        console.log(commentEntry);
    }

    function handleTextareaChange(event){
        setCommentEntry(event.target.value);
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Post a Comment:</Form.Label>
            <Form.Control as="textarea" rows={3} value={commentEntry} onChange={handleTextareaChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </>
    )
}

export default PostComment