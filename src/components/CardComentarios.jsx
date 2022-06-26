import React from 'react';

export default function CardComentarios(props){
    let rate

    props.rate > 5 ? rate = 5 : rate = props.rate
    
    const styleStars = {
        backgroundImage: `url(${'/imagens/outros/star.png'})`,
        width: `${rate * 19}px`,
        color: 'transparent'
    }
    return(
        <div className="card">
            <img src={`/imagens/avaliadores/${props.img}.png`} alt={props.alt} />
            <h2>{props.name}</h2>
            <p>{props.avaliation}</p>
            <div className='card__rate' style={styleStars}>
                stars
            </div>
        </div>
    )
}