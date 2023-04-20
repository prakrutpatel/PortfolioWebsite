import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LaptopImg from '../../../../Assets/Images/ContextRCNN/Laptop.png';
import iPadImg from '../../../../Assets/Images/ContextRCNN/Ipad.png';

const Laptop = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(1.15)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
left:1vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const Ipad = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3.5}%) scale(0.75)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-55vh;
right: -5vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

class ContextRCNNImages extends Component {
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
        <Ipad src={iPadImg} scroll={scrollPercent} alt="iPad" />
        <Laptop src={LaptopImg} scroll={scrollPercent} alt="Laptop" />
      </React.Fragment>
    );
  }
}

ContextRCNNImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default ContextRCNNImages;
