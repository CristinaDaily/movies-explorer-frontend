import React from 'react';
import './FilterCheckbox.css'

function FilterCheckbox({ onChange, isChecked }){
  
  return (
    <label className="filter" htmlFor="short-films"> 
    <div className='filter__container'>
    <input 
      type="checkbox" 
      className='filter__checkbox' 
      id="short-films"
      name='short-films'
      onChange={onChange}
      checked = {isChecked}
    />
    <span className="filter__slider "></span>
    </div>
    Short films</label> 
  );
}

export default FilterCheckbox;