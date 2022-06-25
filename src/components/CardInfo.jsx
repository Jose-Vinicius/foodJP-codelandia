import React from "react";

export default function CardInfo(props){
    const foodjpLink = 'https://www.foodjp.com.br'
    let HiddenClass;

    props.text__1 == undefined ? HiddenClass = 'hidden' : 'card__item'

    return(
        <div className="card">
            <h2>{props.title}</h2>
            <a className={HiddenClass}href={`${foodjpLink}/${props.title}/${props.text__1}`}>{props.text__1}</a>
            <a className={HiddenClass}href={`${foodjpLink}/${props.title}/${props.text__2}`}>{props.text__2}</a>
            <a className={HiddenClass}href={`${foodjpLink}/${props.title}/${props.text__3}`}>{props.text__3}</a>

            <a href={`tel:+${props.tel}`}>{props.tel}</a>
            <a href={`mailto:${props.mail}`}>{props.mail}</a>
        </div>
    )
}