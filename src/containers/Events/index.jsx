/* eslint-disable jsx-a11y/anchor-is-valid */
import { StyleSheetManager } from 'styled-components';
import { Container } from './style';
import {
  Header,
  MoreSeenCarousel,
  AutomaticCarousel,
  Footer,
} from '../../components';

/* Glória a Deus */

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
      <Header spacer="true" login />
      <StyleSheetManager
        shouldForwardProp={(prop) => !filteredProps.includes(prop)}
      >
        <MoreSeenCarousel />

        <AutomaticCarousel />
        <Footer />
      </StyleSheetManager>
    </Container>
  );
}
