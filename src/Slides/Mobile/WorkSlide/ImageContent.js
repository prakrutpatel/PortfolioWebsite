import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import vhCheck from 'vh-check';
import GymRatsImages from './ParallaxImages/GymRatsImages';
import ContextRCNNImages from './ParallaxImages/ContextRCNNImages';
import MakerSpaceImages from './ParallaxImages/MakerSpaceImages';
import WatchDogImages from './ParallaxImages/WatchDogImages';

const ImageContainer = styled.div`
/* border: 0.1px dashed black; */
width:100%;
height:620vh;
margin-bottom:30vh;
display: flex;
flex-flow: column nowrap;
position: relative; /* Add position: relative; */
z-index: 1;
`;

const ImageBox = styled.div`
/* outline: 0.1px dashed green; */
margin-top:30vh;
height: 100vh;
position: relative;
z-index: 1;
`;

class ImageContent extends Component {
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
    const vhDiff = vhCheck().offset;
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ scrollHeight: Math.round(window.document.documentElement.scrollHeight) });
    this.setState(
      { screenHeight: Math.round(window.document.documentElement.clientHeight + vhDiff) },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { body, documentElement } = window.document;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const minlimit = (documentElement.clientHeight * 100) / documentElement.scrollHeight;
    const maxlimit = (documentElement.clientHeight * 760) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= maxlimit) {
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent, scrollHeight, screenHeight } = this.state;
    const { pageSplitTimes } = this.props;
    const boxHeight = pageSplitTimes * 100;
    return (
      <ImageContainer>
        <ImageBox height={boxHeight}>
          <GymRatsImages
            boxHeight={boxHeight}
            index={1}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <ContextRCNNImages
            boxHeight={boxHeight}
            index={2}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <MakerSpaceImages
            boxHeight={boxHeight}
            index={3}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <WatchDogImages
            boxHeight={boxHeight}
            index={4}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
      </ImageContainer>
    );
  }
}

ImageContent.propTypes = {
  pageSplitTimes: PropTypes.number.isRequired,
};

export default ImageContent;
