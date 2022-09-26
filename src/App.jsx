import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { LatestArticles } from './components/LatestArticles'
import { NewArticle } from './components/NewArticle'

function App () {
  const [addArticle, setAddArticle] = useState(false)

  const toggleAddArticle = () => {
    setAddArticle(prev => !prev)
  }

  return (
    <>
      <Header />
      {
        addArticle
          ? <NewArticle />
          : <HeroSection />
      }
      <LatestArticles toggleAddArticle={toggleAddArticle} />
      <Footer />
      <Toaster />
    </>
  )
}

export default App
