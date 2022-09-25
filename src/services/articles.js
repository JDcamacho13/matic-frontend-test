const API_BASE_URL = 'https://www.api.recruitment.matic.io'

export const getLatestArticles = () => {
  return fetch(API_BASE_URL + '/articles').then(res => res.json()).then(res => {
    const articles = res.data
    return articles.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    }).slice(0, 4)
  })
}
