import Header from './Header'
import Footer from './Footer'

function Thankyou(){
	return (
		<>
		   <Header />
		   <div className='h-[70vh] flex justify-center items-center'>
		   <div className='sm:px-10 lg:px-28 px-3'>
		     <h3 className='text-xl'>Thank You</h3>
		   </div>
		   </div>
		   <Footer />
		</>
	)
}

export default Thankyou
