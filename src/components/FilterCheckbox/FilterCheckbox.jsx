import React from 'react';
import './FilterCheckbox.css'

function FilterCheckbox( ){
    return (

        <label className="filter" htmlFor="short-films"> 
        <div className='filter__container'>
        <input type="checkbox" className='filter__checkbox' id="short-films" name='short-films'/>
        <span className="filter__slider "></span>
        </div>
        Короткометражки</label>
        

        
    );
}

export default FilterCheckbox;