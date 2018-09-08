import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
    constructor(props) {
        super(props);
        this.playerRef = React.createRef();
    }

    playVideoHandler = () => {
        this.playerRef.current.play();
    };

    stopVideoHandler = () => {
        this.playerRef.current.pause();
    };

    render() {
        return (
            <div className="video-player">
                <video
                    src={videoFile}
                    ref={this.playerRef}
                    className="video-player__source"
                    type="video/mp4"
                />
                <div>
                    <button onClick={this.playVideoHandler}>Play</button>
                    <button onClick={this.stopVideoHandler}>Stop</button>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;
