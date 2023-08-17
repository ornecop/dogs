import React from "react";
import Styles from './Home.module.css'
import Loading from '../Loading/Loading'
import {  useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, getTemperament } from '../../actions/index'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import Nav from '../Nav/Nav'
import Card from '../Card/Card'
import Paginado from '../Paginado/Paginado';
import FilterByAlphabet from '../FilterByAlphabet/FilterByAlphabet';
import FilterByBreed from '../FilterByBreed/FilterByBreed';
import FilterByWeight from '../FilterByWeight/FilterByWeight';
import FilterByTemperament from '../FilterByTemperament/FilterByTemperament'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer'
export default function Home(){
    const dispatch = useDispatch()
    const allDogs = useSelector ((state) => state.dogs);
    const [order, setOrder] = useState(1);
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage] = useState(8)
    const indexOfLastDog = currentPage * dogsPerPage
    const indexOfFirstDog = indexOfLastDog - dogsPerPage
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    useEffect(() => {
        dispatch(getDogs());
        dispatch(getTemperament());
        // setTimeout(() =>{
        //     setloading(false)
        // },3000)
    },[dispatch])

    function resetFilters() {
        setOrder("");
        setCurrentPage(1);
      }
      function handleResetFilters() {
        resetFilters();
        dispatch(getDogs());
      }
      
    return (
        
        <div className={Styles.Homecont}>

            <div className={Styles.cont}>
            <Nav />
            <SearchBar />

              
            </div>

   
            <div className={Styles.filters}>
            <button className={Styles.btnHome} onClick={handleResetFilters}>
      <FontAwesomeIcon icon={faSync} /> 
    </button> 
        <FilterByAlphabet setCurrentPage={setCurrentPage} order={order} setOrder={setOrder} />
        <FilterByWeight setCurrentPage={setCurrentPage} order={order} setOrder={setOrder} />
        <FilterByBreed setCurrentPage={setCurrentPage} order={order} setOrder={setOrder} />
        <FilterByTemperament setCurrentPage={setCurrentPage} order={order} setOrder={setOrder} />
    
        </div>
       
        <div>
            </div>
        <div className={Styles.paginate}>
              <Paginado dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginado={paginado}/>
        </div>
        <div className={Styles.containerCards}>
          {currentDogs.length  ?  currentDogs.map((el) => {
            return (
              <Link to={"/dogs/" + el.id} key={el.id} >
                <Card name={el.name} weight={el.weight} img={el.img ? el.img : el.image} 
                Temperaments={el.Temperaments} id={el.id} />
              </Link>
            );
          })  :(<Loading/>)}
        </div>
        <Footer />
    </div>
    
    )
}
