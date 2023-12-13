import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {fetchArticleById} from './utils/api';
import Spinner from 'react-bootstrap/Spinner';
import Comments from './Comments';




function ArticlePage() {
    const {article_id} = useParams();
    const [article, setArticle] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticleById(article_id)
        .then((articleResponse) => {
            setArticle(articleResponse);
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

    return (
        <div className="ArticlePageContainer" style={{margin: 20}}>
            <h2>{article.title}</h2>
            <img className="resizable_img" src={article.article_img_url} style={{paddingTop:20}} />
            <h3 style={{paddingTop:20}}>Written by: {article.author}</h3>
            <p style={{paddingTop: 20}}>{article.body}</p>

            <Comments article_id={article_id} />
               
        </div>
    )
}

export default ArticlePage