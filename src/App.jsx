
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'

function App() {
  

  return (
  
    <BrowserRouter>
      <Routes>

        <Route element={<Dashboard/>} path='/'></Route>
        <Route element={<LoginPage/>} path='/login'></Route>
        <Route element={<SignupPage/>} path='/signup'></Route>

      </Routes>
    </BrowserRouter>
  
  )
}

export default App
