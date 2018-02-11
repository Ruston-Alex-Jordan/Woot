import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <div className='footer-woot-container'>
                    <h1>Woot</h1>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Home</a>
                        </li>
                    </ul>
                </div>

                <div className='footer-community-container'>
                    <h1>Community</h1>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Home</a>
                        </li>
                    </ul>
                </div>

                <div className='footer-blog-container'>
                    <h1>Blog</h1>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;