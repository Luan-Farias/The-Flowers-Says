import React from 'react';
import useImage from '../../assets/ts/useImage';
import { Link } from "react-router-dom";
import MenuImg from '../../assets/image/menu.png';
import openMenu from '../../assets/js/openMenu';

export default function VI(){
    window.scrollTo(0, 0);
    let Png = useImage(6);
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
                        <Link className='a' to="/VII">VII-Rosa Branca</Link>
                    </nav>
                </div>
            </aside>
            <div className="container-md" id="cover">
            <div className="h1"><i>VI</i>-Açafrão</div>
                <div className="col">
                    <div className="poema">
                        <p className="row startvers">No mundo que tudo a dar</p>
                        <p className="row">Mas nada a oferecer</p>
                        <p className="row">Nada a ganhar</p>
                        <p className="row">Mas tudo a perder</p>
                        <p className="row startvers">Todos lotados de vontade</p>
                        <p className="row">Com cada vez mais a desejar</p>
                        <p className="row">Cada qual com sua maldade</p>
                        <p className="row">Ao ciclo de dor e tédio vai entrar</p>
                        <p className="row startvers">Se os desejos não fossem tantos</p>
                        <p className="row">Haveria de melhorar</p>
                        <p className="row">Mas cobrem-se com seus mantos</p>
                        <p className="row">Donde não querem escutar</p>
                        <p className="row startvers">Quando perceber não restou nada</p>
                        <p className="row">Quando tinha tudo, foi tirado</p>
                        <p className="row">Para alimentar o desejo de cada</p>
                        <p className="row">E o que acontece com o restado?</p>
                        <p className="row startvers">Como um ser que é racional</p>
                        <p className="row">Provoca sua própria extinção</p>
                        <p className="row">E diz que não é mal</p>
                        <p className="row">Depois de provocar tanta degradação</p>
                        <p className="row startvers">Donde foi o instinto preservativo</p>
                        <p className="row">Só continuamos com retrocessos</p>
                        <p className="row">E seja lá como for</p>
                        <p className="row">Por favor, &nbsp;<strong>evite excessos</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}