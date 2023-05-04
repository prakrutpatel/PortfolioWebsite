import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LoginImg from '../../../../Assets/Images/GymRats/Login.png';
import HomePageImg from '../../../../Assets/Images/GymRats/HomePage.png';
import ProfileImg from '../../../../Assets/Images/GymRats/Profile.png';
import CalenderImg from '../../../../Assets/Images/GymRats/Calender.png';


const Login = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -140vh;
transform-origin: left center;
left: 2vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const HomePage = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8.5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-95vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
height: 80vh;
`;

const Calender = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5.5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-80vh;
left: 2vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

const Profile = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-75vh;
right: 2vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

class GymRatsImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <Profile src={ProfileImg} scroll={scrollPercent} alt="Profile" />
        <Calender src={CalenderImg} scroll={scrollPercent} alt="Calender" />
        <HomePage src={HomePageImg} scroll={scrollPercent} alt="HomePage" />
        <Login src={LoginImg} scroll={scrollPercent} alt="Login" />
      </React.Fragment>
    );
  }
}

GymRatsImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default GymRatsImages;
