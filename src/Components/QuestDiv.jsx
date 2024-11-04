import React from 'react'
import './QuestDiv.css'
import Task from '../Subcomponents/task'
import { PiWarningOctagonBold } from "react-icons/pi";
import GlowBtn from '../Subcomponents/GlowBtn';
import Streak from '../Subcomponents/IconContsiner';
const QuestDiv = () => {
    return (
        <div
            className=' relative border-2 border-blue-500   mx-auto bg-opacity-20 w-[75vw] min-h-[70vh] p-6 '
            style={{
                boxShadow: `
                     0 0 20px rgba(10, 0, 70, 0.4),
                    inset 0 0 20px rgba(0, 0, 0, 0.4)
                `,
                backgroundColor: "rgba(21, 29, 48, .9)"
            }}
        >
            {
                // Corner decorations..
            }
            <div className='corner-decoration m-1 top-0 left-0 rotate-0'></div>
            <div className='corner-decoration m-1 top-0 right-0 rotate-90'></div>
            <div className='corner-decoration m-1 bottom-0 left-0 rotate-[-90deg]'></div>
            <div className='corner-decoration m-1 bottom-0 right-0 rotate-180'></div>
            {//Quest Header
            }
            <div className='flex mb-8 justify-center'>              
            <div className="  inline-flex  justify-center items-center text-cyan-100 gap-2 text-3xl border-t-2 border-b-2 border-indigo-400 py-2">
  <span>
    <PiWarningOctagonBold />
  </span>
  <span
    className="text-white"
    style={{
      textShadow: `
        0 0 5px #fff,
        0 0 5px #fff,
        0 0 5px #fff
      `,
    }}
  >
    Quest Info
  </span>
              </div>             
            </div>

          {
            //Lorem ...
          }
            <h1 className='text-white  text-left px-6 font-medium text-xl mb-6'>
                <span className='text-red-700'>Waning:</span> Failure to Complete the Quests may Result to death.
            </h1>
            {
                //Questlist ... space for using 
            }
            <div>
                <ul>
                    <li className=''><Task /></li>
                </ul>
            </div>
            {//Components
            }
          <div className='flex justify-center m-8'>
             <GlowBtn name='Add Quest' />
          </div>
          <div className='relative left-1/3'>
            <Streak>
            <div>1</div>
            <div>STREAK</div>
            </Streak>
           
          </div>
           


        </div>
    )
}

export default QuestDiv