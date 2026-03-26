import styled from 'styled-components'

export const MainBody = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  @media screen and (min-width: 768px) {
    height: calc(100vh - 80px);
  }
`

export const VideoDetailsViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: 20px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  margin-bottom: 15px;
`

export const VideoStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const VideoStatsText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
`

export const VideoActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  outline: none;
  svg {
    margin-right: 5px;
  }
`

export const HorizontalLine = styled.hr`
  border: 1px solid ${props => (props.isDark ? '#475569' : '#cbd5e1')};
  width: 100%;
  margin: 20px 0;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  margin: 0;
`

export const SubscribersCount = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  margin-top: 5px;
`

export const VideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
  margin-top: 25px;
  line-height: 1.6;
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
