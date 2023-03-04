import laptop from '../assets/laptop.png'
import phone from '../assets/phone.png'
import tablet from '../assets/tablet.png'
import groww from '../assets/groww.png'
import travelapp from '../assets/travelapp.png'
import pizzato from '../assets/pizzato.jpg'
import '../styles.css'

function Projects(){
	return (
	  <section className='flex flex-col'>
	    <section className='flex homeHeight'>
		  <div className='basis-1/2 flex justify-center items-center'>
		   <div className='relative w-[600px] h-[379px]'>
		    <img src={laptop} className='object-cove'/>
		    <div className='absolute w-[451px] h-[283px] top-[18px] left-[68px] overflow-scroll scrollbar-hide'>
		      <img src={groww} className='w-full'/>
		    </div>
		   </div>
		  </div>

		  <div className='basis-1/2 flex justify-center items-center flex-col lg:pl-3'>
		    <h3 className='text-4xl py-4'>Proshop</h3>
		    <p className='text-secondary text-[17px]'>The idea of right and wrong is a construct, of course, and it might feel overly simplistic to suggest that making the right choices will smooth the path forward. But the famous investor is merely noting with this business quote that avoiding a wrong decision is as important as making the right one. Avoiding bad decisions is aided, of course, with careful planning.</p> 		   
		    <span className='py-3 px-6 hover:bg-black hover:text-white animtion duration-300 mt-8 rounded-[7px] bg-green-600 font-semibold text-white cursor-pointer'>View Demo</span>		  
		  </div>
		</section>

		<section className='flex homeHeight h-screen'>		  
		  <div className='basis-1/2 flex justify-center items-center flex-col lg:pl-3'>
		    <h3 className='text-4xl py-4'>Pizzato</h3>
		    <p className='text-secondary text-[17px]'>The idea of right and wrong is a construct, of course, and it might feel overly simplistic to suggest that making the right choices will smooth the path forward. But the famous investor is merely noting with this business quote that avoiding a wrong decision is as important as making the right one.</p> 		   
		    <span className='py-3 px-6 hover:bg-black hover:text-white animtion duration-300 mt-8 rounded-[7px] bg-green-600 font-semibold text-white cursor-pointer'>View Demo</span>		  
		  </div>

		  <div className='basis-1/2 flex justify-center items-center'>
		   <div className='relative w-[500px] h-[460px] flex justify-center'>
		    <img src={phone} className='object-cove'/>
		    <div className='absolute w-[201px] h-[432.8px] top-[14px] left-[149.8px] overflow-scroll scrollbar-hide rounded-[17.5px]'>
		      <img src={pizzato} className='w-full'/>
		    </div>
		   </div>
		  </div>
		</section>

		<section className='flex homeHeight h-screen'>	
		  <div className='basis-1/2 flex justify-center items-center'>
		   <div className='relative w-[600px] h-[379px]'>
		    <img src={tablet} className='z-20'/>
		    <div className='absolute w-[496px] h-[313px] top-[53px] left-[54.5px] overflow-scroll scrollbar-hide'>
		      <img src={travelapp} className='w-full z-20'/>
		    </div>
		   </div>
		  </div>

		  <div className='basis-1/2 flex justify-center items-center flex-col lg:pl-3'>
		    <h3 className='text-4xl py-4'>Travel.io</h3>
		    <p className='text-secondary text-[17px]'>The idea of right and wrong is a construct, of course, and it might feel overly simplistic to suggest that making the right choices will smooth the path forward. But the famous investor is merely noting with this business quote that avoiding a wrong.</p> 		   
		    <span className='py-3 px-6 hover:bg-black hover:text-white animtion duration-300 mt-8 rounded-[7px] bg-green-600 font-semibold text-white cursor-pointer'>View Demo</span>		  
		  </div>		  
		</section>

	  </section>
	)
}

export default Projects