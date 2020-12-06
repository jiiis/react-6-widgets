import React, { useEffect, useState } from 'react'

import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
  {
    label: 'Chinese',
    value: 'zh'
  },
  {
    label: 'Japanese',
    value: 'ja'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Afrikaans',
    value: 'af'
  }
]

const Translate = () => {
  const [text, setText] = useState('')
  const [debouncedText, setDebouncedText] = useState(text)
  const [language, setLanguage] = useState(options[0])

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedText(text), 500)

    return () => clearTimeout(timer)
  }, [text])

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        options={options}
        selectedOption={language}
        onSelectedOptionChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={debouncedText} language={language} />
    </div>
  )
}

export default Translate
