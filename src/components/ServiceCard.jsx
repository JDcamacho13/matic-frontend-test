import PropTypes from 'prop-types'

export const ServiceCard = ({ icon, tittle, children }) => {
  return (
    <article className="service-card">
      <img src={icon} />
      <h3>{tittle}</h3>
      {children}
    </article>
  )
}

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}
