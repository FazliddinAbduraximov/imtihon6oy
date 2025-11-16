import React from 'react'

export const Statictika = ({ text, category }) => {
    return (
        <div className='border-2 border-btn rounded-full w-[211px] h-[211px] flex flex-col items-center justify-center'>
            <div className="w-[203px] h-[203px] m-0.5 flex flex-col items-center justify-center rounded-full bg-gray-200">
                <h1 className="text-[50px] font-extrabold">{text}</h1>
                <p className="text-[18px] font-semibold">{category}</p>
            </div>
        </div>
    )
}
