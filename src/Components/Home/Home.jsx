import React from 'react'
import Nav from '../Nav/Nav'
// import About from '../Home/About'
import './home.scss'
// import Slider from 'react-slick'

class Home extends React.Component {

    
    render(){
        // const settings = {
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     fade: true,
        //     cssEase: 'linear',
        //     autoplay: true,
        //     autoplaySpeed: 5000
        // }
        return(
            <div className='home-parent'>
                    <div className='home-wallpaper'>
                        <Nav/>
                    </div>
                <div className='below-home'>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, sequi dolores ad iusto molestiae perspiciatis praesentium saepe. Odio, nisi. Quis laboriosam odit error reprehenderit a sequi fuga quae alias pariatur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, repellendus? Eos quibusdam, quae dicta eaque modi reprehenderit doloribus, dignissimos omnis saepe nesciunt perferendis. Modi provident quae odit illo totam eum.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem accusamus ad optio consectetur perferendis provident sint officia est maxime ab, accusantium animi consequatur recusandae laboriosam ut quam veritatis aspernatur tenetur!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore nostrum doloremque, eius aut accusamus aperiam quia consectetur, mollitia, perspiciatis dolor quasi voluptatem. Fugit aliquid minima numquam doloribus a ex!</p> */}
                </div>
            </div>
        )
    }
}

export default Home