import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import LayOut from './components/LayOut/LayOut'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound'
import Portfolio from './components/Portfolio/Portfolio'



function App() {
  const [count, setCount] = useState(0)
const routes = createBrowserRouter([
  {path:"", element: <LayOut/> , children:[
    {index: true , element: <Home/> },
    {path:"home", element: <Home/> },
    {path:"about", element: <About/> },
    {path:"contact", element: <Contact/> },
    {path:"portfolio", element: <Portfolio/> },



   {path: "*" , element: <NotFound/>} 
]}
])
  return (
    <RouterProvider router={routes}>

    </ RouterProvider>
  )
}

export default App
