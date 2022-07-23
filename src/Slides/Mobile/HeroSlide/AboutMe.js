import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height: 50vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`;
const AboutMeTitle = styled.div`
font-family: 'AvenirHeavy';
color: #000;
@media ${device.mobileS} {
  font-size: 40px;
}
@media ${device.mobileM} {
  font-size: 50px;
}
@media ${device.mobileL} {
  font-size: 60px;
}
@media ${device.tablet} {
  font-size: 90px;
}
@media ${device.laptop} {
  font-size: 95px;
}
`;


const AboutMeDescription = styled.span`
  font-family: 'AvenirRoman';
  font-size: 24px;
  text-align: center;
  z-index: 1;
  @media ${device.mobileS} {
    padding: 30px;
    font-size: 20px;
  }
  @media ${device.mobileM} {
    padding: 30px;
    font-size: 23px;
  }
  @media ${device.mobileL} {
    padding: 30px;
    font-size: 24px;
  }
  @media ${device.tablet} {
    padding: 80px;
    font-size: 40px;
  }
  @media ${device.laptop} {
    padding: 90px;
    font-size: 45px;
  }
`;

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <AboutMeTitle>ABOUT ME</AboutMeTitle>
        <AboutMeDescription>
        Full stack developer who cares about user experience.
        Serious passion for Machine Learning and App Development.
        </AboutMeDescription>
      </Container>
    );
  }
}

export default AboutMe;
