import React from 'react';

const SearchBox = ({ searchfield, serchChange }) => {
  return (
    <div className="pa2">
      <input
      className="pa3 ba b--green bg-light-blue"
      type="text"
      placeholder="search robots"
      onChange={serchChange}
      />
    </div>
  )
}

export default SearchBox;
