import { useEffect, useState } from 'react'
import CommentCard from './CommentCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchCommentsByArticle } from './utils/api';
import Spinner from 'react-bootstrap/Spinner';


function Comments({article_id}) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCommentsByArticle(article_id)
        .then((articleComments) => {
            setComments(articleComments)
            setLoading(false)
        })
    }, [])

    if (loading){
        return (
            <Spinner animation="border" role="status" style={{margin: 20}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
        );        
    }

    if (comments.length === 0){
        return (
            <h4>No Comments Posted</h4>
        )
    }

    return (
        <>
        <h4>Comments</h4>
        <Row lg={3}>
            {comments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} />
            })}
        </Row>
        </>
    )
}

export default Comments