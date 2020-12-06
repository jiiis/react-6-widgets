import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('React')
  const [debouncedTerm, setDebouncedTerm] = useState(term)
  const [results, setResults] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedTerm(term), 500)

    return () => clearTimeout(timer)
  }, [term])

  useEffect(() => {
    if (!debouncedTerm) {
      return setResults([])
    }

    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      })

      setResults(data.query.search)
    }

    return search()
  }, [debouncedTerm])

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            className="input"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
        {results.map((result) => (
          <div key={result.pageid} className="item">
            <div className="right floated content">
              <a
                className="ui button"
                href={`https://en.wikipedia.org?curid=${result.pageid}`}
                target="_blank"
                rel="noreferrer"
              >Go</a>
            </div>
            <div className="content">
              <div className="header">{result.title}</div>
              <div dangerouslySetInnerHTML={{ __html: result.snippet }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search
