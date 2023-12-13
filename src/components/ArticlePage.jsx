import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {fetchArticleById, patchVotes} from './utils/api';
import Spinner from 'react-bootstrap/Spinner';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';




function ArticlePage() {
    const {article_id} = useParams();
    const [article, setArticle] = useState();
    const [voteCount, setVoteCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [vote, setVote] = useState(false);
    const [downVote, setDownVote] = useState(false);


    useEffect(() => {
        fetchArticleById(article_id)
        .then((articleResponse) => {
            setArticle(articleResponse);
            setVoteCount(articleResponse.votes);
            setLoading(false)
        })
    }, [])

    function incrementVote(){
        setVote(true);
        setDownVote(false);
        setVoteCount(1);
        patchVotes(article_id, 1);
    }

    function decrementVote(){
        setVote(false);
        setDownVote(true);
        setVoteCount(-1);
        patchVotes(article_id, -1)
    }

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

            <ThumbUpRoundedIcon color={vote ? "primary" : ""} onClick={incrementVote}/> {article.votes + voteCount}  <ThumbDownRoundedIcon color={downVote ? "error" : ""} onClick={decrementVote} />
        </div>
    )
}

export default ArticlePage