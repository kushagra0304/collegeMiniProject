import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { Popover, Spacer} from '@geist-ui/core'
import SearchBar from "../searchBar"
import PopoverNav from './popoverNav'

const Nav = () => {
  const shopCategories = ["Men's clothing", "Jewelery", "Electronics", "Womes's clothing"]
  const usCategories = ["Us"]

  return (
      <div className=''>
        <PopoverNav categories={shopCategories} name="Menu" />
        <PopoverNav categories={usCategories} name="Us" />
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