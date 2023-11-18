import React from 'react'
import ContactTable from './contactTable'

const Contact = () => {
  return (
    <div className='w-full px-3'>
         <h2 className='text-center text-lg font-bold mb-6'>Message</h2>
         <ContactTable/>
    </div>
  )
}

export default Contact