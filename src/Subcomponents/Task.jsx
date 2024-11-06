import React from 'react'
import { TfiCheckBox } from "react-icons/tfi";
import { SiCodesandbox } from "react-icons/si";
import CoolCheckbox from './Checkbox';

const Task = () => {
    return (
        <>
            <div className=' flex justify-center gap-9'>
                <span className='text-white text-xl'
                 style={{
                    textShadow: `
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff
    `,
                }}
                >&#9672;</span>
                <div>
                    <h2 className='text-white'
                        style={{
                            textShadow: `
                0 0 7px #fff,
                0 0 10px #fff,
                0 0 21px #fff
            `,
                        }}
                    >
                        Workout for 15 mins
                    </h2>
                    <h3 className='text-white font-sans font-semibold'>
                        Health <span className='text-green-400'>+15xp</span>
                    </h3>

                </div>
                <div>
              
                    <TfiCheckBox className='text-white font-bold'
                    />
                 <CoolCheckbox/>
                </div>
                </div>
        </>


    )
}

export default Task