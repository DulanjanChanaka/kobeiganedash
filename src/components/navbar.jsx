
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
      setNav(!nav)
  }

  return (
    <div className=' w-full py-5 top-0 left-0 bg-sky-700 text-white mb-5'>
            <div className='flex justify-between  items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <div> 
                        <h3 className=' text-base font-bold '>KOBEIGANE</h3>
                    </div>
                </Link>

                <div>
                    <ul className='hidden md:flex gap-5'>
                        <Link to='/' >
                            <li



                            >Contact</li>
                        </Link>
                        <Link to='/woman'>
                            <li

                            >Woman</li>
                        </Link>
                        <Link to='/hospital'>
                            <li

                            >Hospital</li>
                        </Link>
                        <Link to='/moh'>
                            <li
                               

                            >MOH</li>
                        </Link>
                        <Link to='/weight'>
                            <li
                                

                            >Weight</li>
                        </Link>

                        <Link to='/mother'>
                            <li
                                

                            >Mother</li>
                        </Link>

                        <Link to='/threeposha'>
                            <li
                                

                            >Threep</li>
                        </Link>
                        <Link to='/education'>
                            <li
                                

                            >Educa</li>
                        </Link>
                    </ul>

                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-white z-[100]' : ''}>
                <div className={
                    nav
                        ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                    <div className=''>
                        <div className='flex w-full items-center justify-between'>
                            <h3>Kobeigane</h3>
                               
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-t-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4 font-extrabold'>Kobeigane Health Division</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col '>
                        <ul className='uppercase text-black'>
                            <Link to='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Message</li>
                            </Link>
                            <Link to='/woman'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Woman</li>
                            </Link>
                            <Link to='/hospital'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Hospital</li>
                            </Link>
                            <Link to='/moh'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>MOH</li>
                            </Link>
                            <Link to='/weight'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Weight</li>
                            </Link>
                            <Link to='/mother'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Mother</li>
                            </Link>
                            <Link to='/threeposha'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Threep</li>
                            </Link>
                            <Link to='/education'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Educa</li>
                            </Link>
                        </ul>

                    </div>

                </div>

            </div>
        </div>
  );
};

export default Navbar;
