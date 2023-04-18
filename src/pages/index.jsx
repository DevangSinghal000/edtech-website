import { Fragment, useState } from 'react'
import Navbar1 from '../../components/header'
import Footer from '../../components/footer'
import Price_com from '../../components/price_com'
import Contact from '../../components/contact'
import About from '../../components/about'
import Blog_M from '../../components/blog_main'
import Course_item from '../../components/course_item'
import Testimonials from '../../components/Testimonials'


export default function home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div  >
      <Navbar1/>
       <About />
       <Course_item/ >
       <Blog_M />
       <Testimonials />
       <Price_com />
       <Contact />
      <Footer />
    </div>
  )
}