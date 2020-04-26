import React from 'react';
import useImage from '../../assets/ts/useImage';
import { Link } from "react-router-dom";
import MenuImg from '../../assets/image/menu.png';
import openMenu from '../../assets/js/openMenu';

export default function VII(){
    window.scrollTo(0, 0);
    let Png = useImage(7);
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
                    </nav>
                </div>
            </aside>
            <div className="container-md" id="cover">
            <div className="h1"><i>VII</i>-Rosa Branca</div>
                <div className="col">
                    <div className="poema">
                        <p className="row startvers">Estaria tudo perfeito</p>
                        <p className="row">Por estar longe da perfeição</p>
                        <p className="row">Pois não existe outro jeito</p>
                        <p className="row">Que ascenda o seu coração</p>
                        <p className="row startvers">Por ti continuo apaixonado</p>
                        <p className="row">Tu sabes que eu valor</p>
                        <p className="row">Quando o dia estiver começado</p>
                        <p className="row">Tu ainda será o meu amor</p>
                        <p className="row startvers">Para onde eu olharia</p>
                        <p className="row">Se meu pesameto está em você</p>
                        <p className="row">Para onde eu iria</p>
                        <p className="row">Se eu só quero lhe ver</p>
                        <p className="row startvers">Qual caminho eu devo seguir</p>
                        <p className="row">Para que você esteja ao meu lado</p>
                        <p className="row">Qual destino cumprir</p>
                        <p className="row">Para que eu esteja parado</p>
                        <p className="row startvers">De tudo por mim é feito</p>
                        <p className="row">Para você me notar</p>
                        <p className="row">Mas laços continuam feitos</p>
                        <p className="row">Para o amor preservar</p>
                        <p className="row startvers">Do meu própio amor</p>
                        <p className="row">Para que você possa ver</p>
                        <p className="row">Significado da ultíma flor</p>
                        <p className="row"><strong><Link className='a' to="/Song">Eu sou digno de você</Link></strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}