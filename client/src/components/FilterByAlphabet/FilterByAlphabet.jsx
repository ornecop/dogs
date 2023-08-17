import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByName } from '../../actions/index';
import Styles from '../FilterByAlphabet/FilterByAlphabet.module.css'

export default function FilterByAlphabet({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();

  function handleFilter(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);

  }

  return (
 <div >
       <select onChange ={(e)=>{handleFilter(e)}} name="filterAZ" id="filterAZ" className={Styles.nameFilter}>
        <option selected="true" disabled="disabled">Order A-Z</option> 
      <option value="" disabled>
        Order A-Z
      </option>
      <option className={Styles.Az} value="AZ">Order A-Z</option>
      <option className={Styles.Az} value="ZA">Order Z-A</option>
    </select>
 </div>
 
    
 
  );
}
