import SearchBar from "../searchBar"
import Popover from "./popover"

const Nav = () => {

  return (
      <div className=''>
        <Popover name="Shop" items={["All", "Australian tees"]}/>
        <p>College Marketplace</p>
        <SearchBar/>
        <a href="#">Account</a>
        <a href="#">Sell</a>
        <a href="#">Chat</a>
      </div>
  )
}

export default () => (
  <Nav /> 
)