import { useEffect, useContext } from 'react'
import { getAllArticles } from '../services/articles'
import { ArticlesContext } from '../context/ArticlesContext'
import { Loading } from './icons/Loading'

const formatDate = (date) => {
  const dateObj = new Date(date)
  return `${dateObj.getMonth()}/${dateObj.getDate()}/${dateObj.getFullYear()}`
}

const maxLengthFormat = (phrase) => {
  if (phrase.length > 45) return phrase.slice(0, 40) + '...'
  return phrase
}

export const TableBlog = () => {
  const { articles, setArticles, loadingArticles, toggleLoading } = useContext(ArticlesContext)

  useEffect(() => {
    getAllArticles().then(data => {
      setArticles(data)
      toggleLoading()
    })
  }, [])

  if (loadingArticles) return <div className='loading-container'><Loading /></div>

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>AUTHOR NAME</th>
            <th>TITLE</th>
            <th>CONTENT</th>
            <th>DATE</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            articles.map(article => (
              <tr key={article.id}>
                <td className='author-cell'>{article.author}</td>
                <td>{maxLengthFormat(article.title)}</td>
                <td>{maxLengthFormat(article.content)}</td>
                <td>{formatDate(article.createdAt)}</td>
                <td className='options'>
                  <button className='delete'>Delete</button>
                  <button className='edit'>Edit</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
