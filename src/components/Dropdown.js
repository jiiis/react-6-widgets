import React, { useEffect, useRef, useState } from 'react'

const Dropdown = ({ label, options, selectedOption, onSelectedOptionChange }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return
      }

      setOpen(false)
    }

    document.body.addEventListener('click', onBodyClick, { capture: true })

    return () => document.body.removeEventListener('click', onBodyClick)
  }, [])

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown${open ? ' visible active' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon" />
          <div className="text">{selectedOption.label}</div>
          <div className={`menu${open ? ' visible transition' : ''}`}>
            {options.map((option) => option.value !== selectedOption.value && (
              <div
                className="item"
                key={option.value}
                onClick={() => onSelectedOptionChange(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
