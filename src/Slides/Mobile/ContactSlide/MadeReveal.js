import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../../Assets/Responsive/breakpoints';


const Container = styled.section`
    height: 10vh;
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`;

const ResumeTitle = styled.div`
  font-family: 'Playball';
  color: #000;
  @media ${device.mobileS} {
    font-size: 30px;
  }
  @media ${device.mobileM} {
    font-size: 40px;
  }
  @media ${device.mobileL} {
    font-size: 40px;
  }
  @media ${device.tablet} {
    font-size: 70px;
  }
  @media ${device.laptop} {
    font-size: 75px;
  }
`;

class MadeReveal extends Component {
  render() {
    return (
      <Container>
        <ResumeTitle>Made with ReactJS</ResumeTitle>
      </Container>
    );
  }
}

export default MadeReveal;