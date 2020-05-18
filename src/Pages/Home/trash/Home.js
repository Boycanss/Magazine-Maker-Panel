import React, { Component } from 'react'
import './Home.css';
import '../../Components/Panel/Panel.css'
import Navbar from '../../Components/Navbar/Navbar';
import Draggable from 'react-draggable';
import { ReactSVG } from 'react-svg';
import Panel from '../../Components/Panel/Panel';
import Panel2 from '../../Components/Panel2/Panel2';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: 1
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        this.setState({ scale: ev.target.value })
    }

    render() {
        return (
            <div className="homePage">
                <Navbar />

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
                        <div className="dragContet">
                            <Panel />
                        </div>
                    </div>
                </Draggable>

                <Panel2 />
                <div className="article" id="article1"
                    style={{ transition: "ease-in-out 1s", transform: `scale(${this.state.scale})` }}
                >
                    <div className="p2" id="c1" onDrop={this.drop} onDragOver={this.allowDropOver}>

                    </div>
                    <div className="p2" id="c2" onDrop={this.drop} onDragOver={this.allowDropOver}>

                    </div>
                    <div className="p2" id="c3" onDrop={this.drop} onDragOver={this.allowDropOver}>

                    </div>
                    <div className="p2" id="c4" onDrop={this.drop} onDragOver={this.allowDropOver}>

                    </div>
                    <div className="p2" id="c5" onDrop={this.drop} onDragOver={this.allowDropOver}>

                    </div>
                    <div className="p2" id="c6" onDrop={this.drop} onDragOver={this.allowDropOver}>

                    </div>
                    <div className="p2" id="c7" onDrop={this.drop} onDragOver={this.allowDropOver}>

                    </div>
                    <div className="p2" id="c8" onDrop={this.drop} onDragOver={this.allowDropOver}>

                    </div>
                    <div className="p2" id="c9" onDrop={this.drop} onDragOver={this.allowDropOver}>

                    </div>
                    <div className="p2" id="c10" onDrop={this.drop} onDragOver={this.allowDropOver}>

                    </div>
                </div>
            </div>
        )
    }
}
