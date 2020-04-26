import React from 'react';
import useImage from '../../assets/ts/useImage';
import { Link } from "react-router-dom";
import MenuImg from '../../assets/image/menu.png';
import openMenu from '../../assets/js/openMenu';

export default function II(){
    window.scrollTo(0, 0);
    let Png = useImage(2);
    return (
        <div style={{backgroundImage: Png}} className="body">
            <aside>
                <img src={MenuImg} onClick={openMenu}  alt="" width="36" id="menu-opener" />
                <div id="menu-area">
                    <nav>
                        <Link className='a' to="/">Voltar Para o Menu</Link>
                        <Link className='a' to="/I">I-Cardo</Link>
                        <Link className='a' to="/III">III-Tulipa Vermelha</Link>
                        <Link className='a' to="/IV">IV-Girassol</Link>
                        <Link className='a' to="/V">V-Não-Me-Esqueças</Link>
                        <Link className='a' to="/VI">VI-Açafrão</Link>
                        <Link className='a' to="/VII">VII-Rosa Branca</Link>
                    </nav>
                </div>
            </aside>
            <div className="container-md" id="cover">
            <div className="h1"><i>II</i>-Rosa Vermelha</div>
                <div className="col">
                    <div className="poema">
                        <p className="row startvers">A flor que tanto é desejada</p>
                        <p className="row">Todavia pode ser rejeitada</p>
                        <p className="row">Não é qualquer um que a recebe</p>
                        <p className="row">Não é qualquer um que a cede</p>
                        <p className="row startvers">Tão trágico que esteja sendo guardada</p>
                        <p className="row">Que, por medo, é pouco utilizada</p>
                        <p className="row">Deveria sempre ser distribuída</p>
                        <p className="row">Para alegrar cada única vida</p>
                        <p className="row startvers">E só os que escutam a canção</p>
                        <p className="row">São os quais que ouvem com o coração</p>
                        <p className="row">Quando entre dois ela é trocada</p>
                        <p className="row">Uma nova experiência é criada</p>
                        <p className="row startvers">Experiência que acaba com as dores</p>
                        <p className="row">E que planta essas flores</p>
                        <p className="row">Ninguém sabe quantas há</p>
                        <p className="row">Pode não estar em nenhum lugar</p>
                        <p className="row startvers">Cada um a interpreta</p>
                        <p className="row">De sua única maneira</p>
                        <p className="row">Interpretam essa flor</p>
                        <p className="row">Cujo o significado é &nbsp;<strong>amor</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}