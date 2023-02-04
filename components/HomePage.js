import Image from 'next/image'
import React from 'react'

const HomePage = ({data}) => {
  return (
    <div>
         <main>
      {data.map(ev=>{ <a key={ev.id} href={`/events/${ev.id}`}>
        <Image src={ev.image} width={200} height={300}/>
        <h2>{ev.title}</h2>
        <p>{ev.description}</p>
      </a> })}
     
    </main>
    </div>
  )
}

export default HomePage