import { useState, useEffect } from 'react'
import { BiMoon } from 'react-icons/bi'
import { FiSun } from 'react-icons/fi'
import { GoThreeBars } from 'react-icons/go'
import { IoCloseSharp } from 'react-icons/io5'
import { useParams, useLocation } from 'react-router-dom';

function Header(){
	const [theme, setTheme] = useState("light")
	const [show, setShow] = useState(false)

	//let { thankyou } = useParams();
	const location = useLocation();
	const thankyou = location ? location.pathname : null;

	useEffect(() => {
    	document.documentElement.setAttribute(
      	 "data-theme",
      	 localStorage.getItem("theme")
    	);
    	setTheme(localStorage.getItem("theme"));
  	}, []);

	const switchTheme = () => {
      if (theme === "light") {
       saveTheme("dark");
      } else {
       saveTheme("light");
      }
     };

    const saveTheme = (theme) => {
     setTheme(theme);
     localStorage.setItem("theme", theme);
     document.documentElement.setAttribute("data-theme", theme);
    };

    const handleToggle = ()=>{
    	var navbar = document.querySelector('.togglebar')
    	navbar.classList.toggle('active')
    }

	console.log(thankyou, location)
	//console.log(null == true ? 'yes' : 'no')

	return (
	  <header className='flex relative sm:mx-10 lg:mx-28 sticky top-0 z-50 bg-second justify-between py-3 border-b font-semibold items-center'>
		<section>
		  <a id="link" href={thankyou ? 'https://portfolio-two-azure-29.vercel.app/' : '#'}><h2 className='text-xl md:py-2 hover:text-green-500'>AKPRO</h2></a>
		  <span onClick={handleToggle} className='px-2 absolute top-4 right-0'><GoThreeBars className='block text-3xl md:hidden cursor-pointer'/></span>
		</section>
		<section className='showbar togglebar h-0 overflow-hidden flex text-xl md:text-base md:h-auto py- flex-col justify-evenly md:flex-row bg-green-400 md:bg-inherit items-center absolute md:static top-[50px] left-0 right-0 transition duration-300'>		 
		  <a id="link" href="#"><span className='lg:px-4 opacity-0 md:opacity-100 hover:text-green-500 cursor-pointer'>Home</span></a>
		  <a id="link" href="#about"><span className='lg:px-4 opacity-0 md:opacity-100 hover:text-green-500 px-1.5 cursor-pointer'>About</span></a>
		  <a id="link" href="#skills"><span className='lg:px-4 opacity-0 md:opacity-100 hover:text-green-500 px-1.5 cursor-pointer'>Skills</span></a>
		  <a id="link" href="#services"><span className='lg:px-4 opacity-0 md:opacity-100 hover:text-green-500 px-1.5 cursor-pointer'>Services</span></a>
		  <a id="link" href="#portfolio"><span className='lg:px-4 opacity-0 md:opacity-100 hover:text-green-500 px-1.5 cursor-pointer'>Portfolio</span></a>
		  <a id="link" href="#contact"><span className='lg:px-4 opacity-0 md:opacity-100 hover:text-green-500 px-1.5 cursor-pointer'>Contact</span></a>
		  { (theme === 'light') ?
		   	(<span onClick={switchTheme} className='px-2 text-[22px] opacity-0 md:opacity-100 hover:text-green-500 animation duration-500 hover:bg-background-color-input cursor-pointer rounded-full'><BiMoon /></span>)	:
		   	(<span onClick={switchTheme} className='px-2 text-[22px] opacity-0 md:opacity-100 hover:text-green-500 animation duration-500 hover:bg-background-color-input cursor-pointer rounded-full'><FiSun /></span>)	   	
		  }
		</section>
	  </header>
	)
}

export default Header