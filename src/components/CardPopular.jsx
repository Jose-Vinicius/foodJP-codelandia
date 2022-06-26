import React from "react";

export default function CardPopular(props){
    return(
        <div className="card">
            <img src={`/imagens/pratos/${props.img}.png`} alt={props.alt}/>
            <div className="card__content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <span>R$ {props.price}</span>
            </div>
        </div>
    )
}