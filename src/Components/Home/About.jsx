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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorum dignissimos ab, recusandae quidem autem? Nulla architecto neque illum non mollitia, quam saepe ab maiores sapiente? Accusantium voluptatibus mollitia ipsa.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi beatae natus neque provident, assumenda, debitis molestiae, pariatur id quod libero omnis deserunt voluptatum ad illo. Quibusdam esse dolor unde illo!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos placeat voluptatibus repudiandae, harum, consectetur natus sunt ut hic officia odio, a obcaecati repellat doloremque aliquid rerum eligendi. A, adipisci. Recusandae.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis eos nisi esse maiores voluptatem corporis sunt, unde officiis laudantium. Voluptatem dolorem quaerat placeat tenetur facere autem? Praesentium rerum soluta dignissimos!</p>
                </div>
            </div>
        )
    }
}

export default About