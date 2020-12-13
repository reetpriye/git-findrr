import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({showAlert, searchUsers, showClear, clearUsers}) => {

  const [text,setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  }

  const onSubmit = e => {
    if(text === '') {
      showAlert('Please enter something...', 'light');
    }
    e.preventDefault();
    searchUsers(text);
    setText('');
  }

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input type='text' name='text' placeholder='Enter username' value={text} onChange={onChange}/>
        <input type='submit' value='Search' className='btn btn-dark btn-block'/>
      </form>
      {showClear && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
    </div>
  )
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired
}

export default Search
