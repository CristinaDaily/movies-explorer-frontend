import React from 'react';
import './searchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({value, onChange,placeholder, onSubmit,  showInputError,  handleChange, isChecked}) {
    
   
    
    

    return (
        <section className='search'>
            <form className='search__form' onSubmit={onSubmit}>
            <div className='search__container'>   
            <input type="text" name='search__input' className='search__input' placeholder={placeholder} value={value} onChange={onChange} />
            <button type='submit' aria-label='кнопка поиска' className='search__button button'>Найти</button> 
            </div> 
            {showInputError && <p className='search__error'>Нужно ввести ключевое слово</p>}
            < FilterCheckbox onChange={handleChange} isChecked={isChecked}  />
            </form>
        </section>
    );
}

export default SearchForm;