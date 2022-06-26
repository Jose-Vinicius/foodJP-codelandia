import React from 'react';

import Button from './Button';
import CardComentarios from './CardComentarios';
import CardPopular from './CardPopular';
import Footer from './Footer';
import Iframe from './Iframe';

export default function Content(){
    return(
        <>
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

                <div className="cards__populares">
                    <CardPopular 
                        img="ramem--frango" 
                        alt="Prato com Ramem de frango" 
                        title="Ramem de frango" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
                        price="28,50"
                    />
                    <CardPopular 
                        img="ramem--apimentado" 
                        alt="Prato com Ramem apimentado" 
                        title=" Ramem apimentado" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
                        price="27,00"
                    />
                    <CardPopular 
                        img="ramem--tradicional" 
                        alt="Prato com Ramem tradicional" 
                        title="Ramem tradicional" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
                        price="26,99"
                    />
                </div>

                <h2 className='subtitle'>Comentarios</h2>

                <div className="cards__comentarios">
                    <CardComentarios 
                        img="profile1"
                        alt="foto do avaliador"
                        name="Daniele Almeida"
                        avaliation="Ótimo serviço! Encantada com a qualidade dos pratos."
                        rate={4}
                    />
                    <CardComentarios 
                        img="profile2"
                        alt="foto do avaliador"
                        name="Ricardo França"
                        avaliation="Não é apenas a comida excelente, o serviço torna a experiência especial."
                        rate={5}
                    />
                </div>

                <h2 className='subtitle'>Localização</h2>

                <Iframe />

                <div className='location'>
                    <input type="text" name="addres" id="addres" placeholder='Localização para entrega'/>
                    <Button class="button--location" text="Buscar"/>
                </div>
            </main>
        </>
    )
}