import React from 'react';
import coffee from '../../images/preview/800x400.png';
import medFlow from '../../images/preview/800x400.png';
import monument from '../../images/preview//800x400.png';
import mtv from '../../images/preview/800x400.png';
import pixel from '../../images/preview/800x400.png';
import pop from '../../images/preview/800x400.png';
import portfolio from '../../images/preview/800x400.png';
import relaxr from '../../images/preview/800x400.png';
import rioport from '../../images/preview/800x400.png';
import vh1 from '../../images/preview/800x400.png';
import artGallery from '../../images/preview/800x400.png';

const PrevImage = (props) => {
  const { project } = props;
  const img = project.images.prevImgName;
  const prevImages = {'coffee': coffee, 'medFlow': medFlow, 'monument': monument, 'mtv': mtv, 'pixel': pixel, 'pop': pop, 'portfolio': portfolio, 'relaxr': relaxr, 'rioport': rioport, 'vh1': vh1, 'artGallery': artGallery};
  return (
    <img
      src={prevImages[img]}
      className={props.imgClass}
      alt={props.project.title}
    />
  );
}

export default PrevImage;
