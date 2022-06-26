import React from "react";

export default function CardInfo(props){
    const foodjpLink = 'https://www.foodjp.com.br'

    const hiddenText1 = props.text__1 === 'hidden' ? 'hidden' : 'card__item';
    const hiddenText2 = props.text__2 === 'hidden' ? 'hidden' : 'card__item';
    const hiddenText3 = props.text__3 === 'hidden' ? 'hidden' : 'card__item';
    
    const hiddenTel = props.tel === 'hidden' ?  'hidden' : 'card__item'
    const hiddenMail = props.mail === 'hidden' ? 'hidden' : 'card__item';

    
    console.log(props.text__1)
    return(
        <div className="card">
            <h2>{props.title}</h2>
            <a className={hiddenText1}href={`${foodjpLink}/${props.title}/${props.text__1}`}>{props.text__1}</a>
            <a className={hiddenText2}href={`${foodjpLink}/${props.title}/${props.text__2}`}>{props.text__2}</a>
            <a className={hiddenText3}href={`${foodjpLink}/${props.title}/${props.text__3}`}>{props.text__3}</a>

            <a className={hiddenTel} href={`tel:+${props.tel}`}>{props.tel}</a>
            <a className={hiddenMail} href={`mailto:${props.mail}`}>{props.mail}</a>
        </div>
    )
}