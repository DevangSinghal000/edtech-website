import { HiAcademicCap } from "react-icons/hi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { HiOutlinePresentationChartBar } from "react-icons/hi";

export default function Course_item() {
  return (
   <>
   <div className=" my-24 px-6 mx-0 bg-slate-950 mt-0 mb-0">
<div className=" my-24 px-6 mx-0 bg-slate-950 mt-0 mb-0">
<section className="text-white body-font border-t border-gray-900 ">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-small title-font mb-4 text-rose-600 font-bold text-center">What We Offer </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl font-bold text-center text-white">Our mission is to help the entire world educate online.</p>
    </div>
    <div className="flex flex-wrap -m-2 ">
      <a href ="/dataSpage"  className="p-2 lg:w-1/3 md:w-1/2 w-full ">
        <div className="h-full flex items-center    p-4 rounded-lg  hover:border-cyan-700 border bg-gradient-to-r from-slate-900 ...slate-500   " >
        <HiAcademicCap class="text-cyan-500 w-10 h-10" />
          
          <div className="flex-grow flex flex-col justify-center ml-4">
            <h2 className="text-white title-font font-medium ">Data Science</h2>
            <p className="text-white">Data is everything</p>
          </div>
        </div>
      </a>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className=" h-full flex items-center   p-4 rounded-lg hover:border-cyan-700 border bg-gradient-to-r from-slate-900 ...slate-500 ">
          <HiOutlineOfficeBuilding class="text-cyan-500 w-10 h-10" />
          <div className="flex-grow flex flex-col justify-center ml-4">
            <h2 className="text-white title-font font-medium">Business</h2>
            <p className="text-white">Improve your business</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className=" h-full flex items-center   p-4 rounded-lg hover:border-cyan-700 border bg-gradient-to-r from-slate-900 ...slate-500 ">
        <HiOutlinePencilAlt class="text-cyan-500 w-10 h-10" />
          <div className="flex-grow flex flex-col justify-center ml-4">
            <h2 className="text-white title-font font-medium">Art & Design</h2>
            <p className="text-white">Fun & challenging</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className=" h-full flex items-center   p-4 rounded-lg hover:border-cyan-700 border bg-gradient-to-r from-slate-900 ...slate-500 ">
        <HiOutlineShoppingBag class="text-cyan-500 w-10 h-10" />
           <div className="flex-grow flex flex-col justify-center ml-4">
            <h2 className="text-white title-font font-medium">Lifestyle</h2>
            <p className="text-white">New Skills,New You</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className=" h-full flex items-center   p-4 rounded-lg hover:border-cyan-700 border bg-gradient-to-r from-slate-900 ...slate-500 ">
        <HiOutlinePresentationChartLine class="text-cyan-500 w-10 h-10" />
          <div className="flex-grow flex flex-col justify-center ml-4">
            <h2 className="text-white title-font font-medium">Marketing</h2>
            <p className="text-white">Improve your business</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className=" h-full flex items-center   p-4 rounded-lg hover:border-cyan-700 border bg-gradient-to-r from-slate-900 ...slate-500 ">
        <HiOutlinePresentationChartBar class="text-cyan-500 w-10 h-10" />
           <div className="flex-grow flex flex-col justify-center ml-4">
            <h2 className="text-white title-font font-medium">Finance</h2>
            <p className="text-white">Fun & Challenging</p>
          </div>
        </div>
      </div>
      
      
      
    </div>
  </div>
</section>
  

</div>

   
   </div>
   </>
  )
}
