import { useState, useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner';
import ArticleCard from './ArticleCard';
import Row from 'react-bootstrap/Row';
import {fetchArticlesByTopic} from './utils/api';
import { useParams } from 'react-router-dom';




function ArticlesByTopic() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const {slug} = useParams();


    useEffect(() => {
        fetchArticlesByTopic(slug)
        .then((articlesResponse) => {
            setArticles(articlesResponse);
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
        <>
        <Row lg={3}>
           {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id} />
            })}
        </Row>
        </>
    )
}

export default ArticlesByTopic