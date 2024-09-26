import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home from './components/Home'

function App() {
  return (
    <>
      <div className='App' >
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
