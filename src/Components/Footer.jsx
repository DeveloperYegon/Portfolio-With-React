import React from 'react'

function Footer() {
  const year= new Date().getFullYear();
  return (
    <div className='bg-[#182B5C]  text-[#fff]'>
     
      <p className='text-center p-5'>&copy;{year}, DeveloperYegon. All Rights Are Reserved. </p>

    </div>
  )
}

export default Footer