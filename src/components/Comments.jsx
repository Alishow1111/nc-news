import { useEffect, useState } from 'react'
import CommentCard from './CommentCard';
import Row from 'react-bootstrap/Row';
import { fetchCommentsByArticle } from './utils/api';
import Spinner from 'react-bootstrap/Spinner';
import PostComment from './PostComment';
import { UserContext } from "../contexts/UserContext";
import { useContext} from "react";
import { Link } from 'react-router-dom';


function Comments({article_id}) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const { currentUser, setCurrentUser } = useContext(UserContext);


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
        {currentUser === "" ? <p>To post comment, select user from <Link to="/profiles">profile</Link> page</p> : <PostComment setComments={setComments} user={currentUser} article_id={article_id} />}
        <Row lg={3}>
            {comments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} />
            })}
        </Row>
        </>
    )
}

export default Comments