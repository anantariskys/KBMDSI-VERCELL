import React from 'react'

function Button({icon, text}) {
    function filterHandle() {
        console.log(`ini filter ${text}`)
    }
  return (
      <div className="flex gap-4 bg-Custom-Dark-Blue lg:w-72 lg:p-4 p-2  justify-center md:rounded-xl rounded-md cursor-pointer hover:bg-black" onClick={filterHandle}>
          <img className="lg:size-10 md:size-8 size-4" src={`${icon}`} alt="" />
          <p href="#" className='self-center font-glacial-indifference-bold lg:text-2xl md:text-base text-xs text-slate-50'>{text}</p>
      </div>
  );
}

export default Button