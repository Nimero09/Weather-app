import React from 'react'

export const NavBar = () => {
  return (
    <nav className='px-5 max-w-[80%] mx-auto py-5 flex items-center justify-between'>
        <h1 className='text-blue-900 text-3xl font-semibold text-blue-500'>Weather App</h1>
        <a rel="noreferrer" target='_blank' className='cursor-pointer' href="https://github.com/Nimero09"><box-icon size='lg' type='logo' name='github'></box-icon></a>
    </nav>
  )
}
