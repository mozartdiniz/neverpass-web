import * as React from 'react';

export interface IMainContentProps {
  children: React.ReactNode;
}

export const MainContent = (props: IMainContentProps) => (
  <div>{props.children}</div>
);
