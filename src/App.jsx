import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Flight from './services/Flight'
import Hotels from './services/Hotels'
import Trains from './services/Trains'
import Cabs from './services/Cabs'
import Bus from './services/Bus'
import Holiday from './services/Holiday'
import AuthProvider from './context/auth-context'


function App() {
 

  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <Navbar/>
          <Routes>
           <Route path="/" element={<Flight/>}/>
           <Route path="/hotels" element={<Hotels/>}/>
           <Route path="/trains" element={<Trains/>}/>
           <Route path="/cabs" element={<Cabs/>}/>
           <Route path="/bus" element={<Bus/>}/>
           <Route path="/holiday" element={<Holiday/>}/>
         </Routes>
      </AuthProvider>
   </BrowserRouter>
   </>
  )
}

export default App
