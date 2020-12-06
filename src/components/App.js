import React, { useState } from 'react'

import Header from './Header'
import Route from './Route'
import Accordion from './Accordion'
import Search from './Search'
import Dropdown from './Dropdown'
import Translate from './Translate'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end JavaScript framework.'
  },
  {
    title: 'What is what?',
    content: 'WTF?'
  },
  {
    title: 'How stupid is he?',
    content: '...'
  }
]

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'green'
  },
  {
    label: 'A shade of blue',
    value: 'blue'
  }
]

const App = () => {
  const [selectedOption, setSelectedOption] = useState(options[0])

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selectedOption={selectedOption}
          onSelectedOptionChange={setSelectedOption}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
}

export default App
