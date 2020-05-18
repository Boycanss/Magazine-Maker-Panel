import React, { Component } from 'react'
import './Panel2.css'
import Draggable from 'react-draggable';
import { ReactSVG } from 'react-svg';
import addPage from '../Icons/add-page.svg'
import importImg from '../Icons/import-image.svg'

export default class Panel2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Current: 0,
            MaxCount: 100
        }
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
    }

    left() {
        if (this.state.Current !== 0) {
            this.setState({
                Current: this.state.Current - 1
            })
        }
    }

    right() {
        if (this.state.Current !== 100) {
            this.setState({
                Current: this.state.Current + 1
            })
        }
    }
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

                <div className="Panel2" id="panel2">

                    <div className="panelTitle">
                        <span>PAGES</span>
                    </div>
                    <div className="groups">
                        <div className="group1">
                            <div className="icongg" draggable="true" onDragStart={this.drag} id="drag1">
                                <a href="/add">
                                    <ReactSVG id="svg1" src={addPage} />
                                </a>
                                <p>Add</p>
                            </div>
                            <div className="icongg" draggable="true" onDragStart={this.drag} id="drag1">
                                <a href="/add">
                                    <ReactSVG id="svg1" src={importImg} />
                                </a>
                                <p>import</p>
                            </div>
                        </div>

                        <div className="group2">
                            <div className="icongg" draggable="true" onDragStart={this.drag} id="drag1">
                                <a href="#" onClick={this.left}><span class="material-icons left">
                                    arrow_left
                            </span></a>
                            </div>
                            <p className="count">{this.state.Current} / {this.state.MaxCount}</p>
                            <div className="icongg" draggable="true" onDragStart={this.drag} id="drag1">
                                <a href="#" onClick={this.right}><span class="material-icons left">
                                    arrow_right
                            </span></a>
                            </div>
                        </div>


                        <div className="group3">
                            <div className="divider">

                            </div>
                            <div className="frame1">
                                <div className="inframe1">

                                </div>
                                <p className="pageFrame">Page 1</p>
                            </div>
                            <div className="frame1">
                                <div className="inframe1">

                                </div>
                                <p className="pageFrame">Page 1</p>
                            </div>

                            <div className="frame2">
                                <div className="inframe2">

                                </div>
                                <p className="pageFrame2">Page 1</p>
                            </div>

                            <div className="frame1">
                                <div className="inframe1">

                                </div>
                                <p className="pageFrame">Page 1</p>
                            </div>
                            <div className="frame1">
                                <div className="inframe1">

                                </div>
                                <p className="pageFrame">Page 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Draggable>
        )
    }
}
