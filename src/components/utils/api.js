import axios from 'axios'

function fetchArticles () {
    return axios.get('https://nc-news-2.onrender.com/api/articles')
    .then((response) => {
        return response.data.articles;
    })
    .catch((error) => {
        console.log(error);
    })
}

function fetchArticleById (article_id) {
    return axios.get(`https://nc-news-2.onrender.com/api/articles/${article_id}`)
    .then((response) => {
        return response.data.article;
    })
    .catch((error) => {
        console.log(error);
    })
}

export {fetchArticles, fetchArticleById};