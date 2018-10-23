import Carousel from "nuka-carousel";

export default ({ children, ...rest }) => (
  <Carousel
    wrapAround
    autoplay
    pauseOnHover={false}
    renderCenterLeftControls={({ previousSlide }) => <div />}
    renderCenterRightControls={({ nextSlide }) => <div />}
    renderBottomCenterControls={({ currentSlide }) => <div />}
    {...rest}
  >
    {children}
  </Carousel>
);
