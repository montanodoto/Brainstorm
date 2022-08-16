import { lazy } from 'react';

import withSuspense from 'components/decorators/withSuspense';

import StyledList from './styles';

import type { ListProps } from './types';

function List({ children, className, color }: ListProps) {
  return (
    <StyledList className={className} color={color}>
      {children}
    </StyledList>
  );
}

List.Item = withSuspense(lazy(() => import('./ListItem')));

export default List;
