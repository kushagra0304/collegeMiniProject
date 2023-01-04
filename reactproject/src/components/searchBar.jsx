import { useState } from 'react'
import {AutoComplete, Grid, Text} from '@geist-ui/core'

const SearchBar = () => {
    const makeOption = (label, value) => (
      <AutoComplete.Option value={value}>
        <Grid.Container style={{ padding: '10pt 0' }}>
          <Grid xs><Text span>{label}</Text></Grid>
        </Grid.Container>
      </AutoComplete.Option>
    )
    const allOptions = [
      { label: 'London', value: 'london' },
      { label: 'Sydney', value: 'sydney' },
      { label: 'Shanghai', value: 'shanghai' },
    ]
    const [options, setOptions] = useState()

    const searchHandler = (currentValue) => {
      if (!currentValue) return setOptions([])

      /* The line of code below needs to be changed to a Post request which carries "currentValue"
         this sent value is to be processed in the server and the response of a post request should carry 
         options(or suggestons).
      */
      const relatedOptions = allOptions.filter(item => item.value.includes(currentValue))
      /* This geist component also have a searching state. So don't forget to use this functionality. */

      const customOptions = relatedOptions.map(({ label, value }) => makeOption(label, value))
      setOptions(customOptions)
    }

    return (
      <AutoComplete placeholder="Enter here"
        width="100%"
        options={options}
        onSearch={searchHandler} />
    )
}

export default SearchBar
