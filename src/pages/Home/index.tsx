import React from "react";
import useImage from '../../assets/ts/useImage';
import { Link } from "react-router-dom";

export default function Home(){
    let Png = useImage(0);
    return (
        <div style={{backgroundImage: Png}} className="body">
            <div className="container-md" id="cover">
                <div className="h1 row">The Flowers Says</div>
                <nav>
                    <Link className='a' to="/I">I-Cardo</Link>
                    <Link className='a' to="/II">II-Rosa Vermelha</Link>
                    <Link className='a' to="/III">III-Tulipa Vermelha</Link>
                    <Link className='a' to="/IV">IV-Girassol</Link>
                    <Link className='a' to="/V">V-Não-Me-Esqueças</Link>
                    <Link className='a' to="/VI">VI-Açafrão</Link>
                    <Link className='a' to="/VII">VII-Rosa Branca</Link>
                </nav>
            </div>
        </div>
    );
}
