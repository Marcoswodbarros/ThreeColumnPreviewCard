import React from 'react';
import './Card.css';
import Button from '../Button/Button';

const Card = () => {

    const textos = [
        {
            image: './images/icon-sedans.svg',
            nome: 'Sedans',
            texto: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
        },

        {
            image: './images/icon-suvs.svg',
            nome: 'Suv',
            texto: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
        },

        {
            image: './images/icon-luxury.svg',
            nome: 'Luxury',
            texto: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
        }
    ]

    return (
        <div>
            {textos.map((item) => {
                return (
                    <div key={item.nome} className='card__container'>
                        <img src={item.image} className='card__img' alt="Logo Sedan" />
                        <h1>{item.nome}</h1>
                        <p>{item.texto}</p>
                        <Button />
                    </div>
                )
            })}
        </div >
    )
}

export default Card