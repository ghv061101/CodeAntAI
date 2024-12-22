import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Board from './Pages/Board';
const App = () => {
  return (
    <BrowserRouter>
      <div className={`flex min-h-screen w-full bg-[#FAFAFA]`}>
      <Routes>
             <Route path={'/'} Component={Auth} />
             <Route path={'/dashboard'} Component={Home} />
         </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App