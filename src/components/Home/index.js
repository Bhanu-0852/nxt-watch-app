import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomeContainer,
  MainBody,
  BannerContainer,
  BannerLeftPart,
  BannerLogo,
  BannerText,
  BannerButton,
  BannerRightPart,
  CloseButton,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  VideosContainer,
  NoVideosViewContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
  RetryButton,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    searchInput: '',
    displayBanner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCloseBanner = () => this.setState({displayBanner: false})

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
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
      <FailureHeading isDark={isDark}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request. Please try again.
      </FailureDescription>
      <RetryButton type="button" onClick={() => this.getVideos()}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  renderNoVideosView = isDark => (
    <NoVideosViewContainer>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoVideosHeading isDark={isDark}>No Search results found</NoVideosHeading>
      <NoVideosDescription>
        Try different key words or remove search filter
      </NoVideosDescription>
      <RetryButton type="button" onClick={this.onRetry}>
        Retry
      </RetryButton>
    </NoVideosViewContainer>
  )

  renderSuccessView = isDark => {
    const {videosList} = this.state
    if (videosList.length === 0) return this.renderNoVideosView(isDark)
    return (
      <VideosContainer>
        {videosList.map(each => (
          <VideoCard key={each.id} videoDetails={each} />
        ))}
      </VideosContainer>
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
    const {displayBanner, searchInput} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <MainBody>
                <Sidebar />
                <HomeContainer isDark={isDarkTheme} data-testid="home">
                  {displayBanner && (
                    <BannerContainer data-testid="banner">
                      <BannerLeftPart>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                        <BannerButton type="button">GET IT NOW</BannerButton>
                      </BannerLeftPart>
                      <BannerRightPart>
                        <CloseButton
                          type="button"
                          data-testid="close"
                          onClick={this.onCloseBanner}
                        >
                          <AiOutlineClose size={20} />
                        </CloseButton>
                      </BannerRightPart>
                    </BannerContainer>
                  )}
                  <SearchContainer>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onChangeSearchInput}
                      isDark={isDarkTheme}
                    />
                    <SearchIconContainer
                      type="button"
                      data-testid="searchButton"
                      onClick={() => this.getVideos()}
                    >
                      <AiOutlineSearch size={20} />
                    </SearchIconContainer>
                  </SearchContainer>
                  {this.renderStatusView(isDarkTheme)}
                </HomeContainer>
              </MainBody>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
