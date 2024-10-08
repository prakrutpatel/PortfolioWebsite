import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LoginImg from '../../../../Assets/Images/GymRats/Login.png';
import HomePageImg from '../../../../Assets/Images/GymRats/HomePage.png';
import ProfileImg from '../../../../Assets/Images/GymRats/Profile.png';
import CalenderImg from '../../../../Assets/Images/GymRats/Calender.png';


const Login = styled.img.attrs({
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

const Home = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.87)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-45vh;
right: 2vw;
/* border: 1px dashed red; */
height: 80vh;
`;

const Calender = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.8)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-75vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

const Profile = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-55vh;
right: 5vw;
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
        <Home src={HomePageImg} scroll={scrollPercent} alt="HomePage" />
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
