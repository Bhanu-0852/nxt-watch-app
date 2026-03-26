import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainBody = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  @media screen and (min-width: 768px) {
    height: calc(100vh - 80px);
  }
`

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  background-color: ${props => (props.isDark ? '#181818' : '#f1f1f1')};
  @media screen and (min-width: 768px) {
    padding: 20px 60px;
  }
`

export const IconContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#e2e8f0')};
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 80px;
    width: 80px;
  }
`

export const GamingText = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  margin-left: 15px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-left: 25px;
  }
`

export const GamingVideoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 40px 60px;
  }
`

export const GamingVideoItem = styled.li`
  width: 45%;
  margin-bottom: 30px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    width: 200px;
    margin-right: 30px;
    margin-bottom: 50px;
  }
`

export const GamingNavLink = styled(Link)`
  text-decoration: none;
`

export const GamingThumbnail = styled.img`
  width: 100%;
`

export const GamingVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  margin-top: 15px;
  margin-bottom: 5px;
`

export const GamingVideoViews = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
`

export const FailureImage = styled.img`
  width: 250px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 24px;
  margin-top: 30px;
`

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  color: #64748b;
  font-size: 18px;
  margin-top: 15px;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 25px;
  font-weight: bold;
  outline: none;
`
