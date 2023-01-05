import { GeistProvider, CssBaseline } from '@geist-ui/core'
import SearchBar from "../searchBar"

const Nav = () => {

  return (
      <div className=''>
        <p>College Marketplace</p>
        <SearchBar/>
        <a href="#">Account</a>
        <a href="#">Sell</a>
        <a href="#">Chat</a>
      </div>
  )
}

export default () => (
  <GeistProvider>
    <CssBaseline /> 
    <Nav /> 
  </GeistProvider>
)