import Navbar from "./sections/navbar/Navbar"
import Header from "./sections/header/Header"
import About  from "./sections/about/About"
import Services from "./sections/services/Services"
import Portfolio from "./sections/portfolio/Portfolio"
import Testimonials from "./sections/testimonials/Testimonials"
import Faqs from "./sections/Faqs/Faqs"
import Contact from "./sections/contact/Contact"
import Footer from "./sections/footer/Footer"
import FloatingNavbar from "./sections/floatingNav/FloatingNav"

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
      <FloatingNavbar />


    </>
  )
}

export default App