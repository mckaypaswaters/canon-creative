import React from 'react'
import Nav from '../Nav/Nav'
import './about.scss'

class About extends React.Component {

    render(){
        return(
            <div className='about-parent'>
                <div className="about-wallpaper">
                    <Nav/>
                </div>
                <div className="below-about">
                    <div className="about-info">
                        <p>Hi there! Welcome! I'm Kaitlyn, a couples and wedding photographer based in Utah County. I specialize in finding the quirks, inside jokes and sweet moments between you and your person to tell a story of your love through photography. </p>
                        <p>I'm a big believer that style is completely yours and doesn't revolve arounds trends. So my goal is to create images that will stand the test of time, but still completely define who you are in this moment. Because at the end of the day, who doesn't want dozens of photos of the one they can't get enough of?</p>
                        <p>I was the kid growing up who always had her point and shoot camera (pre camera phones people) and taking photos of anyone and anything. I feel so grateful that has remained my constant, and that I get to meet incredible people and hear their stories along the way.  I'm always in the mood to breathe the mountain air, binge watch the Office or find the worlds best tasting horchata.</p>
                        <p>Kaitlyn Harris Photography is where we will use movement and connection to take the adoration you already have, and enhance it to create photos that make to stop in your tracks. This is a place for laid back and unique sessions + letting you just love on your honey while I take care of the nitty gritty good stuff</p>
                        <p>Let's work together to document your love so that in sickness + health,  good times + the bad, you have a reminder of who you love and why.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About