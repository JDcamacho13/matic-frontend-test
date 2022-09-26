import { deleteArticle } from '../services/articles'
import { useContext } from 'react'
import { ArticlesContext } from '../context/ArticlesContext'
import { toast } from 'react-hot-toast'
import { ButtonCTA } from './ButtonCTA'

export const ModalDelete = () => {
  const { articleModal, closeModal, loadingModal, toggleLoadingModal, deleteArticleFromList } = useContext(ArticlesContext)

  const onClick = () => {
    if (!loadingModal) {
      toggleLoadingModal()

      deleteArticle(articleModal.id).then(res => {
        if (res.statusCode === 200) {
          deleteArticleFromList(articleModal.id)
          closeModal()
          toast.success('Article deleted')
        } else {
          toast.error('Error in delete')
        }
        toggleLoadingModal()
      }).catch(err => {
        console.log(err)
        toast.error('Error in delete')
        toggleLoadingModal()
      })
    }
  }

  return (
    <>
      <div className='title-section'>
        <h2>Delete Article</h2>
        <p>{articleModal.title}</p>
      </div>
      <div className='container-option'>
        <ButtonCTA active={loadingModal} onClick={onClick} ><span>Delete</span></ButtonCTA>
      </div>
    </>
  )
}
