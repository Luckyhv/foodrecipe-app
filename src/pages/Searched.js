import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Cuisine.css'

function Searched() {
    const [search, setsearch] = useState([])
    let params = useParams()
    const getsearched = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=6466b528c8414f3e8b24d98e362993ab&query=${name}`)
        const data = await api.json();
        console.log(data);
        setsearch(data.results);
    }

    useEffect(() => {
        getsearched(params.search);
    }, [params.search])
    return (
        <div className="grid">
            {search.map((recipe) => {
                return (
                    <div key={recipe.id} className="cuscard">
                         <Link to={"/recipe/"+ recipe.id} className="linkconn">
                        <div className="cusconn">
                            <img src={recipe.image} alt="" className='cusimg' />
                        </div>
                        <p className='custitle'>{recipe.title}</p>
                         </Link>
                    </div>
                );
            })}
        </div>
    )
}

export default Searched
