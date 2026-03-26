import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  toggleTheme: () => {},
  addVideo: () => {},
})

export default NxtWatchContext
