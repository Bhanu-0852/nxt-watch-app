import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoItem,
  NavLink,
  ThumbnailImage,
  VideoDetailsContainer,
  ChannelLogo,
  VideoTextContainer,
  VideoTitle,
  VideoInfoText,
  Dot,
} from './styledComponents'

class VideoCard extends Component {
  render() {
    const {videoDetails} = this.props
    const {
      id,
      title,
      thumbnailUrl,
      viewCount,
      publishedAt,
      name,
      profileImageUrl,
    } = videoDetails

    const date = formatDistanceToNow(new Date(publishedAt))

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <VideoItem>
              <NavLink to={`/videos/${id}`}>
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <VideoDetailsContainer>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <VideoTextContainer>
                    <VideoTitle isDark={isDarkTheme}>{title}</VideoTitle>
                    <VideoInfoText isDark={isDarkTheme}>{name}</VideoInfoText>
                    <VideoInfoText isDark={isDarkTheme} as="p">
                      {viewCount} views <Dot> &#8226; </Dot> {date}
                    </VideoInfoText>
                  </VideoTextContainer>
                </VideoDetailsContainer>
              </NavLink>
            </VideoItem>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoCard
