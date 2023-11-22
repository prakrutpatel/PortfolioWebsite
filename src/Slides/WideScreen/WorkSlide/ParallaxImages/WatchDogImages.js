import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PhoneImg from '../../../../Assets/Images/WatchDog/Phone.png';
import IpadImg from '../../../../Assets/Images/WatchDog/iPad.png';
import MacbookImg from '../../../../Assets/Images/WatchDog/Macbook.png';


const Phone = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
left:0vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const Ipad = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-65vh;
right: 2vw;
/* border: 1px dashed red; */
height: 80vh;
`;

const Macbook = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.85)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-55vh;
right: -2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

class WatchDog extends Component {
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

WatchDog.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default WatchDog;