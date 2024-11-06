import React from 'react';
import ProgressBar from '../Subcomponents/ProgressBar';

const StatusCard = () => {
  return (
    <div className="bg-gray-900 bg-opacity-75 text-white p-3 w-96 rounded-lg border-4 border-white-600 font-sans">
      <div className="text-center border-b border-gray-600 pb-2 mb-4">
        <h2 className="text-lg font-semibold">DEXTERITY</h2>
      </div>

      <div className="mb-4 space-y-1">
        <p> Measures skill mastery or agility, applicable for sports, crafts, or music. </p>
      </div>

      <div className="flex justify-center items-end text-4xl mb-4">
       <p className="ml-2">Lv. </p> 
       <h1 className="text-6xl font-bold">2</h1>
        
      </div>

      <div className="mb-4 border-t border-gray-600 pt-2">
        <p><strong>XP:</strong> 160/200</p>
        <p><ProgressBar progress={46}/></p>
        <p>XP required to go to next Level: <strong>66.0</strong></p>
        <p className='mt-1'><strong>Title:</strong> None</p>
      </div>
      
    </div>
  );
};

export default StatusCard;
