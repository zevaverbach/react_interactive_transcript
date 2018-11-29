import React, { Component } from 'react';
import MediaPlayer from './mediaPlayer';
import Controls from './controls'

export default class MediaContainer extends Component {

    constructor(props) {
        super(props)
        this.mediaPlayer = React.createRef()
        this.controls = React.createRef()

    }

    render() {
        const {
            queueLengths, mediaSource, onTimeUpdate, ready,
            onDownloadTranscriptClick, togglePlay, undo, redo, playing, onUndoAllClick } = this.props
        if (!ready) return null
        return (
            <div id='media-container'>
                <MediaPlayer
                    ref={this.mediaPlayer}
                    src={mediaSource}
                    onTimeUpdate={onTimeUpdate}
                    togglePlay={togglePlay}
                />
                <div id="media-label">{mediaSource}</div>
                <Controls
                    onDownloadTranscriptClick={onDownloadTranscriptClick}
                    onUndoAllClick={onUndoAllClick}
                    queueLengths={queueLengths}
                    undo={undo}
                    redo={redo}
                    togglePlay={togglePlay}
                    playing={playing}
                    ref={this.controls}
                />
            </div>
        )
    }
}