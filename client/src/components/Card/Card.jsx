import React from 'react';
import { Link } from 'react-router-dom';
import Styles from '../Card/Card.module.css'

export default function Card({ name, img, Temperaments, id , weight }) { 
  return (
    <div className={Styles.container}>
        <Link to={`/dogs/${id}`}>
        <img  src={img} alt={name} className={Styles.img} />
          <div className={Styles.info}>
         
            <h2 className={Styles.name}>{name}</h2>
            <h3 className={Styles.data}>Weight: {weight}</h3>
            <h4 className={Styles.data2}>These puppies are usually:</h4>
          <p className={Styles.data3}>{Temperaments.join(", ")}
           </p>
          </div>

           
        </Link>
    
    </div>
    
  )
  
}


        