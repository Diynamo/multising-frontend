import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import NoBigAvatar from './NoBigAvatar';

const StyledAvatar = styled(Avatar)`
  cursor: pointer;
  margin: 0px -4px;
`;

function BaseAvatar({ src }) {
  return (
    <StyledAvatar src={src} sx={{ width: 40, height: 40 }}>
      <NoBigAvatar />
    </StyledAvatar>
  );
}

export default BaseAvatar;
