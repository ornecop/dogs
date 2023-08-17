import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Styles from '../CreateDog/CreateDog.module.css'
import {postDog, getTemperament} from '../../actions/index';

function validate(input){
    let error = {};

    if(!input.name){
        error.name= <span className={Styles.text}>Race is required!</span>;
    }
    if (!input.heightMin) {
        error.heightMin = <span className={Styles.text}>Please enter the minumum height!</span>;
    }
  
    if (input.heightMin && input.heightMax && parseInt(input.heightMin) >= parseInt(input.heightMax)) {
        error.height = <span className={Styles.text}>The maximum weight must be greater than the minimum weight!</span>
    }
    if (!input.heightMax) {
        error.heightMax = <span className={Styles.text}>Please enter the maximum height!</span>;
    } 
    if (!input.weightMin || input.weightMin < 0) {
        error.weightMin = <span className={Styles.text}>Please enter the minimum weight!</span>;
    } 
    if (input.weightMin && input.weightMax && parseInt(input.weightMin) >= parseInt(input.weightMax)) {
        error.weight = <span className={Styles.text}>The maximum weight must be greater than minimum weight!</span>;
    }
    if (!input.weightMax) {
        error.weightMax = <span className={Styles.text}>Please enter the maximum weight!</span>;
    }

    if(!input.lifeSpan){
        error.lifeSpan= <span className={Styles.text}>Life Span is required!</span>;
    }
  
    return error
};

export const CreateDog=() =>{
    const dispatch = useDispatch();
    const allTemperaments = useSelector((state) => state.temperaments)
    const [errors, setErrors] =useState({})
    const [success] = useState(false)
    const [input , setInput] = useState({
        name:'',
        heightMin:'',
        heightMax:'',
        weightMin: '',
        weightMax: '',
        lifeSpan:'',
        temperaments:[]
    })

useEffect(() => {
    dispatch(getTemperament())
}, [dispatch])

function handleChange(e) {
    setInput({
        ...input,
        [e.target.name]: e.target.value,
    })
    setErrors(validate({
        ...input,
        [e.target.name]: e.target.value,
    }))
}

function handleSelect(e) {
    if (!input.temperaments.includes(e.target.value)) {
        setInput({
            ...input,
            temperaments: [...input.temperaments, e.target.value]
        })
    }
}

    
function handleSubmit(e) {

    e.preventDefault()
    // if (!Object.getOwnPropertyNames(errors).length && input.name && input.heightMin && input.heightMax && input.weightMin && input.weightMax && input.lifeSpan) {

        dispatch(postDog(input))
        alert('Dog Created Success')
        setInput({
            name: '',
            heightMin: '',
            heightMax: '',
            weightMin: '',
            weightMax: '',
            lifeSpan: '',
            image: '',
            temperaments: [],
        })

    // } else {
    //     alert('Fields are incomplete!')
    // }
}
    
function handleDelete(e) {
    setInput({
        ...input,
        temperaments: input.temperaments.filter(temp => temp !== e)
    })
}


  return (
    <div className={Styles.container}>
        <form onSubmit={handleSubmit} className={Styles.form}>
        <h1  className={Styles.h1}>Create Your Dog</h1>

        
            <div className={Styles.super}>
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <label className={Styles.Lab}><strong className={Styles.text1}>Breed Name: </strong></label>
                        <input type="text" value={input.name} name='name' onChange={e => handleChange(e)} />
                        {errors.name && (
                            <p className="error">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label className={Styles.Lab}><strong className={Styles.text1}>Minimun Height: </strong></label>
                        <input type="text" value={input.heightMin} name='heightMin' onChange={e => handleChange(e)} />
                        <label><strong className={Styles.text1}> cm</strong></label>
                        {errors.heightMin && (
                            <p className="error">{errors.heightMin}</p>
                        )}
                    </div>

                    <div>
                        <label className={Styles.Lab}><strong className={Styles.text1}>Maximum Height: </strong></label>
                        <input type="text" value={input.heightMax} name='heightMax' onChange={e => handleChange(e)} />
                        <label><strong className={Styles.text1}> cm</strong></label>
                        {errors.heightMax && (
                            <p className="error">{errors.heightMax}</p>
                        )}
                    </div>

                    <div>
                        <label className={Styles.Lab}><strong className={Styles.text1}>Minumun Weight: </strong></label>
                        <input type="text" value={input.weightMin} name='weightMin' onChange={e => handleChange(e)} />
                        <label><strong className={Styles.text1}> Kg</strong></label>
                        {errors.weightMin && (
                            <p className="error">{errors.weightMin}</p>
                        )}
                    </div>

                    <div>
                        <label className={Styles.Lab}><strong className={Styles.text1}>Maximum Weight: </strong></label>
                        <input type="text" value={input.weightMax} name='weightMax' onChange={e => handleChange(e)} />
                        <label><strong className={Styles.text1}> Kg</strong></label>
                        {errors.weightMax && (
                            <p className="error">{errors.weightMax}</p>
                        )}
                    </div>

                    <div>
                        <label className={Styles.Lab}><strong className={Styles.text1}>Life Span: </strong></label>
                        <input type="text" value={input.lifeSpan} name='lifeSpan' onChange={e => handleChange(e)} />
                        <label><strong className={Styles.text1}> years</strong></label>
                        {errors.lifeSpan && (
                            <p className="error">{errors.lifeSpan}</p>
                        )}
                    </div>

                    <div>
                        <label className={Styles.Lab}><strong className={Styles.text1}>Image: </strong></label>
                        <input type="text" value={input.image} name='image' onChange={e => handleChange(e)} />

                    </div>

                    <div>
                        <select onChange={e => handleSelect(e)}>
                            <option className={Styles.text1} value='selected' hidden >Temperaments</option>
                            {allTemperaments?.sort(function (a, b) {
                                if (a.name < b.name) return -1
                                if (a.name > b.name) return 1
                                return 0
                            }).map(temp => {
                                return (
                                    <option value={temp.name} key={temp.id}>{temp.name}</option>
                                )
                            })}
                        </select>
                        {input.temperaments.map(e => {
                            return (
                                <ul className="allSelecction" key={e}>
                                    <li>
                                        <p className="selecction"><strong>{e}</strong></p>
                                        <button onClick={() => handleDelete(e)} className={Styles.x}>X</button>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>

                </form>
            </div>

        <div>
            <button type="submit" className={Styles.btnDog}>Create your Doggie!</button>
        </div>

        <Link to='/home'>
             <button className={Styles.btnDog2}>Back To Home</button>
        </Link> 
              
        </form>

        {success ? <h2>Created Successfully</h2> : null}
    </div>
  )
}




