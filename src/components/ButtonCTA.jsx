import PropTypes from 'prop-types'

export const ButtonCTA = ({ onClick, active, children }) => {
  const classname = 'CTA-button ' + (active ? 'active' : '')
  return (
    <button className={classname} disabled={active} onClick={onClick}>
      {children}
    </button>
  )
}

ButtonCTA.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.element.isRequired
}
