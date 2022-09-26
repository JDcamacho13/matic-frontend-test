import PropTypes from 'prop-types'

export const ArticleCard = ({ img, author, title, content }) => {
  return (
    <article className="article-card">
      <img src={img} />
      <div className="article-content">
        <small>{author}</small>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </article>
  )
}

ArticleCard.propTypes = {
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
