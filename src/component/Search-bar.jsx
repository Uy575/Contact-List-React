import React from 'react'

function Searchbar(props) {
     const {placeholder,onChangeHandler} = props;
  return (
    <input type={'search'} placeholder = {placeholder}
    onChange ={onChangeHandler} className = 'searchBar'
    ></input>
  )
}

export default Searchbar;