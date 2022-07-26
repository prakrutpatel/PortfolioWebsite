import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cmgOrNotTabletImg from '../../../../Assets/Images/ComingOrNot/Tablet.png';
import cmgOrNotTVImg from '../../../../Assets/Images/ComingOrNot/TV.png';
import cmgOrNotComputerImg from '../../../../Assets/Images/ComingOrNot/Computer.png';
const TV = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -130vh;
transform-origin: left center;
left:-5vw;
/* border: 1px dashed red; */
height:50vh; 
`;

const Tablet = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(0.3)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
transform-origin: right center;
right:20vw;
/* border: 1px dashed red; */
height: 50vh; 
`;
const Computer = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8.5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -105vh;
transform-origin: left center;
left:5vw;
/* border: 1px dashed red; */
height: 50vh; 
`;

class ComingOrNotImages extends Component {
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
        <Tablet src={cmgOrNotTabletImg} scroll={scrollPercent} alt="cmgOrNotTablet" />
        <Computer src={cmgOrNotComputerImg} scroll={scrollPercent} alt="cmgOrNotComputer" />
        <TV src={cmgOrNotTVImg} scroll={scrollPercent} alt="cmgOrNotTV" />
      </React.Fragment>
    );
  }
}

ComingOrNotImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default ComingOrNotImages;
