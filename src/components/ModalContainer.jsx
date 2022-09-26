import { createPortal } from 'react-dom'
import { Modal } from './Modal'

export const ModalContainer = ({ articleData }) => {
  return createPortal(<Modal articleData={articleData} />, document.getElementById('modal-portal'))
}
