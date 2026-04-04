import React from "react"

{/* Props always return an obj so it must have a reliever inside the card component (argument) so add one  so we add : 
    card = (props)...

    or we can add anything it's just a parameter thats it
    */ }

const Card = (card_props) => {
    return (
        <div className="card">
            <img src={card_props.img}/>
            <h1>{card_props.user} {card_props.age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>View Profile</button>
        </div>
    )
}
export default Card