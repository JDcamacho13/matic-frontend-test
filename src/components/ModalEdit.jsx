import { useInput } from '../hooks/useInput'
import { ButtonCTA } from './ButtonCTA'
import { toast } from 'react-hot-toast'
import { editArticle } from '../services/articles'
import { useContext } from 'react'
import { ArticlesContext } from '../context/ArticlesContext'

export const ModalEdit = () => {
  const { articleModal, closeModal, loadingModal, editArticleFromList, setLoadingModal } = useContext(ArticlesContext)
  const author = useInput(articleModal.author)
  const title = useInput(articleModal.title)
  const content = useInput(articleModal.content)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!loadingModal) {
      setLoadingModal(true)

      const articleNewData = {
        author: author.value,
        title: title.value,
        content: content.value
      }

      editArticle(articleModal.id, articleNewData).then(res => {
        if (res.statusCode === 200) {
          editArticleFromList(articleModal.id, articleNewData)
          closeModal()
          toast.success('Article edited')
        } else {
          toast.error('Error in edit')
        }
        setLoadingModal(false)
      }).catch(err => {
        console.log(err)
        toast.error('Error in edit')
        setLoadingModal(false)
      })
    }
  }

  return (
    <div>
      <div className='title-section'>
        <h2>Edit Article</h2>
      </div>
       <form className="form" onSubmit={onSubmit}>
      <div>
        <label>Author</label>
        <input type="text" className="inputs" value={author.value} onChange={author.onChange} />
      </div>
      <div>
        <label>Blog title</label>
        <input type="text" className="inputs" value={title.value} onChange={title.onChange} />
      </div>
      <div>
        <label>Blog content</label>
        <textarea className="inputs" value={content.value} onChange={content.onChange} />
      </div>
      <ButtonCTA active={loadingModal}><span>Edit</span></ButtonCTA>
    </form>
    </div>
  )
}
