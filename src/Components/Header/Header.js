import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='header-container'>

                <div className='upper-header'>
                    Test
                </div>

                <hr />

                <div className="navbar">
                    <a href="/">Test</a>
                    <a href="/">Test</a>
                    <a href="/">Test</a>
                    <a href="/">Test</a>
                </div>

            </div>
        );
    }
}

export default Header;