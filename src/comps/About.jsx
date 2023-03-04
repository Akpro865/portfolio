import { HiDownload } from 'react-icons/hi'
import { SiJavascript } from 'react-icons/si'
import { GiLeafSkeleton } from 'react-icons/gi'
import profile2 from '../assets/ak2.jpg'
import profile3 from '../assets/ak3.jpg'
import '../styles.css'

function About(){
	return (
		<>
		  <div className='mb-10'>
		    <h2 className='flex justify-center text-3xl font-medium items-center'>About Myself</h2>
		    <span className='flex justify-center text-secondary'>Intro to me</span>
		  </div>
		  <section className='homeHeight flex items-center relative'>
		    <SiJavascript className='absolute h-28 w-28 -top-[1px] right-[100px] text-yellow-50 bg-gray-200'/>   
		    <GiLeafSkeleton className='absolute h-9 w-9 text-green-500 bottom-10 left-36'/>
		    <section className='flex justify-between items-center'>
			    <div className='basis-1/2 flex justify-center items-center'>
			     <img src={profile2} alt='profile' className='h-[280px] w-96 object-cover rounded-xl'/>
			    </div>
			    <div className='basis-1/2'>
			      <p className='py-3 text-[18px] text-secondary'>Web Developer, with good knowledge and more than a year of self development experience, working in web technologies and Ui / Ux design delivering good work</p>
			      <div className='flex justify-center py-3'>
			       <span className='flex basis-1/3 flex-col items-center'><span className='font-semibold text-2xl'>1+</span><span className='text-secondar'>Yeyars of experience</span></span>
			       <span className='flex basis-1/3 flex-col items-center'><span className='font-semibold text-2xl'>7+</span><span className='text-secondar'>Self projects</span></span>
			       <span className='flex basis-1/3 flex-col items-center'><span className='font-semibold text-2xl'>1<sup>st</sup></span><span className='text-secondar'>Time ready to work with you</span></span>
			      </div>
			      <div className='py-3'>
			        <button className='bg-green-500 flex items-center font-bold text-white px-8 py-3.5 rounded-[7px]'>Resume <HiDownload className='text-3xl pl-2'/></button>
			      </div>
			    </div>
		    </section>
		  </section>
		</>
	)
}

export default About