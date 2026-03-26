import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaGamepad} from 'react-icons/fa'

import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GamingContainer,
  GamingHeader,
  IconContainer,
  GamingText,
  GamingVideoList,
  GamingVideoItem,
  GamingNavLink,
  GamingThumbnail,
  GamingVideoTitle,
  GamingVideoViews,
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

class GamingVideos extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideos: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
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
      <RetryButton type="button" onClick={this.getGamingVideos}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  renderSuccessView = isDark => {
    const {gamingVideos} = this.state
    return (
      <GamingVideoList>
        {gamingVideos.map(each => (
          <GamingVideoItem key={each.id}>
            <GamingNavLink to={`/videos/${each.id}`}>
              <GamingThumbnail src={each.thumbnailUrl} alt="video thumbnail" />
              <GamingVideoTitle isDark={isDark}>{each.title}</GamingVideoTitle>
              <GamingVideoViews isDark={isDark}>
                {each.viewCount} Watching Worldwide
              </GamingVideoViews>
            </GamingNavLink>
          </GamingVideoItem>
        ))}
      </GamingVideoList>
    )
  }

  renderStatusView = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView(isDark)
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
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <MainBody>
                <Sidebar />
                <GamingContainer isDark={isDarkTheme} data-testid="gaming">
                  <GamingHeader isDark={isDarkTheme}>
                    <IconContainer isDark={isDarkTheme}>
                      <FaGamepad size={35} color="#ff0000" />
                    </IconContainer>
                    <GamingText isDark={isDarkTheme}>Gaming</GamingText>
                  </GamingHeader>
                  {this.renderStatusView(isDarkTheme)}
                </GamingContainer>
              </MainBody>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamingVideos
