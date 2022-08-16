import { StyledListItem } from './styles';

import type { ListItemProps } from './types';

function ListItem({ children, className }: ListItemProps) {
  return (
    <StyledListItem className={className}>
      {children}
      <hr className="divider" />
    </StyledListItem>
  );
}

export default ListItem;
