import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingContainer,
  TrendingVideoList,
  TrendingHeader,
  IconContainer,
  TrendingText,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  MainBody,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingVideos extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideos: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        publishedAt: each.published_at,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))
      this.setState({
        trendingVideos: updatedData,
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
      <RetryButton type="button" onClick={this.getTrendingVideos}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  renderSuccessView = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideoList>
        {trendingVideos.map(each => (
          <VideoCard key={each.id} videoDetails={each} />
        ))}
      </TrendingVideoList>
    )
  }

  renderStatusView = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
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
                <TrendingContainer isDark={isDarkTheme} data-testid="trending">
                  <TrendingHeader isDark={isDarkTheme}>
                    <IconContainer isDark={isDarkTheme}>
                      <HiFire size={35} color="#ff0000" />
                    </IconContainer>
                    <TrendingText isDark={isDarkTheme}>Trending</TrendingText>
                  </TrendingHeader>
                  {this.renderStatusView(isDarkTheme)}
                </TrendingContainer>
              </MainBody>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default TrendingVideos
