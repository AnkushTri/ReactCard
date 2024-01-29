import Cards from './components/Cards'
import Card from './components/Card'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App =()=> {


  return (
    <>
     {/* <Cards/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/:id" element={<Card/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
