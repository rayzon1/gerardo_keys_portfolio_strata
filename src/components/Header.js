import React from 'react'
import Fade from 'react-reveal/Fade';
import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <Fade>
                    <div className="inner">
                        <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                        <h1>My name is <strong>Gerardo Keys</strong>, a smart and <br />
                        responsive site creator.<br /></h1>
                    </div>
                </Fade>
                <Footer />
            </header>
        )
    }
}

export default Header
