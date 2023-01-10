import './searchBarNew.css'
import { useState, useEffect } from 'react';
import data from './data.json'

const submitForm = (title) => {
    document.getElementById("search-input").value = title;
    document.getElementById("search-form").submit();
}

const Suggestion = ({ title }) => {
    return (
        <>
            <li className='suggestion'>
                <div onClick={() => {submitForm(title)}}>
                    <span><i className="fas fa-search"></i></span>
                    <span>{ title }</span>
                </div>
            </li>
        </>
    )
}

const GetSuggestions = ({ query }) => {
    if(query.length == 0){
        return;
    }

    const regexp = new RegExp(`^${query}`, 'i');

    return (data.products.filter((product) => {
        return regexp.test(product.title);
    })).map((product) => <Suggestion title={product.title}/>)
}

const Search = () => {
    const [query, setQuery] = useState("");

    // useEffect(() => {
    //     document.addEventListener("click", (event)=>{
    //         const searchModal = document.querySelector(".search-modal");
    //         const details = document.querySelector(".search__details");
    //         let targetEl = event.target;
    
    //         do {
    //           if(targetEl === searchModal) {
    //             return;
    //           }
    
    //           targetEl = targetEl.parentNode;
    //         } while (targetEl);
    
    //         if(searchModal !== null){
    //           details.removeAttribute("open")
    //         }
    //     })
    //   }, [])

    return (
        <div className="search">
            <form className='form' action="#" id="search-form">
                <input 
                    type="search" 
                    id="search-input" 
                    value={query} 
                    onChange={(event) => {setQuery(event.target.value)}}
                    name="go"
                />
                <label htmlFor="search-input"></label>
                <button role="submit"><i className="fas fa-search"></i></button>
            </form>
            <div className='suggestions'>
                <ul>
                    <GetSuggestions query={query}/>
                </ul>
            </div>
        </div>
    )
}

export default Search;