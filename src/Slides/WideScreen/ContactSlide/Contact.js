import React, { Component } from 'react';
import styled from 'styled-components';
import githubImg from '../../../Assets/Images/Social/git.svg';
import mailImg from '../../../Assets/Images/Social/mail.svg';
import instaImg from '../../../Assets/Images/Social/insta.svg';
import linkedInImg from '../../../Assets/Images/Social/linkedin.svg';
import SocialLogo from './SocialLogo';
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height:70vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

const ContactTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(${(scrollPercent) * 7}%)`,
  }),
})`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  font-size: 200px;
  position: absolute;
  color: #EEE;
  top:12%;
  left:-70%;
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

class Contact extends Component {
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
    let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 125);
    const minlimit = (documentElement.clientHeight * 900) / documentElement.scrollHeight;
    const maxlimit = (documentElement.clientHeight * 1250) / documentElement.scrollHeight;
    if (sp >= minlimit  && sp <= maxlimit + 3) {
      sp -= minlimit;
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <ContactTitle scrollPercent={scrollPercent}>CONTACT</ContactTitle>
        <SocialMediaIcons>
          <SocialLogo imgURL={githubImg} alternate="Github" redirectURL="https://github.com/prakrutpatel" />
          <SocialLogo imgURL={mailImg} alternate="Mail" redirectURL="mailto:p.prakrut@gmail.com" />
          <SocialLogo imgURL={instaImg} alternate="Instagram" redirectURL="https://www.instagram.com/theprakrut" />
          <SocialLogo imgURL={linkedInImg} alternate="Linkedin" redirectURL="https://www.linkedin.com/in/prakrut-patel" />
        </SocialMediaIcons>
      </Container>
    );
  }
}

export default Contact;
