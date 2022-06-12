import React from 'react';
import coffee from '../../images/preview/coffee-clicker-big.png';
import medFlow from '../../images/preview/medFlowClinic-big.png';
import monument from '../../images/preview/monument-big.jpg';
import mtv from '../../images/preview/mtv-big.jpg';
import pixel from '../../images/preview/pixel-click-big.png';
import pop from '../../images/preview/pop-big.jpg';
import portfolio from '../../images/preview/portfolio-big.png';
import relaxr from '../../images/preview/relaxr-big.jpg';
import rioport from "../../images/preview/rioport-big.jpg";
import vh1 from '../../images/preview/vh1-big.jpg';
import artGallery from '../../images/preview/art-gallery-big.png';

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
