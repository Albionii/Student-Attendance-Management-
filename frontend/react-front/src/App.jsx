import { useState } from 'react'
import './App.css'
import Start from './Pages/Start';
import Login from './Pages/Login';


function App() {
  
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? <Start/>:<Login/>}
    </>
  )
}

export default App
