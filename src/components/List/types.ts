import type { ReactNode } from 'react';

export interface ListProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export interface ListItemProps extends ListProps {}
