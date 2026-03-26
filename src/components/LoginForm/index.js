import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoginContainer,
  FormContainer,
  LoginLogo,
  InputContainer,
  Label,
  Input,
  CheckboxContainer,
  LoginButton,
  ErrorMsg,
  Checkbox,
  ShowPasswordLabel,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onTogglePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showSubmitError,
      showPassword,
      errorMsg,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer isDark={isDarkTheme}>
              <FormContainer isDark={isDarkTheme} onSubmit={this.submitForm}>
                <LoginLogo src={logoUrl} alt="website logo" />
                <InputContainer>
                  <Label isDark={isDarkTheme} htmlFor="username">
                    USERNAME
                  </Label>
                  <Input
                    type="text"
                    id="username"
                    value={username}
                    onChange={this.onChangeUsername}
                    placeholder="Username"
                    isDark={isDarkTheme}
                  />
                </InputContainer>
                <InputContainer>
                  <Label isDark={isDarkTheme} htmlFor="password">
                    PASSWORD
                  </Label>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={this.onChangePassword}
                    placeholder="Password"
                    isDark={isDarkTheme}
                  />
                </InputContainer>
                <CheckboxContainer>
                  <Checkbox
                    type="checkbox"
                    id="show"
                    onChange={this.onTogglePassword}
                    checked={showPassword}
                  />
                  <ShowPasswordLabel isDark={isDarkTheme} htmlFor="show">
                    Show Password
                  </ShowPasswordLabel>
                </CheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </FormContainer>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
