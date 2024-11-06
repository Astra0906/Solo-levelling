import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import BgDrop from './Components/bgDrop'
import QuestDiv from './Components/QuestDiv'


import FuturisticCard from './Subcomponents/FuturisticCard'
import StatusCard from './Components/StatCard'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BgDrop>
      <div className='min-h-[100vh]'>
      <Header/>
    <Profile/>
     
      </div>
    
    </BgDrop>
      
    </>
  )
}

export default App
