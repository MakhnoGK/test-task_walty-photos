import { GridListTile, styled } from '@material-ui/core';

const ImageItemContainer = styled(GridListTile)({
  position: 'relative',
  '&::after': {
    content: '""',
    zIndex: -2,
    position: 'absolute',
    width: '80%',
    height: '150px',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    boxShadow: '0 5px 10px rgb(0 0 0 / 40%)',
  },
});

export default ImageItemContainer;
