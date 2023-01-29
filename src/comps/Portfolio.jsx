import port from '../assets/port.webp'
import '../styles.css'

function Portfolio(){
	return (
		<div className='homeHeight relative flex justify-center items-center flex-col'>
		  <img src={port} className='absolute h-full w-full opacity-25 object-cover'/>
		  <h2 className='lg:text-[100px] my-1'>My Portfolio</h2>		  
		  <p className='my-1 text-2xl'>The journey of a thousand miles begins with one step.</p>
		</div>
	)
}

export default Portfolio