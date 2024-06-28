import MenuIcon from '../assets/more.png';
import CloseMenuIcon from '../assets/cancel.png';
import React, {useState} from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';




const Navber = () => {
    const [nav, setNav] = useState(false);
    const onNavClicked  = () => setNav(!nav);
    const onNavClose =()=> setNav(!nav);

    return ( 
        <div className='w-screen h-[80px] z-10 fixed bg-zinc-200 drop-shadow-lg '>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>

                   <ul className='hidden md:flex'>
                        <li><Link to="home" smooth={true} offset={500} duration={500}>Home</Link></li>
                        <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                        <li><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                        <li><Link to="platform" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                        <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                   </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
                <div className='md:hidden p-2 bg-gray-300 rounded-md'onClick={onNavClicked}>
                 {!nav ? <img src={MenuIcon} alt="/" className='w-5 mr-4' /> : <img src={CloseMenuIcon} alt="/" className='w-5 mr-4' onClick={onNavClicked}/>}
                </div>
               
            </div>
           
            <ul className={nav ? 'absolute block md:hidden bg-zinc-200 w-full px-8' : 'hidden'}>
                        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={onNavClose} to="home" smooth={true} offset={500} duration={500}>Home</Link></li>
                        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={onNavClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={onNavClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={onNavClose} to="platform" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={onNavClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

                <div className='flex flex-col my-4'>
                  <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4 hover:text-indigo-900'>Sign In</button>
                  <button className='px-8 py-3'>Sign Up</button>
                </div>
            </ul>
            
            
        </div>
    );
}
 
export default Navber;