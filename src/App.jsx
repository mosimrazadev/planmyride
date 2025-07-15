import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Flight from './pages/Flight'
import Hotels from './pages/Hotels'
import Trains from './pages/Trains'
import Cabs from './pages/Cabs'
import Bus from './pages/Bus'
import Holiday from './pages/Holiday'
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
