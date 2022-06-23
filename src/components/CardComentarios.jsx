import React from 'react';

export default function CardComentarios(props){
    const rate = props.rate * 19

    const styleStars = {
        backgroundImage: `url(${'../../public/imagens/outros/star.png'})`,
        width: `${rate}px`,
        color: 'transparent'
    }
    return(
        <div className="card">
            <img src={`../../public/imagens/avaliadores/${props.img}.png`} alt={props.alt} />
            <h2>{props.name}</h2>
            <p>{props.avaliation}</p>
            <div className='card__rate' style={styleStars}>
                stars
            </div>
        </div>
    )
}