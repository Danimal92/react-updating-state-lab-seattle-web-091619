import React, { Component } from 'react'

export class YouTubeDebugger extends Component {



    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    bitrateHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
        })
        console.log()
    }


    resolutionHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.bitrateHandler}>bitrate{this.state.settings.bitrate}</button>
                <button className='resolution' onClick={this.resolutionHandler}>resolution{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger
