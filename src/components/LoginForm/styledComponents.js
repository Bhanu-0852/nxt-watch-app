import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#231f20' : 'ffffff')};
  font-family: 'Roboto';
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  box-shadow: ${props =>
    props.isDark ? 'none' : '0px 8px 40px rgba(7, 7, 7, 0.08)'};
  width: 90%;
  max-width: 400px;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`

export const LoginLogo = styled.img`
  width: 140px;
  align-self: center;
  margin-bottom: 30px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
  margin-bottom: 5px;
  text-transform: uppercase;
`

export const Input = styled.input`
  height: 40px;
  border: 1px solid #94a3b8;
  border-radius: 2px;
  padding-left: 15px;
  outline: none;
  background: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  width: 100%;
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 8px;
  cursor: pointer;
`
export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: ${props => (props.isDark ? '#ffffff' : '#0f0f0f')};
  margin: 0;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  height: 40px;
  margin-top: 25px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 12px;
  margin-top: 5px;
`
