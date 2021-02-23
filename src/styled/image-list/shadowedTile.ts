import { styled, GridListTile } from "@material-ui/core";

const ShadowedTile = styled(GridListTile)({
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 40,
    bottom: 20,
    left: 40,
    right: 40,
    zIndex: -2,
    boxShadow: '0 3px 10px rgba(0, 0, 0, 1)',
  },
});

export default ShadowedTile;
