import React, { Component } from 'react'
import './song.css'
import SideBar from '../components/sideBar/SideBar'
import { PlayArrow, Shuffle } from '@material-ui/icons'
import { connect } from 'react-redux'
import { selectSong } from '../actions'
import SongDetail from '../components/SongDetail'


class Song extends Component {
    renderSongs(){
        return this.props.songs.map((song) => {
            return(
                
                    <div className="item" key={song.title}>
                        <div className="play">
                            <div className="circle" onClick={() => this.props.selectSong(song)}>
                                <PlayArrow />
                            </div>
                        </div>
                        <div className="img">
                            <img src={song.img} alt="" />
                        </div>
                        <div className="desc">
                            <h3>{ song.title }</h3>
                            <p>Album by {song.artist}</p>
                        </div>
                    </div>
            
                
            )
        })
    }

  render(){
    return (
        <div className="body">
            <SideBar />
            <div className='songContainer'>
                <div className="container">
                    <div className="left">
                        <div className="header">
                            <h1 className="recent">Recent plays</h1>
                            <div className="topic"><Shuffle/><h5 className='shuffle'>Shuffle all music</h5></div>
                        </div> 
                        <div className="left-content" >
                            {this.renderSongs()}
                        </div>
                        
    
                    </div>
    
                    <div className="right">
                        <SongDetail />
                    </div>
                </div>
            </div>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}


export default connect(mapStateToProps, {selectSong}) (Song);