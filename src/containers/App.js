import { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import Signin from '../components/Signin/Signin';
import Register from '../components/Register/Register';
import './App.css';

const app = new Clarifai.App({
  apiKey: '598c4e1089a84886a1140d51257b9f96'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initialState = {
  input: '',
  imageUrl: '',
  boxes: [],
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    rank: 0,
    joined: ''       
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;    
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      rank: data.rank,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFaces = data.outputs[0].data.regions.map(region => region.region_info.bounding_box);
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return clarifaiFaces.map(face => {
      return {
        leftCol: face.left_col * width,
        topRow: face.top_row * height,
        rightCol: width - (face.right_col * width),
        bottomRow: height - (face.bottom_row * height)      
      }
    })
  }

  displayFaceBox = (boxes) => {
    this.setState({boxes: boxes});
  }

  onInputChange = (e) => {
    this.setState({input: e.target.value});
  }

  onImageSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/rank', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(rankCount => this.setState(Object.assign(this.state.user, { rank: rankCount })))
            .catch(console.log)
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(error => console.log(error))       
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }

    this.setState({route: route});
  }

  render() {
    const{ isSignedIn, route, boxes, imageUrl, user } = this.state;

    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home' 
          ? <>
              <Logo />        
              <Rank name={user.name} rank={user.rank} />
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onImageSubmit={this.onImageSubmit}        
              />
              <FaceRecognition boxes={boxes} imageUrl={imageUrl}/>
            </>                    
          : (
              route === 'signin' || route === 'signout'
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )          
        }                
      </div>
    );
  }
}

export default App;
