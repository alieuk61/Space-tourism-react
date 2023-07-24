import './Destination.css'
import { useState } from 'react'
import data from '../data.json'
//i want to click on the buttons then i want to have the title descriptions and other stuff to change depending on the planet (button clicked).
//i want to put all that info in a dictionary and then loop through it, if the button = moon, we wanna do (e.innerhtml).planetname, .planetdesc etc...



function Destination () {

        const [tab, setTab] = useState(data.destinations.Moon) //data became an object containing everything in the data.json file and then we want eveything to start of by starting in the moon object as thats the first button

    return(
        <section className='Destination-wrapper destination'  >
            <div className='h3-div'>
                <h3>01</h3>
                <h3>PICK YOUR DESTINATION</h3>
            </div>
            <div 
            className='Destination-container container-1'>
                <img src={tab.images.png} alt="" />
            </div>
            
            <div className='Destination-container container-2'>
                <div className='planets-anchortags'>
                    <span
                        className='pointer uppercase'
                        onClick={() => setTab(data.destinations.Moon)}
                    >Moon</span>
                    <span
                        className='pointer uppercase'
                        onClick={() => setTab(data.destinations.Mars)}>Mars</span> {/*remember the second thing in usestate is a function, so all we need to do to change the state is put in the info we want it to be changed to*/}
                    <span
                        className='pointer uppercase'
                        onClick={() => setTab(data.destinations.Europa)}
                    >Europa</span>
                    <span className='pointer uppercase'
                        onClick={() => setTab(data.destinations.Titan)}
                    >Titan</span>
                </div>
                <div className='planet-info-container'>
                <h1 className='planetsName'>{tab.name}</h1>
                <p className='planetsDescription'>{tab.description}</p>
                <hr />
                <div className='planetDisContainer'>
                        <div className='planetDistance'><h5 className='travelh5'>AVG. DISTANCE</h5><h2 className='travelh2'>{tab.distance}</h2></div>
                        <div className='travelDiv'><h5 className='travelh5'>EST. TRAVEL TIME</h5><h2 className='travelh2'>{tab.travel}</h2></div>
                </div>
                </div>
            </div>
            
            
        </section>
    )
}

export default Destination