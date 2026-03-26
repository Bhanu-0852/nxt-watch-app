import {Component} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundNote,
  MainBody,
} from './styledComponents'

class NotFound extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const notFoundImgUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

          return (
            <>
              <Header />
              <MainBody>
                <Sidebar />
                <NotFoundContainer isDark={isDarkTheme}>
                  <NotFoundImage src={notFoundImgUrl} alt="not found" />
                  <NotFoundHeading isDark={isDarkTheme}>
                    Page Not Found
                  </NotFoundHeading>
                  <NotFoundNote isDark={isDarkTheme}>
                    We are sorry, the page you requested could not be found.
                  </NotFoundNote>
                </NotFoundContainer>
              </MainBody>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default NotFound
