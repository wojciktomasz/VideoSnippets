/**
 * Created by Superstar on 16.12.2017.
 */
import { combineReducers } from 'redux'
import VideosReducer from './videoList'

const rootReducer = combineReducers({
    videos: VideosReducer
})

export default rootReducer
