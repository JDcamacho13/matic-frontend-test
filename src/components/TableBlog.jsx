import { useEffect, useContext } from 'react'
import { getAllArticles } from '../services/articles'
import { ArticlesContext } from '../context/ArticlesContext'
import { Loading } from './icons/Loading'
import { PaginationBar } from './PaginationBar'
import { usePagination } from '../hooks/usePagination'

const formatDate = (date) => {
  const dateObj = new Date(date)
  return `${dateObj.getMonth()}/${dateObj.getDate()}/${dateObj.getFullYear()}`
}

const maxLengthFormat = (phrase) => {
  if (phrase.length > 45) return phrase.slice(0, 40) + '...'
  return phrase
}

export const TableBlog = () => {
  const { articles, setArticles, loadingArticles, setLoadingArticles, openModal } = useContext(ArticlesContext)
  const { data, page, totalPages, iterator, setPage } = usePagination(articles)

  useEffect(() => {
    getAllArticles().then(data => {
      setArticles(data)
      setLoadingArticles(false)
    })
  }, [])

  if (loadingArticles) return <div className='loading-container'><Loading /></div>

  const onClick = (action, article) => {
    openModal(action, article)
  }

  return (
    <>
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
            data.map(article => (
              <tr key={article.id}>
                <td className='author-cell'>{article.author}</td>
                <td>{maxLengthFormat(article.title)}</td>
                <td>{maxLengthFormat(article.content)}</td>
                <td>{formatDate(article.createdAt)}</td>
                <td className='options'>
                  <button className='delete' onClick={() => onClick('delete', article) }>Delete</button>
                  <button className='edit' onClick={() => onClick('edit', article) }>Edit</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    <PaginationBar
      page={page}
      setPage={setPage}
      totalPages={totalPages}
      iterator={iterator}
    />
    </>
  )
}
