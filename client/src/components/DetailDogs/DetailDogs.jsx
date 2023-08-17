import React, { useEffect, useState } from 'react';
import { dogsDetail } from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './DetailDogs.module.css';
import { useParams, Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Loading from '../Loading/Loading';

export default function DetailDogs() {
  // Obtener el ID de la URL usando el hook useParams
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // Obtener el estado detail de la tienda Redux
  const detail = useSelector((state) => state.detail);
  // Estado para manejar la carga
  console.log(detail)
  const [isLoading, setIsLoading] = useState(true);

  // Llamar a la acción dogsDetail al cargar la página
  useEffect(() => {
    dispatch(dogsDetail(id)).then(() => setIsLoading(false));
  }, [dispatch, id]);
  return (
    <div>
      <Nav />
      <div className={Styles.cuerpoPagina}>
      {isLoading ? (
  <Loading />
) : detail ? (
  <div>
    <div className={Styles.cuerpoTarjeta}>
    <h1 className={Styles.Title}>Dog Detail</h1>

    {detail.length > 0 && detail[0].image ? (
  <div className={Styles.card}>
    <img src={detail[0].image} alt={<Loading/>}></img>
  </div>
) : (
  <Loading />

)}    
    <div className={Styles.cardBody}>
      <p className={Styles.textprin}>{detail[0].name}</p>
      <p className={Styles.textdet}>Height: {detail[0].height + ' cm'}</p>
      <p className={Styles.textdet}>Weight: {detail[0].weight + ' Kg'}</p>
      <p className={Styles.textdet}>Life span: {detail[0].lifeSpan}</p>
      {detail[0].Temperaments && (
      <p className={Styles.textdet}>Temperaments: {detail[0].Temperaments.join(', ')}</p>)}
        <Link to='/home'>
        <button className={Styles.link}>Press HERE for go back</button>
      </Link>
    </div>
  </div>
  </div>
) : (
  <p>No data available.</p>
)}

      </div>
  
    
    </div>
  );
}
