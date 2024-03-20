import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from './components/Layout'
import ListAuthors from './pages/ListAuthors'
import { getAuthorsService } from './services/author.service'

const App = () => {
  const [authors, setAuthors] = useState([])
  const loadAuthors = async () => {
    const authorsData = await getAuthorsService()
    setAuthors(authorsData)
  }

  useEffect(() => {
    loadAuthors()
  }, [authors])
  return (
    <Layout>
      <Link to='/new' className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm'>Add new author</Link>
      <p className='my-4'>We have quotes by: </p>
      <ListAuthors authors={authors} />
    </Layout>
  )
}

export default App