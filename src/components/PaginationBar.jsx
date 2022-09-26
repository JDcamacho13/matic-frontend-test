import PropTypes from 'prop-types'
import { ArrowLeft } from './icons/ArrowLeft'
import { ArrowRight } from './icons/ArrowRight'

export const PaginationBar = ({ page, setPage, totalPages, iterator }) => {
  return (
    <div className='pagination'>
      <button disabled={page === 0} onClick={() => setPage(page - 1)}>
        <ArrowLeft />
        <span style={{ marginLeft: '15px' }}>Previous</span>
      </button>
      <div>
      <nav>
        {
          iterator.map(i => (
            <button key={i} onClick={() => setPage(i - 1)} className={i - 1 === page ? 'active' : ''} >{i}</button>
          ))
        }
      </nav>
      </div>
      <button disabled={page + 1 === totalPages} onClick={() => setPage(page + 1)}>
        <span style={{ marginRight: '15px' }}>Next</span>
        <ArrowRight />
      </button>
    </div>
  )
}

PaginationBar.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  iterator: PropTypes.array.isRequired
}
