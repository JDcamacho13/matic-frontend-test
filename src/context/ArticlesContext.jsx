import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const ArticlesContext = createContext()

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([])
  const [loadingArticles, setLoadingArticles] = useState(true)
  const [modal, setModal] = useState(false)
  const [articleModal, setArticleModal] = useState({})
  const [loadingModal, setLoadingModal] = useState(false)

  const toggleLoading = () => {
    setLoadingArticles(prev => !prev)
  }

  const openModal = (action, article) => {
    setModal(action)
    setArticleModal(article)
  }

  const closeModal = () => {
    setModal(false)
    setArticleModal({})
  }

  const toggleLoadingModal = () => {
    setLoadingModal(prev => !prev)
  }

  const deleteArticleFromList = (id) => {
    const updateArticles = articles.filter(article => article.id !== id)
    setArticles(updateArticles)
  }

  const editArticleFromList = (id, { author, title, content }) => {
    const updateArticles = articles.map(article => {
      if (article.id === id) {
        return { ...article, author, title, content }
      }

      return article
    })

    setArticles(updateArticles)
  }

  const value = {
    articles,
    setArticles,
    loadingArticles,
    toggleLoading,
    modal,
    articleModal,
    openModal,
    closeModal,
    loadingModal,
    toggleLoadingModal,
    deleteArticleFromList,
    editArticleFromList
  }

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  )
}

ArticlesProvider.propTypes = {
  children: PropTypes.element.isRequired
}
