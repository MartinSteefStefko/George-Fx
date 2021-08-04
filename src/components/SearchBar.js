import React from 'react'
import './SearchBar.css'

const SearchBar = ({ onHandleChange }) => {
  return (
    <div className={'currency-search'}>
      <form>
        <input
          className="currency-input"
          type="text"
          onChange={onHandleChange}
          placeholder="Search"
        />
      </form>
      {/* </div> */}
    </div>
  )
}

export default SearchBar
