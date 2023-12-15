import { useState, useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner';
import ArticleCard from './ArticleCard';
import Row from 'react-bootstrap/Row';
import {fetchArticlesByTopic} from './utils/api';
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage'


function ArticlesByTopic() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const {slug} = useParams();
    const [err, setErr] = useState(false);


    useEffect(() => {
        fetchArticlesByTopic(slug)
        .then((articlesResponse) => {
            setArticles(articlesResponse);
            setLoading(false)
        })
        .catch(() => {
            setLoading(false);
            setErr(true);
        })
    }, [])

    if (loading){
        return (
            <Spinner animation="border" role="status" style={{margin: 20}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
        );        
    }

    if (err){
        return <ErrorPage type="404" msg="Topic doesnt exist" />
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