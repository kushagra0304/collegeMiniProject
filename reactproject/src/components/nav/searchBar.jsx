import { useState } from 'react'
import './searchBar.css'

const SearchBar = () => {

  const detailsToggle = (event) => {
    const details = document.querySelector(".searchBar__details");

    if(details.open){
      details.removeAttribute("open")
    } else {
      details.setAttribute("open", "true")
    }
  } 


  return (
    <div className='searchBar'>
      <details className='searchBar__details'>
        <summary>
          <span><i class="fas fa-search"></i></span>
        </summary>
        <div className='searchBar__content'>
          <input type="text" />
          <button onClick={detailsToggle}>close</button>
        </div>
      </details>
    </div>
  )
}

export default SearchBar
