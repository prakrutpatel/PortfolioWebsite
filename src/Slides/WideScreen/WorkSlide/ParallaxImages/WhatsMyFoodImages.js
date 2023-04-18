import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import restaurantImg from '../../../../Assets/Images/WhatsMyFood/Restaurant.png';
import addRestaurantImg from '../../../../Assets/Images/WhatsMyFood/AddRestaurant.png';

const Restaurant = styled.img.attrs({
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

const AddRestaurant = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.75)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-55vh;
right: -5vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

class WhatsMyFoodImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    // console.log('WMF scrollOffsetPercent ', scrollOffsetInPercent);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <AddRestaurant src={addRestaurantImg} scroll={scrollPercent} alt="addRestaurant" />
        <Restaurant src={restaurantImg} scroll={scrollPercent} alt="Restaurant" />
      </React.Fragment>
    );
  }
}

WhatsMyFoodImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default WhatsMyFoodImages;
