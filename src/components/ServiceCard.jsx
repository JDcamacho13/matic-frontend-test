// eslint-disable-next-line react/prop-types
export const ServiceCard = ({ icon, tittle, children }) => {
  return (
    <article className="service-card">
      <img src={icon} />
      <h3>{tittle}</h3>
      {children}
    </article>
  )
}
