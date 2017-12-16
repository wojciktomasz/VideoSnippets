/**
 * Created by Superstar on 16.12.2017.
 */
import axios from 'axios'

const FETCH_VIDEOS = 'fetch_videos'

export function fetchVideos() {
    const request = axios.get('https://wp.tv/api/v1/related/2000000')

    return {
        type: FETCH_VIDEOS,
        payload: request
    }
}

export default function(state = {}, action){
    switch(action.type) {
        case FETCH_VIDEOS:
            return action.payload.data.related
        default:
            return state
    }
}