import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTemperament } from '../../actions/index';
import Styles from './FilterByTemperament.module.css';

export default function FilterByTemperament({setCurrentPage,setOrder}) {
    const dispatch = useDispatch()
    const allTemperaments = useSelector((state) => state.temperaments); // <-- aquí cambiamos "temperaments" por "Temperaments"

    function handleFilterTemp(e){
        e.preventDefault()
        dispatch(filterTemperament(e.target.value))
        setCurrentPage(1);
        setOrder(`ordenado ${e.target.value}`)
    }

    return (
            <select onChange={(e) => handleFilterTemp(e)} className={Styles.nameFilter}>
            <option key={0} value='ALL'>Temperaments</option>
            {allTemperaments?.map((temp) => (
                <option value={temp.name} key={temp.id}>{temp.name}</option>
            ))}
        </select>
      
    )
}

