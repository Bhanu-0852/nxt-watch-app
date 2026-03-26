import styled from 'styled-components'

export const MainBody = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  @media screen and (min-width: 768px) {
    height: calc(100vh - 80px);
  }
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  padding: 20px;
  text-align: center;
`

export const NotFoundImage = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  margin-top: 30px;
`

export const NotFoundNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  margin-top: 15px;
`
