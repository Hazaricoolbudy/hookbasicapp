import React from "react";
import { connect } from "react-redux";
const SongsDetails = ({ song }) => {
    if (!song) {
        return (
            <h3>Select a Song</h3>

        )
    }

    return (

        <div>
            <h3> Songs Details</h3>
            <p>Title: {song.title}
                <br />
                Time: {song.DURATION}
            </p>
        </div>

    )

}
const mapStateToProps = (state) => {
    return { song: state.selectedSong }

}
export default connect(mapStateToProps)(SongsDetails)