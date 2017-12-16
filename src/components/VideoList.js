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
        return _.map(videoListReduced, video => {
            return (
                <div className='col col-md-6 col-lg-4 col-sm-12 video-item' key={video.mid}>
                    <div style={{display: 'block'}}>
                        <div style={{backgroundImage: `url(${video.screenshot})`}} className='graphic-section'>
                            <p className='video-duration'>{moment.utc(video.duration*1000).format('mm:ss')}</p>
                            <i className='fa fa-circle-thin fa-5x play-circle' aria-hidden='true' />
                            <i className='fa fa-caret-right fa-4x play-caret' aria-hidden='true' />
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