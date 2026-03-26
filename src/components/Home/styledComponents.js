import styled from 'styled-components'

export const MainBody = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  @media screen and (min-width: 768px) {
    height: calc(100vh - 80px);
  }
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  width: 100%;
`

export const BannerLeftPart = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const BannerLogo = styled.img`
  width: 130px;
`

export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #1e293b;
  margin-top: 25px;
  margin-bottom: 25px;
  line-height: 1.5;
`

export const BannerButton = styled.button`
  border: 1.5px solid #1e293b;
  background: transparent;
  color: #1e293b;
  width: 120px;
  height: 45px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`

export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 30px;
  outline: none;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #606060;
  width: 90%;
  margin: 25px;
  max-width: 500px;
  height: 40px;
`

export const SearchInput = styled.input`
  width: 85%;
  border: none;
  outline: none;
  padding-left: 15px;
  background-color: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  height: 100%;
  font-family: 'Roboto';
`

export const SearchIconContainer = styled.button`
  width: 15%;
  background-color: ${props => (props.isDark ? '#313131' : '#f4f4f4')};
  border: none;
  border-left: 1px solid #606060;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #606060;
  outline: none;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin: 0px 25px;
  justify-content: center;
  @media screen and (min-width: 576px) {
    justify-content: flex-start;
  }
`

export const NoVideosViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  text-align: center;
`

export const NoVideosImage = styled.img`
  width: 300px;
`

export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 24px;
  margin-top: 30px;
`

export const NoVideosDescription = styled.p`
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
  width: 300px;
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
