import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebase/firebase'

const ThreepForm = () => {
    const [message, setMessage] = useState("")
    const [title, setTitle] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'threeposha'),{
                title,
                message,
            })
            console.log('Document written with ID: ', docRef.id);
            setTitle('');
            setMessage('')
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    }


  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <div className=' flex flex-col gap-2 px-3'>
                    <input
                    className='border-2 rounded-lg p-2  border-gray-300'
                    type='text'
                    name='title'
                    placeholder='Type Title'
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                    <textarea
                     className='border-2 rounded-lg p-2  border-gray-300 '
                    rows='5'
                    name='message'
                    placeholder='Type Message...'
                    value={message}
                    onChange={(e)=> setMessage(e.target.value)}
                    />
                    <button className='px-2 py-2 bg-blue-500 text-white w-[80px] text-center mb-5 rounded-lg'>Send</button>

                </div>
            </form>
        </div>
    </div>
  )
}

export default ThreepForm