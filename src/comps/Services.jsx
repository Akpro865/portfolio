import { BsCodeSlash, BsGithub } from 'react-icons/bs'
import { MdDevices, MdOutlineRateReview } from 'react-icons/md'
import { IoPulseOutline } from 'react-icons/io5'

function Services(){
	return (
		<section id='services' className='relative'>
		  <BsGithub className='absolute hidden md:block overflow-hidden h-52 w-52 text-blue-200 -right-[110px] -top-24' />
		  <div className='lg:my-32 py-8 md:py-0'>
		    <h2 className='flex justify-center text-3xl font-semibold'>Services</h2>
		    <span className='flex justify-center text-secondary'>My Services</span>
		  </div>

		  <div className='grid lg:grid-cols-4 my-8'>		 
		    <div className='flex my-3 md:my-0 bg-emerald-50 mx-2 hover:scale-105 animation duration-500 justify-center flex-col items-center rounded-xl'>
		      <BsCodeSlash className='text-5xl my-24 font-bold text-green-500'/>
		      <span className='pb-12 text-black'>
		        <p className='text-xl font-medium'>Website</p>
		        <p className='text-xl font-medium'>Development</p>
		      </span>
		    </div>

		    <div className='flex my-3 md:my-0 hover:scale-105 animation duration-500 bg-emerald-50 mx-2 justify-center flex-col items-center rounded-xl'>
		      <MdDevices className='text-5xl font-bold my-24 text-green-500'/>
		      <span className='pb-12 text-black'>
		        <p className='text-xl font-medium'>Responsive</p>
		        <p className='text-xl font-medium'>Design</p>
		      </span>
		    </div>

		    <div className='flex my-3 md:my-0 hover:scale-105 animation duration-500 bg-emerald-50 mx-2 justify-center flex-col items-center rounded-xl'>
		      <MdOutlineRateReview className='text-5xl font-bold my-24 text-green-500'/>
		      <span className='pb-12 text-black'>
		        <p className='text-xl font-medium'>User experience</p>
		        <p className='text-xl font-medium'>Design</p>
		      </span>
		    </div>

		    <div className='flex my-3 md:my-0 mx-2 justify-center hover:scale-105 animation duration-500 bg-emerald-50 flex-col items-center rounded-xl'>
		      <IoPulseOutline className='text-5xl font-bold my-24 text-green-500'/>
		      <span className='pb-12 text-black'>
		        <p className='text-xl font-medium'>SEO</p>
		        <p className='text-xl font-medium'>optimization</p>
		      </span>
		    </div>
		  </div>
		</section>
	)
}

export default Services