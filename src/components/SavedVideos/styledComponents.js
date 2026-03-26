import styled from 'styled-components'

export const MainBody = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  @media screen and (min-width: 768px) {
    height: calc(100vh - 80px);
  }
`

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const SavedVideosHeader = styled.div`
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

export const SavedVideosText = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  margin-left: 15px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-left: 25px;
  }
`

export const SavedVideoList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 20px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 40px;
  }
`

export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  text-align: center;
  min-height: 80vh;
`

export const NoSavedVideosImage = styled.img`
  width: 300px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 24px;
  margin-top: 30px;
`

export const NoSavedVideosNote = styled.p`
  font-family: 'Roboto';
  color: #64748b;
  font-size: 18px;
  margin-top: 15px;
`
