import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  @media screen and (min-width: 576px) {
    width: 300px;
    margin-right: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding: 10px;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 15px;
  border-radius: 50%;
`

export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  margin: 0;
  margin-bottom: 8px;
  line-height: 1.5;
`

export const VideoInfoText = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  margin: 0;
  margin-bottom: 4px;
`

export const Dot = styled.span`
  font-weight: bold;
  font-size: 15px;
  padding: 0px 5px;
`
