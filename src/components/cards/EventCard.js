import React from 'react'


export default function EventCard({event}) {
 
  const randomImage = Math.floor((Math.random() * 100) + 1)
  return (
   
<div className='relative h-[500px]'>

    <div class=" bg-gray-300 rounded-2xl h-full">
        
            <picture class="relative block w-full h-full pb bg-gray-300 overflow-hidden shadow-lg rounded-2xl " style={{"paddingTop": "75%"}}>
                <img class="absolute inset-0 w-full h-full object-cover" src={`http://loremflickr.com/800/600/events?${randomImage}`}  alt="A random img from Unsplash" />
            </picture>
      
    </div>
    <div class="  z-10 px-4  inset-x-0 bottom-0  absolute mb-4 ">
        <div class="p-4 md:p-8 rounded-2xl  bg-white shadow-lg">
            <div class="mb-3 text-2xl flex flex-wrap lg:flex-nowrap gap-4 justify-between items-center leading-none font-medium">
                <a class="font-bold w-full xl:w-4/5 break-all bg-clip-text text-transparent bg-gradient-to-r from-mainPink to-mainPurple" href="/"  title="Heading Link">
                    {event.name}
                </a>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#510FD5]  to-[#8292E6] '>
                ${event.amount}
              </span>
            </div>
            <p className='font-normal w-3/5 flex flex-wrap  justify-between text-sm text-[#2E2E2E] mb-3'>
            <time datetime="">
                    {event.date}
                </time>
              <span>
                {event.location}
              </span>
            </p>
            <p class="mb-3 text-sm text-[#808080] ">
                {event.description}
            </p>
           
            <div >

            <a  href={`/register/${event.name}`} class="flex justify-center py-4 px-4 bg-gradient-to-r from-pink-500 to-violet-500   focus:ring-0 focus:ring-offset-0 text-white w-full transition ease-in duration-200 text-center text-base font-normal  focus:outline-none   rounded-lg ">
              Buy Ticket
            </a>

            </div>
        </div>
    </div>
    </div>
  )
}
