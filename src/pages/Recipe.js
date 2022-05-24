import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Recipe.css'

function Recipe() {
    const [details, setdetails] = useState({})
    let params = useParams()
    const [activetab, setactive] = useState("ingredients")

    const fetchrecipe = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=6466b528c8414f3e8b24d98e362993ab`)
        const data = await api.json()
        // console.log(data);
        setdetails(data)
    }
    useEffect(() => {
        fetchrecipe();
        // eslint-disable-next-line
    }, [params.name])

    return (
        <div className='wrapper'>
            <div className='detcon'>
                <h2 className='h2'>{details.title}</h2>
                <img src={details.image} alt="" className='imgwrap'/>
            </div>
            <div className="info">
                <div className="btns">
                <button className={activetab === "ingredients" ? 'active' : ""} onClick={() => { setactive('ingredients') }}>Ingredients</button>
                <button className={activetab === "instructions" ? 'active' : ""} onClick={() => { setactive('instructions') }}>Instructions</button>
                </div>
                {activetab === "instructions" && (<div >
                    {/* <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3> */}
                    <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                </div>)}
                {activetab === "ingredients" && (<ul>
                    {details.extendedIngredients?.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul>)}
            </div>
        </div>
    )
}

export default Recipe
