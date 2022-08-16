import StyledLayout from './styles';

import type { LayoutProps } from './types';

function Layout({ children, className }: LayoutProps) {
  return <StyledLayout className={className}>{children}</StyledLayout>;
}

export default Layout;
