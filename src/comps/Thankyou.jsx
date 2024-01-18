import Header from './Header'
import Footer from './Footer'

function Thankyou(){
	return (
		<>
		   <Header />
		   <div className='sm:px-10 lg:px-28 px-3 h-[70vh] flex justify-center items-center'>
		     <h3 className='text-xl'>Thank You</h3>
		   </div>
		   <Footer />
		</>
	)
}

export default Thankyou
