import React, { useEffect, useState } from 'react'
import './Popular.css'
import {Link} from "react-router-dom"

function Popular() {
    const [popular, setpopular] = useState([]);

    const getpopular = async () => {
        const api = await fetch("https://api.spoonacular.com/recipes/random/?apiKey=6466b528c8414f3e8b24d98e362993ab&number=20")
        const data = await api.json();
        console.log(data);
        setpopular(data.recipes);
    };
    useEffect(() => {
        getpopular();
    }, []);
    return (
        <div className='popularcon'>
            <h3 className='poptitle'>Popular Picks</h3>
            <div className="flexcon">
                {popular.map((recipe) => {
                    return (
                        <div key={recipe.id} className="card">
                            <Link to={"/recipe/" + recipe.id} className="linkco">
                            <div className="conn">
                                <img src={recipe.image} alt="" className='img1' />
                            </div>
                            <p className='title'>{recipe.title}</p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Popular

