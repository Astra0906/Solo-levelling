import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import BgDrop from './Components/bgDrop'
import QuestDiv from './Components/QuestDiv'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BgDrop>
      <div className='h-[100vh]'>
      <Header/>
      <QuestDiv/>
      </div>
    
    </BgDrop>
      
    </>
  )
}

export default App
