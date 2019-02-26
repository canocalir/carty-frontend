import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import FoodRecognition from './components/FoodRecognition/FoodRecognition';
import RecValue from './components/RecValue/RecValue';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 800, 
  
      }
    }
  }
}

const initialState = {
  input: '',
  imageUrl:'',
  concepts: [],
  route: 'signin',
  isSignedIn: false,
  user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
  }
}

class App extends Component {
  constructor() {
    super ();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }
 

onInputChange = (event) => {
    this.setState({input: event.target.value});
}

onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input});
  fetch('https://enigmatic-spire-53847.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
       })
      .then(response => response.json())
      .then(response => {
     if (response) {
       fetch('https://enigmatic-spire-53847.herokuapp.com/image', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: this.state.user.id
        })
       })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries: count}))
      })
      .catch(console.log)
     }
    this.setState({concepts: response.outputs[0].data.concepts});
    }
  );
}

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
     this.setState({route: route});
}

  render() {
   const { isSignedIn, imageUrl, route, concepts} = this.state;
    return (
      <div className="App">

        <Particles  className='particles'
                params={particleOptions} 
        />
      

      <Navigation isSignedIn={isSignedIn} onRouteChange = {this.onRouteChange} />
      {route === 'home' 
      ? <div>
        <Logo />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit} />
        <Rank name={this.state.user.name} entries={this.state.user.entries} />
        <FoodRecognition imageUrl={imageUrl} />
        <RecValue concepts={concepts}
        /> 
        </div>

      : (
        route === 'signin'
      ? <SignIn loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
      : <Register loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
      )
    }
  </div>
    
    );
  }
}

export default App;
