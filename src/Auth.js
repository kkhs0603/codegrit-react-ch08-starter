import { Component } from 'react'

class Auth extends Component {
  state = {
    me: JSON.parse(localStorage.getItem('me')),
    isLoggedIn: localStorage.getItem('isLoggedIn')
  }

  login = (e = null) => {
    console.log("login")
    if (e) e.preventDefault()
    const me = {
      email: "test@test.com",
      authToken: 'test',
      name: "テストユーザー",
      username: "testuser"
    }
    localStorage.setItem('me', JSON.stringify(me))
    this.setState({ 
      me, 
      isLoggedIn: true 
    });
  }

  logout = (e = null) => {
    if (e) e.preventDefault()
    localStorage.setItem('me', null)
    this.setState({ 
      me: null,
      isLoggedIn: false
    });
  }
  
  render() {
    const props = {
      login: this.login,
      logout: this.logout,
      ...this.state
    }
    return this.props.children(props)
  }
}

export default Auth;