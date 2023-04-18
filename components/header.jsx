import { Fragment, useState } from 'react'

export default function Navbar1()  {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const headerStyle = {
    backgroundColor: 'rgb(3, 3, 3)',
    color: '#00adb5',
    
    
    
  };
  

  return (
    <header className="text-cyan-600 body-font border-b border-gray-200 " style={headerStyle}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" target="_blank">
  <img src="/Logo.png" alt="Logo" className="h-20 text-white p-2  " />
  <span  className="ml-3 text-xl text-cyan-600">MindEdge</span>
</a>

    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-emerald-600 text-lg" href="/">Home</a>
      <a className="mr-5 hover:text-emerald-600 text-lg" href="/code">Code </a>
      <a className="mr-5 hover:text-emerald-600 text-lg" href="/Liveclass">Live Class</a>
      <a className="mr-5 hover:text-emerald-600 text-lg" href="/courses">Courses</a>
      <a className="mr-5 hover:text-emerald-600 text-lg" href="/blog">Blog</a>
      <a className="mr-5 hover:text-emerald-600 text-lg" href="/contact">Contact</a>
      
    </nav>
    <button  className="inline-flex items-center bg-cyan-700 text-white border-0 py-1 px-3 focus:outline-none hover:bg-emerald-700 hover:text-white rounded text-base mt-4 md:mt-0" > <a href = "/Login">Log in</a>
    </button>
  </div>
</header>
   
  )
}
