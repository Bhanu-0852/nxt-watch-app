import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    height: 80px;
    padding: 0 50px;
  }
`

export const HeaderLogo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 130px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 30px;
  height: 30px;
  font-size: 22px;
  margin-right: 10px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 30px;
    margin-right: 20px;
  }
`

export const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 30px;
    height: 30px;
  }
`

export const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  border-radius: 2px;
  padding: 5px 12px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: none;
  outline: none;

  @media screen and (min-width: 768px) {
    display: block;
    padding: 8px 16px;
  }
`

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  /* Match the ThemeButton sizing exactly */
  width: 30px;
  height: 30px;
  font-size: 22px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  margin-right: 10px;

  &.menu-icon-button {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  &.mobile-logout {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`

export const MenuPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  padding: 20px;
`

export const MenuOptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0;
  width: 100%;
  flex-grow: 1;
`

export const MenuNavLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`

export const MenuNavLinkItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  width: 100%;
  /* Fixed Nested Ternary by using a function block */
  background-color: ${props => {
    if (props.isActive) {
      return props.isDark ? '#383838' : '#f1f5f9'
    }
    return 'transparent'
  }};
`

export const MenuNavText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 15px;
  font-weight: ${props => (props.isActive ? 'bold' : '500')};
  /* Fixed Nested Ternary by using a function block */
  color: ${props => {
    if (props.isActive) {
      return '#ff0000'
    }
    if (props.isDark) {
      return '#ffffff'
    }
    return '#606060'
  }};
`

export const ModalContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const ModalDesc = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#00306e')};
  font-family: 'Roboto';
  font-size: 16px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`

export const CloseButton = styled.button`
  background: transparent;
  border: 1px solid #64748b;
  color: #64748b;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  outline: none;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  outline: none;
`
