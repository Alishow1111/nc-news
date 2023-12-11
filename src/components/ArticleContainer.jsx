import { useState, useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios'
import ArticleCard from './ArticleCard';
import Row from 'react-bootstrap/Row';import Col from 'react-bootstrap/Col';



function ArticleContainer() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://nc-news-2.onrender.com/api/articles')
        .then((response) => {
            setArticles(response.data.articles);
            setLoading(false)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    if (loading){
        return (
            <Spinner animation="border" role="status">
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

export default ArticleContainer