import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const onTitleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="ui styled accordion">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div
            className={`title${index === activeIndex ? ' active' : ''}`}
            onClick={() => onTitleClick(index)}
          >
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className={`content${index === activeIndex ? ' active' : ''}`}>
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Accordion
