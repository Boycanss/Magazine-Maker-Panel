import React, { Component } from 'react'
import './Panel.css'
import '../../Pages/Page2/Page2.css'
import Draggable from 'react-draggable';
import { ReactSVG } from 'react-svg';
import Board from './Board';
import Card from './Card'
import imgsvg from '../Icons/image-active.svg';
import soundsvg from '../Icons/sound-active.svg';
import videosvg from '../Icons/video-active.svg';
import textsvg from '../Icons/text-active.svg';

export default class Panel extends Component {

    render() {
        return (
            <Draggable
                axis="both"
                handle=".panelTitle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={0}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
            >
                <div className="Panel" id="panel1">
                    <div className="panelTitle">
                        <span>TOOLS</span>
                    </div>

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
                                    <div className="dragContent">
                                        <a href="#">
                                            <ReactSVG id="svg2" src={imgsvg} />
                                            <p>Image</p>
                                        </a>

                                    </div>

                                    <div className="dragContent">
                                        <a href="#">
                                            <ReactSVG id="svg2" src={soundsvg} />
                                            <p>Sound</p>
                                        </a>

                                    </div>
                                    <div className="dragContent">
                                        <a href="#">
                                            <ReactSVG id="svg3" src={videosvg} />
                                            <p>Video</p>
                                        </a>

                                    </div>

                                    <div className="dragContent">
                                        <a href="#">
                                            <ReactSVG id="svg4" src={textsvg} />

                                            <p>Text</p>
                                        </a>

                                    </div>
                                </Card>
                            </Board>

                        </div>
                    </div>
                </div>
            </Draggable>
        )
    }
}
