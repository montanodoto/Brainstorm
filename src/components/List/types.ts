import type { ReactNode } from 'react';

export interface ListProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export type ListItemProps = {
  children: ReactNode;
  className?: string;
};
