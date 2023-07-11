import React from 'react';
import './Card.css';
import Button from '../Button/Button';

const Card = () => {
    return (
        <div>
            <div className="card__container">
                <img src="/images/icon-sedans.svg" alt="Icon Sedan" />
                <h1>Sedans</h1>
                <p className='card__text'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
                <Button />
            </div>
        </div>
    )
}

export default Card