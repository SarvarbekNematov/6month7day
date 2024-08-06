import { useContext, useState } from 'react'
import './App.css'
import { Context } from './context/context'
import { Dawboard } from './routes/dawboard';
import { LoogIn } from './routes/login';


function App() {
  const {token , setToken} = useContext(Context)
  return token ?  <Dawboard/> : <LoogIn/>
}

export default App
