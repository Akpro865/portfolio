import { useState, useEffect } from 'react'
import { BiMoon } from 'react-icons/bi'
import { FiSun } from 'react-icons/fi'

function Header(){
	const [theme, setTheme] = useState("light")

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

	return (
	  <header className='flex sm:mx-10 lg:mx-28 sticky top-0 z-50 bg-white justify-between py-3 border-b font-medium items-center'>
		<section>
		  <h2 className='text-xl'>AKPRO</h2>
		</section>
		<section className='flex items-center'>
		  <span className='lg:px-4 cursor-pointer'>Home</span>
		  <span className='lg:px-4 cursor-pointer'>About</span>
		  <span className='lg:px-4 cursor-pointer'>Skills</span>
		  <span className='lg:px-4 cursor-pointer'>Services</span>
		  <span className='lg:px-4 cursor-pointer'>Portfolio</span>
		  <span className='lg:px-4 cursor-pointer'>Contact</span>
		  { (theme === 'light') ?
		   	(<span onClick={switchTheme} className='p-2 text-[22px] animation duration-500 hover:bg-background-color-input cursor-pointer rounded-full'><BiMoon /></span>)	:
		   	(<span onClick={switchTheme} className='p-2 text-[22px] animation duration-500 hover:bg-background-color-input cursor-pointer rounded-full'><FiSun /></span>)	   	
		  }
		</section>
	  </header>
	)
}

export default Header