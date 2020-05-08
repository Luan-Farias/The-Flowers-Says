import React from 'react';
import useImage from '../../assets/ts/useImage';
import { Link } from "react-router-dom";
import MenuImg from '../../assets/image/menu.png';
import openMenu from '../../assets/js/openMenu';

export default function End(){
    window.scrollTo(0, 0);
    let Png = useImage(3);
    return (
        <div style={{backgroundImage: Png}} className="body">
            <aside>
                <img src={MenuImg} onClick={openMenu}  alt="" width="36" id="menu-opener" />
                <div id="menu-area">
                    <nav>
                        <Link className='a' to="/">Voltar Para o Menu</Link>
                        <Link className='a' to="/I">I-Cardo</Link>
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
            <div className="h3 mt-5">From: A Nowhere Man</div>
                <div className="h3 mb-3">To: A Nowhere Woman</div>
                <div className="h1">Your Poem / Red Tulip</div>
                <div className="col">
                    <div className="poema">
                        <p className="row startvers">Um verdadeiro homem de lugar nenhum</p>
                        <p className="row">Em sua terra de lugar nenhum</p>
                        <p className="row">Fazendo seus planos inexistentes</p>
                        <p className="row">Para ninguém</p>
                        <p className="row startvers">Não tem ponto de vista</p>
                        <p className="row">Não sabe o que é seu</p>
                        <p className="row">Não sabe onde está para onde indo</p>
                        <p className="row">Não é parecido com você e eu?</p>
                        <p className="row startvers">Todavia, tornou-se um guerreiro apaixonado</p>
                        <p className="row">Que não sabia uma maneira de se declarar</p>
                        <p className="row">Porém, com uma caneta e um papel</p>
                        <p className="row">Começou a se expressar</p>
                        <p className="row startvers">Um verso por vez ele escrevia</p>
                        <p className="row">E já não conseguia se conter</p>
                        <p className="row">Sua paixão era tamanha</p>
                        <p className="row">Que não conseguia esconder</p>
                        <p className="row startvers">Antes de começar a sua escrita</p>
                        <p className="row">Pensava em entregar uma flor</p>
                        <p className="row">Cujo na Era Vitoriana</p>
                        <p className="row">Significava uma &nbsp;<strong>declaração de amor</strong></p>
                        <p className="row startvers">A flor era uma Tulipa Vermelha</p>
                        <p className="row">Sua ideia não era falha</p>
                        <p className="row">Pois sabe o que quer</p>
                        <p className="row">E não quer uma batalha</p>
                        <p className="row startvers">Todavia, tinha o conhecimento</p>
                        <p className="row">Que não adiantaria procurar</p>
                        <p className="row">Pois existe em reinos distantes</p>
                        <p className="row">Onde não conseguiria alcançar</p>
                        <p className="row startvers">A ideia de não entregar</p>
                        <p className="row">Lhe causava pouca dor</p>
                        <p className="row">Pois sabia que era o seu modo</p>
                        <p className="row">De declarar o seu amor</p>
                        <p className="row startvers">Então colocou-se a escrever</p>
                        <p className="row">A ideia dessa flor</p>
                        <p className="row">E para o qual que não acredita</p>
                        <p className="row">Esta é a própria &nbsp;<strong>declaração de amor</strong></p>
                        <p className="row startvers">É assim que ele se sentia</p>
                        <p className="row">Tu haverias de saber</p>
                        <p className="row">Porém, por este meio</p>
                        <p className="row">Existe beleza em dizer</p>
                        <p className="row startvers">E por um momento</p>
                        <p className="row">Não existiu realidade</p>
                        <p className="row">E cada segundo</p>
                        <p className="row">Era cada eternidade</p>
                        <p className="row startvers">Ele, o homem de lugar nenhum</p>
                        <p className="row">Já não sabia o que dizer</p>
                        <p className="row">Mas dizia essas palavras</p>
                        <p className="row mb-5">"Estou apaixonado por você"</p>
                        <div className="h3 mb-4">
                            <p className="row">With Love:</p>
                            <p className="row">From me To you </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
