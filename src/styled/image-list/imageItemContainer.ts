import styled from 'styled-components';

const ImageItemContainer = styled.div`
  flex: 1 1 300px;
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  &::after {
    content: '';
    z-index: -2;
    position: absolute;
    width: 80%;
    height: 150px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 5px 10px rgb(0 0 0 / 40%);
  }
`;

export default ImageItemContainer;
