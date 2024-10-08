import React, { useState } from 'react'
import './App.css'
import data from './components/data'
import Tours from './components/Tours'

function App() {
 
   const [tours, setTour] = useState(data)

  function  removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTour(newTours);
  }

  if(tours.length==0){
    return(
       <div className='refresh'>
       <h2>NO Tour Left</h2>
       <button className='btn-white' onClick={()=> setTour(data)}>
        Refresh
       </button>
       </div>
    )
  }

  return (
   <div className='App'>
   
    <Tours tours={tours} removeTour={removeTour}></Tours>
   </div>
  )
}

export default App
