import React, { Component } from 'react'
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Panel from '../../Components/Panel/Panel';
import Panel2 from '../../Components/Panel2/Panel2';
import imgsvg from '../../Components/Icons/image-active.svg';
import soundsvg from '../../Components/Icons/sound-active.svg';
import videosvg from '../../Components/Icons/video-active.svg';
import textsvg from '../../Components/Icons/text-active.svg';


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: 1
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ scale: e.target.value })
    }

    allowDropOver(ev) {
        ev.preventDefault();
    }

    drag(ev) {
        ev.dataTransfer.setData("text/html", ev.target.id);
        ev.dataTransfer.effectAllowed = "copy";
    }

    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text/html");
        ev.target.appendChild(document.getElementById(data));

        // copyimg.setAttribute("style", "position: absolute; top: " + y + "px; left:" + x + "px;");
    }

    render() {
        return (
            <div className="homePage">
                <Navbar />
                <Panel
                    val={this.state.scale}
                    zoomChange={this.handleChange}
                />
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
