import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


function ArticleCard({article}) {
  return (
    <Col>
        <Card style={{margin: 30}}>
        <Card.Img variant="top" src={article.article_img_url} />
        <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>
            Written by: {article.author}
            </Card.Text>
            <Card.Text>
            Topic: {article.topic}
            </Card.Text>
            <Button variant="primary">Read More...</Button>
        </Card.Body>
        </Card>
    </Col>
  );
}

export default ArticleCard;