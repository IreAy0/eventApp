import React from 'react'
import EventCard from '../cards/EventCard'
import Layout from '../Layout/Layout'
import { event } from '../utils/api';

export default function Home() {
  

  return (
    <Layout>
      <div className='container mx-auto px-6 md:px-12 py-8'>
          <h2 className='font-bold text-[#2E2E2E] text-4xl sm:text-6xl'>Upcoming events</h2>
            
          <div className='py-4 grid md:grid-cols-2 xl:grid-cols-3   gap-16 relative  w-full mx-auto px-4'>
          {
              event.map((event, index) => (
                <EventCard event={event}/>

              ))}
          </div>
      </div>

    </Layout>
  )
}
