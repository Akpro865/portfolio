import { BsHeartFill } from 'react-icons/bs'
import { IoSend } from 'react-icons/io5'
import { SiReact } from 'react-icons/si'
import profile from '../assets/ak.png'
import { BsWhatsapp, BsTelegram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import '../styles.css'

function Hero(){
	return (
		<section id='#' className='flex flex-col-reverse md:flex-row homeHeight items-center relative'>
		    <div className='basis-2/5 py-6 md:py-0'>
		      <div className='absolute md:w-16 md:h-16 top-[130px] left-[360px] rounded-full bg-green-200'></div>
		      <BsHeartFill className='h-12 w-12 absolute -bottom-[11px] text-red-400 md:left-[130px] left-auto right-5 md:right-auto'/>		      
		      <SiReact className='absolute text-blue-100 right-[120px] top-1 lg:-top-11 -left-2 lg:left-auto w-20 h-20 lg:w-44 lg:h-44 z-10'/>
		      <h3 className='text-4xl md:py-2'>Hi, I'm Ajithkumar</h3>
		      <div className='w-[310px] bg-blue-300 h-[3px]'></div>
		      <p className='py-1 text-xl text-secondary'>Full-Stack developer</p>
		      <p className='flex text-secondary text-[17px] py-1'>A good level knowledge in Full-Stack Development, Can develope well design User-interface with Love.</p>
		      <div className='pt-5'>
		       <button className='flex bg-green-500 rounded-[7px] border-none px-6 py-3.5 text-white font-semibold items-center'>Contact <IoSend className='pl-3 text-3xl text-white'/></button>
		      </div>
		    </div>
		    <div className='basis-2/5 px-2 py-5 md:py-0 flex justify-center'>
		      <img src={profile} alt='profile' className='object-cover h-[px] w-[210px] md:w-[300px]'/>
		    </div>
		    <div className='basis-1/5 flex text-2xl flex-col absolute right-5 top-24 md:static justify-center items-center'>		    	
		    	<BsLinkedin className='my-2 cursor-pointe text-blue-700 hover:-translate-y-1 transition duration-300'/>
		    	<BsGithub className='my-2 cursor-pointe hover:-translate-y-1 transition duration-300'/>
		    	<GrInstagram className='my-2 cursor-pointe text-pink-600 hover:-translate-y-1 transition duration-300'/>
		    	<BsWhatsapp className='my-2 cursor-pointe text-green-600 hover:-translate-y-1 transition duration-300'/>
		    	<BsTelegram className='my-2 cursor-pointe text-blue-500 hover:-translate-y-1 transition duration-300'/>
		    </div>
		   </section>
	)
}

export default Hero