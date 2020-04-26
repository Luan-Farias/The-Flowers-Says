import React from 'react';
import useImage from '../../assets/ts/useImage';
import { Link } from "react-router-dom";
import MenuImg from '../../assets/image/menu.png';
import openMenu from '../../assets/js/openMenu';

export default function I(){
    window.scrollTo(0, 0);
    let Png = useImage(1);
    return (
        <div style={{backgroundImage: Png}} className="body">
            <aside>
                <img src={MenuImg} onClick={openMenu}  alt="" width="36" id="menu-opener" />
                <div id="menu-area">
                    <nav>
                        <Link className='a' to="/">Voltar Para o Menu</Link>
                        <Link className='a' to="/II">II-Rosa Vermelha</Link>
                        <Link className='a' to="/III">III-Tulipa Vermelha</Link>
                        <Link className='a' to="/IV">IV-Girassol</Link>
                        <Link className='a' to="/V">V-Não-Me-Esqueças</Link>
                        <Link className='a' to="/VI">VI-Açafrão</Link>
                        <Link className='a' to="/VII">VII-Rosa Branca</Link>
                    </nav>
                </div>
            </aside>
            <div className="container-md" id="cover">
                <div className="h1"><i>I</i>-Cardo</div>
                <div className="col">
                    <div className="poema">
                        <p className="row startvers">Devido ao seu significado</p>
                        <p className="row">Trás consigo um mal recado</p>
                        <p className="row">Diferente de outras flores</p>
                        <p className="row">Onde conservam-se os amores</p>
                        <p className="row startvers">Tem como significado a &nbsp;<strong>misantropia</strong></p>
                        <p className="row">Porém, contudo e todavia</p>
                        <p className="row">Há uma coisa do conhecimento</p>
                        <p className="row">O cardo é um cardo, o vento é o vento</p>
                        <p className="row startvers">Vento, ele é suave, mas é frio e implacável</p>
                        <p className="row">Cardo, flor com significado desprezável</p>
                        <p className="row">Pois reflete toda a humanidade</p>
                        <p className="row">Agindo em seu estado de maldade</p>
                        <p className="row startvers">Todavia ele pode estar certo</p>
                        <p className="row">Ao dizer que o mal está por perto</p>
                        <p className="row">E morte ao único ser</p>
                        <p className="row">Que degrada o seu próprio viver</p>
                        <p className="row startvers">O ser que é racional</p>
                        <p className="row">E trás consigo todo o mal</p>
                        <p className="row">Que faz guerra por poder</p>
                        <p className="row">E que vive para morrer</p>
                        <p className="row startvers">Todos encontram-se em um lugar</p>
                        <p className="row">Donde não há como há como retornar</p>
                        <p className="row">E no final de todos os caminhos</p>
                        <p className="row">Esse torna-se o último e real destino</p>
                    </div>
                </div>
            </div>
        </div>
    );
}