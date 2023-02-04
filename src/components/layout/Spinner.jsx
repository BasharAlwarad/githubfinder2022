import React from 'react'

import spinner from './assets/spinner.gif'

const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
      <img
        className='tex-center mx-auto'
        src={spinner}
        alt='...Loading...'
        width={'180px'}
      />
    </div>
  )
}

export default Spinner
