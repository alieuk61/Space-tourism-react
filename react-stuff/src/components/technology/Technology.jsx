import './Technology.css';
import data from '../data.json';
import { useState } from 'react';

function Technology(){

    const button1 = document.querySelector('.button1')
    const button2 = document.querySelector('.button2')
    const button3 = document.querySelector('.button3')
    const buttons = document.querySelectorAll('.btn')
    const [slide, changeSlide] = useState(data.technology[0])

    return (
        <section className='Technology-wrapper technology'>
            <h2 className='fixed-h2 absolute'><span>03</span>SPACE LAUNCH 101</h2>

            <div 
                className='button1 absolute white btn inverted-colors'
                onClick={() => {
                    changeSlide(data.technology[0])
                    buttons.forEach(btn => {
                        btn.classList.remove('inverted-colors')
                    })
                    button1.classList.add('inverted-colors')
                }}
            >1</div>
            <div 
            className='button2 absolute white btn'
                onClick={() => {
                    changeSlide(data.technology[1])
                    buttons.forEach(btn => {
                        btn.classList.remove('inverted-colors')
                    })
                    button2.classList.add('inverted-colors')
                }}
            >2</div>
            <div 
            className='button3 absolute white btn'
                onClick={() => {
                    changeSlide(data.technology[2])
                    buttons.forEach(btn => {
                        btn.classList.remove('inverted-colors')
                    })
                    button3.classList.add('inverted-colors')
                }}
            >3</div>

            <div className='info absolute white'>
                <h4>the terminology_</h4>
                <h1>{slide.name}</h1>
                <p>{slide.description}</p>
            </div>

            <div className='spaceship-images '>
                {slide.images && slide.images.portrait && <img src={slide.images.portrait} alt="Spaceship Portrait" />}
            </div>
        </section>
    )
}

export default Technology;