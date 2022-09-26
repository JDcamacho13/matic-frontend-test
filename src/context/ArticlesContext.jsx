import { createContext, useState } from 'react'

export const ArticlesContext = createContext()

// eslint-disable-next-line react/prop-types
export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([])
  const [loadingArticles, setLoadingArticles] = useState(true)

  const toggleLoading = () => {
    setLoadingArticles(prev => !prev)
  }

  const value = {
    articles,
    setArticles,
    loadingArticles,
    toggleLoading
  }

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  )
}
