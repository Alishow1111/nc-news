import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {fetchArticleById, patchVotes} from './utils/api';
import Spinner from 'react-bootstrap/Spinner';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import Comments from './Comments';
import ErrorPage from './ErrorPage';




function ArticlePage() {
    const {article_id} = useParams();
    const [article, setArticle] = useState();
    const [voteCount, setVoteCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [vote, setVote] = useState(false);
    const [downVote, setDownVote] = useState(false);
    const [err, setErr] = useState(false);

    useEffect(() => {
        fetchArticleById(article_id)
        .then((articleResponse) => {
            setLoading(false)
            setArticle(articleResponse);
            setVoteCount(articleResponse.votes);

            const hasVoted = localStorage.getItem(`vote_${article_id}`);
            if (hasVoted === 'up') {
                setVote(true);
            } else if (hasVoted === 'down') {
                setDownVote(true);
            }

        })
        .catch(() => {
            setLoading(false);
            setErr(true);
        })
    }, [])

    function incrementVote() {
        if (!vote) {
            setVote(true);
            setDownVote(false);
            setVoteCount((currentVotes) => currentVotes + 1);
            patchVotes(article_id, 1)
            .catch((error) => {
                setVoteCount((currentVotes) => currentVotes - 1);
            })
            localStorage.setItem(`vote_${article_id}`, 'up');
        }
    }

    function decrementVote() {
        if (!downVote) {
            setVote(false);
            setDownVote(true);
            setVoteCount((currentVotes) => currentVotes - 1);
            patchVotes(article_id, -1)
            .catch((error) => {
                setVoteCount((currentVotes) => currentVotes + 1);
            })
            localStorage.setItem(`vote_${article_id}`, 'down');
        }
    }

    if (loading){
        return (
            <Spinner animation="border" role="status" style={{margin: 20}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
        );        
    }

    if (err){
        return <ErrorPage type="404" msg="Article doesnt exist" />
    }

    return (
        <div className="ArticlePageContainer" style={{margin: 20}}>
            <h2>{article.title}</h2>
            <img className="resizable_img" src={article.article_img_url} style={{paddingTop:20}} />
            <h3 style={{paddingTop:20}}>Written by: {article.author}</h3>
            <p style={{paddingTop: 20}}>{article.body}</p>

            <ThumbUpRoundedIcon color={vote ? "primary" : ""} onClick={incrementVote}/> {voteCount}{' '}  
            <ThumbDownRoundedIcon color={downVote ? "error" : ""} onClick={decrementVote} />

            {err ? <p>{err}</p> : null}

            <Comments article_id={article_id} />
               
        </div>
    )
}

export default ArticlePage