import Popover from "./popover"
import './nav.css'
import SearchBar from "./searchBar"

const Nav = () => {

  return (
      <div className='nav'>
        <Popover name="Shop" items={["All", "Australian tees"]}/>
        <Popover name="OurWorld" items={["About Us", "Giving Back"]}/>
        {/* <p className="brand">College Marketplace</p> */}
        <SearchBar/>
        {/* <a href="#">Account</a>
        <a href="#">Sell</a>
        <a href="#">Chat</a> */}
      </div>
  )
}

export default () => (
  <Nav /> 
)