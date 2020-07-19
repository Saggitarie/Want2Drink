import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const barOptions = [
  { key: 'btb', value: 'Bonjour Tokyo Bar', text: 'Bonjour Tokyo Bar' },
  { key: 'bc', value: 'Beat Cafe', text: 'Beat Cafe' },
  { key: 'bg', value: 'Bar Ghetto', text: 'Bar Ghetto' },
  { key: 'at', value: 'Aoyama Tunnel', text: 'Aoyama Tunnel' },
  { key: 'b8c', value: '8bit cafe', text: '8bit cafe' },
  { key: 'bgz', value: '300 Bar Ginza', text: 'Bar Ginza' },
]

const BarDropdown = ({setSelectedBar}) => {

  function onSelected(e, data){
    console.log(data.value)
    setSelectedBar(data.value)
  }

  return (
    <Dropdown
      placeholder='Select Your Favorite Bar'
      fluid
      search
      selection
      options={barOptions}
      onChange={onSelected}
    />
  )
}

export default BarDropdown;