import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  onSubmitSignIn = () => {
    fetch('https://enigmatic-spire-53847.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
            this.props.loadUser(user)
            this.props.onRouteChange('home');
        }
      })
  }

  render () {
    return (
        <div>
          <article className="br3 ba bg-white o-80 dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
           <main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Full Name</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="name"
        onChange={this.onNameChange}
        id="name" />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" 
        name="email-address" 
        onChange={this.onEmailChange}
        id="email-address" />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input 
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="password" 
        name="password"
        onChange={this.onPasswordChange}
        id="password" />
      </div>
    </fieldset>
    <div>
      <input 
      onClick={this.onSubmitSignIn}
      className="b ph3 pv1 input-reset ba b--black shadow-5 bg-transparent dim pointer f6 dib" 
      type="submit" 
      value="Register"/>
    </div>
  </div>
</main>
</article>

 
        </div>
    )
}
}

export default Register;