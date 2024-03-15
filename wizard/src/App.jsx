

import Header from './assets/components/Header'
import Intro from './assets/components/Intro'
import Features from './assets/components/Features'
import About from './assets/components/About'
import More from './assets/components/More'
import Footer from './assets/components/Footer'
import FAQ from './assets/components/FAQ'

function App() {

  return (
    <main className='min-h-screen flex flex-col items-centre justify-center'>
       <Header/>
       <Intro/>
       <Features />
       <About/>
       <FAQ/>
       <More/>
       <Footer/>

    </main>
  )
}

export default App