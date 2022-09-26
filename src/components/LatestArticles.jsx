import { useEffect, useState } from 'react'
import { getLatestArticles } from '../services/articles'
import { ArticleCard } from './ArticleCard'
import { ButtonCTA } from './ButtonCTA'
import PropTypes from 'prop-types'
import { Loading } from './icons/Loading'

export const LatestArticles = ({ toggleAddArticle }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLatestArticles().then(resArticles => {
      setArticles(resArticles)
      setLoading(false)
    })
  }, [])

  return (
    <section className='latest-articles-section'>
      <div className='title-section'>
        <h2>Latest Articles</h2>
        <ButtonCTA onClick={toggleAddArticle}>
          <span>+ Add New Article</span>
        </ButtonCTA>
      </div>
      {
        loading
          ? <div className='loading-container'><Loading /></div>
          : (
              <div className='latest-articles-container'>
              {
                articles.length > 0 && (
                  articles.map(article => (
                    <ArticleCard
                      key={article.id}
                      img={article.imageUrl}
                      author={article.author}
                      title={article.title}
                      content={article.content}
                    />
                  ))
                )
              }
              </div>
            )
      }

    </section>
  )
}

LatestArticles.propTypes = {
  toggleAddArticle: PropTypes.func.isRequired
}
