/* eslint-disable jsx-a11y/anchor-is-valid */
import { StyleSheetManager } from 'styled-components';
import { Container } from './style';
import {
  Header,
  MoreSeenCarousel,
  AutomaticCarousel,
  Footer,
} from '../../components';

export function Events() {
  const filteredProps = [
    'isRTL',
    'verticalMode',
    'sliderPosition',
    'swipedSliderPosition',
    'isSwiping',
    'transitionMs',
    'tiltEasing',
    'outerSpacing',
    'active',
    'itemPosition',
  ];

  return (
    <Container>
      <StyleSheetManager
        shouldForwardProp={(prop) => !filteredProps.includes(prop)}
      >
        <Header spacer="true" login />
        <div style={{ marginTop: '100px' }} />
        <MoreSeenCarousel />

        <AutomaticCarousel />
        <Footer />
      </StyleSheetManager>
    </Container>
  );
}
