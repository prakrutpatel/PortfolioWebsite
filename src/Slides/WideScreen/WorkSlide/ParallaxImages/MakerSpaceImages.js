import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MakerSpaceTabletImg from '../../../../Assets/Images/MakerSpace/Tablet.png';
import MakerSpaceTVImg from '../../../../Assets/Images/MakerSpace/TV.png';
import MakerSpaceComputerImg from '../../../../Assets/Images/MakerSpace/Computer.png';

const TV = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 12}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-85vh;
/* border: 1px dashed red; */
height: 100vh;
`;

const Tablet = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 9}%) scale(0.60)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -80vh;
/* border: 1px dashed red; */
height: 80vh; 
`;
const Computer = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -65vh;
/* border: 1px dashed red; */
height: 80vh; 
`;

class MakerSpaceImages extends Component {
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
        <Computer src={MakerSpaceComputerImg} scroll={scrollPercent} alt="MakerSpaceComputer" />
        <Tablet src={MakerSpaceTabletImg} scroll={scrollPercent} alt="MakerSpaceTablet" />
        <TV src={MakerSpaceTVImg} scroll={scrollPercent} alt="MakerSpaceTV" />
      </React.Fragment>
    );
  }
}

MakerSpaceImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default MakerSpaceImages;
