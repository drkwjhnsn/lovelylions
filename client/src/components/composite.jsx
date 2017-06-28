import React from 'react';

class Composite extends React.Component {

  componentDidMount() {
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');
    var picObj = this.props.pic;
    var head = new Image(300, 150);
    var torso = new Image(300, 150);
    var legs = new Image(300, 150);
    head.src = picObj.head.path;
    head.onload = () => {
      context.drawImage(head, 0, 0, 300, 150);
      torso.src = picObj.torso.path;
      torso.onload = () => {
        context.drawImage(torso, 0, 150, 300, 150);
        legs.src = picObj.legs.path;
        legs.onload = () => {
          context.drawImage(legs, 0, 300, 300, 150);
          // var img = c.toDataURL("image/png");
          // document.write('<img src="' + img + '" width="328" height="526"/>');
        };
      };
    };
  }

  regenerate() {
    this.props.generateImage(this.props.userImage);
  }

  render(){
    return (
      <div className="composite">
        <canvas width="300px" height="450px">
        </canvas>
        <div className="button-cluster">
          <button onClick={this.regenerate.bind(this)}>regenerate</button>
          <button>save</button>
        </div>
      </div>
    );
  }
}

export default Composite;
