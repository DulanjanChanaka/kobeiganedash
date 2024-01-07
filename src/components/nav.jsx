import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

// import { useRouter } from 'next/router'



const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-20 z-[100]'>
            <div className='flex justify-between  items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <div>
                        <Image src='/Assets/logomain.png' width='64' height='64' alt='/' className='rounded-lg' />
                        <h3 className=' text-xs'>KOBEIGANE</h3>
                    </div>
                </Link>

                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/' >
                            <li



                            >Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li

                            >Clinics</li>
                        </Link>
                        <Link href='/#skills'>
                            <li

                            >Announcement</li>
                        </Link>
                        <Link href='/#projects'>
                            <li
                                className={`ml-10 text-sm uppercase hover:border-b-2 hover:text-[#5651e5] ${activeItem === 'item4' ? 'border-black' : ''}`}

                            >About</li>
                        </Link>
                        <Link href='/#contact'>
                            <li
                                className={`ml-10 text-sm uppercase hover:border-b-2 hover:text-[#5651e5] ${activeItem === 'item5' ? 'border-black' : ''}`}

                            >Contact</li>
                        </Link>
                        <Link href='/#baby'>
                            <li
                                className={`ml-10 text-sm uppercase hover:border-b-2 hover:text-[#5651e5] ${activeItem === 'item5' ? 'border-black' : ''}`}

                            >Baby</li>
                        </Link>
                    </ul>

                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={
                    nav
                        ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>
                                <Image src='/Assets/logomain.png' width='94' height='94' alt='/' className='rounded-lg' /></Link>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-t-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4 font-extrabold'>Kobeigane Health Division</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Clinics</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Announcement</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                            <Link href='/#baby'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Baby</li>
                            </Link>
                        </ul>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar