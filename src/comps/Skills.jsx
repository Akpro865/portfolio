import { SlScreenDesktop } from 'react-icons/sl'
import { FiServer } from 'react-icons/fi'
import { BsFillBugFill } from 'react-icons/bs'

function Skills(){
	return (
		<section className='relative'>
		  <BsFillBugFill className='absolute h-10 w-10 text-yellow-500 top-12 right-3'/>
		  <div className='my-12 flex justify-center flex-col'>
		    <h2 className='text-3xl font-semibold flex justify-center'>Skills</h2>
		    <span className='text-secondary flex justify-center'>My Technical Skills</span>
		  </div>

		  <section className='md:flex justify-around'>
		    <div className=''>
		      <span className='flex items-center py-5'>
		        <SlScreenDesktop className='text-4xl text-green-600'/>
		        <div>
		          <span className='pl-4 text-[22px] font-semibold'>Frontend Developer</span>
		          <span className='flex justify-center text-secondary'>Modern Creative Designs</span>
		        </div>
		      </span>

		      <section>
		        <div className='py-2'>
		          <div className='flex justify-between py-2'>
		            <span className='font-medium'>HTML</span>
		            <span className='text-secondary'>90%</span>
		          </div>
		          <div className="w-full bg-gray-200 h-2 rounded-xl">
    				<div className="bg-green-500 h-2 rounded-xl" style={{width: "90%"}}></div>
  				  </div>
		        </div>

		        <div className='py-2'>
		          <div className='flex justify-between py-2'>
		            <span className='font-medium'>CSS</span>
		            <span className='text-secondary'>85%</span>
		          </div>
		          <div className="w-full bg-gray-200 h-2 rounded-xl">
    				<div className="bg-green-500 h-2 rounded-xl" style={{width: "85%"}}></div>
  				  </div>
		        </div>

		        <div className='py-2'>
		          <div className='flex justify-between py-2'>
		            <span className='font-medium'>Javascript</span>
		            <span className='text-secondary'>70%</span>
		          </div>
		          <div className="w-full bg-gray-200 h-2 rounded-xl">
    				<div className="bg-green-500 h-2 rounded-xl" style={{width: "70%"}}></div>
  				  </div>
		        </div>

		        <div className='py-2'>
		          <div className='flex justify-between py-2'>
		            <span className='font-medium'>React</span>
		            <span className='text-secondary'>80%</span>
		          </div>
		          <div className="w-full bg-gray-200 h-2 rounded-xl">
    				<div className="bg-green-500 h-2 rounded-xl" style={{width: "80%"}}></div>
  				  </div>
		        </div>

		        <div className='py-2'>
		          <div className='flex justify-between py-2'>
		            <span className='font-medium'>Responsive Design</span>
		            <span className='text-secondary'>95%</span>
		          </div>
		          <div className="w-full bg-gray-200 h-2 rounded-xl">
    				<div className="bg-green-500 h-2 rounded-xl" style={{width: "95%"}}></div>
  				  </div>
		        </div>

		        <div className='py-2'>
		          <div className='flex justify-between py-2'>
		            <span className='font-medium'>Version Control(Git)</span>
		            <span className='text-secondary'>70%</span>
		          </div>
		          <div className="w-full bg-gray-200 h-2 rounded-xl">
    				<div className="bg-green-500 h-2 rounded-xl" style={{width: "70%"}}></div>
  				  </div>
		        </div>

		      </section>

		    </div>

		    <div className=''>
		      <span className='flex items-center py-5'>
		        <FiServer className='text-4xl text-green-600'/>
		        <div className='flex flex-col'>
		          <span className='pl-4 text-[22px] font-semibold'>Backend Developer</span>
		          <span className='flex justify-center text-sm text-secondary'>Connecting To World</span>
		        </div>
		      </span>

		      <section>
		        <div className='py-2'>
		          <div className='flex justify-between py-2'>
		            <span className='font-medium'>NodeJs</span>
		            <span className='text-secondary'>75%</span>
		          </div>
		          <div className="w-full bg-gray-200 h-2 rounded-xl">
    				<div className="bg-green-500 h-2 rounded-xl" style={{width: "75%"}}></div>
  				  </div>
		        </div>

		        <div className='py-2'>
		          <div className='flex justify-between py-2'>
		            <span className='font-medium'>MongoDB</span>
		            <span className='text-secondary'>70%</span>
		          </div>
		          <div className="w-full bg-gray-200 h-2 rounded-xl">
    				<div className="bg-green-500 h-2 rounded-xl" style={{width: "70%"}}></div>
  				  </div>
		        </div>

		        <div className='py-4'>
		          <div className='flex justify-between py-2'>
		            <span className='font-medium'>MYSQL, Postgresql</span>
		            <span className='text-secondary'>60%</span>
		          </div>
		          <div className="w-full bg-gray-200 h-2 rounded-xl">
    				<div className="bg-green-500 h-2 rounded-xl" style={{width: "60%"}}></div>
  				  </div>
		        </div>

		        <div className='py-2'>
		          <div className='flex justify-between py-2'>
		            <span className='font-medium'>Linux</span>
		            <span className='text-secondary'>70%</span>
		          </div>
		          <div className="w-full bg-gray-200 h-2 rounded-xl">
    				<div className="bg-green-500 h-2 rounded-xl" style={{width: "70%"}}></div>
  				  </div>
		        </div>

		        <div className='py-2'>
		          <div className='flex justify-between py-2'>
		            <span className='font-medium'>API</span>
		            <span className='text-secondary'>65%</span>
		          </div>
		          <div className="w-full bg-gray-200 h-2 rounded-xl">
    				<div className="bg-green-500 h-2 rounded-xl" style={{width: "65%"}}></div>
  				  </div>
		        </div>

		      </section>		      
		    </div>
		  </section>
		</section>
	)
}

export default Skills