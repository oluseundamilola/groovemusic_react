import { FastForward, FastRewind, PlayArrow } from '@material-ui/icons'
import React from 'react'
import { connect } from 'react-redux'
import './detail.css'

const SongDetail = ({song}) => {
    if(!song){
        return (
            <div className="music_container">
              <div className="bg">
                <div className="dark">
                  <h3 className='dance'>Pick a song let's Dance</h3>
                </div>
                <img src="./assets/bg.jpg" alt="" />
              </div>
            </div>
        )
    }
  return (
    <div className="fixedRight">
      <div className="song_Container">
        <div className="topBox">
          <div className="cover"></div>
          <img className="artistImg" src={song.face} alt="" />
          <div className="words">
            <h2 className='h2'>{song.artist}</h2>
          </div>
        </div>
        
        <div className="bottomBox">
          <div className="song">
            <img className='imgBox' src={song.img} alt="" />
            <div className="progessBar">
              <div className="progress"></div>
            </div>
            <div className="songTime">
              <span className="songtimeNumber">0:33</span>
              <span className="songtimeNumber">1:20</span>
            </div>
            <div className="songInfo">
              <h3 className='songTitle'>{song.title}</h3>
              <span className="singer">{song.artist}</span>
            </div>
          </div>
          <div className="player">
            <div className="forward">
              <FastRewind className="playArrow" />
            </div>
            <div className="playCircle">
              <PlayArrow fontSize="80px" className="playArrow" />
            </div>
            <div className="forward">
              <FastForward  className="playArrow" />
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps) (SongDetail)