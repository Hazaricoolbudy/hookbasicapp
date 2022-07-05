//action creator
export const selectSong = (song) => {
    // return an action t
    return {
        type: 'SONG_SELECTED',
        payload: song

    };
}

