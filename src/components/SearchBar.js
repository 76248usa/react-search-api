import React from 'react'
import {useState} from 'react'
import './SearchBar.css'

function Searchbar({onSubmit}) {
  const [term, setTerm] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term)
  }
  
  return (
    <div className='search-bar'>
      
    <label htmlFor="">Enter Search Term</label>
      <form onSubmit={handleFormSubmit}>
      <input type="text" value = {term} onChange={(e) => setTerm(e.target.value)}
      placeholder="Search topics for pictures, such as 'cars' " />
      </form>
    </div>
  )
}

export default Searchbar
