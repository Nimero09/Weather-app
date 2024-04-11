import React from 'react'

export const NavBar = () => {
  return (
    <nav className='px-20 py-5 flex items-center justify-between'>
        <span className='text-3xl font-semibold text-blue-500'>Weather App</span>
        <a rel="noreferrer" target='_blank' className='cursor-pointer' href="https://github.com/Nimero09"><box-icon size='lg' type='logo' name='github'></box-icon></a>
    </nav>
  )
}
