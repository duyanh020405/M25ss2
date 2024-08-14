// components/Bt8.tsx
import React from 'react';

export default function Bt8() {
    return (
        <div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) => {
                return (
                    <button 
                        key={index}
                        className='rounded border-2 text-xl text-white bg-slate-300' 
                        style={{ width: 60, height: 60 }}
                    >
                        {item}
                    </button>
                );
            })}
        </div>
    );
}
