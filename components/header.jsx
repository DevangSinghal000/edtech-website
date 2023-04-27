import { Fragment, useState } from 'react'

export default function Navbar1()  {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const headerStyle = {
    backgroundColor: 'rgb(3, 3, 3)',
    color: '#00adb5',
  };
  

  return (
    <header className="p-4 bg-slate-950 border-gray-200 text-cyan-600">
	<div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="/"  className="flex items-center px-4 -mb-1    dark:border-transparent  hover:text-emerald-600">Home</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="/code" className="flex items-center px-4 -mb-1   dark:border-transparent  hover:text-emerald-600">Code</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="/Liveclass" className="flex items-center px-4 -mb-1   dark:border-transparent   hover:text-emerald-600">Live Class</a>
			</li>
		</ul>
		<a  rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2 " >
    <img src="/Logo.png" alt="Logo" className="h-24 w-auto text-white " />
		</a>
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="/courses" className="flex items-center px-4 -mb-1   dark:border-transparent  hover:text-emerald-600">Courses</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="/blog" className="flex items-center px-4 -mb-1   dark:border-transparent  hover:text-emerald-600">Blog</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="/contact" className="flex items-center px-4 -mb-1   dark:border-transparent  hover:text-emerald-600">Contact</a>
			</li>
		</ul>
		
	</div>
</header>
   
  )
}
