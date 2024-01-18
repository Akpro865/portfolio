import '../styles.css'
import { useNavigate, Link } from "react-router-dom";

function Contact(){
	const navigate = useNavigate();

	return (
	  <section id='contact' className='flex flex-col md:flex-row homeHeight justify-center items-center'>
		<div className='basis-1/2 px-20 font-semibold flex flex-col justify-center'>
		  <p className='text-3xl'>Let's Chat.</p>
		  <p className='text-3xl'>Always getting touch, contact me.</p>
		</div>

		<div className='flex flex-col basis-1/2'>
		  <h3 className='text-xl font-medium my-2'>Send me a message:</h3>
		  <input placeholder='Fullname' className='md:w-[60%] text-black outline-green-400 my-2 pl-3 h-12 rounded-[8px] bg-gray-100'/>
		  <input placeholder='E-mail' className='md:w-[60%] text-black outline-green-400 my-2 pl-3 h-12 rounded-[8px] bg-gray-100'/>
		  <input placeholder='Place' className='md:w-[60%] text-black outline-green-400 my-2 pl-3 h-12 rounded-[8px] bg-gray-100'/>
		  <label className='font-medium my-1'>Tell breifly</label>
		  <textarea className='h-24 md:w-[60%] text-black my-2 rounded-[8px] bg-gray-100 outline-green-400 p-2'/>
		  <div>
		   <Link to='/thankyou'>
		     <button className='bg-green-500 px-4 py-3 rounded-[8px] my-3 text-white font-bold'>Send message</button>
		   </Link>
		  </div>
		</div>
	  </section>
	)
}

export default Contact