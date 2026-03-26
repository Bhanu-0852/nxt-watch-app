import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoDetailsViewContainer,
  VideoPlayerContainer,
  VideoTitle,
  VideoStatsContainer,
  VideoStatsText,
  VideoActionButtonsContainer,
  ActionButton,
  HorizontalLine,
  ChannelContainer,
  ChannelLogo,
  ChannelDetails,
  ChannelName,
  SubscribersCount,
  VideoDescription,
  MainBody,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {id} = match.params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = isDark => (
    <FailureViewContainer>
      <FailureImage
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailureHeading isDark={isDark}>Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request. Please try again.
      </FailureDescription>
      <RetryButton type="button" onClick={this.getVideoDetails}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  renderSuccessView = (isDark, addVideo, savedVideos) => {
    const {videoDetails, isLiked, isDisliked} = this.state
    const isSaved = savedVideos.some(each => each.id === videoDetails.id)
    const date = formatDistanceToNow(new Date(videoDetails.publishedAt))

    return (
      <VideoDetailsViewContainer>
        <VideoPlayerContainer>
          <ReactPlayer
            url={videoDetails.videoUrl}
            controls
            width="100%"
            height="100%"
          />
        </VideoPlayerContainer>
        <VideoTitle isDark={isDark}>{videoDetails.title}</VideoTitle>
        <VideoStatsContainer>
          <VideoStatsText isDark={isDark}>
            {videoDetails.viewCount} views &#8226; {date}
          </VideoStatsText>
          <VideoActionButtonsContainer>
            <ActionButton
              type="button"
              active={isLiked}
              onClick={this.onClickLike}
            >
              <AiOutlineLike size={20} /> Like
            </ActionButton>
            <ActionButton
              type="button"
              active={isDisliked}
              onClick={this.onClickDislike}
            >
              <AiOutlineDislike size={20} /> Dislike
            </ActionButton>
            <ActionButton
              type="button"
              active={isSaved}
              onClick={() => addVideo(videoDetails)}
            >
              <BiListPlus size={20} /> {isSaved ? 'Saved' : 'save'}
            </ActionButton>
          </VideoActionButtonsContainer>
        </VideoStatsContainer>
        <HorizontalLine isDark={isDark} />
        <ChannelContainer>
          <ChannelLogo src={videoDetails.profileImageUrl} alt="channel logo" />
          <ChannelDetails>
            <ChannelName isDark={isDark}>{videoDetails.name}</ChannelName>
            <SubscribersCount isDark={isDark}>
              {videoDetails.subscriberCount} subscribers
            </SubscribersCount>
            <VideoDescription isDark={isDark}>
              {videoDetails.description}
            </VideoDescription>
          </ChannelDetails>
        </ChannelContainer>
      </VideoDetailsViewContainer>
    )
  }

  renderStatusView = (isDark, addVideo, savedVideos) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView(isDark, addVideo, savedVideos)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDark)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, addVideo, savedVideos} = value
          return (
            <>
              <Header />
              <MainBody>
                <Sidebar />
                <div
                  data-testid="videoItemDetails"
                  style={{
                    flexGrow: 1,
                    backgroundColor: isDarkTheme ? '#0f0f0f' : '#f9f9f9',
                    overflowY: 'auto',
                  }}
                >
                  {this.renderStatusView(isDarkTheme, addVideo, savedVideos)}
                </div>
              </MainBody>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
