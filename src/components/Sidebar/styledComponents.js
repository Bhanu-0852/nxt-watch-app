import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: calc(100vh - 80px);
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  flex-shrink: 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 20px;
  list-style-type: none;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavLinkItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 45px;
  /* Active Background Logic */
  background-color: ${props => {
    if (props.isActive) {
      return props.isDark ? '#383838' : '#f1f5f9'
    }
    return 'transparent'
  }};

  &:hover {
    background-color: ${props => (props.isDark ? '#424242' : '#e2e8f0')};
  }
`

export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-left: 20px;
  /* Active Font Weight Logic */
  font-weight: ${props => (props.isActive ? 'bold' : '500')};
  color: ${props => (props.isActive ? '#ff0000' : '#606060')};
`

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
`

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`

export const ContactNote = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
  line-height: 1.5;
`
