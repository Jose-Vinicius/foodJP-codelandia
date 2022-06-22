import React from 'react';

import Button from './Button';
import CardPopular from './CardPopular';

export default function Content(){
    return(
        <main>
            <section className='intro'>
                <div className="conteudo">
                    <h2>Comida oriental</h2>
                    <p>A culinária Japonesa é bastante equilibrada, sendo muito rica em peixes (ômega 3), vegetais, massas e ingredientes frescos.</p>
                    <Button class="button--cardapio" text="Cardápio"/>
                </div>
                <img src="../../public/imagens/pratos/sushi.png" alt="Mão com um hashi segurando um sushi" />
            </section>
            <section className='preparo'>
                <img src="../../public/imagens/pratos/img_prato.png" alt="Mão segurando prato com empanado" />
                <div className="conteudo">
                    <h2>Feita de forma tradicional</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <a href="#">Ler mais sobre o modo de preparo</a>
                </div>
            </section>
            <h2 className='subtitle'>Mais populares</h2>
            <div className="cards__popular">
                <CardPopular 
                    img="ramem--frango" 
                    alt="Prato com Ramem de frango" 
                    title="Ramem de frango" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                    price="28,50"
                />
                <CardPopular 
                    img="ramem--apimentado" 
                    alt="Prato com Ramem apimentado" 
                    title=" Ramem apimentado" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                    price="27"
                />
                <CardPopular 
                    img="ramem--tradicional" 
                    alt="Prato com Ramem tradicional" 
                    title="Ramem tradicional" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                    price="26,99"
                />
            </div>
        </main>
    )
}