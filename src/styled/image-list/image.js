import styled from 'styled-components';

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
  background-color: #fff;
`;

export default Image;
