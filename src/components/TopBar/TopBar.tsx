import * as React from 'react';

export interface ITopBarProps {
  children: React.ReactNode;
}

export const TopBar = (props: ITopBarProps) => <div>{props.children}</div>;
