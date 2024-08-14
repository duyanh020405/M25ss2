import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUmbrella, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Bt2() {
  return (
    <div className="p-4">
      <p className="text-lg font-semibold mb-2">Input Label</p>
      <div className='relative flex items-center'>
        <input 
          type="text" 
          className="border border-blue-500 rounded-lg pl-12 pr-12 py-2 w-96" 
        />
        <FontAwesomeIcon 
          className='absolute left-3 text-gray-600 w-5' 
          icon={faClock} 
        />
        <FontAwesomeIcon 
          className='absolute right-3 text-gray-600 w-5 left-80' 
          icon={faUmbrella} 
        />
        <p className='absolute left-14 transform -translate-x-1/2 text-gray-600 text-lg'>|</p>
      </div>
      <br />
      <div className='border border-gray-300 rounded-lg p-4 w-96'>
        {[1, 2, 3, 4].map(() => (
          <div  className='flex items-center gap-4 mb-2'>
            <h4 className="text-md font-medium">Label </h4>
            <input type="checkbox" className="form-checkbox text-blue-500" />
          </div>
        ))}
      </div>
      <div>
        <button style={{width:100,height:30 , borderRadius:2 ,backgroundColor:'grey' }}>Clear</button>
        <button style={{width:100,height:30 , borderRadius:2 , backgroundColor:'blue',color:'white'}}>Apply</button>

      </div>
    </div>
  );
}
