import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed z-20 w-full   bg-black/80 mx-auto  flex items-center justify-between px-20  py-2 shadow-md'>
      <div className='flex items-center '>
        <img src={`${import.meta.env.BASE_URL}logo.png`} />

        {/* <span className='px-4 text-2xl font-bold text-white'>
          Cubic Moves
        </span> */}
      </div>

      <div>
        <ul>
          <li className='flex text-white text-base font-medium gap-6  '>
            <ul className=' relative cursor-pointer after:left-0 after:bottom-1 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full'>
              Home
            </ul>
            <ul className=' relative cursor-pointer after:left-0 after:bottom-1 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full'>
              Renders
            </ul>
            <ul className=' relative cursor-pointer after:left-0 after:bottom-1 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full'>
              About us
            </ul>
            <ul className=' relative cursor-pointer after:left-0 after:bottom-1 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full'>
              Shop
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar