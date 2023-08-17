import React from 'react';
import Styles from '../LandingPage/Landing.module.css';
import { Link } from 'react-router-dom'


export default function LandingPage(){
    return(
        <div className={Styles.container}>
        

        <div className={Styles.content}>
            <Link to= '/home'>
                <button className={Styles.btnLan}>Doggies Site</button>
            </Link>
        </div>
      
    </div>
    )
}
