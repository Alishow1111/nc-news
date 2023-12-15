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

function fetchCommentsByArticle (article_id){
    return axios.get(`https://nc-news-2.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => {
        return response.data.comments;
    })
    .catch((error) => {
        console.log(error);
    })

}

function fetchUsers (){
    return axios.get(`https://nc-news-2.onrender.com/api/users`)
    .then((response) => {
        return response.data.users;
    })
    .catch((error) => {
        console.log(error);
    })
}

function postComment (article_id, username, commentBody){
    return axios.post(`https://nc-news-2.onrender.com/api/articles/${article_id}/comments`, {
        username: username, 
        body: commentBody
    })
    .then((response) => {
        return response.data.comment;
    })
    .catch((error) => {
        return error;
    })
}

function patchVotes (article_id, count){
    return axios.patch(`https://nc-news-2.onrender.com/api/articles/${article_id}`, 
    {
        inc_votes: count
    })
    .then((response) =>{
        return response;
    })
}

function deleteComment(comment_id){
    return axios.delete(`https://nc-news-2.onrender.com/api/comments/${comment_id}`)
    .then((response) => {
        return response;
    })
}

function fetchTopics(){
    return axios.get('https://nc-news-2.onrender.com/api/topics')
    .then((response) => {
        return response.data.topics;
    })
    .catch((error) => {
        return error;
    })
}

function fetchArticlesByTopic (topic) {
    return axios.get(`https://nc-news-2.onrender.com/api/articles?topic=${topic}`)
    .then((response) => {
        return response.data.articles;
    })
    .catch((error) => {
        console.log(error);
    })
}

export {fetchArticles, fetchArticleById, fetchCommentsByArticle, fetchUsers, postComment, patchVotes, deleteComment, fetchTopics, fetchArticlesByTopic};

