import { useEffect, useState } from 'react'
import { getLatestArticles } from '../services/articles'
import { ArticleCard } from './ArticleCard'
import { ButtonCTA } from './ButtonCTA'

export const LatestArticles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLatestArticles().then(resArticles => {
      setArticles(resArticles)
    })
  }, [])

  return (
    <section className='latest-articles-section'>
      <div className='latest-article-title'>
        <h2>Latest Articles</h2>
        <ButtonCTA>
          + Add New Article
        </ButtonCTA>
      </div>
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
    </section>
  )
}
