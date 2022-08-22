import { Search } from '@material-ui/icons'
import { MusicNote } from '@material-ui/icons'
import { AccessTime } from '@material-ui/icons'
import { PlaylistPlay } from '@material-ui/icons'
import { Add } from '@material-ui/icons'
import { Settings } from '@material-ui/icons'
import { Person } from '@material-ui/icons'
import React from 'react'
import './sidebar.css'

const SideBar = () => {
  return (
    <div className="sidebar">
        <div className="top">
          <Search className="icon" />
          <MusicNote className="icon" />
          <AccessTime className="icon" />
          <PlaylistPlay className="icon" />
          <Add className="icon" />
        </div>
        <div className="bottom">
          <Settings className="icon" />
          <Person className="icon" />
        </div>
    </div>
  )
}

export default SideBar