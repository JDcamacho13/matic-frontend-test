import { useContext } from 'react'
import { ModalDelete } from './ModalDelete'
import { ModalEdit } from './ModalEdit'
import { ArticlesContext } from '../context/ArticlesContext'

export const Modal = () => {
  const { modal, articleModal, closeModal, loadingModal } = useContext(ArticlesContext)

  const onClick = (e) => {
    if (e.target.className === 'modal-background' && !loadingModal) {
      closeModal()
    }
  }

  return (
    <div className='modal-background' onClick={onClick}>
      <div className={`modal modal-${modal}`}>
        {
          modal === 'delete'
            ? <ModalDelete />
            : <ModalEdit articleData={articleModal} closeModal={closeModal} />
        }
      </div>
    </div>
  )
}
