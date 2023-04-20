import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MakerSpaceTabletImg from '../../../../Assets/Images/MakerSpace/Tablet.png';
import MakerSpaceTVImg from '../../../../Assets/Images/MakerSpace/TV.png';
import MakerSpaceComputerImg from '../../../../Assets/Images/MakerSpace/Computer.png';


const TV = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 18}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -100vh;
transform-origin: center;
/* border: 1px dashed red; */
height:50vh; 
`;

const Tablet = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -80vh;
transform-origin: left center;
left: 15vw
/* border: 1px dashed red; */
height: 50vh; 
`;
const Computer = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 12}%) scale(0.85)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
transform-origin: left center;
left: 2vh;
/* border: 1px dashed red; */
height: 50vh; 
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
        <Tablet src={MakerSpaceTabletImg} scroll={scrollPercent} alt="MakerSpaceTablet" />
        <Computer src={MakerSpaceComputerImg} scroll={scrollPercent} alt="MakerSpaceComputer" />
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
