import React from 'react';
import useImage from '../../assets/ts/useImage';
import { Link } from "react-router-dom";
import MenuImg from '../../assets/image/menu.png';
import openMenu from '../../assets/js/openMenu';

export default function IV(){
    window.scrollTo(0, 0);
    let Png = useImage(4);
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
                        <Link className='a' to="/V">V-Não-Me-Esqueças</Link>
                        <Link className='a' to="/VI">VI-Açafrão</Link>
                        <Link className='a' to="/VII">VII-Rosa Branca</Link>
                    </nav>
                </div>
            </aside>
            <div className="container-md" id="cover">
            <div className="h1"><i>IV</i>-Girassol</div>
                <div className="col">
                    <div className="poema">
                        <p className="row startvers">Era uma vez, em uma distante vila</p>
                        <p className="row">Um nobre e humilde guerreiro</p>
                        <p className="row">Que com sua armadura de couro</p>
                        <p className="row">Foi em busca da flor de petálas de ouro</p>
                        <p className="row startvers">Sabia onde iria procurar</p>
                        <p className="row">Sabia que iria conseguir achar</p>
                        <p className="row">Sabia que era uma difícil trilha</p>
                        <p className="row">De onde não sabia se voltaria</p>
                        <p className="row startvers">Então abandonou toda sua prata</p>
                        <p className="row">E sê pôs na estrada</p>
                        <p className="row">Vestido com sua armadura de couro</p>
                        <p className="row">Em busca da flor de petálas de ouro</p>
                        <p className="row startvers">Com a chegada do lago das alma</p>
                        <p className="row">Teve que agir com muita calma</p>
                        <p className="row">Pois a partir de lá não existia nas histórias</p>
                        <p className="row">De lá, nunca houve vitórias</p>
                        <p className="row startvers">Tentou nadar, mas se afogava</p>
                        <p className="row">Perto dele, um barco se aproximava</p>
                        <p className="row">Dentro do barco um pequeno menino</p>
                        <p className="row">"Entre até que ouça o sino"</p>
                        <p className="row startvers">E decidiu que o sino esperaria ouvir</p>
                        <p className="row">Não importa mais o que aconteceria dali</p>
                        <p className="row">O garoto um girassol levava</p>
                        <p className="row">Não sabia que o significado o salvava</p>
                        <p className="row startvers">Havia um bilhete e ele viu</p>
                        <p className="row">Se aproximou e sentiu um calafrio</p>
                        <p className="row">Por um momento não importou a beleza</p>
                        <p className="row">Leu que sigificava uma &nbsp;<strong>falsa riqueza</strong></p>
                        <p className="row startvers">Mas com isso não se importou</p>
                        <p className="row">Retornou aonde estava e só se sentou</p>
                        <p className="row">Por um instante teve um mal pressentimento</p>
                        <p className="row">Mas não ligou, nem deu conta, não estava atento</p>
                        <p className="row startvers">"Não é aqui onde só chega quem é forte?</p>
                        <p className="row">Que o fraco tem encontro com a morte"</p>
                        <p className="row">Estava vestido com sua armadura de couro</p>
                        <p className="row">Estava em busca da flor de petálas de ouro</p>
                        <p className="row startvers">Ouviu o sino com muito ardor</p>
                        <p className="row">"Chegamos, lá está a flor</p>
                        <p className="row">Não a arranque, por favor"</p>
                        <p className="row">Sem ligar, arrancou para si a flor</p>
                        <p className="row startvers">Seu erro foi não ter olhado para trás</p>
                        <p className="row">Pois onde o menino estava, não estaria jamais</p>
                        <p className="row">O menino era ele e ele não notou</p>
                        <p className="row">E no menino ele se transformou</p>
                        <p className="row startvers">E em girassol se transformou a flor</p>
                        <p className="row">E perdeu todo o seu ardor</p>
                        <p className="row">Entrou no barco e pôs-se a velejar</p>
                        <p className="row">Em um clico infinito onde iria se encontrar</p>
                    </div>
                </div>
            </div>
        </div>
    );
}