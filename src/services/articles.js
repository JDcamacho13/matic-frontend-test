const API_BASE_URL = 'https://www.api.recruitment.matic.io'

export const getLatestArticles = () => {
  return fetch(API_BASE_URL + '/articles').then(res => res.json()).then(res => {
    const articles = res.data
    return articles.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    }).slice(0, 4)
  })
}

export const getAllArticles = () => {
  return fetch(API_BASE_URL + '/articles').then(res => res.json()).then(res => {
    const articles = res.data
    return articles.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
  })
}

export const createNewArticle = ({ author, title, content }) => {
  return fetch(API_BASE_URL + '/articles', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      author,
      title,
      content
    })
  }).then(res => res.json()).then(res => {
    return res
  })
}
