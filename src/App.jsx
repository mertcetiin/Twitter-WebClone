import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import MainLink from './components/MainLink'

function App() {

  return (
    <div>
      <MainLink />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
