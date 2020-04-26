import React from 'react';
import useImage from '../../assets/ts/useImage';
import { Link } from "react-router-dom";
import MenuImg from '../../assets/image/menu.png';
import openMenu from '../../assets/js/openMenu';

export default function III(){
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
                        <Link className='a' to="/IV">IV-Girassol</Link>
                        <Link className='a' to="/V">V-Não-Me-Esqueças</Link>
                        <Link className='a' to="/VI">VI-Açafrão</Link>
                        <Link className='a' to="/VII">VII-Rosa Branca</Link>
                    </nav>
                </div>
            </aside>
            <div className="container-md" id="cover">
                <div className="h1"><i>III</i>-Tulipa Vermelha</div>
                <div className="col">
                    <div className="poema">
                        <p className="row startvers">Já era pra ter sido dito</p>
                        <p className="row">Por não ser isso, está sendo escrito</p>
                        <p className="row">Se é escrito, também é falado</p>
                        <p className="row">Do ser que ama, ao ser amado</p>
                        <p className="row startvers">Retratando seus sentimentos</p>
                        <p className="row">Comparado à rosa dos ventos</p>
                        <p className="row">Uma bússola apontando sempre ao norte</p>
                        <p className="row">Que leva ao seu sul, se der a sorte</p>
                        <p className="row startvers">Mas existe uma pessoa</p>
                        <p className="row">Que não é totalmente boa</p>
                        <p className="row">Que está só e mais nada</p>
                        <p className="row">Entregando essa flor a sua amada</p>
                        <p className="row startvers">Seria quem esse destinatário?</p>
                        <p className="row">Acabou escrevendo em seu diário</p>
                        <p className="row">Revelou lá e ele tinha conhecimento</p>
                        <p className="row">Aquele amor não era de momento</p>
                        <p className="row startvers">Mas logo dando o significado</p>
                        <p className="row">Que já deveria ter sido dado</p>
                        <p className="row">O significado dessa flor</p>
                        <p className="row">É uma &nbsp;<strong><Link className='a' to="/End">declaração de amor</Link></strong></p>
                        <p className="row startvers">Por isso é uma ação a ser feita</p>
                        <p className="row">Pois nenhuma outra seria perfeita</p>
                        <p className="row">E a mensagem ainda seria passada</p>
                        <p className="row">Por uma única flor que foi dada</p>
                        <p className="row startvers">O destinatário está escrito</p>
                        <p className="row">E já havia de ser dito</p>
                        <p className="row">E só falta entregar</p>
                        <p className="row">É só o que ele tem a dar</p>
                        <p className="row startvers">Uma vez que a flor é dada</p>
                        <p className="row">É tudo, ou é nada</p>
                        <p className="row">É o motivo dessa flor</p>
                        <p className="row">Alimenta a dor ou o amor</p>
                        <p className="row startvers">E um dia serão fortes</p>
                        <p className="row">Seguindo aos opostos nortes</p>
                        <p className="row">Não mais estando sozinhos</p>
                        <p className="row">Até a chegada dos seus destinos</p>
                        <p className="row startvers">Mas falta o passo de confiança</p>
                        <p className="row">Onde ele ouve a música e se sente a dança</p>
                        <p className="row">Onde ele para de falar que ainda é cedo</p>
                        <p className="row">E a flor é dada perdendo o medo</p>
                        <p className="row startvers">Ele, decidido, finalmente fala</p>
                        <p className="row">E decide que nunca mais se cala</p>
                        <p className="row">E à ela entrega a flor</p>
                        <p className="row">Desse modo, faz sua &nbsp;<strong><Link className='a' to="/End">declaração de amor</Link></strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}