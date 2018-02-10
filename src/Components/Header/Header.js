import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='header-container'>

                <div className='upper-header'>
                    <img alt='monkey' className='upper-header-image' src='https://d3gqasl9vmjfd8.cloudfront.net/6bbd3a85-d3e5-486a-9b94-3596fe0d369a.png' />
                    <img alt='woot' className='upper-header-image' src='https://d3gqasl9vmjfd8.cloudfront.net/3d71f841-6152-4ddf-a91c-e8235a0af010.png' />
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