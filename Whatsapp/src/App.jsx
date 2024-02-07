import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
const App =()=> {

  return (
    <>
     {/* <Cards/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
