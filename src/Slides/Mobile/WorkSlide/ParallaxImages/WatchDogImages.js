import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PhoneImg from '../../../../Assets/Images/WatchDog/Phone.png';
import IpadImg from '../../../../Assets/Images/WatchDog/iPad.png';
import MacbookImg from '../../../../Assets/Images/WatchDog/Macbook.png';


const Phone = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -170vh;
transform-origin: left center;
left:2vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const Ipad = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8.5}%) scale(0.62)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-125vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.6px);
`;

const Macbook = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.37)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-65vh;
right: 1vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

class WatchDogImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    scrollPercent -= scrollOffsetInPercent;

    return (
      <React.Fragment>
        <Phone src={PhoneImg} scroll={scrollPercent} alt="Phone" />
        <Ipad src={IpadImg} scroll={scrollPercent} alt="iPad" />
        <Macbook src={MacbookImg} scroll={scrollPercent} alt="Macbook" />
        
      </React.Fragment>
    );
  }
}

WatchDogImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default WatchDogImages;

/*
<Tyre src={teslaTyreImg} scroll={scrollPercent} alt="teslaTyre" />
        <Heat src={teslaHeatImg} scroll={scrollPercent} alt="teslaHeat" />
        */
