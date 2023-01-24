import { BsHeartFill } from 'react-icons/bs'
import { IoSend } from 'react-icons/io5'
import profile from '../assets/ak.png'
import { BsWhatsapp, BsTelegram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import '../styles.css'

function Hero(){
	return (
		<section className='flex homeHeight items-center'>
		    <div className='basis-2/5'>
		      <h3 className='text-4xl py-1'>Hi, I'm Ajithkumar</h3>
		      <p className='py-1 text-xl text-gray-700'>Full-Stack developer</p>
		      <p className='flex text-gray-800 text-[17px] py-1'>A good level knowledge in Full-Stack Development, Can develope well design User-interface with Love 🖤.</p>
		      <div className='pt-5'>
		       <button className='flex bg-green-500 rounded-[7px] border-none px-6 py-3.5 text-white font-semibold items-center'>Contact <IoSend className='pl-3 text-3xl text-white'/></button>
		      </div>
		    </div>
		    <div className='basis-2/5 px-2 flex justify-center'>
		      <img src={profile} alt='profile' className='object-cover h-[240px] w-[240px]'/>
		    </div>
		    <div className='basis-1/5 flex text-2xl flex-col justify-center items-center'>		    	
		    	<BsLinkedin className='my-2 cursor-pointer text-blue-700'/>
		    	<BsGithub className='my-2 cursor-pointer'/>
		    	<GrInstagram className='my-2 cursor-pointer text-pink-600'/>
		    	<BsWhatsapp className='my-2 cursor-pointer text-green-600'/>
		    	<BsTelegram className='my-2 cursor-pointer text-blue-500'/>
		    </div>
		   </section>
	)
}

export default Hero