import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SavedVideosContainer,
  SavedVideosHeader,
  IconContainer,
  SavedVideosText,
  SavedVideoList,
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
  MainBody,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos} = value
          const isVideosAvailable = savedVideos.length > 0

          return (
            <>
              <Header />
              <MainBody>
                <Sidebar />
                <SavedVideosContainer
                  isDark={isDarkTheme}
                  data-testid="savedVideos"
                >
                  {isVideosAvailable ? (
                    <>
                      <SavedVideosHeader isDark={isDarkTheme}>
                        <IconContainer isDark={isDarkTheme}>
                          <MdPlaylistAdd size={35} color="#ff0000" />
                        </IconContainer>
                        <SavedVideosText isDark={isDarkTheme}>
                          Saved Videos
                        </SavedVideosText>
                      </SavedVideosHeader>
                      <SavedVideoList>
                        {savedVideos.map(each => (
                          <VideoCard key={each.id} videoDetails={each} />
                        ))}
                      </SavedVideoList>
                    </>
                  ) : (
                    <NoSavedVideosView>
                      <NoSavedVideosImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <NoSavedVideosHeading isDark={isDarkTheme}>
                        No saved videos found
                      </NoSavedVideosHeading>
                      <NoSavedVideosNote>
                        You can save your videos while watching them
                      </NoSavedVideosNote>
                    </NoSavedVideosView>
                  )}
                </SavedVideosContainer>
              </MainBody>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
