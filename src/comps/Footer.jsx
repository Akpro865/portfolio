import { BsWhatsapp, BsTelegram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'

function Footer(){
	return (
	<>
	  <section className='md:flex bg-green-500 text-white items-center py-9'>
		<div className='basis-1/3 flex flex-col justify-center items-center'>
		  <div className='flex flex-col'>
		  <span className='text-4xl font-bold my-4'>Ajithkumar</span>
		  <span className='font-medium'>Web Developer</span>		  
		  </div>
		</div>

		<div className='basis-1/3 flex justify-center font-semibold'>
		  <span className='mx-3 cursor-pointer'>skills</span>
		  <span className='mx-3 cursor-pointer'>services</span>
		  <span className='mx-3 cursor-pointer'>projects</span>
		</div>

		<div className='basis-1/3'>
		  <div className='basis-1/5 text-blue-00 flex text-[27px] justify-center items-center'>		    	
		    <BsLinkedin className='hover:-translate-y-1 transition duration-300 mx-2'/>
		    <BsGithub className='cursor-pointe hover:-translate-y-1 transition duration-300 mx-2'/>
		    <GrInstagram className='hover:-translate-y-1 transition duration-300 mx-2'/>		    
		    <BsTelegram className='hover:-translate-y-1 transition duration-300 mx-2'/>
		    <BsWhatsapp className='hover:-translate-y-1 transition duration-300 mx-2'/>
		    </div>
		</div>
	  </section>
	  <p className='bg-green-500 py-5 pt-20 text-white flex justify-center'>@{new Date().getFullYear()}. All rights reserved.</p>
	</>
	)
}

export default Footer