import './Crew.css'
import data from '../data.json'
import { useState } from 'react';

//we want to change pictures using data.json after a few seconds using state but how would we do it
//have an array that contains the amount of indexes in the array (not done manually, dynamically as it would be better practice)
//we change state of the number every few seconds by looping into the array and saving the current number in a var
//we can then have the state to equal that current number
//with that we can then have a dynamically changing index of the crew array after a few seconds?

function Crew(){
    

    const [slide, changeSlide] = useState(data.crew.Names)


    // let crewNames = data.crew.Names;
    // console.log(crewNames[0].name)
    // let limit = crewNames.length;
    // console.log(limit)
    // let count = 0;

    // const slideChanger = function(){
    //     setInterval(() => {
    //         changeSlide(crewNames[count])
    //      }, 5000)
    //      count == limit ? count = 0 : count++
    // }

    
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


    return(
        <section className="Crew-wrapper crew">
            <div className='Crew-container'>
                <div className='crew-info'>
                    <h2><span className='page-no'>02</span>MEET YOUR CREW</h2>
                    <h1 className='crewName'></h1>
                </div>
                <div className='crew-pictures'>
                    <img src="" alt="" />
                </div>
                <div className='slides'>
                   { [1, 2, 3, 4].map((i) => (
                        <div
                        key={i} //give them keys to actually distinguish each divs from others
                        className={`slide${i} slide`} //classnames are in curcly braces when using them in js
                        ></div>
                   ))}
                </div>
            </div>
        </section>
    )
}

export default Crew;