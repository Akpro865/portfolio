import Header from './Header' 
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Services from './Services'
import Working from './Working'

function Home(){
	return (
		<div>
		   <Header />
		   <Hero />	
		   <About />
		   <Skills />
		   <Services />	 
		   <Working />  
		</div>
	)
}

export default Home