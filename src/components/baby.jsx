import React, { useState } from 'react'

const Baby = () => {
    const [name, setName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [mother, setMother] = useState("")
    const [address, setAddress] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                name,
                birthday,
                mother,
                address
            }

            const response = await fetch('https://incomparable-brioche-b13e68.netlify.app/api/babies',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(data)
            })
            console.log(response)

            if(response.ok) {
                alert("baby added successful...!")
                setName("")
                setBirthday("")
                setMother("")
                setAddress("")
            } else {
                console.error('Failed to send data.')
            }
        } catch (error) {
            console.error('Error sending data: ', error)
        }
    }
  return (
    <div className=" flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 text-sm font-semibold mb-2">Baby Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="birthday" className="block text-gray-600 text-sm font-semibold mb-2">Birthday</label>
                <input
                    type="date"
                    id="birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="mother" className="block text-gray-600 text-sm font-semibold mb-2">Mother Name</label>
                <input
                    type="text"
                    id="mother"
                    value={mother}
                    onChange={(e) => setMother(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block text-gray-600 text-sm font-semibold mb-2">Address</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
                Submit
            </button>
        </form>
    </div>
</div>
  )
}

export default Baby