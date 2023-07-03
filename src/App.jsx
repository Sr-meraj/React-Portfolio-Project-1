import './App.css'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/Portfolio/Portfolio'
import Service from './components/service/Service'
import Testimonial from './components/Testimonial/Testimonial'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App
