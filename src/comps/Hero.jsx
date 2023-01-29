import { BsHeartFill } from 'react-icons/bs'
import { IoSend } from 'react-icons/io5'
import { SiReact } from 'react-icons/si'
import profile from '../assets/ak.png'
import { BsWhatsapp, BsTelegram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import '../styles.css'

function Hero(){
	return (
		<section className='flex homeHeight items-center relative'>
		    <div className='basis-2/5'>
		      <div className='absolute w-16 h-16 top-[130px] left-[360px] rounded-full bg-green-200'></div>
		      <BsHeartFill className='h-12 w-12 absolute -bottom-[11px] text-red-400 left-[130px]'/>		      
		      <SiReact className='absolute text-blue-100 right-[120px] -top-11 w-44 h-44'/>
		      <h3 className='text-4xl py-2'>Hi, I'm Ajithkumar</h3>
		      <div className='w-[310px] bg-blue-300 h-[3px]'></div>
		      <p className='py-1 text-xl text-gray-700'>Full-Stack developer</p>
		      <p className='flex text-gray-800 text-[17px] py-1'>A good level knowledge in Full-Stack Development, Can develope well design User-interface with Love.</p>
		      <div className='pt-5'>
		       <button className='flex bg-green-500 rounded-[7px] border-none px-6 py-3.5 text-white font-semibold items-center'>Contact <IoSend className='pl-3 text-3xl text-white'/></button>
		      </div>
		    </div>
		    <div className='basis-2/5 px-2 flex justify-center'>
		      <img src={profile} alt='profile' className='object-cover h-[px] w-[300px]'/>
		    </div>
		    <div className='basis-1/5 flex text-2xl flex-col justify-center items-center'>		    	
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