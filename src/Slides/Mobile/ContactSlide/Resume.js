import React, { Component } from 'react';
import styled from 'styled-components';
import resumeImg from '../../../Assets/Images/Social/resume.svg';
import Pdf from '../../../Assets/Images/Social/Patel_Resume.pdf';
import SocialLogo from './SocialLogo';
import device from '../../../Assets/Responsive/breakpoints';


const Container = styled.section`
    height: 60vh;
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: flex-start;
    @media ${device.mobileS} {
    padding-left:60px;
    }
    @media ${device.mobileM} {
    padding-left:60px;
    }
    @media ${device.mobileL} {
    padding-left:60px;
    }
    @media ${device.tablet} {
    padding-left:90px;
    margin-bottom:90px;
    }
    @media ${device.laptop} {
    padding-left:120px;
    margin-bottom:120px;
    }
`;

const ResumeTitle = styled.div`
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

const ResumeIcon = styled.div`
  /* border: 1px solid black; */
  z-index: 1;
  display: grid;
  grid-template: 80px;
  @media ${device.mobileS} {
    margin-top: 60px;
    grid-gap: 40px;
  }
  @media ${device.mobileM} {
    margin-top: 60px;
    grid-gap: 60px;
  }
  @media ${device.mobileL} {
    margin-top: 60px;
    grid-gap: 70px;
  }
  @media ${device.tablet} {
    margin-top: 80px;
    grid-gap: 170px;
  }
  @media ${device.laptop} {
    margin-top: 120px;
    grid-gap: 200px;
  }
`;

class Resume extends Component {
  render() {
    return (
      <Container>
        <ResumeTitle>RESUME</ResumeTitle>
            <ResumeIcon>
            <SocialLogo imgURL={resumeImg} alternate="Resume" redirectURL={Pdf} />
            </ResumeIcon>
      </Container>
    );
  }
}

export default Resume;