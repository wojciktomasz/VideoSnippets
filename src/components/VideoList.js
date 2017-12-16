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
        return _.map(this.props.videos, video => {
            return (
                <div className='col col-md-4' key={video.mid}>
                    <div style={{backgroundImage: `url(${video.screenshot})`}} className='graphic-section'>
                        <p className='video-duration'>{moment.utc(video.duration*1000).format('mm:ss')}</p>
                        <i className='fa fa-circle-thin fa-5x play-circle' aria-hidden='true' />
                        <i className='fa fa-caret-right fa-4x play-caret' aria-hidden='true' />
                    </div>
                    <h1>{video.title}</h1>
                    <h2>{video.media.program}</h2>
                    <p>{video.description}</p>
                </div>
            )
        })
    }

    render () {
        return (
            <div className='container'>
                <div className='row justify-content-md-center'>
                    {this.renderList()}
                    {console.log(this.props.videos)}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ videos }) {
    return { videos }
}

export default connect(mapStateToProps, { fetchVideos })(VideoList)