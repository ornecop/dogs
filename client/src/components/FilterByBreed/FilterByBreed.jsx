import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCreated, getDogs } from '../../actions/index';
import Styles from './FilterByBreed.module.css'
import { useState, useEffect } from 'react';


export default function FilterByBreed({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState('ALL');

  useEffect(() => {
    if (filterValue === 'ALL') {
      dispatch(getDogs());
    } else {
      dispatch(filterCreated(filterValue));
    }
    setCurrentPage(1);
    setOrder(`ordenado ${filterValue}`);
  }, [filterValue, dispatch, setCurrentPage, setOrder]);

    function handleFilterChange(e) {
    setFilterValue(e.target.value);
  }

  return (
    <div className={Styles.burger}>
    <select value={filterValue} onChange={handleFilterChange} className={Styles.nameFilter}>
      <option value="ALL">All</option>
      <option value="CREATED">Created</option>
      <option value='API'>Api</option>

    </select>
    </div>

  );
}