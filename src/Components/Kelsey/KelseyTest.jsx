import React, {Component} from 'react'
import Slider from 'react-slick'
import Nav from '../Nav/Nav'
// import kasja from '../../assets/kasja3.jpg'
// import elissa from '../../assets/elissa.jpg'

class KelseyTest extends Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000
        }
        return (
            <div className="parent">
            <div className='Kelseytest'>
                <Nav/>
                <Slider {...settings}>
                        {/* <img className='testing1'  src={kasja} alt=""/> */}
                        <div className="testingUrl1"></div>
                        <div className="testingUrl2"></div>
                        {/* <img src={elissa} alt="" className="testing1"/> */}
                </Slider>
            </div>
            </div>
        )
    }
}



export default KelseyTest
