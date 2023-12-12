import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {fetchArticleById, fetchCommentsByArticle} from './utils/api';
import Spinner from 'react-bootstrap/Spinner';
import CommentCard from './CommentCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function ArticlePage() {
    const {article_id} = useParams();
    const [article, setArticle] = useState();
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);


    useEffect(() => {
        fetchArticleById(article_id)
        .then((articleResponse) => {
            setArticle(articleResponse);
            setLoading(false)

            fetchCommentsByArticle(article_id)
            .then((articleComments) => {
                setComments(articleComments)
            })
        })
    }, [])

    if (loading){
        return (
            <Spinner animation="border" role="status" style={{margin: 20}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
        );        
    }

    return (
        <div className="ArticlePageContainer" style={{margin: 20}}>
            <h2>{article.title}</h2>
            <img className="resizable_img" src={article.article_img_url} style={{paddingTop:20}} />
            <h3 style={{paddingTop:20}}>Written by: {article.author}</h3>
            <p style={{paddingTop: 20}}>{article.body}</p>

            <h4>Comments:</h4>
            <Row lg={3}>
                {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} comment={comment} />
                })}
            </Row>
        </div>
    )
}

export default ArticlePage