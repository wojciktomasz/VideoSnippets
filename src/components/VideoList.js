/**
 * Created by Superstar on 16.12.2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchVideos } from '../ducks/videoList'

class VideoList extends Component {
    componentDidMount() {
        this.props.fetchVideos()
    }

    render () {
        return (
            <div>
                {console.log(this.props.videos)}
                Video List
            </div>
        )
    }
}

function mapStateToProps({ videos }) {
    return { videos }
}

export default connect(mapStateToProps, { fetchVideos })(VideoList)