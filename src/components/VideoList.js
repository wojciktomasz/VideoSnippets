/**
 * Created by Superstar on 16.12.2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchVideos } from '../ducks/videoList'
import _ from 'lodash'
import moment from 'moment'
import 'font-awesome/css/font-awesome.min.css'
import '../App.css'

class VideoList extends Component {
    componentDidMount() {
        this.props.fetchVideos()
    }

    renderList() {
        const videoListReduced = Array.prototype.slice.call(this.props.videos, 0, 9)
        const lengthFormat = video => moment.utc(video.duration*1000).format('mm:ss')
        return _.map(videoListReduced, video => {
            return (
                <div className='col col-md-6 col-lg-4 col-sm-12 col-12 video-item' key={video.mid}>
                    <div style={{backgroundImage: `url(${video.screenshot})`}} className='graphic-section'>
                        <p className='video-duration'>{lengthFormat(video)}</p>
                        <div className='play-button'>
                            <p className='play-circle' />
                            <i className='fa fa-caret-right fa-3x play-caret' aria-hidden='true' />
                        </div>
                    </div>
                    <div className='video-description'>
                        <h1 className='video-title'>{video.title}</h1>
                        <h2 className='video-category'>{video.media.program}</h2>
                        <p className='video-short-description'>{video.description}</p>
                    </div>
                </div>
            )
        })
    }

    render () {
        return (
            <div className='container'>
                <div className='row justify-content-md-center'>
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ videos }) {
    return { videos }
}

export default connect(mapStateToProps, { fetchVideos })(VideoList)