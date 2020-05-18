import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {

    render() {
        return (
            <div className="Navbar">
                <ul>
                    <div className="leftNav">
                        <li><a href="/" className="icon1">
                            <span class="material-icons">
                                home
                                </span> home
                        </a></li>
                        <li><a href="/" className="icon1">
                            <span class="material-icons">
                                save
                                </span> save
                        </a></li>
                        <li className="title"><a href="/">Project Name</a></li>
                    </div>
                    <div className="rightNav">
                        <li><a href="/Page2" className="icon2"><span class="material-icons">
                            help
                        </span>Help</a></li>
                    </div>
                </ul>
            </div>
        )
    }
}
