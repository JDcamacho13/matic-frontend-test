import { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useInput } from '../hooks/useInput'
import { createNewArticle } from '../services/articles'
import { ButtonCTA } from './ButtonCTA'
import { ArticlesContext } from '../context/ArticlesContext'

const toastOptions = {
  duration: 4000,
  position: 'top-center',

  // Styling
  style: {
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '28px',
    letterSpacing: '-0.01em'
  }
}

export const FormAddArticle = () => {
  const { setArticles } = useContext(ArticlesContext)
  const [loading, setLoading] = useState(false)
  const author = useInput('')
  const title = useInput('')
  const content = useInput('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!loading) {
      setLoading(true)
      const newArticle = {
        author: author.value,
        title: title.value,
        content: content.value
      }

      createNewArticle(newArticle).then(res => {
        if (res.statusCode === 201) {
          toast.success('Article created', toastOptions)
          setArticles(prev => [res.data].concat(prev))
          author.clearValue()
          title.clearValue()
          content.clearValue()
        } else {
          toast.error('Error in save data', toastOptions)
        }
        setLoading(false)
      }).catch(err => {
        console.log(err)
        toast.error('Error in save', toastOptions)
        setLoading(false)
      })
    }
  }

  return (
    <form className="form-add-article form" onSubmit={onSubmit}>
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
      <ButtonCTA active={loading}><span>Save</span></ButtonCTA>
    </form>
  )
}
