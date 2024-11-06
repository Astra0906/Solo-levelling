import React from 'react'
import GlowBtn from '../Subcomponents/GlowBtn'
import Streak from '../Subcomponents/IconContsiner'

const Header = () => {
  return (
    <div className=' mt-16 mb-10 mx-auto '>
    <nav className='flex justify-evenly gap-14'>

        
        <GlowBtn name="Profile" icon="warrier.png"/>              
        <GlowBtn name="Quests" icon="archer.png"/>
        <GlowBtn name="Missions" icon="axe.png"/>
        
    </nav><hr className='font-bold text-center mt-4 mx-[10%] text-white' />
    </div>
  )
}

export default Header