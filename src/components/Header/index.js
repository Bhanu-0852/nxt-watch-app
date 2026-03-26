import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {AiOutlineMenu, AiOutlineHome, AiOutlineClose} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {FaGamepad} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavHeader,
  HeaderLogo,
  ActionsContainer,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  IconButton,
  ModalContainer,
  ModalDesc,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  MenuPopupContainer,
  MenuOptionsList,
  MenuNavLink,
  MenuNavLinkItem,
  MenuNavText,
} from './styledComponents'

class Header extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {location} = this.props
    const {pathname} = location

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const logo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <NavHeader isDark={isDarkTheme}>
              <Link to="/">
                <HeaderLogo src={logo} alt="website logo" />
              </Link>
              <ActionsContainer>
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={toggleTheme}
                  isDark={isDarkTheme}
                >
                  {isDarkTheme ? <BsBrightnessHigh /> : <BsMoon />}
                </ThemeButton>

                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <Popup
                  modal
                  trigger={
                    <IconButton
                      type="button"
                      isDark={isDarkTheme}
                      className="menu-icon-button"
                    >
                      <AiOutlineMenu />
                    </IconButton>
                  }
                >
                  {close => (
                    <MenuPopupContainer isDark={isDarkTheme}>
                      <IconButton
                        isDark={isDarkTheme}
                        onClick={() => close()}
                        style={{alignSelf: 'flex-end', marginBottom: '30px'}}
                      >
                        <AiOutlineClose size={25} />
                      </IconButton>
                      <MenuOptionsList>
                        <MenuNavLink to="/" onClick={() => close()}>
                          <MenuNavLinkItem
                            isDark={isDarkTheme}
                            isActive={pathname === '/'}
                          >
                            <AiOutlineHome
                              color={pathname === '/' ? '#ff0000' : '#606060'}
                            />
                            <MenuNavText
                              isDark={isDarkTheme}
                              isActive={pathname === '/'}
                            >
                              Home
                            </MenuNavText>
                          </MenuNavLinkItem>
                        </MenuNavLink>

                        <MenuNavLink to="/trending" onClick={() => close()}>
                          <MenuNavLinkItem
                            isDark={isDarkTheme}
                            isActive={pathname === '/trending'}
                          >
                            <HiFire
                              color={
                                pathname === '/trending' ? '#ff0000' : '#606060'
                              }
                            />
                            <MenuNavText
                              isDark={isDarkTheme}
                              isActive={pathname === '/trending'}
                            >
                              Trending
                            </MenuNavText>
                          </MenuNavLinkItem>
                        </MenuNavLink>

                        <MenuNavLink to="/gaming" onClick={() => close()}>
                          <MenuNavLinkItem
                            isDark={isDarkTheme}
                            isActive={pathname === '/gaming'}
                          >
                            <FaGamepad
                              color={
                                pathname === '/gaming' ? '#ff0000' : '#606060'
                              }
                            />
                            <MenuNavText
                              isDark={isDarkTheme}
                              isActive={pathname === '/gaming'}
                            >
                              Gaming
                            </MenuNavText>
                          </MenuNavLinkItem>
                        </MenuNavLink>

                        <MenuNavLink to="/saved-videos" onClick={() => close()}>
                          <MenuNavLinkItem
                            isDark={isDarkTheme}
                            isActive={pathname === '/saved-videos'}
                          >
                            <MdPlaylistAdd
                              color={
                                pathname === '/saved-videos'
                                  ? '#ff0000'
                                  : '#606060'
                              }
                            />
                            <MenuNavText
                              isDark={isDarkTheme}
                              isActive={pathname === '/saved-videos'}
                            >
                              Saved videos
                            </MenuNavText>
                          </MenuNavLinkItem>
                        </MenuNavLink>
                      </MenuOptionsList>
                    </MenuPopupContainer>
                  )}
                </Popup>

                <Popup
                  modal
                  trigger={
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <LogoutButton type="button" isDark={isDarkTheme}>
                        Logout
                      </LogoutButton>
                      <IconButton
                        isDark={isDarkTheme}
                        className="mobile-logout"
                      >
                        <FiLogOut />
                      </IconButton>
                    </div>
                  }
                >
                  {close => (
                    <ModalContainer isDark={isDarkTheme}>
                      <ModalDesc isDark={isDarkTheme}>
                        Are you sure, you want to logout
                      </ModalDesc>
                      <ButtonsContainer>
                        <CloseButton type="button" onClick={() => close()}>
                          Cancel
                        </CloseButton>
                        <ConfirmButton
                          type="button"
                          onClick={this.onClickLogout}
                        >
                          Confirm
                        </ConfirmButton>
                      </ButtonsContainer>
                    </ModalContainer>
                  )}
                </Popup>
              </ActionsContainer>
            </NavHeader>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
