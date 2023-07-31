import '../App.css'
import { NavLink } from 'react-router-dom'

function MainContentHome() {
    return (
        <div className='main-cont-home'>
            <div>
                <h3 className='homepageH3'>So, you want to travel to</h3>
                <h1 className='spaceH1'>Space</h1>
                <p className='homepagePara'>Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!</p>

            </div>
            <NavLink to='./Destination'>
                <div className='explore-btn pointer'>
                <h2 className='exploreh2 uppercase'>Explore</h2>
            </div>
            </NavLink>
        </div>
    )
}

export default MainContentHome;