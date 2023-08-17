import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByValue } from '../../actions/index';
import Styles from './FilterByWeight.module.css'

export default function FilterByWeight ({setCurrentPage, setOrder}) {
    const dispatch = useDispatch();

    function handleChangeFilter(e){
        e.preventDefault();
        dispatch(filterByValue(e.target.value));
        setCurrentPage(1);
        setOrder(`ordenado ${e.target.value}`)
    }

    return (
      <div className={Styles.container}>
      <select onChange={(e) => handleChangeFilter(e)} className={Styles.nameFilter} defaultValue="">
          <option value="ORDER">
            Order Weight
          </option>
          <option value="LESS">- weight</option>
          <option value="HIGH">+ weight</option>
        </select>
      </div>
      
    
      );
}