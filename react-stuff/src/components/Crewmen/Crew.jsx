import './Crew.css'
import data from '../data.json'
import { useState } from 'react';

//we want to change pictures using data.json after a few seconds using state but how would we do it
//have a dependancy, if we're hovering over the big crew-container div, we would know to have it change after a few seconds, that way it not only wouldnt cause an infinite loop, but we would be able to have something that would start and stop it

function Crew(){

    let crewContainer = document.querySelector('.Crew-container');
    let slide1 = document.querySelector('.slide1');
    let slide2 = document.querySelector('.slide2');
    let slide3 = document.querySelector('.slide3');
    let slide4 = document.querySelector('.slide4');
    let allSlides = document.querySelectorAll('.slide');

    const [slide, changeSlide] = useState(data.crew.Names[0]);

    
    // slideChanger()

    //causes an infinite loop- SO IF SEEING THIS THE NEXT DAY, JUST GOOGLE IT AS WE ARE LEARNING NOT COPYING SINCE WE ARENT FAMILIAR WITH USESTATE

    // let count = 0;
    // let crewNames = data.crew.Names;
    // let limit = crewNames.length;

    // function slideChanger() {
    //     console.log(crewNames[count].name);
    //     count++;
    //     if (count === limit) {
    //         count = 0;
    //     }
    // }

    // // Call slideChanger every 5 seconds using setInterval
    // setInterval(slideChanger, 5000); 

    // changeSlide(crewNames[count])


        //WE'RE WORKING ON THIS FUNCTION BELOW AS IT SEEMS LIKE ITS GOING TO WORK
    /*
    function isMouseOver(e){
        // e.type == "mouseover" ? 
        //the above literally just means 'if mouse over is active'
    }
    */

   



    return(
        
            


        <section className="Crew-wrapper crew">
            <div 
            className='Crew-container'
            // onMouseOver={}
            >
                
                <div className='crew-info'>
                    <h3 className='white meetCrew'><span className='page-no'>02</span>MEET YOUR CREW</h3>
                    <h2 className='role white'>{slide.role}</h2>
                    <h1 className='crewName white'>{slide.name}</h1>
                    <p className='description'>{slide.bio}</p>
                    <div className='slides'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="132" height="15" viewBox="0 0 132 15" fill="none">
                            <circle 
                            className='pointer slide slide1'
                            onClick={() => {
                                changeSlide(data.crew.Names[0])
                                { allSlides.forEach(slide => slide.style.opacity = '0.174363')}
                                {slide1.style.opacity = '1'}
                                //if we click this button every other button will have opacity, the button clicked will have its opacity = 0
                            }
                        }
                            cx="7.5" cy="7.5" r="7.5" fill="white" />
                            <circle 
                            className='pointer slide slide2'
                            onClick={() => {
                                changeSlide(data.crew.Names[1])
                                { allSlides.forEach(slide => slide.style.opacity = '0.174363') }
                                { slide2.style.opacity = '1' }
                            }}
                            opacity="0.174363"
                            cx="46.5" cy="7.5" r="7.5" fill="white" />
                            <circle 
                            className='pointer slide slide3'
                            onClick={() => {
                                changeSlide(data.crew.Names[2])
                                { allSlides.forEach(slide => slide.style.opacity = '0.174363') }
                                { slide3.style.opacity = '1' }
                            }}
                            opacity="0.174363"
                            cx="85.5" cy="7.5" r="7.5" fill="white" />
                            <circle 
                            className='pointer slide slide4'
                            onClick={() => {
                                changeSlide(data.crew.Names[3])
                                { allSlides.forEach(slide => slide.style.opacity = '0.174363') }
                                { slide4.style.opacity = '1' }
                            }} 
                            opacity="0.174363" 
                            cx="124.5" cy="7.5" r="7.5" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className='crew-pictures'>
                    <img src={slide.images.png} alt="crew" className='crew-img'/>
                </div>
            </div>
        </section>
    )
}

export default Crew;