import React from 'react';
import ExquisiteWriter from './components/ExquisiteWriter.jsx';
import DrawCanvas from './components/DrawCanvas.jsx';
import SignIn from './components/SignIn.jsx';
import Gallery from './components/Gallery.jsx';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: <DrawCanvas />,
      pics: [
        {title: 'Title', head: {path:'paper.png', artist: 'artist1'}, torso: {path: 'paper.png', artist: 'artist2'}, legs: {path: 'paper.png', artist: 'artist3'}},
        {title: 'Title', head: {path:'paper.png', artist: 'artist1'}, torso: {path: 'paper.png', artist: 'artist2'}, legs: {path: 'paper.png', artist: 'artist3'}},
        {title: 'Title', head: {path:'paper.png', artist: 'artist1'}, torso: {path: 'paper.png', artist: 'artist2'}, legs: {path: 'paper.png', artist: 'artist3'}},
        {title: 'Title', head: {path:'paper.png', artist: 'artist1'}, torso: {path: 'paper.png', artist: 'artist2'}, legs: {path: 'paper.png', artist: 'artist3'}}
      ]
    };
    this.switch = this.switch.bind(this);
  }


  switch(e) {
    e.preventDefault();
    var targetVal = e.target.innerText;
    if (targetVal === 'signIn') {
      this.setState({currentView: <SignIn />});
    } else if (targetVal === 'canvas') {
      this.setState({currentView: <DrawCanvas />});
    } else if (targetVal === 'myGallery') {
      this.setState({currentView: <Gallery pics={this.state.pics} />});
    }
  }


  render() {
    return (
      <div>
        <ExquisiteWriter />
        <div className="foreground">
          <div className="nav-bar">
            <h1>cadavre exquis</h1>
            <a href="#" onClick={this.switch}>canvas</a>
            <a href="#" onClick={this.switch}>myGallery</a>
            <a href="#" onClick={this.switch}>signIn</a>
          </div>
          {this.state.currentView}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



<div className="nav-bar">
<h1>Exquisite Corpse</h1>
<a>myGallery</a>
<a>signIn</a>
</div>
