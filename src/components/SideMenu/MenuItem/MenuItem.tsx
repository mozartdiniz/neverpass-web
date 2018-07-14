import * as React from 'react';

export interface IMenuItemProps {
  label: string;
  onClickAction?: () => void;
}

export const MenuItem = (props: IMenuItemProps) => <div>{props.label}</div>;
