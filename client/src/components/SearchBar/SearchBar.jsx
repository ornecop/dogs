import React from 'react'
import Styles from './SearchBar.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchName } from '../../actions/index';
import { Link } from 'react-router-dom';


export default function SearchBar() {
  const dispatch = useDispatch();
  const [name , setName] =useState(''); 

  function handleInputChange(e){
    e.preventDefault(e);
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault(e);
    dispatch(searchName(name))
  }

  return (
    
      <div className={Styles.container}>
      
        <div className={Styles.searchBar}>
          <input className={Styles.input}
          value={name}
          type='text'
          placeholder='Find your doggie'
          onChange={(e)=>handleInputChange(e)}/>
          <button className={Styles.btnSearch} type='submit' onClick={(e)=>handleSubmit(e)}>Search</button>
          <Link to="/CreateDog" >
         <button className={Styles.btnCreate}>Create Dog</button>
        </Link>
        </div>
      </div>
  );
}
