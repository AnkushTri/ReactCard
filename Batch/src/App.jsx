import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Dis from "./components/CardWithProduct"

const App =()=> {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dis/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
