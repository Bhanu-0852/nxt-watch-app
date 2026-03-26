import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {FaGamepad} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md' // Fixed icon name

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SidebarContainer,
  NavItemsContainer,
  NavLink,
  NavLinkItem,
  NavText,
  ContactInfoContainer,
  ContactHeading,
  SocialIconsContainer,
  SocialIcon,
  ContactNote,
} from './styledComponents'

class Sidebar extends Component {
  render() {
    const {location} = this.props
    const {pathname} = location

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <SidebarContainer isDark={isDarkTheme}>
              <NavItemsContainer>
                {/* Home Link */}
                <NavLink to="/">
                  <NavLinkItem isDark={isDarkTheme} isActive={pathname === '/'}>
                    <AiFillHome
                      size={20}
                      color={pathname === '/' ? '#ff0000' : '#606060'}
                    />
                    <NavText isActive={pathname === '/'}>Home</NavText>
                  </NavLinkItem>
                </NavLink>

                {/* Trending Link */}
                <NavLink to="/trending">
                  <NavLinkItem
                    isDark={isDarkTheme}
                    isActive={pathname === '/trending'}
                  >
                    <HiFire
                      size={20}
                      color={pathname === '/trending' ? '#ff0000' : '#606060'}
                    />
                    <NavText isActive={pathname === '/trending'}>
                      Trending
                    </NavText>
                  </NavLinkItem>
                </NavLink>

                {/* Gaming Link */}
                <NavLink to="/gaming">
                  <NavLinkItem
                    isDark={isDarkTheme}
                    isActive={pathname === '/gaming'}
                  >
                    <FaGamepad
                      size={20}
                      color={pathname === '/gaming' ? '#ff0000' : '#606060'}
                    />
                    <NavText isActive={pathname === '/gaming'}>Gaming</NavText>
                  </NavLinkItem>
                </NavLink>

                {/* Saved Videos Link */}
                <NavLink to="/saved-videos">
                  <NavLinkItem
                    isDark={isDarkTheme}
                    isActive={pathname === '/saved-videos'}
                  >
                    <MdPlaylistAdd
                      size={20}
                      color={
                        pathname === '/saved-videos' ? '#ff0000' : '#606060'
                      }
                    />
                    <NavText isActive={pathname === '/saved-videos'}>
                      Saved videos
                    </NavText>
                  </NavLinkItem>
                </NavLink>
              </NavItemsContainer>

              <ContactInfoContainer>
                <ContactHeading isDark={isDarkTheme}>CONTACT US</ContactHeading>
                <SocialIconsContainer>
                  <SocialIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialIconsContainer>
                <ContactNote isDark={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactNote>
              </ContactInfoContainer>
            </SidebarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Sidebar)
