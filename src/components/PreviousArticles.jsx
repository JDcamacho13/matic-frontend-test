import { TableBlog } from './TableBlog'

export const PreviousArticle = () => {
  return (
    <section>
      <div className="title-section">
        <h2>Previous Articles</h2>
        <p>Review and edit previous blog posts published on to the homepage. </p>
      </div>
      <TableBlog />
    </section>
  )
}
