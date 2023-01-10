import "./searchInputField.css"
import { useState } from "react"

const SearchInputField = (props) => {
    const [query, setQuery] = useState("")

    const queryHandler = (event) => {
        setQuery(event.target.value)
        props.queryHandler(event.target.value)
    }

    const querySubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="form__group" onSubmit={querySubmitHandler}>
                <form action="/">
                    <input 
                        type="input" 
                        className="form__field" 
                        placeholder="Search" 
                        name="query" 
                        id="header__searchInputField"
                        value={query}
                        onChange={queryHandler}
                    />
                    <label 
                        className="form__label" 
                        htmlFor="header__searchInputField">
                            Search
                    </label>
                    <button type="submit">
                        <span><i className="fas fa-search"></i></span>
                    </button>
                </form>
            </div>
        </>
    )
}

export default SearchInputField;