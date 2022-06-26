import React from "react";

import CardInfo from "./CardInfo";

export default function Footer(){
    return(
        <footer>
            <img src="/imagens/logos/FoodJP.png" alt="Logo foodJP" />
            <CardInfo 
                title="Contato"
                text__1="hidden"
                text__2="hidden"
                text__3="hidden"
                tel="+55 (45)99812-1611"
                mail="foodJP@mail.com"

            />
            <CardInfo 
                title="Sobre"
                text__1="Menu"
                text__2="Valores"
                text__3="Pagina principal"
                tel="hidden"
                mail="hidden"
            />
            <CardInfo 
                title="Serviços"
                text__1="Entrega"
                text__2="Retirada"
                text__3="hidden"
                tel="hidden"
                mail="hidden"
            />
        </footer>
    )
}