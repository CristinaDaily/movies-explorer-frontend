import React from 'react';
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm(props) {
    return (
        <section className='search'>
            <form className='search__form'>
            <div className='search__container'>   
            <input type="text" name='search__input' className='search__input' placeholder={props.placeholder} />
            <button type='button' aria-label='кнопка поиска' className='search__button button'>Найти</button> 
            </div> 
            < FilterCheckbox />
            </form>
        </section>
    );
}

export default SearchForm;