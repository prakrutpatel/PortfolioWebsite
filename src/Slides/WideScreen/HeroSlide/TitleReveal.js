import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import device from '../../../Assets/Responsive/breakpoints';


const Stage = styled.div`
position: relative;
/* border:1px solid black; */
z-index: 1;
`;

const moveUp = init => keyframes`
0%{
    transform: translateY(${init}px);
}
100%{
    transform: translateY(0px);
}
`;

const hideWhiteBlocks = () => keyframes`
0%{
    opacity: 1;
    height: 35vh;
}
100%{
    opacity: 0;
    height: 0vh;
}
`;

const TextToReveal = styled.div`
  font-family: ${props => props.fontFam};
  text-align:center;
  animation: ${props => (props.reveal ? moveUp(props.fontSizeInPx) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
  transform: translateY(${props => (props.fontSizeInPx * 1.4)}px);
  @media ${device.tablet} {
    font-size: 28px;
    animation: ${props => (props.reveal ? moveUp(28) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${28 * 1.4}px);
  }
  @media ${device.laptop} {
    font-size: 40px;
    animation: ${props => (props.reveal ? moveUp(40) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${40 * 1.4}px);
  }
  @media ${device.laptopL} {
    font-size: 50px;
    animation: ${props => (props.reveal ? moveUp(50) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${50 * 1.4}px);
  }
  @media ${device.desktop} {
    font-size: 60px;
    animation: ${props => (props.reveal ? moveUp(60) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${60 * 1.4}px);
  }
`;

const WhiteBlock = styled.div`
position: absolute;
background-color: white;
margin-right:100%;
width: 120%;
height: 35vh;
animation: ${hideWhiteBlocks} 0.5s linear forwards;
animation-delay: 2s;
/* border: 1px solid grey; */
`;


class TitleReveal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reveal: false,
      scrollPercent: 0,
    };
    this.revealText = this.revealText.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const { timeDelay } = this.props;
    this.revealText(timeDelay);
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  revealText(timeout) {
    setTimeout(() => {
      this.setState({ reveal: true });
    }, timeout);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 150);
    const maxlimit = (documentElement.clientHeight * 150) / documentElement.scrollHeight;
    if (sp >= 0 && sp <= maxlimit) {
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { text, fontFam } = this.props;
    const { reveal } = this.state;
    const { scrollPercent } = this.state;
    return (
      <>
      <Stage>
        <TextToReveal
          fontFam={fontFam}
          reveal={reveal}
        >
          {text}
        </TextToReveal>
        <WhiteBlock />
      </Stage>
      {
      scrollPercent < 1.8 ?
      <div class="scroll-container" >
        <div class="field">
          <div class="mouse"></div>
        </div>
      </div>
      :
      <></>
      }
      </>
    );
  }
}

TitleReveal.propTypes = {
  text: PropTypes.string.isRequired,
  fontFam: PropTypes.string,
  timeDelay: PropTypes.number.isRequired,
};

TitleReveal.defaultProps = {
  fontFam: 'Avenir Helvetica Ariel',
};
export default TitleReveal;
