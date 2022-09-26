import { FormAddArticle } from './FormAddArticle'
import { PreviousArticle } from './PreviousArticles'

export const NewArticle = () => {
  return (
    <section className="add-article-section">
      <div className="title-section">
        <h2>Add New Blog Article</h2>
        <p>Publish a new blog article to feature in the Easybank homepage.</p>
      </div>
      <FormAddArticle />
      <PreviousArticle />
    </section>
  )
}
