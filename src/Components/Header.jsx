import React from 'react'
import GlowBtn from '../Subcomponents/GlowBtn'

const Header = () => {
  return (
    <div className=' mt-16 mb-10 mx-auto '>
    <nav className='flex justify-evenly gap-14'>
        <GlowBtn name="Profile"/>
        <GlowBtn name="Quests"/>
        <GlowBtn name="Missions"/>
    </nav>
    </div>
  )
}

export default Header