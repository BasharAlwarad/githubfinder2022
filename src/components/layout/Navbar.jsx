import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { FaGithub } from 'react-icons/fa'

const Navbar = ({ title }) => {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl' />
        </div>
        <Link to={'/'} className='text-lg font-bold align-middle'>
          {title}
        </Link>
      </div>
      <div className='flex-1 px-2 mx-2'>
        <div className='flex justify-end'>
          <Link to={'/'} className='btn btn-ghost btn-sm'>
            Home
          </Link>
          <Link to={'/about'} className='btn btn-ghost btn-sm'>
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder 2022',
}

Navbar.Prototype = {
  title: PropTypes.string.isRequired,
}

export default Navbar
