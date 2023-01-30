import '../styles.css'

function Contact(){
	return (
	  <section className='md:flex homeHeight justify-center items-center'>
		<div className='basis-1/2 px-20 font-semibold flex flex-col justify-center'>
		  <p className='text-3xl'>Let's Chat.</p>
		  <p className='text-3xl'>Always getting touch, contact me.</p>
		</div>

		<div className='flex flex-col basis-1/2'>
		  <h3 className='text-xl font-medium my-2'>Send me a message:</h3>
		  <input placeholder='Fullname' className='w-[60%] outline-green-400 my-2 pl-3 h-12 rounded-[8px] bg-gray-100'/>
		  <input placeholder='E-mail' className='w-[60%] outline-green-400 my-2 pl-3 h-12 rounded-[8px] bg-gray-100'/>
		  <input placeholder='Place' className='w-[60%] outline-green-400 my-2 pl-3 h-12 rounded-[8px] bg-gray-100'/>
		  <label className='font-medium my-1'>Tell breifly</label>
		  <textarea className='h-24 w-[60%] my-2 rounded-[8px] bg-gray-100 outline-green-400 p-2'/>
		  <div>
		   <button className='bg-green-500 px-4 py-3 rounded-[8px] my-3 text-white font-bold'>Send message</button>
		  </div>
		</div>
	  </section>
	)
}

export default Contact