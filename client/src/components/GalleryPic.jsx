import React from 'react';

const GalleryPic = ({pic}) => (
  <div className="col-xs-4 col-lg-3 gallery-pic">
    <img className="pic-part" src={pic.head.path} />
    <img className="pic-part" src={pic.torso.path} />
    <img className="pic-part" src={pic.legs.path} />
    <h4>{pic.title}</h4>
    <p>{pic.head.artist}, {pic.torso.artist}, {pic.legs.artist}</p>
  </div>
);

export default GalleryPic;
