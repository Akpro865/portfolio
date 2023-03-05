import Header from './Header' 
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Services from './Services'
import Working from './Working'
import Portfolio from './Portfolio'
import Projects from './Projects' 
import Contact from './Contact'
import Footer from './Footer'

function Home(){
	return (
		<>
		   <Header />
		   <div className='sm:px-10 lg:px-28 px-3'>
		     <Hero />	
		     <About />
		     <Skills />
		     <Services />	 
		     <Working />		   
		     <Projects />
		     <Contact />
		   </div>
		   <Footer />
		</>
	)
}

export default Home