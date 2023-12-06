import React from 'react';
import './searchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm(props) {
    return (
        <section className='search'>
            <form className='search__form'>
            <div className='search__container'>   
            <input type="text" name='search__input' className='search__input' placeholder={props.placeholder} required />
            <button type='submit' aria-label='кнопка поиска' className='search__button button'>Найти</button> 
            </div> 
            < FilterCheckbox />
            </form>
        </section>
    );
}

export default SearchForm;