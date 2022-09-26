import { FormAddArticle } from './FormAddArticle'
import { PreviousArticle } from './PreviousArticles'
import { ModalContainer } from './ModalContainer'
import { useContext } from 'react'
import { ArticlesContext } from '../context/ArticlesContext'

export const NewArticle = () => {
  const { modal } = useContext(ArticlesContext)
  return (
    <section className="add-article-section">
      <div className="title-section">
        <h2>Add New Blog Article</h2>
        <p>Publish a new blog article to feature in the Easybank homepage.</p>
      </div>
      <FormAddArticle />
      <PreviousArticle />
      {modal && (
        <ModalContainer />
      )}
    </section>
  )
}
