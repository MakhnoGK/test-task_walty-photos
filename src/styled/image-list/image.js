import styled, { keyframes } from 'styled-components';

const backgroundAnimation = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
  background-image: linear-gradient(90deg, #8f8f8f, #f6f6f6, #8f8f8f);
  background-size: 1110% 100%;
  animation: ${backgroundAnimation} infinite linear 2s;
`;

export default Image;
