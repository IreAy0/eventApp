import React from 'react'
import overlay from '../../assets/images/Overlay.png'

export default function Header() {
  return (
    
<div className=" relative overflow-hidden ">
    <img src={overlay} alt="background-img" className="absolute h-full w-full object-cover"/>
    <div className="inset-0 bg-black  opacity-25 absolute">
    </div>
    <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container mx-auto px-6 md:px-12 py-4">
            <div className="md:flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <a href="/" className="text-white">
                        <svg className="w-8 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 16.16 12.57">
                            <defs>
                            </defs>
                            <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z">
                            </path>
                            <path d="M16.16 5.82H0L8.08 0l8.08 5.82z">
                            </path>
                        </svg>
                    </a>
                   
                </div>
                
            </div>
        </nav>
    </header>
    <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center py-32 xl:py-40 h-full">
        <div className="lg:w-4/5 xl:w-3/5 flex flex-col items-center relative z-10 mx-auto border-4 rounded-2xl lg:rounded-3xl justify-center shadow-lg bg-black bg-opacity-40 py-10 px-10  lg:px-20 lg:py-20 text-center">
          
            <h1 className="font-bold leading-tight lg:leading-loose text-5xl sm:text-7xl text-white  mt-4">
            Discover Popular Events Today
            </h1>
            <div className='bg-white rounded-lg  mt-10 '>
              <a href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-sm lg:text-lg  font-normal uppercase">
                  Explore Events
              </a>
              </div> 
           
           
        </div>
    </div>
</div>

  )
}
