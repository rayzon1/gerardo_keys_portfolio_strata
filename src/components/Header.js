import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>My name is <strong>Gerardo Keys</strong>, a smart and<br />
                    responsive site creator.<br /></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
