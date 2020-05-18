import React, { Component } from 'react';
import './Page2.css';
import '../../Components/Panel/Panel.css';
import Board from './Board';
import Card from './Card'
import { ReactSVG } from 'react-svg';
import imgsvg from '../../Components/Icons/image-active.svg';

export default class Page2 extends Component {
    render() {
        return (
            <div className="App">
                <div className="flexbox">
                    <Board
                        id="board-1"
                        className="board"
                    >
                        <Card
                            id="card-1"
                            className="card"
                            draggable="true"
                        >
                            <a href="#">
                                <ReactSVG id="svg1" src={imgsvg} />
                                <p>Image</p>
                            </a>
                        </Card>
                    </Board>

                    <Board
                        id="board-2"
                        className="board"
                    >
                        <Card
                            id="card-2"
                            className="card"
                            draggable="true"
                        >
                            <a href="#">
                                <ReactSVG id="svg1" src={imgsvg} />
                                <p>Image</p>
                            </a>
                        </Card>
                    </Board>
                </div>


            </div>
        )
    }
}
