import { combineReducers } from "redux";


const songReducer = () => {
    return [
        { title: 'NO SCRUBS', DURATION: '4.05' },
        { title: 'BELA CHAO', DURATION: '3.02' },
        { title: 'BELA CHU', DURATION: '3.22' },
        { title: 'BELA RAOU', DURATION: '3.32' }
    ]
}
const selectedSongsReducer = (selectSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectSong

}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongsReducer
})