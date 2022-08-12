import React, { Component } from 'react';
import styled from 'styled-components';
import resumeImg from '../../../Assets/Images/Social/resume.svg';
import Pdf from '../../../Assets/Images/Social/Patel_Resume.pdf';
import SocialLogo from './SocialLogo';
import device from '../../../Assets/Responsive/breakpoints';


const Container = styled.div`
    height: 70vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;


const ContactTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(-${(scrollPercent) * 7}%)`,
  }),
})`
  transition: transform 0.2s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: #EEE;
  top:12%;
  right:-40%;
  @media ${device.laptop} {
    font-size: 180px;
  }
  @media ${device.laptopL} {
    font-size: 200px;
  }
  @media ${device.desktop} {
    font-size: 350px;
  }
`;

const SocialMediaIcons = styled.div`
  /* border: 1px solid black; */
  margin-left: 10%;
  margin-right: 10%;
  z-index: 1;
  transform: translateY(210%);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;





class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      scrollHeight: 0,
      scrollPercent: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ scrollHeight: Math.round(window.document.documentElement.scrollHeight) });
    this.setState({ screenHeight: Math.round(window.document.documentElement.clientHeight) });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const minlimit = (documentElement.clientHeight * 800) / documentElement.scrollHeight;
    const maxlimit = (documentElement.clientHeight * 1250) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= maxlimit + 3) {
      sp -= minlimit;
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <ContactTitle scrollPercent={scrollPercent}>RESUME</ContactTitle>
        <SocialMediaIcons>
          <SocialLogo imgURL={resumeImg} alternate="Resume" redirectURL={Pdf} />
        </SocialMediaIcons>
      </Container>
    );
  }
}
export default Resume;
