import React from 'react';
import useImage from '../../assets/ts/useImage';
import { Link } from "react-router-dom";
import MenuImg from '../../assets/image/menu.png';
import openMenu from '../../assets/js/openMenu';

export default function V(){
    window.scrollTo(0, 0);
    let Png = useImage(5);
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
                        <Link className='a' to="/VI">VI-Açafrão</Link>
                        <Link className='a' to="/VII">VII-Rosa Branca</Link>
                    </nav>
                </div>
            </aside>
            <div className="container-md" id="cover">
            <div className="h1"><i>V</i>-Não-Me-Esqueças</div>
                <div className="col">
                    <div className="poema">
                        <p className="row startvers">E não esquecerei</p>
                        <p className="row">Como havia lhe prometido</p>
                        <p className="row">Uma promessa que se mantém</p>
                        <p className="row">E a dor com ela vem</p>
                        <p className="row startvers">A dor de esquecer ou a de lembrar?</p>
                        <p className="row">Por que há de escolher?</p>
                        <p className="row">Os dois não são dores?</p>
                        <p className="row">Que mal fazem os amores?</p>
                        <p className="row startvers">Com o pensamento diário</p>
                        <p className="row">Para nunca te esquecer</p>
                        <p className="row">Mas a correnteza do lago</p>
                        <p className="row">Me fez te perder</p>
                        <p className="row startvers">Por onde andas?</p>
                        <p className="row">Que eu não te vejo mais</p>
                        <p className="row">Não está do meu lado</p>
                        <p className="row">Como sempre e jamais</p>
                        <p className="row startvers">Seu amor ainda existe?</p>
                        <p className="row">Porque o meu não se alterou</p>
                        <p className="row">Só foi a distância</p>
                        <p className="row">Que o tempo mudou</p>
                        <p className="row startvers">É só mais uma flor</p>
                        <p className="row">Que não me deixa te esquecer</p>
                        <p className="row">Talvez essa dor</p>
                        <p className="row">Há de desaparecer</p>
                        <p className="row startvers">Ainda estamos seguindo</p>
                        <p className="row">Pois não é um retrocesso</p>
                        <p className="row">Seguindo em frente</p>
                        <p className="row">Dentre os males diversos</p>
                        <p className="row startvers">Não olhe para trás</p>
                        <p className="row">Como por mim foi feito</p>
                        <p className="row">Se olhar não percebe</p>
                        <p className="row">A chegada do deleito</p>
                        <p className="row startvers">As lágrimas caíram</p>
                        <p className="row">Só não na sua frente</p>
                        <p className="row">Para mostrar que você deveria ser forte</p>
                        <p className="row">De uma maneira diferente</p>
                        <p className="row startvers">Mas as suas eu vi</p>
                        <p className="row">Caindo pelo chão</p>
                        <p className="row">Calma pequena flor</p>
                        <p className="row">Ouce esta canção</p>
                        <p className="row startvers">Afastados pela correnteza</p>
                        <p className="row">Foi feita uma promessa de &nbsp;<strong>verdadeiro amor</strong></p>
                        <p className="row">"Por favor, &nbsp;<strong>não me esqueças</strong>"</p>
                        <p className="row">E na margem do rio nasce esta flor</p>
                        <p className="row startvers">A promessa foi feita</p>
                        <p className="row">Enquato éramos separados</p>
                        <p className="row">Por uma forte correnteza</p>
                        <p className="row">Um para cada lado</p>
                        <p className="row startvers">Para proteger os outros</p>
                        <p className="row">As margens do rio, brotou essa flor</p>
                        <p className="row">Para que lá não caíssem</p>
                        <p className="row">E preservassem o amor</p>
                    </div>
                </div>
            </div>
        </div>
    );
}