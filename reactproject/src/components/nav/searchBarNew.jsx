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
                    <span className='suggestion__title'>{ title }</span>
                </div>
            </li>
        </>
    )
}

const NoSuggestion = () => {
    return (
        <>
            <li className='noSuggestion'>
                <span>No suggestions</span>
            </li>
        </>
    )
}

const GetSuggestions = ({ query, handleSelectQuery}) => {
    useEffect(() => {
        function navigate (event) {
            const selected = document.querySelector(".search .suggestions .suggestion[data-state=\"selected\"]");

            if(selected === null) {
                let suggestion = document.querySelectorAll(".search .suggestions .suggestion");

                if(event.code === "ArrowDown") {
                    suggestion[0].setAttribute("data-state", "selected");

                    // handleSelectQuery(suggestion[0].querySelector(".suggestion__title").innerHTML);

                } else if(event.code === "ArrowUp") {
                    event.preventDefault()

                    suggestion[suggestion.length-1].setAttribute("data-state", "selected");

                    // handleSelectQuery(suggestion[suggestion.length-1].querySelector(".suggestion__title").innerHTML);

                }
            } else {
                selected.removeAttribute("data-state");

                if(event.code === "ArrowDown") {
                    if(selected.nextSibling !== null) {
                        selected.nextSibling.setAttribute("data-state", "selected");

                        // handleSelectQuery(selected.nextSibling.querySelector(".suggestion__title").innerHTML);

                    } else {

                        // handleSelectQuery("");

                    }
                } else if(event.code === "ArrowUp") {
                    event.preventDefault()

                    if(selected.previousSibling !== null) {
                        selected.previousSibling.setAttribute("data-state", "selected");

                        // handleSelectQuery(selected.previousSibling.querySelector(".suggestion__title").innerHTML);

                    } else {

                        // handleSelectQuery("");

                    }
                } else if(event.code === "Enter") {
                    event.preventDefault();
                    submitForm(selected.querySelector(".suggestion__title").innerHTML);
                }
            }
        }

        document.addEventListener("keydown", navigate);

        return function cleanUp() {
            document.removeEventListener("keydown", navigate)
        }
    }, [])

    if(query.length == 0){
        return;
    }

    const regexp = new RegExp(`^${query}`, 'i');

    let suggestions = (data.products.filter((product) => {
        return regexp.test(product.title);
    })).map((product) => <Suggestion title={product.title} key={`suggestion-${product.title}`}/>); 

    if(suggestions.length === 0) {
        return <NoSuggestion/>;
    }

    return suggestions;
}

const Search = () => {
    const [query, setQuery] = useState("");
    const [selectQuery, setSelectQuery] = useState("");
    const [suggestionsVisibility, setSuggestionsVisibility] = useState(true);

    useEffect(() => {
        document.addEventListener("click", (event)=>{
            const search = document.querySelector(".search");
            let targetEl = event.target;
    
            do {
              if(targetEl === search) {
                setSuggestionsVisibility(true)
                return;
              }
    
              targetEl = targetEl.parentNode;
            } while (targetEl);
    
            if(search !== null){
                setSuggestionsVisibility(false);
            }
        })
      }, [])

    return (
        <div className="search">
            <form className='form' action="#" id="search-form">
                <input 
                    type="search" 
                    id="search-input" 
                    value={query} 
                    onChange={(event) => {
                        setQuery(event.target.value)
                    }}
                    name="go"
                    autoComplete="off"
                />
                <label htmlFor="search-input"></label>
                <button role="submit"><i className="fas fa-search"></i></button>
            </form>
            <div className='suggestions'>
                <ul>
                    {suggestionsVisibility && (<GetSuggestions 
                                                    query={query}
                                                    handleSelectQuery={(selectQuery) => {setSelectQuery(selectQuery)}}
                                                />)}
                </ul>
            </div>
        </div>
    )
}

export default Search;