import { useState, useEffect } from 'react'
import './searchBar.css'
import SearchInputField from "./searchInputField"

const SearchBar = () => {
  const [query, setQuery] = useState(null);

  const posts = [
    { id: '1', name: 'This first post is about React' },
    { id: '2', name: 'This next post is about Preact' },
    { id: '3', name: 'We have yet another React post!' },
    { id: '4', name: 'This is the fourth and final post' },
];


  const queryHandler = (query) => {
    setQuery(query);
  }

  const detailsToggle = (event) => {
    const details = document.querySelector(".searchBar__details");

    if(details.open){
      details.removeAttribute("open")
    } else {
      details.setAttribute("open", "true")
    }
  } 

  useEffect(() => {
    document.addEventListener("click", (event)=>{
        const searchBarContent = document.querySelector(".searchBar__content");
        const details = document.querySelector(".searchBar__details");
        let targetEl = event.target;

        do {
          if(targetEl == searchBarContent) {
            return;
          }

          targetEl = targetEl.parentNode;
        } while (targetEl);

        if(searchBarContent !== null){
          details.removeAttribute("open")
        }
    })
  }, [])


  return (
    <div className='searchBar'>
      <details className='searchBar__details'>
        <summary>
          <span><i className="fas fa-search"></i></span>
        </summary>
        <div className='searchBar__content'>
          <SearchInputField queryHandler={queryHandler}/>
          <div className='SearchBar__searchSuggestions'>
            <ul>
              {(posts.filter((post) => {
                return post.name.toLowerCase().includes(query);
              })).map((post) => <li>{post.name}</li>)}
            </ul>
          </div>
          <button onClick={detailsToggle}>close</button>
        </div>
      </details>
    </div>
  )
}

export default SearchBar
